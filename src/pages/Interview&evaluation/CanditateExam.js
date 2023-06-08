import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { TableContainer } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import CircularProgress from "@mui/material/CircularProgress";

import AWS from "aws-sdk";

// function createData(candidatename,candidateid,email,writtenexam,practicaltest,total)
  
// {
//   return {candidatename,candidateid,email,writtenexam,practicaltest,total};
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const CandidateExam = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://z8o7h340ej.execute-api.us-east-1.amazonaws.com/new1/candidateexam"
    );
    const data = await response.json();
    setRowData(data);
    
  };
  const handleGotoInterview = async (event, email, totalMarks) => {
    try {
      // This function handles the action you want to perform when the button is clicked
      console.log("Submit button clicked!");
      
      const response = await fetch(
        "https://your-lambda-function-endpoint",
        {
          method: "POST",
          body: JSON.stringify({ email, totalMarks }),
        }
      );
  
      if (response.ok) {
        alert("Scores submitted successfully!");
      } else {
        alert("Failed to submit scores.");
      }
    } catch (error) {
      alert("Error submitting scores.");
    }
  };
  

  return (
    <Box m={10}>

      
      <TableContainer component={Paper}>  
        <Table
        sx={{ minWidth: 650, bgcolor:'#E8E1FA'  }}
       
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
          <TableCell align="right">Candidate_Id</TableCell>
          <TableCell align="right">Candidate_name</TableCell>
          <TableCell align="center">email</TableCell>
            <TableCell align="right">Written_exam</TableCell>
            <TableCell align="right">Practical_test</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Status</TableCell>

            
           
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((data,index) => (
            
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{data.Candidate_Id}</TableCell>
              <TableCell align="right">{data.Candidate_name}</TableCell>
              <TableCell align="right" >{data.email}</TableCell>
              <TableCell align="right">{data.Written_exam}</TableCell>
              <TableCell align="right">{data.Practical_test}</TableCell>
              <TableCell align="right">{data.Total}</TableCell>
              <TableCell align="right">
              <Button variant="contained" color="primary" onClick={handleGotoInterview} >
                Submit
                  </Button>
              </TableCell>
      
              
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
     
    
      

    </Box>
  );
};

export default CandidateExam;
