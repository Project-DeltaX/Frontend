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

const AvailabilityStatus = () => {
  // Defining the functional component AvailabilityStatus using arrow function syntax
  const [selectedOption, setSelectedOption] = useState("Candidate"); // Initializing state for selectedOption using useState hook with default value "Candidate"
  const handleChange = (event) => {
    // Defining a handleChange function to handle changes to selectedOption state
    setSelectedOption(event.target.value); // Updating the selectedOption state with the value of the select option that was clicked
  };

  const [value, setValue] = useState(null); // Initializing state for the selected interview date using useState hook with default value null

  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={6} spacing={4}>
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption} // Setting the value of the select dropdown to the selectedOption state
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
