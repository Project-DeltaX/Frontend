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
                total={70}
              />
              <AppWidgetSummary
                title="On Work"
                total={62}
                color="primary"
                icon={<WorkIcon/>}
              />
              <AppWidgetSummary
                title="On Leave"
                total={8}
                color="warning"
                icon={<WorkOffIcon/>}
              />
            </Stack>
          </Grid>
          <Grid item md={9} lg={9} xl={9} width="100%" >
          {/* <InternEmployees

              title="Intern employees"
              subheader="(+43%) than last year"
              chartLabels={[
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
              ]}
              chartData={[
                {
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                
              ]}
            /> */}
            <BarChartComponent/>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Overview;
