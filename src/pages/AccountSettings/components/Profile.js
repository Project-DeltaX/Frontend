import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { Grid, styled, Paper, Typography, Card, Button } from "@mui/material";
import ProfilePic from "../../../Images/ProfilePic01.svg";
import TextField from "@mui/material/TextField";
import "../../AccountSettings/OAccount.css";
import "../../../App.css";

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
  const [userdata, setUserData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState(null);
  const [lane, setLane] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const idToken = localStorage.getItem("idtoken");
  const decodedToken = jwtDecode(idToken);
  const Email = decodedToken["email"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the Lambda function API
        const response = await fetch(
          "https://sg5z9g2df4.execute-api.us-east-1.amazonaws.com/new/userdata?email=" +
            Email,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.json();

        setFname(jsonData[0].firstName);
        setLname(jsonData[0].lastName);
        setRole(jsonData[0].guestRole);
        setGender(jsonData[0].gender);
        setEmail(jsonData[0].email);
        setDob(jsonData[0].dob);
        setNationality(jsonData[0].Nationality);
        setJobTitle(jsonData[0].jobTitle);
        setAddress(jsonData[0].Address);
        setMnumber(jsonData[0].mobileNumber);

        if (jsonData[0].Address) {
          const [lane, city, province, country] = jsonData[0].Address;
          setLane(lane);
          setCity(city);
          setProvince(province);
          setCountry(country);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // setFname(userdata.firstName);
  // setLname(userdata.lastName);
  // setRole(userdata.guestRole);
  // setGender(userdata.Gender);
  // setEmail(userdata.email);
  // setDob(userdata.doB);
  // setNationality(userdata.Nationality);
  // setJobTitle(userdata.jobTitle);
  // setAddress(userdata.Address);
  // setMnumber(userdata.mobileNumber);

  // if (jsonData[0].Address) {
  //   const [lane, city, province, country] = jsonData[0].Address;
  //   setLane(lane);
  //   setCity(city);
  //   setProvince(province);
  //   setCountry(country);
  // }

  const updateUserProfile = async (dataArrays) => {
    try {
      console.log(dataArrays);
      // console.log(dataArrays);
      const response = await fetch(
        
        "https://sg5z9g2df4.execute-api.us-east-1.amazonaws.com/new/userdata",
        {
          method: "POST",
          headers: {
            // Authorization: `Bearer `,
            "Access-Control-Allow-Headers": "Authorization,Content-Type",
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            "dataArrays": [
              [
                "25 A, School Rd",
                "Batticaloa",
                "Eastern",
                "Sri Lanka"
              ],
              "Male",
              "thanusiyant2000@gmail.com",
              "2000-02-25",
              "Software Developer",
              "1122334455",
              "Sri Lankan"
            ]
          }),
        }
      );
      const result = await response.json();
      // console.log(result.body);
      return result.body;
    } catch (err) {
      console.log(err);
      console.error(err);
    }
  };

  const dataArrays = [
    [
      lane,
      city,
      province,
      country
    ],
    gender,
    email,
    dob,
    jobtitle,
    mnumber,
    nationality
  ];
  

//   const dataArrays = [
//     [],
//     gender,
//    email,
//    dob,
//     jobtitle,
//   mnumber,
// nationality,
//   ]
//   ;

  const handleClick = (event) => {
    event.preventDefault();
    if (disable) {
      setDisable((prev) => !prev);
    } else {
      setDisable((prev) => !prev);
      updateUserProfile(dataArrays);
    }
  };
  // function setDataA(index, key, value) {
  //   if (key === "Address") {
  //     // If the key is "Address", set the value of the corresponding index in the Address array
  //     const address = data[index]["Address"];
  //     const addressIndex = parseInt(value[0]);
  //     address[addressIndex] = value[1];
  //     data[index]["Address"] = address;
  //   } else {
  //     // Otherwise, set the value of the regular property
  //     data[index][key] = value;
  //   }
  // }

  // const handleChange = (event) => {
  //   // setData();
  //   let { id, value } = event.target;
  //   setDataA(0, id, value);
  // };

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

                // onChange={handleChange}
              />
              <CssTextField
                label="Gender"
                id="gender"
                value={gender}
                size="small"
                disabled={disable}
                onChange={(event) => setGender(event.target.value)}
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
              />
              <CssTextField
                label="Job Title"
                id="jobtitle"
                value={jobtitle}
                size="small"
                disabled={disable}
                onChange={(event) => setJobTitle(event.target.value)}
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
                />
                <CssTextField
                  label="City"
                  id="city"
                  value={city}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setCity(event.target.value)}
                />
                <CssTextField
                  label="State"
                  id="state"
                  value={province}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setProvince(event.target.value)}
                />
                <CssTextField
                  label="Country"
                  id="country"
                  value={country}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setCountry(event.target.value)}
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
