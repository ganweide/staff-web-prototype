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

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["Customer ID", "First Name", "Phone", "Email", "Member Expiry", "Rewards Point", "Credit"];
  const customerData = [
    ["1", "Tester 1", "0123456789", "test1@email.com", "09/10/2024", "100", "100"],
    ["2", "Tester 2", "0182738492", "test2@email.com", "10/10/2024", "140", "120"],
    ["3", "Tester 3", "0234829354", "test3@email.com", "11/10/2024", "270", "200"],
  ];

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
                <TableRow key={customer[0]}>
                  <TableCell style={{textAlign: "center"}}>{customer[0]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer[1]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer[2]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer[3]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer[4]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer[5]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{customer[6]}</TableCell>
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
