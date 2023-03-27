import React, { useState, useEffect } from "react";
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
  const [selectedOption, setSelectedOption] = useState("Candidate");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [value, setValue] = useState(null);

  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={12}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability </InputLabel>
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
    </Grid>
  );
};

export default AvailabilityStatus;
