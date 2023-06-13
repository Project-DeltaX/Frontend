   
import React, { useState, useEffect } from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#3e5b8c", // Header row color
  color: theme.palette.common.white,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#8caee6", // Data row color
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CMPanel = () => {
  const [pdata, setPdata] = useState([]);
  const [selectedPanel, setSelectedPanel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://58rblmkvyc.execute-api.us-east-1.amazonaws.com/nw1/paneldata"
        );
        const jsonPdata = await response.json();
        setPdata(jsonPdata);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (event, panel) => {
    if (event.target.checked) {
      setSelectedPanel([...selectedPanel, panel]);
    } else {
      setSelectedPanel(
        selectedPanel.filter((c) => c.email !== panel.email)
      );
    }
  };

  const handleSendEmail = async () => {
    const recipt = selectedPanel.map((panel) => panel.email);

    const result = {body : recipt};
    // console.log(recipients)
    try {
      const response = await axios.post(
        "https://17ai1gnfnh.execute-api.us-east-1.amazonaws.com/nw1/confirmpanel",
        result 
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleStatusChange = (email, status) => {
    const updatedData = pdata.map((row) =>
      row.email === email ? { ...row, status: status } : row
    );
    setPdata(updatedData);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "#4CAF50"; // Green color
      case "Rejected":
        return "#F44336"; // Red color
      case "Pending":
        return "#5c5b49"; // Yellow color
      default:
        return "#5c5b49"; // Default color (white)
    }
  };

  const getNextStatus = (status) => {
    switch (status) {
      case "Accepted":
        return "Rejected";
      case "Rejected":
        return "Pending";
      case "Pending":
        return "Accepted";
      default:
        return "Pending"; // Default status (Pending)
    }
  };

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Panel member name</StyledTableCell>
                <StyledTableCell align="right">Job role</StyledTableCell>
              <StyledTableCell align="right">E-mail</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pdata.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell>
                  <Checkbox
                    checked={selectedPanel.includes(row)}
                    onChange={(event) => handleCheckboxChange(event, row)}
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.jobPosition}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: getStatusColor(row.status) }}
                    onClick={() => handleStatusChange(row.email, getNextStatus(row.status))}
                  >
                    {row.status}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>

      <Grid item xs={12} rowSpacing={4}>
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" spacing={4}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "#1e0342" }}
            onClick={handleSendEmail}
            disabled={selectedPanel.length === 0}
          >
            Send Email
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CMPanel;

