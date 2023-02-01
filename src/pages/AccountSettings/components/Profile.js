import React from "react";
import { Grid, styled, Paper, Typography } from "@mui/material";
import ProfilePic from "../../../Images/ProfilePic01.svg";
import TextField from "@mui/material/TextField";
import "../../AccountSettings/OAccount.css";
import { borderColor } from "@mui/system";
import { withStyles } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CssTextField = styled(TextField)({
  "& 	.MuiInputBase-root": {
    color: "#E8E1FA",
  },
  "& label.Mui-focused": {
    color: "#E8E1FA",
    borderColor: "#E8E1FA",
  },
  "& .MuiInputLabel-root": {
    color: "#E8E1FA",
  },
  "& .MuiOutlinedInput-root": {
    "& .Mui-focused": {
      borderColor: "#E8E1FA",
    },
    "& fieldset": {
      color: "#E8E1FA",
      borderColor: "#E8E1FA",
    },
    "&:hover fieldset": {
      borderColor: "#E8E1FA",
    },
  },
});

const PersonalDetails = [
  {
    "Full Name": "Thanusiyan Sivapalasundharam",
    Gender: "Male",
  },
];

const Profile = () => {
  const [dateValue, setdateValue] = React.useState(dayjs("2023-01-31"));
  return (
    <Paper
      sx={{
        width: "70%",
        height: "600px",
        color: "#1168DC",
        //   /* From https://css.glass */
        //   background: "rgba(47, 24, 113, 0.87)",
        //   borderRadius: "16px",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   backdropFilter: "blur(5.8px)",
        //   webkitBackdropEffect: " blur(5.8px)",
        //   border: "1px solid rgba(47, 24, 113, 0.3)",

        background: " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
        //   borderRadius: "16px",
        padding: "30px",
      }}
      elevation={16}
    >
      <Typography variant="h5">Personal Details</Typography>
      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={12} sm={6} container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={ProfilePic} width="230px" height="230px" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <CssTextField
              label="Full Name"
              id="name"
              defaultValue="Thanusiyan Sivapalasundharm"
              size="small"
              fullWidth="true"
            />
            <CssTextField
              label="Gender"
              id="gender"
              defaultValue="Male"
              size="small"
              fullWidth="true"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disableFuture
                label="Responsive"
                openTo="day"
                size="small"
                views={["year", "month", "day"]}
                value={dateValue}
                onChange={(newValue) => {
                  setdateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} container spacing={2}>
          <Grid item xs={12} sm={6}>
            J
          </Grid>
          <Grid item xs={12} sm={6}>
            K
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
