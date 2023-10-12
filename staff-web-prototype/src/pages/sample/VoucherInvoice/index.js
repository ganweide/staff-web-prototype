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
  const tableHead = ["", "Customer", "Date", "Use (Branch Id)", "Bought (Branch Id)", "Voucher Balance"];
  const productData = [
    ["1", "Test 1", "20/10/2023", "1", "1", "9"],
    ["2", "Test 2", "12/08/2023", "1", "1", "8"],
    ["3", "Test 3", "03/07/2023", "1", "3", "3"],
    ["4", "Test 4", "28/06/2023", "2", "2", "6"],
    ["5", "Test 5", "27/06/2023", "2", "2", "5"],
  ];
  const [openCreate, setOpenCreate]   = useState(false);
  const [openInvoice, setOpenInvoice]   = useState(false);
  const [customer, setCustomer]       = useState([]);
  const [category, setCategory]       = useState([]);
  const [product, setProduct]       = useState([]);
  const [bought, setBought]       = useState([]);
  const [use, setUse]       = useState([]);
  const [balance, setBalance]       = useState([]);

  useEffect(() => {
    // Find the selected customer in productData
    const selectedCustomerData = productData.find((data) => data[1] === customer);

    // If a matching customer is found, set the balance
    if (selectedCustomerData) {
      const customerBalance = selectedCustomerData[5];
      const voucherBought   = selectedCustomerData[4];
      const voucherUse      = selectedCustomerData[3];
      setBalance(customerBalance);
      setBought(voucherBought);
      setUse(voucherUse);
    } else {
      // If no matching customer is found, set balance to an empty string or another default value
      setBalance('');
    }
  }, [customer]);

  const createOpen = async () => {
    setOpenCreate(true);
  };

  const createClose = async () => {
    setOpenCreate(false);
  }

  const invoiceOpen = async () => {
    setOpenCreate(false);
    setOpenInvoice(true);
  };

  const invoiceClose = async () => {
    setOpenInvoice(false);
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
          Voucher Invoice
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
          <Typography variant="h2">New Invoice</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="category-select">Customer</InputLabel>
                <Select
                  labelId="category-select"
                  id="category-select"
                  label="Category"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                >
                  {productData.map((data) => (
                    <MenuItem key={data[0]} value={data[1]}>
                      {data[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                <InputLabel id="category-select">Product/Service</InputLabel>
                <Select
                  labelId="category-select"
                  id="category-select"
                  label="Product/Service"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  <MenuItem value="product 1">Product 1</MenuItem>
                  <MenuItem value="product 2">Product 2</MenuItem>
                  <MenuItem value="product 3">Product 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                disabled
                margin          ="dense"
                label           ="Balance"
                type            ="text"
                variant         ="outlined"
                value           ={balance}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => invoiceOpen()}>Create</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth
        maxWidth          ="lg"
        open              ={openInvoice}
        onClose           ={invoiceClose}
        aria-labelledby   ="alert-dialog-title"
        aria-describedby  ="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h2">Invoice Preview</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4">Customer :</Typography>
              <p>{customer}</p>
              <Typography variant="h4">Date :</Typography>
              <p>12/10/2023</p>
              <Typography variant="h4">Voucher Bought :</Typography>
              <p>Branch Id : {bought}</p>
              <Typography variant="h4">Voucher Use :</Typography>
              <p>Branch Id : {use}</p>
              <Typography variant="h4">Voucher Expiry :</Typography>
              <p>12/10/2024</p>
              <Typography variant="h4">New Voucher Balance :</Typography>
              <p>{balance - 1}</p>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenInvoice(false)}>Send</Button>
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
                  <TableCell style={{textAlign: "center"}}>{product[4]}</TableCell>
                  <TableCell style={{textAlign: "center"}}>{product[5]}</TableCell>
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
