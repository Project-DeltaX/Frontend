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
import ScheduleList from "./ScheduleList";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const panel = [{ title: "Geni" }, { title: "Leo" }];

function createData(Candidate, PanelMemberName, Date, Email, Mode) {
  return { Candidate, PanelMemberName, Date, Email, Mode };
}



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
     
      
           
      <Grid item xs={12} spacing={12}>
<ScheduleList/>
      </Grid>
    </Grid>
  );
};

export default Schedule;
