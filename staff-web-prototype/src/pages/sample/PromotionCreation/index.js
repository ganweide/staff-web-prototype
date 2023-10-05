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
// const childUrl  = "http://127.0.0.1:8000/api/child/";
// const activityUrl  = "http://127.0.0.1:8000/api/activity/";

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["", "Promotion", "Start Date", "End Date", "Category", "Location"];
  const [openCreate, setOpenCreate]   = useState(false);
  const [name, setName]                     = useState([]);
  const [category, setCategory]                     = useState([]);
  const [duration, setDuration]                     = useState([]);
  const [location, setLocation]                     = useState([]);
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

  // useEffect(() => {
  //   try {
  //     Axios.get(activityUrl).then((response) => {
  //       setActivity(response.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   try {
  //     Axios.get(childUrl).then((response) => {
  //       setChild(response.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [refreshData]);

  const createOpen = async () => {
    setOpenCreate(true);
  };

  const createClose = async () => {
    setOpenCreate(false);
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
          Promotion
        </Typography>
        <Button variant ="contained" onClick ={createOpen}>
          <Typography variant="button" component="div">
            + Create
          </Typography>
        </Button>
      </Box>
      <Dialog
        open              ={openCreate}
        onClose           ={createClose}
        aria-labelledby   ="alert-dialog-title"
        aria-describedby  ="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h2">New Branches</Typography>
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
            {/* <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="provided-location-select">Provided Location</InputLabel>
                <Select
                  multiple
                  labelId="provided-location-select"
                  id="provided-location-select"
                  label="Provided Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <MenuItem value="location 1">Location 1</MenuItem>
                  <MenuItem value="location 2">Location 2</MenuItem>
                  <MenuItem value="location 3">Location 3</MenuItem>
                  <MenuItem value="location 4">Location 4</MenuItem>
                  <MenuItem value="location 5">Location 5</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
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
