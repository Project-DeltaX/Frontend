import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { blue } from "@mui/material/colors";
import { Grid, makeStyles } from "@mui/material";
import AllocatedCandidates from "./AllocatedCandidates";
import InterviewPanel from "./InterviewPanel";
import "./Interview.css";

const MenuArr = ["Dashboard", "Interview", "Evaluation", "Account"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Interview = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{}}>
      <Grid container direction={"column"} rowspacing={3}>
        <Grid item md={4} container direction={"column"} rowSpacing={1}>
          <Grid item md={3}>
            <h1>Interview</h1>
          </Grid>

          <Grid item md={3}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Allocated candidates" {...a11yProps(0)} />
                  <Tab label="Interview panel" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
              <Typography variant="h3" align="center">
        AllocatedCandidates
      </Typography>
                <AllocatedCandidates />
              </TabPanel>
              <TabPanel value={value} index={1}>
              <Typography variant="h3" align="center">
        AllocatedCandidates
      </Typography>
                <InterviewPanel />
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
        <Grid item md={8}></Grid>
      </Grid>
    </Box>
  );
};

export default Interview;
