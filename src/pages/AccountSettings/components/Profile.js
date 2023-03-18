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


const Profile = () => {  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the Lambda function API
        const response = await fetch('https://efx5j5yygi.execute-api.us-east-1.amazonaws.com/dev/profiledata');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <Paper
      sx={{
        width: "70%",
        height: "fit-content",
        color: "#1168DC",
        backgroundColor: "#e4e0ff",
        padding: "30px",
      }}
      elevation={16}
    >
      <Typography variant="h5">Personal Details</Typography>
      {data.map((Users, index) =>(
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
                key={index}
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
                    value={Users.Gender}
                    size="small"
                    fullWidth="true"
                  />
                  <CssTextField
                    label="Date Of Birth"
                    id="dob"
                    value={Users.doB}
                    size="small"
                    fullWidth="true"
                    type="date"
                    format="dd-mm-yyyy"
                  />
                  <CssTextField
                    label="Nationality"
                    id="nationality"
                    value={Users.Nationality}
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
                key={index}
                item
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
                marginTop="10px"
              >
                <CssTextField
                  label="Address Lane"
                  id="name"
                  value={Users.Address[0]}
                  size="small"
                  fullWidth="true"
                />
                <CssTextField
                  label="City"
                  id="name"
                  value={Users.Address[1]}
                  size="small"
                  fullWidth="true"
                />
                <CssTextField
                  label="State"
                  id="name"
                  value={Users.Address[2]}
                  size="small"
                  fullWidth="true"
                />
                <CssTextField
                  label="Country"
                  id="name"
                  value={Users.Address[3]}
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
                      value={Users.eMail}
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
