//import { Gradient } from "@mui/icons-material";

//Danuraha@123-pw
import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoginImg from "../../Images/Login.svg";
import "../UserAuthentication/Authentication.css";

//Routing
import { Link, useLocation, useNavigate,Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { authenticate, getjwtToken, getShowAlert,getLoginStatus } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password);

  };
  
  if(getLoginStatus()){

    return <Navigate to={'/homepage'}/>
  }
  


  // Return statement containing the JSX for the login page

  return (
    // Render Login page UI

    <div className="loginbackgorund">
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
              marginBottom={{ md: 22 }}
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
            
              {getShowAlert() && (
                <div className="alert">Incorrect username or password</div>
              )}

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


