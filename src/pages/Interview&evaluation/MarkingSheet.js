import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import AWS from "aws-sdk";






// function createData(Criteria,Excellent, Good, Average, Poor,None) {
//   return {Criteria,Excellent, Good, Average, Poor,None };
// }

// const rows = [
//   createData('Self intro', '4mark', '3mark', '2mark', '1mark', '0mark'),
//   createData('Technical Skills',  '4mark', '3mark', '2mark', '1mark', '0mark'),
//   createData('Communication Skills',  '4mark', '3mark', '2mark', '1mark', '0mark'),
//   createData('Problem Solving skills',  '4mark', '3mark', '2mark', '1mark', '0mark'),
//   createData('Personality and teamwork',  '4mark', '3mark', '2mark', '1mark', '0mark'),
// ];


const MarkingSheet = () => {
  const [email, setemail] = useState('');

  const handleChange = (event) => {
    setemail(event.target.value);
  };

  const [rowData, setRowData] = useState([]);
  const [totalPoints, setTotalPoints] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://8h66zb4an0.execute-api.us-east-1.amazonaws.com/new10/markingsheet'
    );
    const data = await response.json();
    setRowData(
      data.map((row) => ({
        ...row,
        selectedOption: null,
      }))
    );
    setTotalPoints(data.map(() => 0));
  };

  const handleOptionSelect = (rowIndex, optionValue) => {
    setRowData((prevData) =>
      prevData.map((row, i) =>
        i === rowIndex ? { ...row, selectedOption: optionValue } : row
      )
    );

    setTotalPoints((prevPoints) =>
      prevPoints.map((points, i) => (i === rowIndex ? optionValue : points))
    );
  };

  const calculateScore = () => {
    return totalPoints.reduce((total, points) => total + points, 0);
  };

  const handleFormSubmit = () => {
    console.log('Form Submitted');
    console.log('email:', email);
    console.log('Selected Options:', rowData.map((row) => row.selectedOption));
  };

  return (
    <Box m={10} sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Email</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={email}
          label="Email"
          onChange={handleChange}
        >
          {rowData.map((data, index) => (
            <MenuItem key={index} value={index}>
              {data.email}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box m={10} sx={{ height: '200vh' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650, bgcolor: '#E8E1FA' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Criteria</TableCell>
                <TableCell align="right">Excellent</TableCell>
                <TableCell align="right">Good</TableCell>
                <TableCell align="right">Average</TableCell>
                <TableCell align="right">Poor</TableCell>
                <TableCell align="right">None</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((data, index) => (
                <TableRow
                  key={data.Criteria}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.Criteria}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOptionSelect(index, 4)}
                      disabled={data.selectedOption === 4}
                    >
                      4marks
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOptionSelect(index, 3)}
                      disabled={data.selectedOption === 3}
                    >
                      3marks
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOptionSelect(index, 2)}
                      disabled={data.selectedOption === 2}
                    >
                      2marks
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOptionSelect(index, 1)}
                      disabled={data.selectedOption === 1}
                    >
                      1marks
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOptionSelect(index, 0)}
                      disabled={data.selectedOption === 0}
                    >
                      0marks
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    {data.selectedOption !== null ? (
                      data.selectedOption
                    ) : (
                      <em>No selection</em>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell component="th" scope="row">
                  Total
                </TableCell>
                {totalPoints.map((points, index) => (
                  <TableCell align="right" key={index}>
                    {points}
                  </TableCell>
                ))}
                <TableCell align="right">{calculateScore()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* <Box mt={10} sx={{   alignItems: 'center',justifyContent: 'center', textAlign: 'center' }}> */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: '50px' }}>
        <Button variant="contained" color="success">
        Submit
      </Button>

        </Stack>
        
      {/* </Box> */}
      </Box>
      
    </Box>
  );
};

export default MarkingSheet;
