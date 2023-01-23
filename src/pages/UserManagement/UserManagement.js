import { Grid,Link } from "@mui/material";
// import React from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Av from "../../Images/Avatar02.jpg"
import AddCircleIcon from '@mui/icons-material/AddCircle';





import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import UserRoles from "./UserRoles";


function createData(Roles, Permission) {
  return {Roles, Permission };
}

const rows = [
  createData('Committee Member', <EditIcon/>),
  createData('Panel Member', <EditIcon/>),
  createData('Interns', <EditIcon/>),
 

];



 
const UserManagement = () => {
  return (
    <div>
      <Grid container direction={"column"} rowSpacing={2}>
        <Grid item md={3}>
            <Typography>
          <h2>
            <b>User Management</b>
          </h2>
        </Typography>
        </Grid>
      
      

      <Grid item md={3} container spacing={10} display={"flex"}  >
        <Grid item md={4} >
          <Card sx={{ bgcolor:'#27144B' }}>
            <CardContent >
              <Typography variant="h5" component="div">
                Committee Members
              </Typography>

              <Typography variant="body2">15</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card sx={{bgcolor:'#27144B'}}>
            <CardContent>
              <Typography variant="h5" component="div">
                Panel Members
              </Typography>

              <Typography variant="body2">12</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card sx={{ bgcolor:'#27144B'}}>
            <CardContent>
              <Typography variant="h5" component="div">
                Interns
              </Typography>

              <Typography variant="body2">30</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>







      <Grid item md={6}>
      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, bgcolor:'#27144B'  }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'#E8E1FA'}}><b>Roles</b></TableCell>
            <TableCell align="right" sx={{color:'#E8E1FA'}}><b>Permission</b></TableCell>
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow

              key={row.Roles}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:'#E8E1FA'}}>
                {row.Roles}
              </TableCell>
              <TableCell align="right" sx={{color:'#E8E1FA'}}>{row.Permission}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Grid>


        <Grid padding={3} alignSelf={'flex-end'} >
        <Button sx={{marginTop:3, borderRadius:4,bgcolor:"#EB5E57",color:"black",fontFamily:"Abril Fatface"}} variant="contained" startIcon={<AddCircleIcon />}>
        ADD
      </Button> */}


      <UserRoles/>
 
    </Grid>
        </Grid>
    </div>
  );
};

export default UserManagement;
