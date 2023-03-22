import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { Grid, styled, Paper, Typography, Card, Button } from "@mui/material";
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
  const [editedData, setEditedData] = useState([]);
  const [disable, setDisable] = useState(true);
  const [username,setUsername] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [lane, setLane] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the Lambda function API
        const response = await fetch(
          "https://htnd6gtdd6.execute-api.us-east-1.amazonaws.com/dev",{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        );
        const jsonData = await response.json();

        setUsername(jsonData[0].username)
        setName(jsonData[0].fullName);
        setGender(jsonData[0].Gender);
        setDob(jsonData[0].doB);
        setNationality(jsonData[0].Nationality);
        setJobTitle(jsonData[0].jobTitle);
        setLane(jsonData[0].Address[0]);
        setCity(jsonData[0].Address[1]);
        setState(jsonData[0].Address[2]);
        setCountry(jsonData[0].Address[3]);
        setMnumber(jsonData[0].mobileNumber);
        setEmail(jsonData[0].eMail);

        // setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateUserProfile = async (dataArray) => {
    const url = "https://htnd6gtdd6.execute-api.us-east-1.amazonaws.com/dev";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(dataArray),
    };

    try {
      const response = await fetch(url, options);
      const editedData = await response.json();
      console.log(editedData.message); // "Profile updated successfully."
    } catch (err) {
      console.error(err);
    }
  };

  const dataArrays = [
    {
      Address: [lane, city, state, country],
      Gender: gender,
      eMail: email,
      doB: dob,
      username: username,
      fullName: name,
      jobTitle: jobtitle,
      mobileNumber: mnumber,
      Nationality: nationality,
    },
  ];


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
        width: "70%",
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
                value={name}
                size="small"
                disabled={disable}
                onChange={(event) => setName(event.target.value)}

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
                  value={state}
                  size="small"
                  disabled={disable}
                  onChange={(event) => setState(event.target.value)}
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
                  disabled={disable}
                  onChange={(event) => setEmail(event.target.value)}
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
      {/* <form>
        {data.map((Users, index) => (
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
                  value={name}
                  size="small"
                  disabled={disable}
                  // onChange={(event)=>setName(event.target.value)}
                  onChange={handleChange}
                />
                <CssTextField
                  label="Gender"
                  id="gender"
                  value={gender}
                  size="small"
                  disabled={disable}
                  // onChange={(event)=>setGender(event.target.value)}
                />
                <CssTextField
                  label="Date Of Birth"
                  id="dob"
                  value={dob}
                  size="small"
                  type="date"
                  format="dd-mm-yyyy"
                  disabled={disable}
                  // onChange={(event)=>setDob(event.target.value)}
                />
                <CssTextField
                  label="Nationality"
                  id="nationality"
                  value={nationality}
                  size="small"
                  disabled={disable}
                  // onChange={(event)=>setNationality(event.target.value)}
                />
                <CssTextField
                  label="Job Title"
                  id="jobtitle"
                  value={jobtitle}
                  size="small"
                  disabled={disable}
                  // onChange={(event)=>setJobTitle(event.target.value)}
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
                    // onChange={(event)=>setLane(event.target.value)}
                  />
                  <CssTextField
                    label="City"
                    id="city"
                    value={city}
                    size="small"
                    disabled={disable}
                    // onChange={(event)=>setCity(event.target.value)}
                  />
                  <CssTextField
                    label="State"
                    id="state"
                    value={state}
                    size="small"
                    disabled={disable}
                    // onChange={(event)=>setState(event.target.value)}
                  />
                  <CssTextField
                    label="Country"
                    id="country"
                    value={country}
                    size="small"
                    disabled={disable}
                    // onChange={(event)=>setCountry(event.target.value)}
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
                    // onChange={(event)=>setMnumber(event.target.value)}
                  />
                  <CssTextField
                    label="E-mail"
                    id="email"
                    value={email}
                    size="small"
                    disabled={disable}
                    onChange={(event)=>setEmail(event.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          variant="contained"
          color={disable ? "secondary" : "primary"}
          type="button"
          onClick={handleClick}
        >
          {disable ? "Edit" : "Update"}
        </Button>
      </form> */}
    </Paper>
  );
};

export default Profile;
