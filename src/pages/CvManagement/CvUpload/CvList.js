import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";
import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const tableData = [
  {
    id: 1,
    first_name: "Beitris",
    last_name: "Cardenoso",
    email: "bcardenoso0@craigslist.org",
  },
  {
    id: 2,
    first_name: "Lyell",
    last_name: "Douche",
    email: "ldouche1@blinklist.com",
  },
  {
    id: 3,
    first_name: "Stillman",
    last_name: "Dickings",
    email: "sdickings2@twitter.com",
  },
  {
    id: 4,
    first_name: "Everard",
    last_name: "Qualtro",
    email: "equaltro3@sourceforge.net",
  },
  {
    id: 5,
    first_name: "Ninon",
    last_name: "Silmon",
    email: "nsilmon4@bing.com",
  },
  {
    id: 6,
    first_name: "Daryle",
    last_name: "Skingle",
    email: "dskingle5@dailymail.co.uk",
  },
  {
    id: 7,
    first_name: "Jacquenette",
    last_name: "Kneath",
    email: "jkneath6@prlog.org",
  },
  {
    id: 8,
    first_name: "Marcelia",
    last_name: "Marmon",
    email: "mmarmon7@lycos.com",
  },
  {
    id: 9,
    first_name: "Niels",
    last_name: "Huonic",
    email: "nhuonic8@ibm.com",
  },
  {
    id: 10,
    first_name: "Celia",
    last_name: "Tarr",
    email: "ctarr9@is.gd",
  },
];

const CvList = () => {

    return (
      <div>
        <Box
          sx={{
            width: 800,
            height: 300,
            backgroundColor: "#bdb2ff",
            padding: "1px",
            margin: "1px",
          }}
        >
          <div>
            <h5>Uploaded CV List</h5>
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>First Namee</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>E-mail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </Grid>

        </Box>

      </div>
    );
  };

export default CvList;
