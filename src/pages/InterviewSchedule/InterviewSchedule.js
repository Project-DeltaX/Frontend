// Importing necessary modules and components
import React from "react";
import { Grid, Tabs, Tab, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import AvailabilityStatus from "./AvailabilityStatus";
import Schedule from "./Schedule";
import Mailing from "./Mailing";
import Allocation from "./Allocation";

// A helper function to render the tab panels based on the selected tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel" // `role` attribute defines the role of the element in the accessibility tree
      hidden={value !== index} // The `hidden` attribute hides the element if its value is true
      id={`simple-tabpanel-${index}`} // The `id` attribute provides a unique identifier for the element
      aria-labelledby={`simple-tab-${index}`} // The `aria-labelledby` attribute associates the tab panel with its corresponding tab
      {...other}
    >
      {value === index && ( // The `Box` component provides a container with predefined padding and margin properties
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Define the prop types for the `TabPanel` component
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// Define the main component
const InterviewSchedule = () => {
  // Use the `useState` hook to manage the selected tab state
  const [value, setValue] = React.useState(0);
  // Define the event handler for tab changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Render the component

  return (
    // The `Grid` component provides a responsive grid container
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          textAlign="left"
          fontSize="30px"
          color="#27144B"
        >
          <b> Interview Schedule</b>
        </Typography>
      </Grid>
      <Grid item xs={12} spacing={4}>
        <Box
          display={"flex"} // The `display` attribute defines the display behavior of the element
          justifyContent={"center"} // The `justifyContent` attribute defines the horizontal alignment of the children
          alignItems={"center"} // The `alignItems` attribute defines the vertical alignment of the children
          sx={{
            width: "fit-content",
            height: "38px",
            color: "#460966",
            backgroundColor: "#ddb0f5",
            borderRadius: "6px",
            padding: "20px",
          }}
        >
          <Tabs
            value={value} // The `value` attribute defines the selected tab index
            onChange={handleChange} // The `onChange` attribute defines the event handler for tab changes
            indicatorColor="Blue" // The `indicatorColor` attribute defines the color of the selected tab indicator
            textColor="Black" // The `textColor` attribute defines the color of the tab labels
          >
            <Tab className="textStyle" label="Availability" {...a11yProps(0)} />
            <Tab className="textStyle" label="Allocation" {...a11yProps(1)} />
            <Tab className="textStyle" label="Schedule" {...a11yProps(2)} />
            <Tab className="textStyle" label="Mailing" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TabPanel value={value} index={0}>
          <AvailabilityStatus />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Allocation />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Schedule />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Mailing />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default InterviewSchedule;
