import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { Box, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CvList = () => {
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://t1sga9lqc1.execute-api.us-east-1.amazonaws.com/dev/applicantslist"
        );
        const json = await response.json();
        setTableData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: 800,
          height: "fit-content",
          backgroundColor: "#bdb2ff",
          padding: "1px",
          margin: "1px",
        }}
      >
        <Grid container direction="column">
          <Grid item md={4} container>
            <Grid item md={8} pl={2}>
              <h5>Uploaded CV List</h5>
            </Grid>
            <Grid item md={4} pt={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Uploaded Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <Grid item md={8} pl={1} pt={1} pb={1} pr={1}>
            <Paper
              sx={{
                width: "100%",
                overflow: "hidden",
                backgroundColor: "#876596",
              }}
            >
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead sx={{ backgroundColor: "#191424" }}>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>E-mail</TableCell>
                      <TableCell>Position</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CvList;
