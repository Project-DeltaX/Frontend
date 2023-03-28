import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
function createData(PanelMemberName, JobTitle, Email, Status) {
    return { PanelMemberName, JobTitle, Email, Status };
  }
const PanelAvailability = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://lcugzprcu3.execute-api.us-east-1.amazonaws.com/dev/p-availability-data"
            );
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

return(
  <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid xs={12}>
    <h3> Panel Member</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
       
        <TableHead>
          <TableRow>
            <StyledTableCell>PanelMemberName</StyledTableCell>
            <StyledTableCell align="right">JobTitle</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.PanelMemberName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.JobTitle}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">
                {row.Status}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  </Grid>

);
};

export default PanelAvailability;

