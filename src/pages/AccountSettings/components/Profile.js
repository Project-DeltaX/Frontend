import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { Grid, styled, Paper, Typography, Card, Button } from "@mui/material";
import ProfilePic from "../../../Images/ProfilePic01.svg";
import TextField from "@mui/material/TextField";
import "../../AccountSettings/OAccount.css";
import "../../../App.css";
import axios from "axios";

import jwtDecode from "jwt-decode";

const CssTextField = styled(TextField)({
  padding: "8px",
  width: "400px",

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
  const [disable, setDisable] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [email, setEmail] = useState("");
  const [lane, setLane] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const [genderError,setGenderError] = useState(false);
  const [mnumberError,setMnumberError] = useState(false);
  const [mnErHelper,setMnErHelper] = useState(null);
  const [nationalityError, setNationalityError] = useState(false);
  const [jobTitleError,setJobTitleError] = useState(false);
  const [laneError, setLaneError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const idToken = localStorage.getItem("idtoken");
  const decodedToken = jwtDecode(idToken);
  const Email = decodedToken["email"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the Lambda function API
        const response = await axios.get(
          `https://58u6bkd13k.execute-api.us-east-1.amazonaws.com/New/userdata?email=${Email}`,
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.data;

        setFname(jsonData[0].firstName);
        setLname(jsonData[0].lastName);
        setRole(jsonData[0].guestRole);
        setGender(jsonData[0].gender);
        setEmail(jsonData[0].email);
        setDob(jsonData[0].dob);
        setNationality(jsonData[0].Nationality);
        setJobTitle(jsonData[0].jobTitle);
        setMnumber(jsonData[0].mobileNumber);

        if (jsonData[0].Address) {
          const [lane, city, province, country] = jsonData[0].Address;
          setLane(lane);
          setCity(city);
          setProvince(province);
          setCountry(country);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const updateUserProfile = async (dataArrays) => {
    // const data ={body : dataArrays}
    // console.log(JSON.stringify(dataArrays));
    try {
      const response = await axios.post(
        "https://58u6bkd13k.execute-api.us-east-1.amazonaws.com/New/userdata",
        dataArrays,{
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(dataArrays);
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.log(error.response.data); // Handle error response
    }
  };

  const dataArrays = {
    Address: [lane, city, province, country],
    gender: gender,
    email: email,
    dob: dob,
    jobTitle: jobtitle,
    mobileNumber: mnumber,
    nationality: nationality,
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (disable) {
      setDisable((prev) => !prev);
    } else {
      if (validateFields()) {
        setDisable((prev) => !prev);
        updateUserProfile(dataArrays);
        reversError();
      }
    }
  };

  function reversError() {
    setMnumberError(false);
    setMnErHelper(null);
    setGenderError(false);
    setNationalityError(false);
    setJobTitleError(false);
    setLaneError(false);
    setCityError(false);
    setProvinceError(false);
    setCountryError(false);
    
  }
  const validateFields = () => {
    let isValid = true;
    if (!disable) {
      if (isNaN(Number(lane))) {
        setLaneError(false);
      } else {
        setLaneError(true);
        isValid = false;
      }
      if (isNaN(Number(city))) {
        setCityError(false);
      } else {
        setCityError(true);
        isValid = false;
      }
      if (isNaN(Number(province))) {
        setProvinceError(false);
      } else {
        setProvinceError(true);
        isValid = false;
      }
      if (isNaN(Number(country))) {
        setCountryError(false);
      } else {
        setCountryError(true);
        isValid = false;
      }
      if (isNaN(Number(gender))) {
        setGenderError(false);
      } else {
        setGenderError(true);
        isValid = false;
      }
      if (isNaN(Number(nationality))) {
        setNationalityError(false);
      } else {
        setNationalityError(true);
        isValid = false;
      }
      if (isNaN(Number(jobtitle))) {
        setJobTitleError(false);
      } else {
        setJobTitleError(true);
        isValid = false;
      }
      if (mnumber.length !== 10 || isNaN(mnumber)) {
        setMnumberError(true);
        setMnErHelper('Number should be contain 10 digits')
        return false;
      }
    }
    return isValid;
  };

  return (
    <Paper
      sx={{
        width: "fit-content",
        height: "fit-content",
        color: "#1168DC",
        backgroundColor: "#e4e0ff",
        padding: "30px",
      }}
      elevation={16}
    >
      <Typography variant="h5">Personal Details</Typography>
      <form>
        {/* {data.map((Users, index) => ( */}
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
              justifyContent={"space-evenly"}
            >
              <CssTextField
                label="Full Name"
                id="name"
                value={fname + " " + lname}
                size="small"
                disabled
              />
              <CssTextField
                label="Gender"
                id="gender"
                value={gender}
                size="small"
                disabled={disable}
                onChange={(event) => setGender(event.target.value)}
                error={genderError}
              />
              <CssTextField
                label="Date Of Birth"
                id="dob"
                value={dob}
                size="small"
                type="date"
                format="dd-mm-yyyy"
                disabled={disable}
                onChange={(event) => setDob(event.target.value)}
              />
              <CssTextField
                label="Nationality"
                id="nationality"
                value={nationality}
                size="small"
                disabled={disable}
                onChange={(event) => setNationality(event.target.value)}
                error={nationalityError}
              />
              <CssTextField
                label="Job Title"
                id="jobtitle"
                value={jobtitle}
                size="small"
                disabled={disable}
                onChange={(event) => setJobTitle(event.target.value)}
                error={jobTitleError}
                
              />
              <CssTextField
                label="Role"
                id="role"
                value={role}
                size="small"
                disabled
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
                  id="lane"
                  value={lane}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setLane(event.target.value)}
                  error={laneError}
                />
                <CssTextField
                  label="City"
                  id="city"
                  value={city}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setCity(event.target.value)}
                  error={cityError}
                />
                <CssTextField
                  label="State"
                  id="state"
                  value={province}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setProvince(event.target.value)}
                  error={provinceError}
                />
                <CssTextField
                  label="Country"
                  id="country"
                  value={country}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setCountry(event.target.value)}
                  error={countryError}
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
                  value={mnumber}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setMnumber(event.target.value)}
                  error={mnumberError}
                  helperText={mnErHelper}
                />
                <CssTextField
                  label="E-mail"
                  id="email"
                  value={email}
                  size="small"
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ))} */}

        <Button
          variant="contained"
          color={disable ? "secondary" : "primary"}
          type="button"
          onClick={handleClick}
        >
          {disable ? "Edit" : "Update"}
        </Button>
      </form>
    </Paper>
  );
};

export default Profile;
