import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';


function createData(candidatename, candidateid,email,writtenexam,practicaltest,total) {
  return { candidatename, candidateid,email,writtenexam,practicaltest,total};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





const CandidateExam = () => {
 
  return (
    <Box>
      
      <React.Fragment>
      <CssBaseline />
      <Container >
        <Box m={10} sx={{ bgcolor: '#cfe8fc', height: '40vh' }} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </div>
      </Container>
    </React.Fragment>
    <Box m={10}/> 
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, bgcolor:'purple' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>CandidateName</TableCell>
            <TableCell align="right">CandidateID</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Written Exam</TableCell>
            <TableCell align="right">practicaltest</TableCell>
            <TableCell align="right">Total</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.candidatename}
              </TableCell>
              <TableCell align="right">{row.candidateid}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.writtenexam}</TableCell>
              <TableCell align="right">{row.practicaltest}</TableCell>
              <TableCell align="right">{row.total}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </Box>
    

  );











}





export default CandidateExam;

