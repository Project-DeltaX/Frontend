import React, { useState } from "react";

//Css imports
import "../../App.css";
import "../AccountSettings/OAccount.css";

//Material UI component imports
import { Box, Divider, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navigationActiveStyle } from "../../styles";
import styled from "styled-components";

//import defined Components
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import SecurityPrivacy from "./components/SecurityPrivacy";
import { Auths } from "../UserAuthentication/Auth";

//Some used color codes
//,#2C165D,#27144B,#e8e1fa

// functional component for create a Tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, mx: "40px" }}>{children}</Box>}
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

const OAccount = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box>
        <Grid container direction={"column"} rowSpacing={2}>
          <Grid
            item
            md={4}
            container
            direction={"column"}
            rowSpacing={1}
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: 3,
              position: "fixed",
              zIndex: 2,
            }}
            padding={1}
          >
            <Grid item md={3} lg={4} paddingLeft={3}>
              <Typography variant="h4">Account Settings</Typography>
            </Grid>
            <Grid item md={3} lg={4} paddingLeft={5}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: "fit-content",
                  height: "38px",
                  color: "#1168DC",
                  backgroundColor: "#bdb2ff",
                  borderRadius: "6px",
                  padding: "20px",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Profile" {...a11yProps(0)} />
                  <Tab label="Notifications" {...a11yProps(1)} />
                  <Tab label="Security & Privacy" {...a11yProps(2)} />
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={8} lg={4} marginTop={13}>
            <TabPanel value={value} index={0}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Notifications />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Auths>
                <SecurityPrivacy />
              </Auths>
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OAccount;
