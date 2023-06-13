import React,{useEffect, useState} from "react";
import axios from "axios";



import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AppWidgetSummary from "./AppWidgetSummary";
import DailyInterviewChart from "./Charts/LineChart";
import LeaderBoard from "./LeaderBoard/LeaderBoard";


import WorkIcon from '@mui/icons-material/Work';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import { Leaderboard } from "@mui/icons-material";




const Overview = () => {
  const theme = useTheme();
  const [scoreData,setScoreData] = useState([]);
  const [lineChartData,setLineChartData] = useState([]);
  const [totalCandidates,setTotalCandidates] = useState(null);
  const [waitingCandidates,setWaitingCandidates] = useState(null);
  const [selectedCandidates,setSelectedCandidates] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://guxgo6me31.execute-api.us-east-1.amazonaws.com/dev"
        );
        
        const jsonData = response.data;
        setScoreData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://4c2lf57zlk.execute-api.us-east-1.amazonaws.com/dev"
        );
  
        const jsonData = response.data;
        setLineChartData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://v6pjqonit0.execute-api.us-east-1.amazonaws.com/dev/statuscount"
        );
  
        const jsonData = response.data;
        setWaitingCandidates(jsonData[0].count);
        setSelectedCandidates(jsonData[1].count);
        setTotalCandidates(jsonData[2].count);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  


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
                total={totalCandidates}
              />
              <AppWidgetSummary
                title="Selected"
                total={selectedCandidates}
                sx={{color:"#27144B"}}
                color="#27144B"
              />
              <AppWidgetSummary
                title="Waiting"
                total={waitingCandidates}
                color="warning"
              />
            </Stack>
          </Grid>
          <Grid item md={9} lg={9} xl={9} width="100%" container spacing={10} direction={'row'}>
            <Grid sx={{alignSelf:'center', paddingX:"10px"}} item md={6} lg={6} xl={6} display={'flex'} flexDirection={'column'} alignItems={'center'} >
            <h5>Interview Schedules</h5>
              <DailyInterviewChart data={lineChartData}/>
            </Grid>
            <Grid sx={{paddingX:"10px"}} item md={6} lg={6} xl={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <h5>LeaderBoard</h5>
              <LeaderBoard sx={{marginLeft:"5px"}} Data={scoreData}/>
            </Grid>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Overview;
