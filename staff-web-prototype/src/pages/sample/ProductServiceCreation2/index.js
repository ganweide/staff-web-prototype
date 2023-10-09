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
  InputLabel,
  Select,
  MenuItem,
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
  const tableHead = ["", "Products/Services", "Category", "Duration"];
  const timeSlots = ['00:00', '00:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30','8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00','12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
  const productData = [
    ["1", "Hair Trimming", "Saloon", "30 minutes"],
    ["2", "Thai Massage", "Massage", "60 minutes"],
    ["3", "Hair Dye", "Saloon", "60 minutes"],
    ["4", "Car Wash", "Car", "30 minutes"],
    ["5", "Detail Wash", "Car", "120 minutes"],
  ];
  const [openCreate, setOpenCreate]   = useState(false);
  const [name, setName]               = useState([]);
  const [category, setCategory]       = useState([]);
  const [duration, setDuration]       = useState([]);
  const [slots, setSlots]             = useState([]);


  const createOpen = async () => {
    setOpenCreate(true);
  };

  const createClose = async () => {
    setOpenCreate(false);
  }

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
          Products & Services
        </Typography>
        <Button variant ="contained" onClick ={createOpen}>
          <Typography variant="button" component="div">
            + Create
          </Typography>
        </Button>
      </Box>
      <Dialog
        fullWidth         ="sm"
        open              ={openCreate}
        onClose           ={createClose}
        aria-labelledby   ="alert-dialog-title"
        aria-describedby  ="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h2">New Product/Service</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setName(e.target.value)}
                margin          ="dense"
                label           ="Product/Service"
                type            ="text"
                variant         ="outlined"
                value           ={name}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="category-select">Category</InputLabel>
                <Select
                  labelId="category-select"
                  id="category-select"
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="category 1">Category 1</MenuItem>
                  <MenuItem value="category 2">Category 2</MenuItem>
                  <MenuItem value="category 3">Category 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setDuration(e.target.value)}
                margin          ="dense"
                label           ="Duration"
                type            ="text"
                variant         ="outlined"
                value           ={duration}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl variant="outlined" fullWidth margin="dense">
                <InputLabel>Time Slots</InputLabel>
                <Select
                  fullWidth
                  multiple
                  value={slots}
                  onChange={(e) => setSlots(e.target.value)}
                  label="Time Slots"
                >
                  <MenuItem value="" disabled>
                    Select time slots
                  </MenuItem>
                  {timeSlots.map((timeSlot, index) => (
                    <MenuItem key={index} value={timeSlot}>
                      {timeSlot}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreate(false)}>Create</Button>
        </DialogActions>
      </Dialog>
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
            {productData.map((product) => {
              return (
                <TableRow key={product[0]}>
                  <TableCell style={{textAlign: "center"}}>{product[0]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{product[1]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{product[2]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{product[3]}</TableCell>
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
