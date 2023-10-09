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
  const tableHead = ["", "Promotion", "Start Date", "End Date", "Category", "Location"];
  const promotionData = [
    ["1", "Car Wash, Detail Wash", "09/10/2023", "16/10/2023", "Car", "Test 4"],
    ["2", "Hair Trimming, Hair Dye", "10/10/2023", "17/10/2023", "Saloon", "Test 1"],
    ["3", "Thai Massage", "11/10/2023", "18/10/2023", "Massage", "Test 2"],
  ]
  const [openCreate, setOpenCreate] = useState(false);
  const [name, setName]             = useState([]);
  const [category, setCategory]     = useState([]);
  const [start, setStart]           = useState([]);
  const [end, setEnd]               = useState([]);
  const [branches, setBranches]     = useState([]);

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
          <Typography variant="h2">New Promotion</Typography>
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
                  <MenuItem value="category 1">Saloon</MenuItem>
                  <MenuItem value="category 2">Massage</MenuItem>
                  <MenuItem value="category 3">Car</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h4">Promotion Duration</Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                InputLabelProps ={{ shrink: true }}
                onChange        ={(e) => setStart(e.target.value)}
                margin          ="dense"
                label           ="Promotion Start"
                type            ="date"
                variant         ="outlined"
                value           ={start}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                InputLabelProps ={{ shrink: true }}
                onChange        ={(e) => setEnd(e.target.value)}
                margin          ="dense"
                label           ="Promotion End"
                type            ="date"
                variant         ="outlined"
                value           ={end}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="branches-select">Selected Branches</InputLabel>
                <Select
                  multiple
                  labelId="branches-select"
                  id="branches-select"
                  label="Selected Branches"
                  value={branches}
                  onChange={(e) => setBranches(e.target.value)}
                >
                  <MenuItem value="test 1">Test 1</MenuItem>
                  <MenuItem value="test 2">Test 2</MenuItem>
                  <MenuItem value="test 3">Test 3</MenuItem>
                  <MenuItem value="test 4">Test 4</MenuItem>
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
            {promotionData.map((promotion) => {
              return (
                <TableRow key={promotion[0]}>
                  <TableCell style={{textAlign: "center"}}>{promotion[0]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{promotion[1]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{promotion[2]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{promotion[3]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{promotion[4]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{promotion[5]}</TableCell>
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
