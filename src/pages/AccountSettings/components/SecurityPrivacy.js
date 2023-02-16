import React, { useState,useEffect } from "react";
import AWS from "aws-sdk";
import "../../../App.css";
import {Grid,styled,Paper,Typography,Card,Box,Divider} from "@mui/material";
import "../../AccountSettings/OAccount.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//Icons
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DeleteIcon from "@mui/icons-material/Delete";

//password field
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { hover } from "@testing-library/user-event/dist/hover";
import { warning } from "@remix-run/router";

// Configure the AWS SDK with your region and credentials
AWS.config.update({
  region: "us-east-1",
  credentials: new AWS.Credentials(
    "AKIA3PYS7CXZ576OOOME",
    "ZhmX8FSNd2LxMtyAlFZg9Q3CUEeMNb/Ep0AgeRcn"
  ),
});





// Create a new DynamoDB DocumentClient object
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Create a new Lambda service object
const lambda = new AWS.Lambda();

//Arrays
const TermsConditions = [
  "Terms Conditions 01",
  "Terms Conditions 02",
  "Terms Conditions 03",
];

const CssTypography = styled(Typography)({
  // color: "white",
  fontFamily: "Poppins",
  // fontSize: "18px",
});

const CssInput = styled(InputBase)({
  padding: "8px",
  backgroundColor: "white",
  borderRadius: "5px",
  height: "80%",
  "& .MuiInputBase-input": {
    fontFamily: "Poppins",
    fontSize: "14px",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
      {...other}
      style={{
        color: "#27144B",
        width: "90%",
      }}
    >
      {value === index && <Box sx={{ p: 3, width: "100%" }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `${index}`,
    "aria-controls": `${index}`,
  };
}



const SecurityPrivacy = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showOPassword, setShowOPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  // const [currentPasswordFromDB, setCurrentPasswordFromDB] = useState('');

  // useEffect(() => {
  //   const params = {
  //     TableName: 'credentials',
  //     Key: { username: 'thanu' },
  //     ProjectionExpression: 'password'
  //   };
  //   dynamodb.get(params, (err, data) => {
  //     if (err) {
  //       console.log(`Error fetching current password: ${err}`);
  //     } else {
  //       setCurrentPasswordFromDB(data.Item.password);
  //     }
  //   });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match !");
    }else if (newPassword === confirmPassword && newPassword !== "") {

      const payload = { currentPassword, newPassword, username: 'thanu' };
      const params = {
        FunctionName: 'getUserDetail',
        Payload: JSON.stringify(payload)
      };
      lambda.invoke(params, (err, data) => {
        if (err) {
          setMessage(`Error updating password: ${err}`);
        } else {
          setMessage(data.Payload);
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        }
      });

      // // Update the password in DynamoDB
      // const params = {
      //   TableName: "credentials",
      //   Key: { username: "thanu" },
      //   UpdateExpression: "set #p = :password",
      //   ExpressionAttributeNames: { "#p": "password" },
      //   ExpressionAttributeValues: { ":password": newPassword },
      // };
      // dynamodb.update(params, (err, data) => {
      //   if (err) {
      //     setMessage(`Error updating password: ${err}`);
      //   } else {
      //     setMessage("Password successfully changed");
      //     setCurrentPassword("");
      //     setNewPassword("");
      //     setConfirmPassword("");
      //   }
      // });

      // setMessage("Password successfully changed");
      // setCurrentPassword("");
      // setNewPassword("");
      // setConfirmPassword("");
    }
  };

  return (
    <Paper
      display={"flex"}
      sx={{
        width: "fit-content",
        height: "fit-content",
        color: "#1168DC",
        backgroundColor: "#e4e0ff",
        //bdb2ff
        //   /* From https://css.glass */
        //   background: "rgba(47, 24, 113, 0.87)",
        //   borderRadius: "16px",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   backdropFilter: "blur(5.8px)",
        //   webkitBackdropEffect: " blur(5.8px)",
        //   border: "1px solid rgba(47, 24, 113, 0.3)",

        // background: " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
        //   borderRadius: "16px",
        padding: "30px",
      }}
      elevation={16}
    >
      <Grid container spacing={2} flexdirection={"column"} width="100%">
        <Grid item md={4}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="vertical"
          >
            <Tab label="Change Password" {...a11yProps(0)} />
            <Tab label="Reset Password" {...a11yProps(1)} />
            <Tab label="Privacy instructions" {...a11yProps(2)} />
            <Tab label="Delete Account" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid item md={8} container width="100%" mr={0}>
          {/* Change Password */}
          <TabPanel value={value} index={0}>
            <Grid
              container
              direction={"column"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              width="100%"
              height={"100%"}
            >
              <Grid item md={4} my={2}>
                <CssTypography>Old Password</CssTypography>
                <FormControl
                  sx={{ m: 1, width: "30ch", height: "5ch" }}
                  variant="outlined"
                >
                  <CssInput
                    id="old_password"
                    type={showOPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setShowOPassword((show) => !show);
                          }}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showOPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Old Password"
                  />
                </FormControl>
              </Grid>
              <Grid
                item
                md={4}
                my={2}
                container
                columnSpacing={20}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Grid item md={6}>
                  <CssTypography>New Password</CssTypography>
                  <FormControl
                    sx={{ m: 1, width: "30ch", height: "5ch" }}
                    variant="outlined"
                  >
                    <CssInput
                      id="old_password"
                      type={showNPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              setShowNPassword((show) => !show);
                            }}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showNPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Old Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6}>
                  <CssTypography>Confirm Password</CssTypography>
                  <FormControl
                    sx={{ m: 1, width: "30ch", height: "5ch" }}
                    variant="outlined"
                  >
                    <CssInput
                      id="old_password"
                      type={showCPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              setShowCPassword((show) => !show);
                            }}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showCPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Old Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item md={4} my={2} mr={0} alignSelf={"flex-end"}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#EB5E57",
                    ":hover": { backgroundColor: "#EB5E57" },
                  }}
                  endIcon={<ArrowCircleRightIcon />}
                >
                  Change
                </Button>
              </Grid>
              <Typography alignSelf={"flex-end"} sx={{ color: "red" }}>
                {message}
              </Typography>
            </Grid>
          </TabPanel>
          {/* Reset Password */}
          <TabPanel value={value} index={1}>
            <Grid container spacing={5} direction={"column"}>
              <Grid item md={6}>
                <CssTypography variant="h6">Instructions</CssTypography>
                <Typography variant={"body1"}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                container
                spacing={0}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <CssTypography>Request to send a reset link</CssTypography>
                <Button
                  alignSelf={"flex-end"}
                  variant="contained"
                  sx={{
                    backgroundColor: "#EB5E57",
                    ":hover": { backgroundColor: "#EB5E57" },
                  }}
                  endIcon={<ArrowCircleRightIcon />}
                >
                  Request Link
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          {/* Privacy Instructions */}
          <TabPanel value={value} index={2}>
            <Grid container display={"flex"}>
              <CssTypography variant="h6">Instructions</CssTypography>
              <Typography>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </Typography>
            </Grid>
          </TabPanel>
          {/* Delete Account */}
          <TabPanel value={value} index={3}>
            <Grid
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <CssTypography sx={{ color: "red" }} variant={"h5"}>
                Warning !
              </CssTypography>
              <Typography variant="body1">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </Typography>
              <FormGroup>
                {TermsConditions.map((index) => (
                  <FormControlLabel control={<Checkbox />} label={index} />
                ))}
              </FormGroup>
              <Button
                variant="contained"
                sx={{
                  alignSelf: "flex-end",
                  backgroundColor: "#EB5E57",
                  ":hover": { backgroundColor: "#EB5E57" },
                }}
                startIcon={<DeleteIcon />}
              >
                Delete Account
              </Button>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SecurityPrivacy;
