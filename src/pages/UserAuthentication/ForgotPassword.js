import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import pass from "../../Images/ForgotPassword.svg";

import { CognitoUser } from "amazon-cognito-identity-js";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pool from "../../pages/UserPool";
import NewPassword from "./NewPassword";

const ForgotPassword = () => {
  // Define state variables to track the stage and email entered by the user

  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");

  // Function to get a CognitoUser object based on the email entered by the user

  const getUser = () => {
    return new CognitoUser({
      Username: email,
      Pool,
    });
  };
  // Function to send a forgot password code to the user's email

  const sendCode = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Call the forgotPassword function on the CognitoUser object

    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log("onSuccess", data);
      },
      onFailure: (err) => {
        console.error("onFailure", err);
      },
      inputVerificationCode: (data) => {
        console.log("Input code:", data);
        setStage(2); // Set the stage to 2 so that the NewPassword component is rendered
      },
    });
  };

  return (
    <div>
      {/* Render different content based on the stage */}
      {stage === 1 && (
        <form onSubmit={sendCode}>
          {/* Styling for the outer box */}

          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={500}
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
            <img src={pass} width="250px" />

            <Grid container direction="column">
              {/* Styling for the "Forgot Password" heading */}

              <Typography
                color="#E8E1FA"
                variant="h5"
                padding={4}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                Forgot Password
              </Typography>
              {/* Styling for the text field and label */}

              <Grid
                container
                direction="column"
                padding="30px"
                marginTop={0.2}
                marginBottom={4}
              >
                <Typography
                  color="#E8E1FA"
                  variant="h6"
                  padding={0.2}
                  textAlign="center"
                  fontFamily="Abril Fatface"
                >
                  Enter E-mail Address
                </Typography>
                {/* Text field to input email */}

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
                  type={"email"}
                  variant="outlined"
                  placeholder="E-mail Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
            </Grid>
            {/* Styling for the "Send" button */}

            <Grid pb={1}>
              <Button
                sx={{
                  marginTop: 3,
                  borderRadius: 4,
                  fontFamily: "Abril Fatface",
                  color: "black",
                  bgcolor: "#EB5E57",
                }}
                variant="contained"
                color="warning"
                type="submit"
              >
                <b>SEND</b>
              </Button>
            </Grid>
          </Box>
        </form>
      )}

      {stage === 2 && (
        <div>
          <NewPassword Username={email} />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
