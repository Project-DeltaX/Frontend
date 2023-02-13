import React from "react";
import { Grid, styled, Paper, Typography, Card } from "@mui/material";
import ProfilePic from "../../../Images/ProfilePic01.svg";
import TextField from "@mui/material/TextField";
import "../../AccountSettings/OAccount.css";


const CssTextField = styled(TextField)({
  padding: "8px",

  "& 	.MuiInputBase-root": {
    color: "#E8E1FA",
    fontFamily: "Poppins",
    fontSize: "18px",
  },

  "& 	.MuiSelect-icon": {
    color: "#E8E1FA",
  },

  "& label.Mui-focused": {
    color: "#E8E1FA",
    borderColor: "#E8E1FA",
  },
  "& .MuiInputLabel-root": {
    color: "#E8E1FA",
    fontFamily: "Poppins",
    fontSize: "16px",
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
    fullName: "Thanusiyan Sivapalasundharam",
    gender: "Male",
    dob: "2000-02-25",
    nationality: "Srilankan",
    jobTitle: "SE",
    Address: {
      addLane: "25A,school Road",
      city: "Batticaloa",
      state: " ",
      country: "Sri Lanka",
    },
    mobileNumber: "0771234567",
    email: "thanu@gmail.com",
  },
];

const Profile = () => {

  return (
    <Paper
      sx={{
        width: "70%",
        height: "fit-content",
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
      {PersonalDetails.map((personalDetails) =>(
              <Grid container spacing={2} direction={"column"}>
              <Grid item xs={12} sm={6} md={6} container spacing={2}>
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
                  justifyContent={"space-evenly"}>
                  <CssTextField
                    label="Full Name"
                    id="name"
                    value={personalDetails.fullName}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Gender"
                    id="gender"
                    value={personalDetails.gender}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Date Of Birth"
                    id="dob"
                    value={personalDetails.dob}
                    size="small"
                    fullWidth="true"
                    type="date"
                    // disabled
                  />
                  <CssTextField
                    label="Nationality"
                    id="nationality"
                    value={personalDetails.nationality}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Job Title"
                    id="jobtitle"
                    value={personalDetails.jobTitle}
                    size="small"
                    fullWidth="true"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h5">Address</Typography>
                  <Grid
                    item
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    marginTop="10px"
                  >
                    <CssTextField
                      label="Address Lane"
                      id="name"
                      value={personalDetails.Address.addLane}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="City"
                      id="name"
                      value={personalDetails.Address.city}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="State"
                      id="name"
                      value={personalDetails.Address.state}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="Country"
                      id="name"
                      value={personalDetails.Address.country}
                      size="small"
                      fullWidth="true"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h5">Contact Details</Typography>
                  <Grid
                    item
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    marginTop="10px"
                  >
                    <CssTextField
                      label="Mobile Number"
                      id="mnumber"
                      value={personalDetails.mobileNumber}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="E-mail"
                      id="email"
                      value={personalDetails.email}
                      size="small"
                      fullWidth="true"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
              ))}
      
    </Paper>
  );
};

export default Profile;
