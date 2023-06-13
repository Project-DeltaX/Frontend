
import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ScheduleList from "./ScheduleList";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';





const Schedule = () => {
 
  const [mode, setMode] = useState("");

const [value, setValue] = React.useState("");
  

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12} spacing={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <TimePicker
        label="Time Slot"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      /> */}
      <TimePicker
  label="Basic example"
  value={value}
  onChange={(newValue) => {
    // Validate the hour and minute values
    const hour = newValue?.hour();
    const minute = newValue?.minute();
    if (hour >= 0 && hour <= 12 && minute >= 0 && minute <= 60) {
      setValue(newValue);
    } else {
      // Handle invalid time
      console.log("Invalid time selected");
    }
  }}
  renderInput={(params) => <TextField {...params} />}
/>
    </LocalizationProvider>
      </Grid>
    
          
     

      <Grid item xs={8}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Interview Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            label="Interview Mode"
            onChange={handleModeChange}
          >
            <MenuItem value="On site">On site-1st floor</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      

      <Grid item xs={12} spacing={12}>
        <ScheduleList />
      </Grid>
    </Grid>
  );
};

export default Schedule;
