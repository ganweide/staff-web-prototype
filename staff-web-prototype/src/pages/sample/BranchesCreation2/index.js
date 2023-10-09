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
const branchUrl  = "http://127.0.0.1:8000/api/branch/";
const productUrl  = "http://127.0.0.1:8000/api/product/";

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["", "Name", "Location", "Category", "Products/Services"];
  const branchData = [
    ["1", "Test 1", "Subang Jaya", "Saloon", "Hair Trimming"],
    ["2", "Test 2", "Putrajaya", "Massage", "Thai Massage"],
    ["3", "Test 3", "Klang", "Saloon", "Hair Dye"],
    ["4", "Test 4", "Subang Jaya", "Car", "Car Wash"],
  ];
  const [openCreate, setOpenCreate]               = useState(false);
  const [branchName, setBranchName]               = useState([]);
  const [branchPhone, setBranchPhone]             = useState([]);
  const [branchEmail, setBranchEmail]             = useState([]);
  const [branchDescription, setBranchDescription] = useState([]);
  const [branchOpening, setBranchOpening]         = useState([]);
  const [branchClosing, setBranchClosing]         = useState([]);
  const [branchRooms, setBranchRooms]             = useState([]);
  const [branchAddress1, setBranchAddress1]       = useState([]);
  const [branchAddress2, setBranchAddress2]       = useState([]);
  const [branchAddress3, setBranchAddress3]       = useState([]);
  const [branchCity, setBranchCity]               = useState([]);
  const [branchState, setBranchState]             = useState([]);
  const [branchZIP, setBranchZIP]                 = useState([]);
  const [category, setCategory]                   = useState([]);
  const [productService, setProductService]       = useState([]);

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
          Branches
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
              <Typography variant="h3">Branch Informations</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchName(e.target.value)}
                margin          ="dense"
                label           ="Branch Name"
                type            ="text"
                variant         ="outlined"
                value           ={branchName}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchPhone(e.target.value)}
                margin          ="dense"
                label           ="Branch Phone"
                type            ="text"
                variant         ="outlined"
                value           ={branchPhone}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchEmail(e.target.value)}
                margin          ="dense"
                label           ="Branch Email"
                type            ="text"
                variant         ="outlined"
                value           ={branchEmail}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchDescription(e.target.value)}
                margin          ="dense"
                label           ="Branch Description"
                type            ="text"
                variant         ="outlined"
                value           ={branchDescription}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                InputLabelProps ={{ shrink: true }}
                onChange        ={(e) => setBranchOpening(e.target.value)}
                margin          ="dense"
                label           ="Open"
                type            ="time"
                variant         ="outlined"
                value           ={branchOpening}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                InputLabelProps ={{ shrink: true }}
                onChange        ={(e) => setBranchClosing(e.target.value)}
                margin          ="dense"
                label           ="Close"
                type            ="time"
                variant         ="outlined"
                value           ={branchClosing}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchRooms(e.target.value)}
                margin          ="dense"
                label           ="Branch rooms available"
                type            ="text"
                variant         ="outlined"
                value           ={branchRooms}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h3">Branch Location</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchAddress1(e.target.value)}
                margin          ="dense"
                label           ="Address 1"
                type            ="text"
                variant         ="outlined"
                value           ={branchAddress1}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchAddress2(e.target.value)}
                margin          ="dense"
                label           ="Address 2"
                type            ="text"
                variant         ="outlined"
                value           ={branchAddress2}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchAddress3(e.target.value)}
                margin          ="dense"
                label           ="Address 3"
                type            ="text"
                variant         ="outlined"
                value           ={branchAddress3}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchCity(e.target.value)}
                margin          ="dense"
                label           ="City"
                type            ="text"
                variant         ="outlined"
                value           ={branchCity}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchState(e.target.value)}
                margin          ="dense"
                label           ="State"
                type            ="text"
                variant         ="outlined"
                value           ={branchState}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                onChange        ={(e) => setBranchZIP(e.target.value)}
                margin          ="dense"
                label           ="ZIP"
                type            ="text"
                variant         ="outlined"
                value           ={branchZIP}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth margin="dense">
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
              <FormControl fullWidth margin="dense">
                <InputLabel id="provided-products-services-select">Provided Products/Services</InputLabel>
                <Select
                  multiple
                  labelId="provided-products-services-select"
                  id="provided-products-services-select"
                  label="Provided Products/Services"
                  value={productService}
                  onChange={(e) => setProductService(e.target.value)}
                >
                  <MenuItem value="" disabled>
                    Select product
                  </MenuItem>
                  <MenuItem value={"hair trimming"}>Hair Trimming</MenuItem>
                  <MenuItem value={"thai massage"}>Thai Massage</MenuItem>
                  <MenuItem value={"hair dye"}>Hair Dye</MenuItem>
                  <MenuItem value={"car wash"}>Car Wash</MenuItem>
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
            {branchData.map((branch) => {
              return (
                <TableRow key={branch[0]}>
                  <TableCell style={{textAlign: "center"}}>{branch[0]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch[1]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch[2]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch[3]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch[4]}</TableCell>
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
