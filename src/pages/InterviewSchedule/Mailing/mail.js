import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  FormControl,
  Checkbox,
  Button,
} from "@mui/material";

const SMCandidate = () => {
  const [sData, setSData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [emailStatuses, setEmailStatuses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://71sozhk0d6.execute-api.us-east-1.amazonaws.com/st1/internlist");
        const jsonData = await response.json();
        setSData(jsonData);
        console.log(sData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleCandidateSelection = (candidate) => {
    if (selectedCandidates.includes(candidate)) {
      setSelectedCandidates(selectedCandidates.filter((c) => c !== candidate));
    } else {
      setSelectedCandidates([...selectedCandidates, candidate]);
    }
  };

  const sendEmails = async () => {
    try {
      const response = await fetch("YOUR_LAMBDA_FUNCTION_API_ENDPOINT", {
        method: "POST",
        body: JSON.stringify(selectedCandidates),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        setEmailStatuses(json.emailStatuses);
        console.log(json);
      } else {
        console.error("Failed to send emails.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342",
              fontWeight: "bold",
            },
          }}
        ></FormControl>

        <Grid item xs={12}>
          <div className="Table">
            <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#9485a8" }}>
                  <TableRow>
                    <TableCell />
                    <TableCell>CandidateName</TableCell>
                    <TableCell align="left">JobRole</TableCell>
                    <TableCell align="left">CandidateEmail</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ color: "Bluet" }}>
                  {sData.map((row) => (
                    <TableRow
                      style={{ backgroundColor: "#b8"}}>

                      <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCandidates.includes(row.candidateEmail)}
                        onChange={() => handleCandidateSelection(row.candidateEmail)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.candidateName}
                    </TableCell>
                    <TableCell align="left">{row.jobRole}</TableCell>
                    <TableCell align="left">{row.candidateEmail}</TableCell>
                    <TableCell align="left">{emailStatuses[row.candidateEmail]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={sendEmails}>
          Send Email
        </Button>
      </Grid>
    </Grid>
    </Grid>
  );
};

export default SMCandidate;

