import React,{useState, useEffect} from "react";
import AWS from "aws-sdk";
import { Grid, styled, Paper, Typography, Card } from "@mui/material";
import ProfilePic from "../../../Images/ProfilePic01.svg";
import TextField from "@mui/material/TextField";
import "../../AccountSettings/OAccount.css";
import "../../../App.css";





const CssTextField = styled(TextField)({
  padding: "8px",

  "& 	.MuiInputBase-root": {
    color: "#27144B",
    fontFamily: "Poppins",
    fontSize: "18px",
  },

  "& 	.MuiSelect-icon": {
    color: "#27144B",
  },

  "& label.Mui-focused": {
    color: "#27144B",
    borderColor: "#27144B",
  },
  "& .MuiInputLabel-root": {
    color: "#27144B",
    fontFamily: "Poppins",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    "& .Mui-focused": {
      borderColor: "#27144B",
    },
    "& fieldset": {
      color: "#27144B",
      borderColor: "#27144B",
    },
    "&:hover fieldset": {
      borderColor: "#27144B",
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
        backgroundColor: "#e4e0ff",
        //   /* From https://css.glass */
        //   background: "rgba(47, 24, 113, 0.87)",
        //   borderRadius: "16px",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   backdropFilter: "blur(5.8px)",
        //   webkitBackdropEffect: " blur(5.8px)",
        //   border: "1px solid rgba(47, 24, 113, 0.3)",

        // background: " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
        //   borderRadius: "16px",
        padding: "30px",
      }}
      elevation={16}
    >
      <Typography variant="h5">Personal Details</Typography>
      {PersonalDetails.map((Users) =>(
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
                    value={Users.fullName}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Gender"
                    id="gender"
                    value={Users.gender}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Date Of Birth"
                    id="dob"
                    value={Users.dob}
                    size="small"
                    fullWidth="true"
                    type="date"
                    // disabled
                  />
                  <CssTextField
                    label="Nationality"
                    id="nationality"
                    value={Users.nationality}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Job Title"
                    id="jobtitle"
                    value={Users.jobTitle}
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
                      value={Users.Address.addLane}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="City"
                      id="name"
                      value={Users.Address.city}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="State"
                      id="name"
                      value={Users.Address.state}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="Country"
                      id="name"
                      value={Users.Address.country}
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
                      value={Users.mobileNumber}
                      size="small"
                      fullWidth="true"
                    />
                    <CssTextField
                      label="E-mail"
                      id="email"
                      value={Users.email}
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
