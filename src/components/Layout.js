import React from "react";
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

const Layout=(props) =>{
  return (
    // <Box sx={{ display: 'flex' }}>
    <div >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth + 1}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#27144B",
        }}
      >
        <HeaderBar />
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#27144B",
            backgroundImage: `url(${"static/src/img/main.jpg"})`,
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Navbar MenuArr={props.MenuArr} IconArr={props.IconArr}/>
      </Drawer>
      <Box
      
        component="main"
        sx={{ flexGrow: 1,ml:`${drawerWidth-23}px`, p: 3, marginTop:"50px"}}
      >
       
        {props.children}
      </Box>
    </div>
  );
}

export default Layout;
