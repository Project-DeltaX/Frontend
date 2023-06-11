import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Grid,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ScheduleList = () => {
  const [sData, setSData] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ""
        );
        const jsonData = await response.json();
        setSData(jsonData);
        console.log(sData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} spacing={4}>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#9485a8" }}>
              <TableRow>
                <TableCell>Candidate</TableCell>
                <TableCell align="left">PanelMember</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Mode</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {sData.map((row) => (
                <TableRow
                  style={{ backgroundColor: "#b8a9cc" }}
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.Candidate}</TableCell>
                  <TableCell align="left">{row.PanelMemberName}</TableCell>
                  <TableCell align="left">{row.Date}</TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                  <TableCell align="left">{row.Mode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
     
      <Grid item xs={12} spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            style={{ backgroundColor: "#1e0342", color: "white" }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            style={{ backgroundColor: "#1e0342", color: "white" }}
          >
            Edit
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ScheduleList;
