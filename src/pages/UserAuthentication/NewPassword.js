// Importing necessary components and libraries

import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import { CognitoUser } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import Pool from "../../pages/UserPool";

// Define the NewPassword component

const NewPassword = (props) => {
  // Setting initial state

  const [stage, setStage] = useState(1); // Stage of the password reset process

  const [code, setCode] = useState(""); // Verification code entered by user
  const [password, setPassword] = useState(""); // New password entered by user
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm new password entered by user
   const [errorMessage, setErrorMessage] = useState("");

  // Define a function to get the current user

  const getUser = () => {
    return new CognitoUser({
      Username: props.Username,
      Pool,
    });
  };

  // Define a function to handle the form submission

  const resetPassword = (event) => {
    event.preventDefault();

    // Check if the new passwords match

    // if (password !== confirmPassword) {
    //   console.error("Password are not the same");
    //   // alert("Passwords do not match");
    //   return;
    // }


    if (!code || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }


  if (password !== confirmPassword){
    console.error("Password are not the same");
    setErrorMessage("Passwords do not match");
      return;
    }

    setErrorMessage("");

    // Call the confirmPassword method of the CognitoUser object to reset the user's password

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
    });
  };
  // Return the JSX for the component

  return (
    <div>
      <form onSubmit={resetPassword}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          maxHeight={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={10}
          boxShadow={"5px 5px 10px #ccc"}
          bgcolor="#27144B"
          sx={{
            background:
              " radial-gradient(circle,#3A1C92,#321873,#2C165D,#27144B)",
          }}
        >
          <Grid container direction="column">
            <Grid>
              <Typography
                color="#E8E1FA"
                variant="h4"
                padding={4}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                New Password
              </Typography>
            </Grid>

            <Grid padding={2}>
              <Grid>
                <Typography
                  color="#E8E1FA"
                  variant="h6"
                  textAlign="center"
                  fontFamily="Abril Fatface"
                >
                  verification code
                </Typography>
              </Grid>

              <Grid container direction="column">
                <TextField
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      height: "15px",
                    },
                  }}
                  margin="normal"
                  type={"text"}
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  variant="outlined"
                  placeholder="Enter the verification code"
                />
              </Grid>
            </Grid>

            <Grid padding={3}>
              <Grid>
                <Typography
                  color="#E8E1FA"
                  variant="h6"
                  textAlign="center"
                  fontFamily="Abril Fatface"
                >
                  Enter new Password
                </Typography>
              </Grid>
              <Grid container direction="column">
                <TextField
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      height: "15px",
                    },
                  }}
                  margin="normal"
                  type={"password"}
                  variant="outlined"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="New password"
                />
              </Grid>
            </Grid>

            <Grid padding={3}>
              <Grid>
                <Typography
                  color="#E8E1FA"
                  variant="h6"
                  textAlign="center"
                  fontFamily="Abril Fatface"
                >
                  Confirm Password
                </Typography>
              </Grid>

              <Grid container direction="column">
                <TextField
                  sx={{
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      height: "15px",
                    },
                  }}
                  margin="normal"
                  type={"password"}
                  variant="outlined"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm password"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid padding={3}>
          {errorMessage && (
    <Typography color="#FF0000" variant="subtitle1">
      {errorMessage}
    </Typography>
  )}
            <Button
              // LinkComponent={Link}
              // to={"/newpw"}
              sx={{
                marginTop: 0.5,
                borderRadius: 4,
                bgcolor: "#EB5E57",
                color: "black",
                fontFamily: "Abril Fatface",
              }}
              variant="contained"
              color="warning"
              type="submit"
            >
              <b>Confirm</b>
            </Button>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default NewPassword;
