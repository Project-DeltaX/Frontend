import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createCData(Name, Position, email) {
  return { Name, Position, email };
}
function createPData(PanelMemberName, JobTitle,email) {
  return {PanelMemberName, JobTitle,email };
}



const Allocation = () => {
  const [member, setMember] = React.useState([]);
  const [cData, setCData] = useState([]);
  const [pData, setPData] = useState([]);
  const handleChange = (event) => {
    setMember(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://1j4hao1j8f.execute-api.us-east-1.amazonaws.com/dev/candidatedata"
        );
        const jsonData = await response.json();
        setCData(jsonData);
        console.log(cData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://lcugzprcu3.execute-api.us-east-1.amazonaws.com/dev/p-availability-data"
         
        );
        const jsonData = await response.json();
        setPData(jsonData);
        console.log(pData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


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
                  <TableCell>PanelMemberName</TableCell>
                  <TableCell align="left">JobTitle</TableCell>
                  <TableCell align="left">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {pData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.PanelMemberName}
                    </TableCell>
                    <TableCell align="left">{row.JobTitle}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
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
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Blue" }}>
                {cData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Name}
                    </TableCell>
                    <TableCell align="left">{row.Position}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" Allocate for interview>
          Allocate for interview
        </Button>
      </Grid>
    </Grid>
  );
};
export default Allocation;
