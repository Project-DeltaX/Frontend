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

const Allocation = () => {
  const [member, setMember] = React.useState([]);
  const [cData, setCData] = useState([]);
  const [pData, setPData] = useState([]);
  const [selectedPanelMember, setSelectedPanelMember] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleChange = (event) => {
    setMember(event.target.value);
  };

  const handlePanelMemberSelection = (panelMember) => {
    setSelectedPanelMember(panelMember);
  };

  const handleCandidateSelection = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleAllocateInterview = async () => {
    if (selectedPanelMember && selectedCandidate) {
      const allocationData = {
        panelMemberName: selectedPanelMember.firstName,
        panelMemberEmail: selectedPanelMember.email,
        candidateName: selectedCandidate.name,
        candidateEmail: selectedCandidate.email,
      };

      try {
        const response = await fetch("https://y3xkww2phf.execute-api.us-east-1.amazonaws.com/allocation1/allocation", {
          method: "POST",
          body: JSON.stringify(allocationData),
        });

        if (response.ok) {
          console.log("Allocation saved successfully");
        } else {
          console.error("Error saving allocation");
        }
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
          "https://bgn8o86ukl.execute-api.us-east-1.amazonaws.com/New/panelmemberdata"
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
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Panel Member</InputLabel>
          <Select value={member} onChange={handleChange} label="Panel Member">
            {pData.map((item) => (
              <MenuItem
                key={item.id}
                value={item}
                onClick={() => handlePanelMemberSelection(item)}
              >
                {item.firstName} {item.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox
                      onChange={() => handleCandidateSelection(item)}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleAllocateInterview}
          disabled={!selectedPanelMember || !selectedCandidate}
        >
          Allocate Interview
        </Button>
      </Grid>
    </Grid>
  );
};

export default Allocation;
