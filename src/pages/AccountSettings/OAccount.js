import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import "../../App.css";
import { Stack } from "@mui/system";
import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import "../AccountSettings/OAccount.css";
import { navStyle } from "../../components/Header/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//,#2C165D,#27144B,#e8e1fa

function ContentPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

ContentPanel.propTypes = {
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
  const [Cvalue, setCvalue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setCvalue(newValue);
  };
  return (
    <div>
      <Box>
        <Grid container direction={"column"} rowSpacing={2}>
          <Grid item md={4} container direction={"column"} rowSpacing={2} position="fixed">
            <Grid item md={3} lg={4} >
              <Typography variant="h4">Account Settings</Typography>
            </Grid>
            <Grid item md={3} lg={4}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: "fit-content",
                  height: "38px",
                  color: "#1168DC",
                  background:
                    " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
                  borderRadius: "6px",
                  padding: "20px",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  divider={
                    <Divider
                      sx={{ bgcolor: "#e8e1fa" }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      value={Cvalue}
                      onChange={handleChange}
                    />
                  }
                  spacing={2}
                >
                  <Typography variant="h6" {...a11yProps(0)}>Profile</Typography>
                  <Typography variant="h6" {...a11yProps(1)}>Notifications</Typography>
                  <Typography variant="h6" {...a11yProps(2)}>Security & Privacy</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={8} lg={4} marginTop={13}>
            <ContentPanel value={Cvalue} index={0}>
              <Paper
                sx={{
                  width: "70%",
                  height: "620px",
                  color: "#1168DC",
                  /* From https://css.glass */
                  // background: "rgba(47, 24, 113, 0.87)",
                  // borderRadius: "16px",
                  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  // backdropFilter: "blur(5.8px)",
                  // webkitBackdropEffect: " blur(5.8px)",
                  // border: "1px solid rgba(47, 24, 113, 0.3)",

                  background:
                    " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
                  borderRadius: "16px",
                  padding: "30px",
                }}
                elevation={16}
              >
                Personal Details
              </Paper>
            </ContentPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OAccount;
