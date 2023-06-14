import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CandidateAvailability from "./CandidateAvailability";
import PanelAvailability from "./PanelAvailability";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";

const AvailabilityStatus = () => {
  const [selectedOption, setSelectedOption] = useState("Candidate");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [value, setValue] = useState(null);
 

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleSave = () => {
    // Create the data object to be sent to the server
    const data = {
      selectedDate: value,
    };
    console.log(data)
    // Send the data to the server using Axios POST request
    axios
      .post("https://nwqw521v7j.execute-api.us-east-1.amazonaws.com/test1/insertdate", data)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error if occurred
        console.error(error);
      });
     
  };
 
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={6} spacing={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select the final interview date"
            value={value}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
            disablePast
          />
        </LocalizationProvider>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption}
              label="Availability"
              onChange={handleChange}
            >
              <MenuItem value={"Candidate"}>Candidate</MenuItem>
              <MenuItem value={"PanelMember"}>PanelMember</MenuItem>
            </Select>
            {selectedOption === "Candidate" ? (
              <CandidateAvailability />
            ) : (
              <PanelAvailability />
            )}
          </FormControl>
        </Box>
      </Grid>
     
    </Grid>
  );
};

export default AvailabilityStatus;
