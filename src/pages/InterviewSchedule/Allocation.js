import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';

function createData(Name, JobTitle, Email) {
  
  return { Name, JobTitle, Email};
}

const rows = [
  createData("John", "SE", "john@99x.lk"),
  createData("Perera ", "HR", "geo@99x.lk"),
  createData("Geo","SSE", "perera@99x.lk"),
  createData("Leo","QA", "leo@99x.lk"),
];

const Allocation = () => {
  const [member, setMember] =React.useState([]);

  const handleChange = (event) => {
    setMember(event.target.value);
  };
   
  
    return ( 
   
       <Grid container spacing={2}>
  <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Panel member</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={member}
          label="Panel member"
          onChange={handleChange}
        >
          <MenuItem value={10}>Five</MenuItem>
          <MenuItem value={20}>Seven</MenuItem>
          <MenuItem value={30}>Ten</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <div className="Table">
      <h3>Panel Member List</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">JobTitle</TableCell>
                <TableCell align="left">Email</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="left">{row.JobTitle}</TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
        </Grid>
        <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Candidate</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={member}
          label="Candidate"
          onChange={handleChange}
        >
          <MenuItem value={10}>Five</MenuItem>
          <MenuItem value={20}>Seven</MenuItem>
          <MenuItem value={30}>Ten</MenuItem>
        </Select>
      </FormControl>
      </Grid>
        <Grid item xs={12}>
        <div className="Table">
      <h3>Candidate list</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Job role</TableCell>
                <TableCell align="left">Email</TableCell>
            
                
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "Blue" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="left">{row.JobTitle}</TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" Allocate for interview >
     Allocate for interview
    </Button>
    </Grid>
     </Grid>

     
 
     );

    };
export default Allocation;


