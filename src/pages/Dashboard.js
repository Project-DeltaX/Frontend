import React from "react";
import { Grid } from '@mui/material';
import { Paper} from '@mui/material';
import Navbar from "../components/Navbar/navbar";

function Dashboard() {
  return (
    <div>

      <Grid container spacing={1}>
        <Grid item sm={2}  >
            <Navbar/> 
        </Grid>
        <Grid item sm={10}>
            <Paper>Hello</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
