//import { Gradient } from "@mui/icons-material";
import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import React,{useContext,useState} from "react";
import LoginImg from "../../Images/Login.svg";
//import AdminHomePage from "../UserHomePage/AdminHomePage";
import { Link } from "react-router-dom";
import "../UserAuthentication/Authentication.css";
import { CognitoUserPool, CognitoUser,AuthenticationDetails } from "amazon-cognito-identity-js";

import { AccountContext } from "./Account";

const LoginPage = () => {
  const [logResult,setLogResult] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const {authenticate} = useContext(AccountContext);

  const handleChange = (event) => {
    // setUsername(event.target.value)
  };
  //for go to next line
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     const formElements = event.target.form.elements;
  //     const nextElement = formElements[Array.from(formElements).indexOf(event.target) + 1];
  //     if (nextElement) {
  //       nextElement.focus();
  //     }
  //   }
  // };


  // const validate = () => {
  //   let usernameError = "";
  //   let passwordError = "";

  //   if (!username) {
  //     usernameError = "Username is required";
  //   }

  //   if (!password) {
  //     passwordError = "Password is required";
  //   }

  //   if (usernameError || passwordError) {
  //     setErrors({ username: usernameError, password: passwordError });
  //     return false;
  //   }

  //   return true;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    authenticate(username,password)
      .then(data => {
        console.log("Loggen In ",data);
      })
      .catch(error => {
        console.log("Failed to Login",error);
      });

    
    // const isValid = validate();
    // if (isValid) {
    //   console.log(formData);
    //   setFormData({
    //     username: "",
    //     password: "",
    //   });
    // }
  };







  return (
    <div className="loginbackgorund">
      <Grid container spacing={0.2}>
        <Grid item sm={7} >
          <Typography
            variant="h3"
            marginTop={{md:25}}
            marginLeft={{ md: 5, lg: 7, xl: 10 }}
            padding={0}
            textAlign="left"
            fontSize={{md:"40px", lg:"80px", xl:"80px"}}
            fontFamily="Abril Fatface"
            sx={{
              color: "#E9E2FB",
            }}
          >
            <b> Let&apos;s create impactful digital produts</b>
          </Typography>
        </Grid>

        <Grid item sm={5} >
          <form onSubmit={handleSubmit}>
            <Box
              className="logingrad"
              display="flex"
              flexDirection={"column"}
              maxWidth="fit content"
              height="fit content"
              alignItems="center"
              justifyContent={"center"}
              marginX={{md:3, lg:10}}
              marginTop={{md:10}}
              padding={6}
              borderRadius={20}
              
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
                placeholder="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                // onKeyDown={handleKeyDown}
                // error={!!errors.username}
                // helperText={errors.username}



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
                // onKeyDown={handleKeyDown}
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                // error={!!errors.password}
                // helperText={errors.password}

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
                //LinkComponent={Link}
               // to={"/adminHome"}
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
                fontSize={{md:"16px", lg:"16px", xl:"16px"}}
                fontFamily="Abril Fatface"
              >
                New to 99x IMS?{" "}
                <br/>
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
