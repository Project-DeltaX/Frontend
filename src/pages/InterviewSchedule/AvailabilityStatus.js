import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th" : {
    border: 0,
  },
}));

function createData(PanelMemberName, JobTitle, Email, Status) {
  return { PanelMemberName, JobTitle, Email, Status };
}

const AvailabilityStatus = () => {
  const [op, setOp] = React.useState('');

  const handleChange = (event) => {
    setOp(event.target.value);
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://lcugzprcu3.execute-api.us-east-1.amazonaws.com/dev/p-availability-data"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

 
  const [value, setValue] = useState(null);

  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={4}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Availability </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={op}
          label="Availability"
          onChange={handleChange}
        >
          <MenuItem value={10}>Panel member</MenuItem>
          <MenuItem value={20}>Candidate</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
        </Grid>
        <Grid xs={4} spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select the interview date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        <Grid xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>PanelMemberName</StyledTableCell>
                  <StyledTableCell align="right">JobTitle</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((data) => (
                  <StyledTableRow key={data.name}>
                    <StyledTableCell component="th" scope="row">
                      {data.PanelMemberName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {data.JobTitle}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {data.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {data.Status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          
        </Grid>
      </Grid>
    </div>
  );
};

export default AvailabilityStatus;
