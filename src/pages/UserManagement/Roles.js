import { Grid, Link } from "@mui/material";
// import React from "react";

import * as React from "react";

import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import CheckboxesTags from "./SelectPermission";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";



//adding select permission

function MyIconButton() {
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const handleClick = () => {
    setShowCheckboxes(true);
  
  };
  const handleClose = () => {
    setShowCheckboxes(false);
  };

 

  return (

    <div>
    <Tooltip
      open={showCheckboxes}
      title={<CheckboxesTags />}
      onClose={handleClose}
       disableHoverListener
      placement="bottom"
    >
      <IconButton onClick={handleClick}>
        <EditIcon />
      </IconButton>
    </Tooltip>
  </div>

  );
}


function createData(Roles, Permission) {
    return { Roles, Permission };
  }

  const rows = [
    createData("Committee Member", <MyIconButton />),
    createData("Panel Member", <MyIconButton />),
    createData("Interns", <MyIconButton />),
  ];
const CommonRoles = () => {

    return ( 
        <Grid container direction={'column'}>
            <Grid item>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, bgcolor:'#E8E1FA'  }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'black'}}><b>Roles</b></TableCell>
            <TableCell align="right" sx={{color:'black'}}><b>Permission</b></TableCell>
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow

              key={row.Roles}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:'black'}}>
                {row.Roles}
              </TableCell>
              <TableCell align="right" sx={{color:'black'}}>{row.Permission}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
            <Grid item padding={3} alignSelf={'flex-end'} >
        <Button sx={{marginTop:3, borderRadius:4,bgcolor:"#EB5E57",color:"black",fontFamily:"Abril Fatface"}} variant="contained" startIcon={<AddCircleIcon />}>
        ADD
      </Button>
        </Grid>

        </Grid>
        


        
     );
}
 
export default CommonRoles;