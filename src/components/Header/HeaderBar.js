import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import jwtDecode from "jwt-decode";
import useAuth from "../../hooks/useAuth.js";

//Material UI components
import { Box } from "@mui/system";
import { Grid, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { test } from "../../styles";

//style for badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

//style for profile drop menu
const DropDownMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));



const HeaderBar = () => {
  const navigate = useNavigate();
  const [profileDrop, setProfileDrop] = useState(null);
  const open = Boolean(profileDrop);
  const token = localStorage.getItem("idtoken");
  let name = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      name = decodedToken["given_name"];
    } catch (error) {
      console.error("Error decoding the JWT token:", error);
    }
  }
  const handleClick = (event) => {
    setProfileDrop(event.currentTarget);
  };
  const handleClose = () => {
    setProfileDrop(null);
  };
  function handleEditRequest() {
    handleClose();
    navigate("/homepage/account");
  }
  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("idtoken");
    navigate("/");
  };

  const [NOpen, setNOpen] = useState(false);

  const handleNotificationOpen = () => {
    setNOpen(true);
  };

  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNOpen(false);
  };

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={3}
        alignItems="center"
      >
        <NotificationsIcon onClick={handleNotificationOpen} width="24" height="24" sx={{ color: "#e8e1fa" }} />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleNotificationClose}>
        <MuiAlert onClose={handleNotificationClose} severity="success" sx={{ width: '100%' }}>
          This is a sample notification message.
        </MuiAlert>
      </Snackbar>
        <MessageIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Nick John" srcSet="src/Images/Avatar01.png" />
        </StyledBadge>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "profitl-dropdown-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            color: "#e8e1fa",
            fontFamily: "poppins , sans-serif",
            textTransform: "capitalize",
            fontWeight: "500",
            fontSize: "16px",
          }}
          variant="text"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {name}
        </Button>
        <DropDownMenu
          MenuListProps={{
            "aria-labelledby": "profile-drop-down-menu",
          }}
          anchorEl={profileDrop}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleEditRequest} disableRipple>
            <EditIcon />
            Edit Profile
          </MenuItem>
          <MenuItem onClick={handleLogout} LinkComponent={Link} to={"/"}>
            <LogoutIcon />
            Logout
          </MenuItem>
        </DropDownMenu>
      </Stack>
    </Toolbar>
  );
};

export default HeaderBar;
