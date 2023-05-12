import React from "react";
import "../App.css";
import { Grid, Toolbar } from "@mui/material";
import { Paper } from "@mui/material";
import Navbar from "./Navbar/navbar";
import Box from "@mui/material/Box";
import HeaderBar from "./Header/HeaderBar";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { backgroundStyle } from "../styles";
const drawerWidth = 245;

const Layout = (props) => {
  return (
    // <Box sx={{ display: 'flex' }}>
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth + 1}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#27144B",
          borderRadius: "20px 0px 0px 0px",
        }}
      >
        <HeaderBar />
      </AppBar>
      <Box className="sidebar">
        <Drawer
          className={"sidebar"}
          PaperProps={{
            sx: {
              width: drawerWidth,
              flexShrink: 0,
              backgroundColor: "rgba(39, 20, 75, 0.79)",
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Navbar MenuArr={props.MenuArr} IconArr={props.IconArr} userType={props.userType} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1,ml:`${drawerWidth}px`, p: 3, marginTop:"50px" }}
      >
        {props.children}
      </Box>
    </div>
  );
};

export default Layout;
