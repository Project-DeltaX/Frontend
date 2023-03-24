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
      {value === index && <Box sx={{ p: 3, mx:"40px"}}>{children}</Box>}
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

const Interview = () => {
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
              <Typography variant="h4">Interview</Typography>
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
                  <Tab label="AllocatedCandidates" {...a11yProps(0)} />
                  <Tab label="InterviewPanel" {...a11yProps(1)} />
                  
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={8} lg={4} marginTop={13}>
            <TabPanel value={value} index={0}>
            <Typography variant="h2" align="center" sx={{ backgroundColor: "blue", fontSize: "24px" }}>
        AllocatedCandidates
      </Typography>
            <AllocatedCandidates />
             
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography variant="h2" align="center" sx={{ backgroundColor: "blue", fontSize: "24px" }}>
            
              InterviewPanel
              </Typography>
              <InterviewPanel/>
            </TabPanel>
           
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Interview;
