// React Imports
import React, { useEffect, useState } from "react";

// Axios Import
import Axios from "axios";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Grid,
  Box,
  Typography,
} from "@mui/material";

// Local Imports
import Styles from "./style";

// Global Constants
const useStyles = makeStyles(Styles);
const customerTableURL  = "http://127.0.0.1:8000/api/customer/";

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["Customer ID", "First Name", "Phone", "Email", "Member Expiry", "Rewards Point", "Credit"];
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    try {
      Axios.get(customerTableURL).then((response) => {
        setCustomerData(response.data);
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
          Customer Registration
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
            {customerData.map((customer) => {
              return (
                <TableRow key={customer.customerId}>
                  <TableCell style={{textAlign: "center"}}>{customer.customerId}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer.firstName}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer.phone}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer.email}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer.memberExpiry}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer.rewardsPoint}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer.credit}</TableCell>
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
