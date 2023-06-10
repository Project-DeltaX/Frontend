import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const panel = [{ title: "Geni" }, { title: "Leo" }];

function createData(Candidate, PanelMemberName, Date, Email, Mode) {
  return { Candidate, PanelMemberName, Date, Email, Mode };
}

const rows = [
  createData(
    "Tharanika",
    "John",
    "tharani@gmail.com",
    "30 March 2023",
    "Onsite"
  ),
];

const Schedule = () => {
  const [mode, setMode] = useState([]);
  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <Grid container spacing={2}>
      <b> Interview Scheduling</b>

      <Grid item xs={12}>
        <Autocomplete
          multiple
          id="Panel Members-tags-demo"
          options={panel}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Panel Members"
              placeholder="Members"
            />
          )}
        />
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Interview Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Interview Mode"
            onChange={handleChange}
          >
            <MenuItem>On site</MenuItem>
            <MenuItem>Online</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={4}>
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
              {rows.map((row) => (
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
            style={{ backgroundColor: "#1e0342" }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            style={{ backgroundColor: "#1e0342" }}
          >
            Edit
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} spacing={4}></Grid>
    </Grid>
  );
};

export default Schedule;
