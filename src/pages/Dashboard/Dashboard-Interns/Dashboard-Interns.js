import { Box, Divider, Grid, Typography } from "@mui/material";
import "../../../App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navigationActiveStyle } from "../../../styles";
import styled from "styled-components";

//import defined Components
import Overview from "./components/Overview";

//,#2C165D,#27144B,#e8e1fa

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

const DashboardInterns = () => {
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
            // md={2}
            container
            direction={"column"}
            rowSpacing={1}
            sx={{
              backgroundColor: "#ffffff",
              position: "fixed",
              zIndex: 2,
              // boxShadow:"0px 0px 0px 1px",
            }}
            padding={1}
          >
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
                  // background:
                  //   " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
                  borderRadius: "6px",
                  padding: "20px",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Performance" {...a11yProps(1)} />
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={8} lg={4} marginTop={6}>
            <TabPanel value={value} index={0}>
              <Overview />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Performance
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardInterns;
