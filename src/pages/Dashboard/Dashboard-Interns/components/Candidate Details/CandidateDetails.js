import React, { useState, useEffect } from "react";
import axios from "axios";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

const CandidateDetails = () => {
  const [candidateData, setCandidateData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(
              "https://v6pjqonit0.execute-api.us-east-1.amazonaws.com/dev/allcandidatedetail"
            );
            
            const jsonData = response.data;
            setCandidateData(jsonData);
          } catch (error) {
            console.log(error);
          }
    };
    fetchData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidateData.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
export default CandidateDetails;
