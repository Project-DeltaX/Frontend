import * as React from 'react';
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






function createData(Criteria,Excellent, Good, Average, Poor,None) {
  return {Criteria,Excellent, Good, Average, Poor,None };
}

const rows = [
  createData('Self intro', '4mark', '3mark', '2mark', '1mark', '0mark'),
  createData('Technical Skills',  '4mark', '3mark', '2mark', '1mark', '0mark'),
  createData('Communication Skills',  '4mark', '3mark', '2mark', '1mark', '0mark'),
  createData('Problem Solving skills',  '4mark', '3mark', '2mark', '1mark', '0mark'),
  createData('Personality and teamwork',  '4mark', '3mark', '2mark', '1mark', '0mark'),
];
const MarkingSheet= () => {
    const [cid, setcid] = React.useState('');

  const handleChange = (event) => {
    setcid(event.target.value);
  };
    return (
        <Box m={10} sx={{ minWidth: 10}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">CandidateID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cid}
          label="CandidateId"
          onChange={handleChange}
        >
          <MenuItem value={'001.99x'}>001.99x</MenuItem>
          <MenuItem value={'002.99x'}>002.99x</MenuItem>
          <MenuItem value={'003.99x'}>003.99x</MenuItem>
        </Select>
      </FormControl>
    
       
        <Box m={10} sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Criteria</TableCell>
                <TableCell align="right">Excellent</TableCell>
                <TableCell align="right">Good</TableCell>
                <TableCell align="right">Average</TableCell>
                <TableCell align="right">Poor</TableCell>
                <TableCell align="right">None</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Criteria}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Criteria}
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary">
                  4marks
                  </Button></TableCell>
                  <TableCell align="right">
                  <Button variant="contained" color="primary">
                  3marks
                  </Button>

                  </TableCell>
                  <TableCell align="right">
                  <Button variant="contained" color="primary">
                  2marks
                  </Button>
                  </TableCell>
                  <TableCell align="right">
                  <Button variant="contained" color="primary">
                  1marks
                  </Button>
                  </TableCell>
                  <TableCell align="right">
                  <Button variant="contained" color="primary">
                  0marks
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box> 
        </Box>     
  
            
            
       
        
      );
}
export default MarkingSheet;