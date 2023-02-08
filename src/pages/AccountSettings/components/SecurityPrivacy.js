import React from "react";
import { Grid, styled, Paper, Typography, Card, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../../AccountSettings/OAccount.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CssTextField = styled(TextField)({
  padding: "8px",

  "& 	.MuiInputBase-root": {
    color: "#E8E1FA",
    fontFamily: "Poppins",
    fontSize: "18px",
  },

  "& 	.MuiSelect-icon": {
    color: "#E8E1FA",
  },

  "& label.Mui-focused": {
    color: "#E8E1FA",
    borderColor: "#E8E1FA",
  },
  "& .MuiInputLabel-root": {
    color: "#E8E1FA",
    fontFamily: "Poppins",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    "& .Mui-focused": {
      borderColor: "#E8E1FA",
    },
    "& fieldset": {
      color: "#E8E1FA",
      borderColor: "#E8E1FA",
    },
    "&:hover fieldset": {
      borderColor: "#E8E1FA",
    },
  },
});

const PersonalDetails = [
  {
    fullName: "Thanusiyan Sivapalasundharam",
    gender: "Male",
    dob: "2000-02-25",
    nationality: "Srilankan",
    jobTitle: "SE",
    Address: {
      addLane: "25A,school Road",
      city: "Batticaloa",
      state: " ",
      country: "Sri Lanka",
    },
    mobileNumber: "0771234567",
    email: "thanu@gmail.com",
  },
];

function TabPanel(props) {
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

TabPanel.propTypes = {
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

const SecurityPrivacy = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      display={"flex"}
      sx={{
        width: "70%",
        height: "fit-content",
        color: "#1168DC",
        //   /* From https://css.glass */
        //   background: "rgba(47, 24, 113, 0.87)",
        //   borderRadius: "16px",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   backdropFilter: "blur(5.8px)",
        //   webkitBackdropEffect: " blur(5.8px)",
        //   border: "1px solid rgba(47, 24, 113, 0.3)",

        background: " radial-gradient(circle,#321873,#2F1871,#2C165D,#27144B)",
        //   borderRadius: "16px",
        padding: "30px",
      }}
      elevation={16}
    >
      <Grid container spacing={2} flexdirection={'column'}>
        <Grid item>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="vertical"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Notifications" {...a11yProps(1)} />
            <Tab label="Security & Privacy" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid item>Hii</Grid>
      </Grid>
    </Paper>
  );
};

export default SecurityPrivacy;
