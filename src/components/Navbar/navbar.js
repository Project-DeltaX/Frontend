import React, { Component, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppleIcon from "@mui/icons-material/Apple";
import { Icon } from "@iconify/react";
import dashboardSolidBadged from "@iconify/icons-clarity/dashboard-solid-badged";
import userCog from "@iconify/icons-fa-solid/user-cog";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import { DragIndicator } from "@mui/icons-material";
import interviewIcon from "@iconify/icons-openmoji/interview";
import chartEvaluation from "@iconify/icons-carbon/chart-evaluation";
import cvIcon from "@iconify/icons-pepicons-pop/cv";
import autoScheduleOutline from "@iconify/icons-material-symbols/auto-schedule-outline";
import PropTypes from 'prop-types';
import { Box } from "@mui/system";

import { useLocation, Link } from "react-router-dom";

// const MenuArr = ["Dashboard", "User Management", "Account"];
const AIconArr = [
  <Icon icon={dashboardSolidBadged} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={userCog} color="#e8e1fa" width="24" height="24" />,
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];
const CIconArr = [
  <Icon icon={dashboardSolidBadged} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={cvIcon} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={autoScheduleOutline} color="#e8e1fa" width="24" height="24" />,
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];

const PIconArr = [
  <Icon icon={dashboardSolidBadged} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={interviewIcon} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={chartEvaluation} color="#e8e1fa" width="24" height="24" />,
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];
const IIconArr = [
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const Navbar = (props) => {
  const [Navvalue, setNavvalue] = React.useState();
  const { pathname } = useLocation();

  const [Sidevalue, setSidevalue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSidevalue(newValue);
  };

  return (
    <side>
      <Toolbar>
        <AppleIcon
          color="primary"
          fontSize="large"
          sx={{ margin: "20px", marginInlineStart: "80px" }}
        />
      </Toolbar>
      <Divider
        textAlign="left"
        sx={{
          fontSize: 12,
          fontFamily: "Roboto",
          color: "#EEEEEE",
          opacity: 0.5,
        }}
      >
        Main Menu
      </Divider>
      <List>
        {props.MenuArr.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            value={Sidevalue}
            onChange={handleChange}
          >
            <ListItemButton
              Component={Link}
              to={`/${text}`}
              isActive={pathname === `${text}`}
              // {...a11yProps(index)}
            >
              <ListItemIcon>
                {props.IconArr === "AIconArr"
                  ? AIconArr[index]
                  : props.IconArr === "CIconArr"
                  ? CIconArr[index]
                  : props.IconArr === "PIconArr"
                  ? PIconArr[index]
                  : IIconArr[index]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: "Poppins",
                  color: "#e8e1fa",
                  backgroundColor: "text-shadow(2px 2px 5px #FB8257)",
                  // text-shadow: 1px 1px 3px #FB8257
                  fontSize: 16,
                }}
              />
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
      <Divider
        textAlign="left"
        sx={{
          fontSize: 12,
          fontFamily: "Roboto",
          color: "#EEEEEE",
          opacity: 0.5,
        }}
      >
        Other
      </Divider>
      <List>
        {["Support", "Settings"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <SupportAgentIcon
                    width="24"
                    height="24"
                    sx={{ color: "#e8e1fa" }}
                  />
                ) : (
                  <SettingsIcon
                    width="24"
                    height="24"
                    sx={{ color: "#e8e1fa" }}
                  />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: "Poppins, sans-serif",

                  fontSize: 16,
                  color: "#E8E1FA",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </side>
  );
};

export default Navbar;
