import React from "react";
import { Grid, Paper, svgIconClasses, Typography } from "@mui/material";
import ProfilePic from "../../../Images/ProfilePic01.svg";
import TextField from "@mui/material/TextField";

const PersonalDetails =[
    {
        
    }
]

const Profile = () => {
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              id="name"
              defaultValue=""
              size="small"
              fullWidth='true'
            />
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
