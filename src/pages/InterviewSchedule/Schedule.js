import React, { useState} from "react";
import Layout from "../../components/Layout";
import { TextField, Grid } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BasicTable from "./Table";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const panel = [
  { title: 'Geni' },
  { title: 'Leo'},]

  function createData(PanelMemberName, JobTitle, Email, Status) {
  
    return { PanelMemberName, JobTitle, Email, Status};
  }
  
  const rows = [
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
    
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
      options={ panel}
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
        <TextField {...params} label="Panel Members" placeholder="Members" />
      )}
    />
        </Grid>
      <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Interview Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mode}
          label="Interview Mode"
          onChange={handleChange}
        >
          <MenuItem value={10}>On site</MenuItem>
          <MenuItem value={20}>Online</MenuItem>
          
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
            <TableHead>
              <TableRow>
                <TableCell>PanelMemberName</TableCell>
                <TableCell align="left">JobTitle</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.PanelMemberName}
                  </TableCell>
                  <TableCell align="left">{row.JobTitle}</TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} spacing={4}>
        
      </Grid>
      <Grid item xs={12} spacing={4}>
        
      </Grid>
     
      
    
      </Grid>
     
      
   
  );
};

export default Schedule;
