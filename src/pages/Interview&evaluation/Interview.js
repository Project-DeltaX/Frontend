import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, makeStyles } from "@mui/material";
import AllocatedCandidates from "./AllocatedCandidates";
import InterviewPanel from "./InterviewPanel";
import "./Interview.css";


// function that creates a tab panel
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
      {/* display the children only if the value matches the index */}
    </div>
    
  );
}
// define propTypes for TabPanel
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
// function that returns props for a11y accessibility
function a11yProps(index) {
  return {
    id: `${index}`,
    "aria-controls": `${index}`,
  };
}

// Interview component
const Interview = () => {
  const [value, setValue] = React.useState(0);
  // function that handles a change in the selected tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // render method for the Interview component
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
              {/* display the title of the page */}
            </Grid>
            <Grid item md={3} lg={4} paddingLeft={5}>
               {/* tabs for switching between pages */}
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
                  value={value}// selected tab value
                  onChange={handleChange}// function to handle a change in the selected tab
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
            <Typography variant="h2" align="center" width={400} fontWeight='bold' sx={{ backgroundColor: "#F772D4", fontSize: "24px" }}>
        AllocatedCandidates
      </Typography>
            <AllocatedCandidates />
             
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography variant="h2" align="center" width={400} fontWeight='bold' sx={{ backgroundColor: "#F772D4", fontSize: "24px" }}>
            
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
