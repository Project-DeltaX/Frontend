import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Mailing = () => {
  // A functional component named "Mailing" is defined here.
  const [mail, setMail] = React.useState(""); // Two state variables "mail" and "setMail" are defined using the "useState" hook.
  const [pData, setPData] = useState([]); // Another state variable "pData" and "setPData" are defined using the "useState" hook.

  const handleChange = (event) => {
    // A function named "handleChange" is defined here which updates the "mail" state variable whenever the user types something in the select dropdown.
    setMail(event.target.value);
  };

  useEffect(() => {
    // A useEffect hook is defined here which will be called whenever the component mounts.
    const fetchData = async () => {
      // An asynchronous function named "fetchData" is defined here.
      try {
        const response = await fetch(
          "https://lcugzprcu3.execute-api.us-east-1.amazonaws.com/dev/p-availability-data" // A fetch request is made to the specified URL.
        );
        const jsonData = await response.json(); // The response data is converted to JSON format.
        setPData(jsonData); // The "pData" state variable is updated with the fetched data.
        console.log(pData); // The current value of "pData" is logged to the console.
      } catch (error) {
        // If any error occurs during the fetch request or JSON conversion, it will be caught here and logged to the console.
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <FormControl
          fullWidth
          sx={{
            "& label": {
              color: "#1e0342", // change text color
              fontWeight: "bold",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Mail</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mail}
            label="Mail"
            onChange={handleChange}
          >
            <MenuItem value={10}>Interview mail Candidates</MenuItem>
            <MenuItem value={20}>Interview mail Panel member</MenuItem>
            <MenuItem value={30}>Selected mail Candidates</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <div className="Table">
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#9485a8" }}>
                <TableRow>
                  <TableCell>PanelMemberName</TableCell>
                  <TableCell align="left">JobTitle</TableCell>
                  <TableCell align="left">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "Bluet" }}>
                {pData.map((row) => (
                  <TableRow
                    style={{ backgroundColor: "#b8a9cc" }}
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
      <Grid item xs={4}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "#1e0342" }}
          >
            Send mail
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Mailing;
