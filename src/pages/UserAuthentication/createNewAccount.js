import {
  TextField,
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  styled,
  InputBase,
} from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import EmailConfirmation from "./EmailConfirmation";
import axios from 'axios';
//CSS import
import "../UserAuthentication/Authentication.css";

// import Pool from "../UserPool.js";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
// user pool data

const CssInput = styled(InputBase)({
  padding: "5px",
  backgroundColor: "white",
  borderRadius: "20px",
  height: "80%",
  width: "465px",
  // "& .MuiInputBase-input": {
  //   fontFamily: "Poppins",
  //   fontSize: "14px",
  // },
});

const poolData = {
  UserPoolId: "us-east-1_JeGJ5dp7G",
  ClientId: "4b98f6bsasaj3e9bf8mva3ei6k",
};
// create a Cognito user pool object

const userPool = new CognitoUserPool(poolData);
// functional component for user registration

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);



  // const [showAlert, setShowAlert] = useState(false);
  // create a state to store form data

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    guestRole: "",
  });
  // function to handle input changes and update the state

  const handleInputChange = (e) => {
    // Using the setFormData method to update the state object with the new values

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing the default form submission behaviour
    // Creating an empty array to store user attributes

    //adding new
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.guestRole.trim() === ""
    ) {
      // setShowAlert(true);
      setErrorMessage("All fields are required");
      setShowAlert(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setShowAlert(true);
      return;
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrorMessage(
        "Password should contain at least 1 number, 1 special character, 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long"
      );
      setShowAlert(true);
      return;
    }

    //
    else {
      const attributeList = [];
      // Creating an object containing the user's email and adding it to the attributeList array

      // try {
      //   const response = await axios.post("https://w0ugg68pi6.execute-api.us-east-1.amazonaws.com/dev/registration", formData);
      //   console.log(response.data); // Logging the response data
        
      //   // ... handle the response as needed ...
      // } catch (error) {
      //   console.log(error); // Logging any errors
        
      //   // ... handle the error as needed ...
      // }



      const dataEmail = {
        Name: "email",
        Value: formData.email,
      };
      // Creating an object containing the user's first name and adding it to the attributeList array

      const dataFirstName = {
        Name: "given_name",
        Value: formData.firstName,
      };
      // Creating an object containing the user's last name and adding it to the attributeList array

      const dataLastName = {
        Name: "family_name",
        Value: formData.lastName,
      };
      // Creating an object containing the user's guest role and adding it to the attributeList array

      const dataGuestRole = {
        Name: "custom:guestRole",
        Value: formData.guestRole,
      };
      const attributeEmail = new CognitoUserAttribute(dataEmail);
      const attributeFirstName = new CognitoUserAttribute(dataFirstName);
      const attributeLastName = new CognitoUserAttribute(dataLastName);
      const attributeGuestRole = new CognitoUserAttribute(dataGuestRole);
      attributeList.push(attributeEmail);
      attributeList.push(attributeFirstName);
      attributeList.push(attributeLastName);
      attributeList.push(attributeGuestRole);

      // Calling the signUp method on the userPool object to sign up the user with the provided details

      userPool.signUp(
        formData.email, // User email
        formData.password, // User password
        attributeList, // Array of user attributes
        null, // Validation data (optional)
        (err, result) => {
          // Callback function
          if (err) {
            // If an error occurs
            console.log(err); // Logging the error to the console

            //adding new
            setErrorMessage(err.message); // Display the error message in an alert
            //
            setShowAlert(true);
            return; // Exiting the function
          }
          
          // const cognitoUser = result.user; 
          else{
            console.log("successful "); // Logging a success message to the console


          
          //adding new
          // Display a success message in an alert
         

          setSuccess(true);
          setShowAlert(false);
          // alert("Sign up successful!.");
          }
        
           // If successful, creating a new CognitoUser object with the returned user object from the result parameter
          
        }
      );
    }
  };



  
  
  if(success){
    
    return <EmailConfirmation/>
  }

  return (
    <div className="loginbackgorund">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box
          className="logingrad"
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          marginBottom={22}
          padding={5}
          borderRadius={10}
         
        >
          <Grid container direction="column">
            <Grid container direction="column">
              <Typography
                color="#E8E1FA"
                variant="h4"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                Create New Account
              </Typography>
              <Typography
                color="#E8E1FA"
                variant="h7"
                padding={0.2}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                Already have an Account?
                <Link sx={{ color: "#3E51F5" }} to={"/"}>
                  <b>Login</b>
                </Link>
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      width: "180px",
                      height: "15px",
                    },
                  }}
                  margin="normal"
                  type={"text"}
                  variant="outlined"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      width: "180px",
                      height: "15px",
                    },
                  }}
                  margin="normal"
                  type={"text"}
                  variant="outlined"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Grid container direction="column">
              <Grid sx={{ marginBottom: 3, marginTop: 2 }}>
                <TextField
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      height: "15px",
                      width: "440px",
                      // marginBottom:4,
                      // marginTop:3
                    },
                  }}
                  // margin="normal"

                  type={"email"}
                  variant="outlined"
                  placeholder="E-mail Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />{" "}
              </Grid>
              <Grid>
                <CssInput
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      marginX: 1,
                      // borderRadius: "20px",
                      // height: "15px",
                    },
                  }}
                  // margin="normal"
                  // type={"password"}
                  variant="outlined"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type={passwordVisible ? "text" : "password"}
                  endAdornment={
                    <IconButton
                      sx={{ marginX: 1 }}
                      edge="end"
                      // sx={{ color: "white" }}
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  }
                />
              </Grid>

              <Grid container spacing={0.2} padding="5px" marginTop="30px">
                <Grid item>
                  <Typography
                    color="#E8E1FA"
                    variant="h7"
                    padding={0.2}
                    fontFamily="Abril Fatface"
                  >
                    Guest Role:
                  </Typography>
                </Grid>

                <Grid item>
                  <FormControl
                    sx={{
                      m: 0.05,
                      minWidth: 120,
                      bgcolor: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    <Select
                      value={formData.guestRole}
                      name="guestRole"
                      onChange={handleInputChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>-Select-</em>
                      </MenuItem>
                      <MenuItem value={"CommitteeMember"}>
                        Committee Member
                      </MenuItem>
                      <MenuItem value={"PanelMember"}>Panel Member</MenuItem>
                      <MenuItem value={"Intern"}>Intern</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* {setShowAlert() && (
                <div className="alert">All fields are required</div>
              )} */}

          {showAlert && (
            <Typography color="#FF0000" variant="subtitle1">
              {errorMessage}
            </Typography>
          )}

          <Button
            LinkComponent={Link}
            type="submit"
            sx={{
              marginTop: 3,
              borderRadius: 4,
              bgcolor: "#EB5E57",
              color: "black",
              fontFamily: "Abril Fatface",
            }}
            variant="contained"
            color="warning"
          >
            <b>SIGN UP</b>
          </Button>
        </Box>
      </form>
     
    </div>
  );
};

export default Register;
