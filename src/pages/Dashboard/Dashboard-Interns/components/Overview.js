import React from "react";
// import { Helmet } from "react-helmet-async";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AppWidgetSummary from "./AppWidgetSummary";
import InternEmployees from "./InternEmployees";
import BarChartComponent from "../../../../components/Barchart/BarChart";
import WorkIcon from '@mui/icons-material/Work';
import WorkOffIcon from '@mui/icons-material/WorkOff';

const Overview = () => {
  const theme = useTheme();

  return (
    <div>
      {/* <Helmet>
        <title> Dashboard | Overview </title>
      </Helmet> */}
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Grid container spacing={6} direction={"column"} >
          <Grid item md={3} lg={3} xl={3} container spacing={3}>
            <Stack direction={"row"} spacing={15}>
              <AppWidgetSummary
                title="Total"
                total={30}
              />
              <AppWidgetSummary
                title="Selected"
                total={15}
                sx={{color:"#27144B"}}
                color="#27144B"
                icon={<WorkIcon/>}
              />
              <AppWidgetSummary
                title="Waiting"
                total={10}
                color="warning"
                icon={<WorkOffIcon/>}
              />
            </Stack>
          </Grid>
          <Grid item md={9} lg={9} xl={9} width="100%" >
         
            <BarChartComponent/>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Overview;
