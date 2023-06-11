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
import AWS from "aws-sdk";


const Scoresheet = () => {
    // function createData(candidatename, candidateid, email, candidateexam, interview, total, status) {
    //     return { candidatename, candidateid, email, candidateexam, interview, total, status };
    //   }
      
    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 5),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3,10),
    //     createData('Eclair', 262, 16.0, 24, 6.0,15),
    //     createData('Cupcake', 305, 3.7, 67, 4.3,90),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9,34),
    //   ];

      const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://npaicwzsoc.execute-api.us-east-1.amazonaws.com/new8/scoresheet"
    );
    const data = await response.json();
    setRowData(data);
    
  };
 // loop through the data and add a sum field to each object
rowData.forEach(data => {
  data.sum = parseInt(data.Candidate_exam) + parseInt(data.Candidate_exam);
});

// calculate the total
let Total = rowData.reduce((acc, data) => acc + data.sum, 0);
  const handleGotoInterview = (event) => {
    // This function handles the action you want to perform when the button is clicked
    console.log("Goto Interview button clicked!");
    alert("Scores submitted successfully!");
  };


      return(
        <Box m={10}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, bgcolor:'#E8E1FA' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Candidate_name</TableCell>
              <TableCell align="right">Candidate_ID</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">Candidate_exam(points)</TableCell>
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
                  {data.Candidate_name}
                </TableCell>
                <TableCell align="right">{data.Candidate_ID}</TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell align="center">{data.Candidate_exam}</TableCell>
                <TableCell align="center">{data.Candidate_exam}</TableCell>
                <TableCell align="center">{Total}</TableCell>
                <TableCell align="center">
                <Button variant="contained" color="primary" onClick={handleGotoInterview}>
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