// React Imports
import React, { useEffect, useState } from "react";

// Axios Import
import Axios from "axios";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";

// Local Imports
import Styles from "./style";

// Global Constants
const useStyles = makeStyles(Styles);
const voucherTableUrl  = "http://127.0.0.1:8000/api/voucher/";

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["Customer ID", "Branch", "Phone", "Email", "Voucher Expiry", "Product"];
  const [voucherData, setVoucherData] = useState([]);

  useEffect(() => {
    try {
      Axios.get(voucherTableUrl).then((response) => {
        setVoucherData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Box 
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          Voucher Table
        </Typography>
      </Box>
      <Card>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop) => (
                <TableCell
                  className ={classes.tableCell + classes.tableHeadCell}
                  key       ={prop}
                  style     ={{
                    textAlign: "center",
                  }}
                >
                  {prop}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {voucherData.map((voucher) => {
              return (
                <TableRow key={voucher.id}>
                  <TableCell style={{textAlign: "center"}}>{voucher.customerId}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{voucher.branchId}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{voucher.phone}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{voucher.email}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{voucher.expiryDate}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{voucher.product}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Page2;
