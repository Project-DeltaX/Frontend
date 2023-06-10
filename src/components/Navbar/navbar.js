import React, { useState, useContext } from "react";

import jwtDecode from "jwt-decode";

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
  ListItemIcon,
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
import { AiFillDashboard, AiFillSchedule } from "react-icons/ai";
import { FaUserCog, FaUserTie } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";

import { AuthContext } from "../../pages/UserAuthentication/Auth";
function SideBar(props) {
  return (
    <ListItem disablePadding>
      <ListItemButton to={`/homepage/${props.path}`}>
        <ListItemIcon sx={{ paddingLeft: "16px" }}>
          {props.title === "Dashboard" && (
            <AiFillDashboard color="#e8e1fa" size={24} />
          )}
          {props.title === "User Management" && (
            <FaUserCog color="#e8e1fa" size={24} />
          )}
          {props.title === "CV Management" && (
            <GrDocumentUser color="#ffffff"  size={24} />
          )}
          {props.title === "Interview Schedule" && (
            <AiFillSchedule color="#e8e1fa" size={24} />
          )}
          {props.title === "Interview" && (
            <FaUserTie color="#e8e1fa" size={24} />
          )}
          {props.title === "Evaluation" && (
            <GiProgression color="#e8e1fa" size={24} />
          )}
          {props.title === "Account" && (
            <SwitchAccountIcon
              width="24"
              height="24"
              sx={{ color: "#e8e1fa" }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={props.title}
          primaryTypographyProps={{
            fontFamily: "Poppins",
            color: "#e8e1fa",
            backgroundColor: "text-shadow(2px 2px 5px #FB8257)",
            fontSize: 16,
            margin: 0,
            padding: 0,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

const Navbar = (props) => {
  // const [role, setRole] = useState("");
  const token = localStorage.getItem("idtoken");
  let role = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      role = decodedToken["custom:guestRole"];
    } catch (error) {
      console.error("Error decoding the JWT token:", error);
    }
  }

  // const [Sidevalue, setSidevalue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setSidevalue(newValue);
  // };

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
        {(role === "Admin" ||
          role === "PanelMember" ||
          role === "CommitteeMember") && (
          <SideBar title="Dashboard" path="dashboard" />
        )}
        {role === "Admin" && (
          <SideBar title="User Management" path="usermanagement" />
        )}
        {role === "CommitteeMember" && (
          <SideBar title="CV Management" path="cvmanagement" />
        )}
        {role === "CommitteeMember" && (
          <SideBar title="Interview Schedule" path="interviewschedule" />
        )}
        {role === "PanelMember" && (
          <SideBar title="Interview" path="interview" />
        )}
        {role === "PanelMember" && (
          <SideBar title="Evaluation" path="evaluation" />
        )}
        {(role === "Admin" ||
          role === "PanelMember" ||
          role === "CommitteeMember" ||
          role === "Intern") && <SideBar title="Account" path="account" />}
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
        { ["Settings"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton to={'/homepage/account'}>
              <ListItemIcon sx={{ paddingLeft: "16px" }}>
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
