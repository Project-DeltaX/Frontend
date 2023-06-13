import React, { useState,useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import jwtDecode from "jwt-decode";
import AWS from "aws-sdk";


const Scoresheet = () => {
  const [data, setData] = useState([]);
  const idToken = localStorage.getItem("idtoken");
  const decodedToken = jwtDecode(idToken);
  const Email = decodedToken["email"];

   

      const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://pp6menoash.execute-api.us-east-1.amazonaws.com/New/scoresheetdata?email="+Email,
    );
    const data = await response.json();
    setData(data);
    setRowData(data);
    console.log(data);
    
  };
 // loop through the data and add a sum field to each object
// rowData.forEach(data => {
//   data.sum = parseInt(data.Candidate_exam) + parseInt(data.Candidate_exam);
// });

// // calculate the total
// let Total = rowData.reduce((acc, data) => acc + data.sum, 0);
//   const handleGotoInterview = (event) => {
//     // This function handles the action you want to perform when the button is clicked
//     console.log("Goto Interview button clicked!");
//     alert("Scores submitted successfully!");
//   };
// onClick={handleGotoInterview}


      return(
        <Box m={10}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, bgcolor:'#E8E1FA' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Candidate Name</TableCell>
              <TableCell align="center">Candidate Email</TableCell>
              <TableCell align="center">Candidate Exam(points)</TableCell>
              <TableCell align="center">Interview(points)</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">status</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {rowData.map((data,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.candidateName}
                </TableCell>
                
                <TableCell align="center">{data.candidateEmail}</TableCell>
                <TableCell align="center">{data.Candidate_exam}</TableCell>
                <TableCell align="center">{data.Candidate_exam}</TableCell>
                <TableCell align="center">{data.Total}</TableCell>
                <TableCell align="center">
                <Button variant="contained" color="primary" >
                 submit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>

      );
      










}

export default  Scoresheet;