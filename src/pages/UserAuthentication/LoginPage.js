//import { Gradient } from "@mui/icons-material";

//Danuraha@123-pw
import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";
import LoginImg from "../../Images/Login.svg";
//import AdminHomePage from "../UserHomePage/AdminHomePage";
import { Link, Navigate } from "react-router-dom";
import "../UserAuthentication/Authentication.css";
// import { CognitoUserPool, CognitoUser,AuthenticationDetails } from "amazon-cognito-identity-js";
// import Pool from "..//UserPool.js" ;
// import { AccountContext } from "./Account";
// import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
// // import { Email } from "@mui/icons-material";

// const poolData = {
//   UserPoolId: 'us-east-1_JeGJ5dp7G',
//   ClientId: '4b98f6bsasaj3e9bf8mva3ei6k'
// };

// const userPool = new CognitoUserPool(poolData);

//Routing
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { authenticate, setJToken } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    authenticate(email, password);
    // .then(data => {
    //   console.log("Logged in!");
    //   // jToken = data;
    //   // console.log(data['accessToken']['jwtToken']);
    //   setIsLoggedIn(true);

    // })
    // .catch(err => {
    // console.error("Failed to login",err);
    // })

    // const user=new CognitoUser({
    //     Username:email,
    //     Pool:userPool
    // });
    // const authDetails=new AuthenticationDetails({
    //     Username:email,
    //     Password:password,
    // });
    // user.authenticateUser(authDetails,{
    //     onSuccess:(data)=>{
    //         console.log("onSuccess:",data)
    //     },
    //     onFailure:(err)=>{
    //         console.error("onFailure:",err);
    //     },
    //     newPasswordRequired:(data)=>{
    //         console.log("newPasswordReq:",data);
    //     }
    // });
  };

  // if (isLoggedIn) {
  //   console.log(isLoggedIn);
  //   return <Navigate to={'/adminHome'}/>

  // }

  // Return statement containing the JSX for the login page

  return (
    // Render Login page UI

    <div className="loginbackgorund">
      {" "}
      {/* Login page background */}
      <Grid container spacing={0.2}>
        {/* Render page title */}

        <Grid item sm={7}>
          <Typography
            variant="h3"
            marginTop={{ md: 25 }}
            marginLeft={{ md: 5, lg: 7, xl: 10 }}
            padding={0}
            textAlign="left"
            fontSize={{ md: "40px", lg: "80px", xl: "80px" }}
            fontFamily="Abril Fatface"
            sx={{
              color: "#E9E2FB",
            }}
          >
            <b> Let&apos;s create impactful digital produts</b>{" "}
            {/* Heading for the login page */}
          </Typography>
        </Grid>
        {/* Render login form */}

        <Grid item sm={5}>
          <form onSubmit={handleSubmit}>
            <Box
              className="logingrad"
              display="flex"
              flexDirection={"column"}
              maxWidth="fit content"
              height="fit content"
              alignItems="center"
              justifyContent={"center"}
              marginX={{ md: 3, lg: 10 }}
              marginTop={{ md: 10 }}
              padding={6}
              borderRadius={20}
            >
              {/* Render login image */}
              <img src={LoginImg} width="150px" />
              {/* Render login form title */}

              <Typography
                color="#E8E1FA"
                variant="h5"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                <b>LOGIN</b>
              </Typography>
              {/* Render email input */}

              <TextField
                size="small"
                sx={{
                  "& fieldset": { border: "none" },

                  input: {
                    color: "#8C8B8B",
                    bgcolor: "#fff",
                    borderRadius: "20px",
                    width: "300px",
                  },
                }}
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="username"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {/* Render password input */}

              <TextField
                sx={{
                  "& fieldset": { border: "none" },
                  input: {
                    color: "#8C8B8B",
                    bgcolor: "#fff",
                    borderRadius: "20px",
                    width: "300px",
                  },
                }}
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
                size="small"
                // onKeyDown={handleKeyDown}
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {/* Render forgot password link */}

              <Typography
                color="blue"
                variant="body2"
                alignSelf="flex-end"
                component={Link}
                to={"/forgotPassword"}
              >
                <i>Forgot password</i>
              </Typography>

              <Button
                type="submit"
                sx={{
                  marginTop: 3,
                  borderRadius: 3,
                  bgcolor: "#EB5E57",
                  fontFamily: "Abril Fatface",
                  color: "black",
                }}
                variant="contained"
                color="warning"
              >
                <b>Login</b>
              </Button>
              <Typography
                color="#E8E1FA"
                variant="h6"
                padding={2}
                textAlign="center"
                fontSize={{ md: "16px", lg: "16px", xl: "16px" }}
                fontFamily="Abril Fatface"
              >
                New to 99x IMS? <br />
                <Link to={"/createNewAccount"}>
                  <i color="#ffffff"> Create New Account</i>
                </Link>
              </Typography>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
