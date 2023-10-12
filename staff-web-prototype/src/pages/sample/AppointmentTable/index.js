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

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["", "Customer", "Appointment Date", "Appointment Time", "Product/Service", "Location"];
  const appointmentData = [
    ["1", "Aisa", "09/10/2023", "04:00 pm", "Car Wash", "Test 4"],
    ["2", "Tester 2", "10/10/2023", "09:30 am", "Hair Trimming", "Test 1"],
    ["3", "Tester 3", "11/10/2023", "12:00 pm", "Thai Massage", "Test 2"],
    ["4", "Tester 4", "21/10/2023", "12:00 pm", "Thai Massage", "Test 2"],
  ]

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
          Promotion
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
            {appointmentData.map((appointment) => {
              return (
                <TableRow key={appointment[0]}>
                  <TableCell style={{textAlign: "center"}}>{appointment[0]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{appointment[1]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{appointment[2]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{appointment[3]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{appointment[4]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{appointment[5]}</TableCell>
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
