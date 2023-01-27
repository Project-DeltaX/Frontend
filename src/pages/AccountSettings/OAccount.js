import { Box, Divider, Grid, Typography } from "@mui/material";
import "../../App.css";
import { Stack } from "@mui/system";
import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import "../AccountSettings/OAccount.css";
import { navStyle } from "../../styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Profile from "./components/Profile";
import { navigationActiveStyle } from "../../styles";


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
          <Grid
            item
            md={4}
            container
            direction={"column"}
            rowSpacing={1}
            position="fixed"
            sx={{ backgroundColor: "#e8e1fa", boxShadow: 3 }}
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
                  background:
                    " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
                  borderRadius: "6px",
                  padding: "20px",
                }}
              >
                <Tabs
                  direction={{ xs: "column", sm: "row" }}
                  value={Cvalue}
                  onChange={handleChange}
                  divider={
                    <Divider
                      sx={{ bgcolor: "#e8e1fa" }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                  }
                  spacing={2}
                >
                  <Typography variant="h6" {...a11yProps(0)}>
                    Profile
                  </Typography>
                  <Typography variant="h6" {...a11yProps(1)}>
                    Notifications
                  </Typography>
                  <Typography variant="h6" {...a11yProps(2)}>
                    Security & Privacy
                  </Typography>
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={8} lg={4} marginTop={13}>
            <ContentPanel value={Cvalue} index={0}>
              <Profile />
            </ContentPanel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OAccount;
