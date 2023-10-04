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
// const activityUrl  = "http://127.0.0.1:8000/api/activity/";

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["No.", "Name", "Date", "Time", "Services"];
  const [customerData, setCustomerData]     = useState([]);
  const [openNewRecord, setOpenNewRecord]   = useState(false);
  const [name, setName]                     = useState([]);
  const [type, setType]                     = useState([]);
  const [bookingDate, setBookingDate]       = useState([]);
  const [bookingTime, setBookingTime]       = useState([]);
  const [switchActivity, setSwitchActivity] = useState(false);
  const [child, setChild]                   = useState([]);
  const [refreshData, setRefreshData]       = useState([]);
  const [activity, setActivity]             = useState([]);
  const [activityType, setActivityType]     = useState("Food");
  const [student, setStudent]               = useState([]);
  const [foodType, setFoodType]             = useState([]);
  const [foodQuantity, setFoodQuantity]     = useState([]);
  const [mealType, setMealType]             = useState([]);
  const [mealItems, setMealItems]           = useState([]);
  const [note, setNote]                     = useState([]);

  useEffect(() => {
    try {
      Axios.get(customerTableURL).then((response) => {
        setCustomerData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [refreshData]);

  const newRecordDialogOpen = async () => {
    setOpenNewRecord(true);
  };

  const newRecordDialogClose = async () => {
    setOpenNewRecord(false);
  }

  const newActivity = async () => {
    const activityData = new FormData();
    activityData.append("student", student);
    activityData.append("activityType", activityType);
    activityData.append("date", date);
    activityData.append("time", time);
    activityData.append("foodType", foodType);
    activityData.append("foodQuantity", foodQuantity);
    activityData.append("mealType", mealType);
    activityData.append("mealItem", mealItems);
    activityData.append("note", note);
  
    try {
      const response = await Axios({
        method  : "POST",
        url     : activityUrl,
        data    : activityData,
        headers : {"Content-Type": "multipart/form-data"},
      });
      setRefreshData(response.data)
    } catch (error) {
      console.log("error", error);
    }
    setOpen(false);
  };

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
        <Button variant ="contained" onClick ={newRecordDialogOpen}>
          <Typography variant="button" component="div">
            + New Record
          </Typography>
        </Button>
      </Box>
      <Dialog
        open              ={openNewRecord}
        onClose           ={newRecordDialogClose}
        aria-labelledby   ="alert-dialog-title"
        aria-describedby  ="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h2">Register</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setName(e.target.value)}
                margin          ="dense"
                label           ="Name"
                type            ="text"
                variant         ="outlined"
                value           ={name}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel id="type-radio-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby ="type-radio-label"
                  value           ={type}
                  onChange        ={(e) => setType(e.target.value)}
                  name            ="radio-buttons-group"
                >
                  <FormControlLabel value="walk-in" control={<Radio />} label="Walk-in" />
                  <FormControlLabel value="booking" control={<Radio />} label="Booking" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {type === "booking" && (
              <Grid item container xs={12} md={12} spacing={2}>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    onChange        ={(e) => setBookingDate(e.target.value)}
                    InputLabelProps ={{ shrink: true }}
                    margin          ="dense"
                    label           ="Booking Date"
                    type            ="date"
                    variant         ="outlined"
                    value           ={bookingDate}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    onChange        ={(e) => setBookingTime(e.target.value)}
                    InputLabelProps ={{ shrink: true }}
                    margin          ="dense"
                    label           ="Booking Time"
                    type            ="time"
                    variant         ="outlined"
                    value           ={bookingTime}
                  />
                </Grid>
              </Grid>
            )}
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel id="food-type-radio-label">Food Type</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby ="food-type-radio-label"
                  value           ={foodType}
                  onChange        ={(e) => setFoodType(e.target.value)}
                  name            ="radio-buttons-group"
                >
                  <Grid item xs={6} md={6}>
                    <FormControlLabel value="food" control={<Radio />} label="Food" />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormControlLabel value="bottle" control={<Radio />} label="Bottle" />
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel id="food-quantity-radio-label">Food Quantity</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby ="food-quantity-radio-label"
                  value           ={foodQuantity}
                  onChange        ={(e) => setFoodQuantity(e.target.value)}
                  name            ="radio-buttons-group"
                >
                  <Grid item xs={3} md={3}>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <FormControlLabel value="most" control={<Radio />} label="Most" />
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <FormControlLabel value="some" control={<Radio />} label="Some" />
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <FormControlLabel value="none" control={<Radio />} label="None" />
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="meal-type-select">Meal Type</InputLabel>
                <Select
                  labelId ="meal-type-select"
                  id      ="meal-type-select"
                  value   ={mealType}
                  label   ="Meal Type"
                  onChange={(e) => {setMealType(e.target.value)}}
                >
                  <MenuItem value="Breakfast">Breakfast</MenuItem>
                  <MenuItem value="AM Snack">AM Snack</MenuItem>
                  <MenuItem value="Lunch">Lunch</MenuItem>
                  <MenuItem value="PM Snack">PM Snack</MenuItem>
                  <MenuItem value="Dinner">Dinner</MenuItem>
                  <MenuItem value="Late Snack">Late Snack</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="meal-items-select">Meal Items</InputLabel>
                <Select
                  labelId ="meal-items-select"
                  id      ="meal-items-select"
                  value   ={mealItems}
                  label   ="Meal Items"
                  onChange={(e) => {setMealItems(e.target.value)}}
                >
                  <MenuItem value="Item 1">Item 1</MenuItem>
                  <MenuItem value="Item 1">Item 2</MenuItem>
                  <MenuItem value="Item 1">Item 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                onChange={(e) => setNote(e.target.value)}
                margin="dense"
                label="Note"
                type="text"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={note}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={newActivity}>Create</Button>
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
            {activity.map((activityData, index) => {
              return (
                <TableRow key={activityData.activityId}>
                  <TableCell style={{textAlign: "center"}}>{index + 1}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{activityData.student}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{activityData.date}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{activityData.time}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{activityData.activityType}</TableCell>
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
