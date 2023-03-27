import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  
function createCdata(Name, Position, email) {
    return { Name, Position, email };
  }
const CandidateAvailability = () => {
    const [cdata, setCdata] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://1j4hao1j8f.execute-api.us-east-1.amazonaws.com/dev/candidatedata"
            );
            const jsonCdata = await response.json();
            setCdata(jsonCdata);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
return(
<div xs={12}>
        <h3> Candidate</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Position</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cdata.map((row) => (
                  <StyledTableRow key={row.Name}>
                    <StyledTableCell component="th" scope="row">
                      {row.Name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Position}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
);
};
export default CandidateAvailability;