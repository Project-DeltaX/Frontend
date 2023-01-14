import React,{useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppleIcon from "@mui/icons-material/Apple";
import { color, Container, flexbox } from "@mui/system";
import { Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Icon } from "@iconify/react";
import dashboardSolidBadged from "@iconify/icons-clarity/dashboard-solid-badged";
import userCog from "@iconify/icons-fa-solid/user-cog";
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import { DragIndicator } from "@mui/icons-material";

const Navbar = () => {
  const [Navvalue,setNavvalue] = React.useState();
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
      <List >
        {["Dashboard", "User Management", "Account"].map((text, index) => (
          <ListItem key={text} disablePadding value={Navvalue} onChange={(e,Navvalue) => {setNavvalue(Navvalue) } }  >
            <ListItemButton >
              <ListItemIcon>
                {index === 0 ? (
                  <Icon
                    icon={dashboardSolidBadged}
                    color="#e8e1fa"
                    width="24"
                    height="24"
                  />
                ) : index === 1 ? (
                  <Icon icon={userCog} color="#e8e1fa" width="24" height="24" />
                ) : (
                  <SwitchAccountIcon width="24" height="24" sx={{ color:"#e8e1fa"  }} />
                )}
              </ListItemIcon>
              <ListItemText
              
              primary={text}
              primaryTypographyProps={{
                fontFamily: "Poppins, sans-serif",
                color:"#e8e1fa",
                backgroundColor: 'text-shadow(2px 2px 5px #FB8257)',
                // text-shadow: 1px 1px 3px #FB8257,/
                fontSize: 16,
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
              <ListItemIcon>
                {index === 0 ? <SupportAgentIcon width="24" height="24" sx={{ color:"#e8e1fa"  }} /> : <SettingsIcon width="24" height="24" sx={{ color:"#e8e1fa"  }} />}
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

