import React, { useState } from "react";

//Material UI components
import {
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Icon,
  Box,
  ListItemIcon
} from "@mui/material";

//Icons
import dashboardSolidBadged from "@iconify/icons-clarity/dashboard-solid-badged";
import userCog from "@iconify/icons-fa-solid/user-cog";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import interviewIcon from "@iconify/icons-openmoji/interview";
import chartEvaluation from "@iconify/icons-carbon/chart-evaluation";
import cvIcon from "@iconify/icons-pepicons-pop/cv";
import autoScheduleOutline from "@iconify/icons-material-symbols/auto-schedule-outline";
import PropTypes from "prop-types";
import {AiFillDashboard} from 'react-icons/ai'
import { FaUserCog } from "react-icons/fa";


// const MenuArr = ["Dashboard", "User Management", "Account"];
const AIconArr = [
  <AiFillDashboard color="#e8e1fa" size={24}/>,
  <FaUserCog color="#e8e1fa" size={24}/>,
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];
const CIconArr = [
  <AiFillDashboard color="#e8e1fa" size={24}/>,
  <Icon icon={cvIcon} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={autoScheduleOutline} color="#e8e1fa" width="24" height="24" />,
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];

const PIconArr = [
  <AiFillDashboard color="#e8e1fa" size={24}/>,
  <Icon icon={interviewIcon} color="#e8e1fa" width="24" height="24" />,
  <Icon icon={chartEvaluation} color="#e8e1fa" width="24" height="24" />,
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];
const IIconArr = [
  <SwitchAccountIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />,
];

//TabPanel functional component
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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Navbar = (props) => {
  const [Navvalue, setNavvalue] = React.useState();


  const [Sidevalue, setSidevalue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSidevalue(newValue);
  };

  return (
    <div>
      <Toolbar>
        <Avatar alt="Logo" src="Logo.jpg" />
        <img src="Logo.jpg" />
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
              to={`${text}`}
              // {...a11yProps(index)}
            >
              <ListItemIcon sx={{paddingLeft:'16px'}} >
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
                  margin:0,
                  padding:0
                }}
              />
            </ListItemButton>
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
              <ListItemIcon sx={{paddingLeft:'16px'}}>
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
    </div>
  );
};

export default Navbar;
