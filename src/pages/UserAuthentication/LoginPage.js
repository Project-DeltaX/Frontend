import { Gradient } from "@mui/icons-material";
import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import LoginImg from "../../Images/Login.svg";
import AdminHomePage from "../UserHomePage/AdminHomePage";
import { Link } from "react-router-dom";
import "../UserAuthentication/Authentication.css";




const LoginPage = () => {
  return (
    <div>
      <Grid container spacing={0.2}>
        <Grid item sm={7} >
          <Typography
            variant="h3"
            marginTop={30}
            marginLeft={{ md: 5, lg: 7, xl: 10 }}
            padding={0}
            textAlign="left"
            fontSize="80px"
            fontFamily="Abril Fatface"
            sx={{
              color: "#E9E2FB",
            }}
          >
            <b> Let's create impactful digital produts</b>
          </Typography>
        </Grid>

        <Grid item sm={5} >
          <form>
            <Box
              // className={classes.customBox}
              display="flex"
              flexDirection={"column"}
              maxWidth="fit content"
              alignItems="center"
              justifyContent={"center"}
              margin={17}
              marginTop={15}
              padding={13}
              borderRadius={20}
              boxShadow={"5px 5px 10px #ccc"}
              bgcolor="#27144B"
              sx={{
                background:
                  " radial-gradient(circle,#3A1C92,#321873,#2C165D,#27144B)",
              }}
            >
              {/* <img src={LoginObj} margin="1px" /> */}
              <img src={LoginImg} width="150px" />
              <Typography
                color="#E8E1FA"
                variant="h5"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                <b>LOGIN</b>
              </Typography>
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
                type={"text"}
                variant="outlined"
                placeholder="User Name"
              />
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
              />
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
                LinkComponent={Link}
                to={"/adminHome"}
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
                fontFamily="Abril Fatface"
              >
                New to 99x IMS?{" "}
                <Link to={"/createNewAccount"}>
                  <i> Create New Account</i>
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
