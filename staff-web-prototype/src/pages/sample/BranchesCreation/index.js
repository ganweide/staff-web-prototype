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
const branchURL  = "http://127.0.0.1:8000/api/branch/";

const Page2 = () => {
  const classes   = useStyles();
  const tableHead = ["", "Name", "Location", "Category", "Products/Services"];
  const [openCreate, setOpenCreate]         = useState(false);
  const [branchData, setBranchData]         = useState([]);
  const [branchName, setBranchName]         = useState([]);
  const [branchPhone, setBranchPhone]       = useState([]);
  const [branchEmail, setBranchEmail]       = useState([]);
  const [branchAddress1, setBranchAddress1] = useState([]);
  const [branchAddress2, setBranchAddress2] = useState([]);
  const [branchAddress3, setBranchAddress3] = useState([]);
  const [branchCity, setBranchCity]         = useState([]);
  const [branchState, setBranchState]       = useState([]);
  const [branchZIP, setBranchZIP]           = useState([]);
  const [category, setCategory]             = useState([]);
  const [productService, setProductService] = useState([]);
  const [update, setUpdate]                 = useState([]);

  useEffect(() => {
    try {
      Axios.get(branchURL).then((response) => {
        setBranchData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [update]);

  const createOpen = async () => {
    setOpenCreate(true);
  };

  const createClose = async () => {
    setOpenCreate(false);
  }

  const createBranch = async () => {
    const newBranch = new FormData();
    newBranch.append("name", branchName);
    newBranch.append("phone", branchPhone);
    newBranch.append("email", branchEmail);
    newBranch.append("address1", branchAddress1);
    newBranch.append("address2", branchAddress2);
    newBranch.append("address3", branchAddress3);
    newBranch.append("city", branchCity);
    newBranch.append("state", branchState);
    newBranch.append("ZIP", branchZIP);
    newBranch.append("category", category);
    newBranch.append("product", productService);
  
    try {
      const response = await Axios({
        method  : "POST",
        url     : branchURL,
        data    : newBranch,
        headers : {"Content-Type": "multipart/form-data"},
      });
      setUpdate(response.data)
    } catch (error) {
      console.log("error", error);
    }
    setOpenCreate(false);
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
              <FormControl fullWidth>
                <InputLabel id="provided-products-services-select">Provided Products/Services</InputLabel>
                <Select
                  multiple
                  labelId="provided-products-services-select"
                  id="provided-products-services-select"
                  label="Provided Products/Services"
                  value={productService}
                  onChange={(e) => setProductService(e.target.value)}
                >
                  <MenuItem value="product 1">Product 1</MenuItem>
                  <MenuItem value="product 2">Product 2</MenuItem>
                  <MenuItem value="product 3">Product 3</MenuItem>
                  <MenuItem value="service 1">Service 1</MenuItem>
                  <MenuItem value="service 2">Service 2</MenuItem>
                  <MenuItem value="service 3">Service 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="provided-products-services-select">Provided Products/Services</InputLabel>
                <Select
                  multiple
                  labelId="provided-products-services-select"
                  id="provided-products-services-select"
                  label="Provided Products/Services"
                  value={productService}
                  onChange={(e) => setProductService(e.target.value)}
                >
                  <MenuItem value="product 1">Product 1</MenuItem>
                  <MenuItem value="product 2">Product 2</MenuItem>
                  <MenuItem value="product 3">Product 3</MenuItem>
                  <MenuItem value="service 1">Service 1</MenuItem>
                  <MenuItem value="service 2">Service 2</MenuItem>
                  <MenuItem value="service 3">Service 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={createBranch}>Create</Button>
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
            {branchData.map((branch, index) => {
              return (
                <TableRow key={branch.id}>
                  <TableCell style={{textAlign: "center"}}>{branch.id}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch.name}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch.city}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch.category}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{branch.products}</TableCell>
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
