import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';


const Scoresheet = () => {
    function createData(candidatename, candidateid, email, candidateexam, interview, total, status) {
        return { candidatename, candidateid, email, candidateexam, interview, total, status };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3,10),
        createData('Eclair', 262, 16.0, 24, 6.0,15),
        createData('Cupcake', 305, 3.7, 67, 4.3,90),
        createData('Gingerbread', 356, 16.0, 49, 3.9,34),
      ];


      return(
        <Box m={10}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CandidateName</TableCell>
              <TableCell align="right">CandidateID</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">CandidateExam(points)</TableCell>
              <TableCell align="right">Interview(points)</TableCell>

              <TableCell align="right">Total</TableCell>
              <TableCell align="right">status</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.candidatename}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.candidatename}
                </TableCell>
                <TableCell align="right">{row.candidateid}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.candidateexam}</TableCell>
                <TableCell align="right">{row.interview}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">
                <Button variant="contained" color="primary">
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