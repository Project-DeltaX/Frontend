import React from "react";
import { Box } from "@mui/system";
import { Grid, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import AppleIcon from "@mui/icons-material/Apple";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { FormatAlignJustify, Margin } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

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
  const [profileDrop, setProfileDrop] = React.useState(null);
  const open = Boolean(profileDrop);
  const handleClick = (event) => {
    setProfileDrop(event.currentTarget);
  };
  const handleClose = () => {
    setProfileDrop(null);
  };

  return (
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Stack direction="row" justifyContent="flex-end" spacing={3} alignItems="center">
          <NotificationsIcon width="24" height="24" sx={{ color: "#e8e1fa" }}/>
          <MessageIcon width="24" height="24" sx={{ color: "#e8e1fa" }} />
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar  alt="Nick John" srcSet="src/Images/Avatar01.png" />
          </StyledBadge>
          <Button
            id="demo-customized-button"
            
            aria-controls={open ? "profitl-dropdown-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{color:"#e8e1fa", fontFamily: "poppins , sans-serif", textTransform:"capitalize",fontWeight:"500" , fontSize:"16px"}}
            variant="text"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Nick John
          </Button>
          <DropDownMenu
            id="profile-drop-down-menu"
            MenuListProps={{
              "aria-labelledby": "profile-drop-down-menu",
            }}
            anchorEl={profileDrop}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <EditIcon />
              Edit Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <LogoutIcon />
              Logout
            </MenuItem>
          </DropDownMenu>
        </Stack>
      </Toolbar>
  );
};

export default HeaderBar;
