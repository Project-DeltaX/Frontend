import React, { useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import "../../App.css";
// import { navigationActiveStyle } from "../../../styles";
import styled from "styled-components";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DashboardInterns from "./Dashboard-Interns/Dashboard-Interns";

const SelectCss = styled(Select)({
  forcedColorAdjust: true,

  "& .MuiSelect-select": {
    backgroundColor: "#F0F0F0",
  },
});

const Dashboard = () => {
  const [transformType, setTransformType] = useState("candidates");

  const handleChange = (event) => {
    setTransformType(event.target.value);
  };

  const transformComponent = () => {
    switch (transformType) {
      case "applicants":
        return <h1>Applicants</h1>;
        break;
      // case "interns":
      //   return <h1>Candidates</h1>;
      //   break;
      case "candidates":
        return <DashboardInterns />;
        break;
      default:
        return null;
    }
  };

  return (
    <div>
      <Box>
        <Grid container direction={"column"} rowSpacing={2} paddingLeft={3}>
          <Grid
            item
            md={4}
            container
            rowSpacing={1}
            display={"flex"}
            justifyContent={'space-between'}
            sx={{
              backgroundColor: "#ffffff",
              position: "fixed",
              zIndex: 2,
            }}
            padding={1}
            paddingRight={40}
          >
            <Grid item >
              <Typography variant="h4">Dashboard</Typography>
            </Grid>
            <Grid item>
              <Select
                sx={{ backgroundColor: "#bdb2ff" }}
                labelId="transform-type-label"
                id="transform-type"
                value={transformType}
                onChange={handleChange}
                defaultValue={transformType}
                size={"small"}
                align="right"
              >
                <MenuItem value="applicants">Applicants</MenuItem>
                <MenuItem value="candidates">Candidates</MenuItem>
                <MenuItem value="interns">Interns</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item md={8} lg={4} marginTop={10}>
            {transformComponent()}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
