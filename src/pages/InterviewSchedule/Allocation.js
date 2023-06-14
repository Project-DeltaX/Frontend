

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
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
const Allocation = () => {
  
  const [cData, setCData] = useState([]);
  const [pData, setPData] = useState([]);
  const [selectedPanelMember, setSelectedPanelMember] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");


 
  const handlePanelMemberSelection = (panelMember) => {
    setSelectedPanelMember(panelMember);
  };

  const handleCandidateSelection = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleAllocateInterview = async () => {
    if (selectedPanelMember && selectedCandidate) {
      const bodydata = {
        panelMemberName: selectedPanelMember.firstName,
        panelMemberEmail: selectedPanelMember.email,
        candidateName: selectedCandidate.name,
        candidateEmail: selectedCandidate.email,
      };
    try {
      const response = await axios.post(
        "https://wahmakp0hg.execute-api.us-east-1.amazonaws.com/newst/allodata",
        bodydata
      );
      console.log(response.data);
      const updatedCData = cData.filter(
        (candidate) => candidate.email !== selectedCandidate.email
      );
      setCData(updatedCData);

      // Reset the selectedPanelMember and selectedCandidate
      setSelectedPanelMember("");
      setSelectedCandidate("");
    } catch (error) {
      console.error(error);

      
    }
  }

  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bgn8o86ukl.execute-api.us-east-1.amazonaws.com/New/candidatedata"
        );
        const jsonData = await response.json();
        setCData(jsonData);

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
          "https://szhbcgr633.execute-api.us-east-1.amazonaws.com/new1/pmemberdata"
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
       <Grid item xs={6} spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="panel-member-label">Panel Member</InputLabel>
          <Select
            labelId="panel-member-label"
            id="panel-member-select"
            value={selectedPanelMember}
            label="Panel Member"
            onChange={(e) => handlePanelMemberSelection(e.target.value)}
          >
            {pData.map((panelMember) => (
              <MenuItem key={panelMember.email} value={panelMember}>
                {panelMember.firstName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342", 
              fontWeight: "bold",
            },
          }}
        >
         
        </FormControl>
      </Grid>
      <Grid item xs={12} spacing={2}>
     
      <Grid>
        
      </Grid>
        <div className="Table">
          
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#9485a8" }}>
                <TableRow>
                  <TableCell />
                  <TableCell>PanelMemberName</TableCell>
                  <TableCell align="left">JobTitle</TableCell>
                  <TableCell align="left">PanelMemberemail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Bluet" }}>
                {pData.map((row) => (
                  <TableRow
                    style={{ backgroundColor: "#b8a9cc" }}
                    key={row.email}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell padding="checkbox">
                      <Checkbox 
                      checked={selectedPanelMember === row}
                      onChange={() => handlePanelMemberSelection(row)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="left">{row.guestRole}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={6}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342", 
              fontWeight: "bold",
            },
          }}
        >
          
        </FormControl>
      </Grid>
      <Grid item xs={12} spacing={2}>
     
      <FormControl fullWidth>
        <InputLabel id="candidate-label">Candidate</InputLabel>
        <Select
          labelId="candidate-label"
          id="candidate-select"
          value={selectedCandidate}
          label="Candidate"
          onChange={(e) => handleCandidateSelection(e.target.value)}
        >
          {cData.map((candidate) => (
            <MenuItem key={candidate.email} value={candidate}>
              {candidate.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6} spacing={2}>
        <div className="Table">
         
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#9485a8" }}>
                <TableRow>
                  <TableCell />
                  <TableCell>CandidateName</TableCell>
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">CandidateEmail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Blue" }}>
                {cData.map((row) => (
                  <TableRow
                    style={{ backgroundColor: "#b8a9cc" }}
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox 
                      checked={selectedCandidate === row}
                      onChange={() => handleCandidateSelection(row)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.jobRole}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" style={{ backgroundColor: "#1e0342",color:"white" }}
        onClick={handleAllocateInterview}
        disabled={!selectedPanelMember || !selectedCandidate}
          
        >
          Allocate for interview
        </Button>
      </Grid>
    </Grid>
  );
};

export default Allocation;

