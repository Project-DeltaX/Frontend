import React from "react";
import { Grid,Tabs,Tab,Typography,Box } from "@mui/material";
import PropTypes from "prop-types";
import AvailabilityStatus from "./AvailabilityStatus";
import Schedule from "./Schedule";
import Mailing from "./Mailing";
import Allocation from "./Allocation";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const InterviewSchedule = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
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
        <Box sx={{ borderBottom: 3, borderColor: "#27144B"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="Black"
            textColor="Black"
            // centered
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
          <Allocation/>

        </TabPanel>
        <TabPanel value={value} index={2}>
          <Schedule/>
        </TabPanel>
        <TabPanel value={value} index={3}>
     <Mailing/>
        </TabPanel>
      </Grid>
      
    </Grid>
  );
};

export default InterviewSchedule;
