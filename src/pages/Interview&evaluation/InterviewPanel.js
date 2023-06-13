import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { red } from "@mui/material/colors";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AWS from "aws-sdk";



const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};





// function createData(CandidateName,CandidateID,Age,Email,status) {
//   return { CandidateName,CandidateID,Age,Email,status };
// }

// const rows = [
//   createData("Tharanika Perinparasa", 1, 23, "vk123@gmail.com","Goto Interview"),
//   createData("Thanushiyan Sivapalasundaram", 2, 23, "vk123@gmail.com","Goto Interview"),
//   createData("Danuraha Thevanayagam", 3, 23, "vk123@gmail.com","Goto Interview"),
//   createData("Mahilan Shanmuganathan", 4, 23, "vk123@gmail.com","Goto Interview"),
// ];





const InterviewPanel = () => {
  
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://4k3r35xbr5.execute-api.us-east-1.amazonaws.com/new2/interviewpanel"
    );
    const data = await response.json();
    setRowData(data);
    
  };
  const handleGotoInterview = (event) => {
    // This function handles the action you want to perform when the button is clicked
    console.log("Goto Interview button clicked!");
    alert("Interview started");
  };
  

  return (
    
    <Box m={10} >
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{background:'#7891E5'}}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  
      <div className="Table">
     
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 , background:
              '#E8E1FA', }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >Candidate_name </TableCell>
                <TableCell align="left" >Candidate_ID</TableCell>
                <TableCell align="left" >Age</TableCell>
                <TableCell align="left">candidate Email</TableCell>
                <TableCell align="left"> <span>Interview</span>
  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
            {rowData.map((data,index) => (
                <TableRow
                  key={data.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" >
                    {data.Candidate_name}
                  </TableCell>
                  <TableCell align="left">{data.Candidate_ID}</TableCell>
                  <TableCell align="left">{data.Age}</TableCell>
                  <TableCell align="left">{data.email}</TableCell>
                  <TableCell align="left">
                  <Button variant="contained" color="primary" onClick={handleGotoInterview} >
                Goto Interview
                  </Button>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
     

      </Box>
      
  );
}
  
  export default InterviewPanel;
  
  