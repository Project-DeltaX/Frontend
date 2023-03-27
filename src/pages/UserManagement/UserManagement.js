import { Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// import custom components

import CircularStatus from "./CircularStatus";
import UserRoles from "./UserRoles/UserRoles";
import CommonRoles from "./Roles";
// define UserManagement component

const UserManagement = () => {
  return (
    <div marginRight={"20px"}>
      {/* container for the user management section */}

      <Grid container direction={"column"} rowSpacing={2} marginLeft={"10px"}>
        {/* header section */}

        <Grid item md={3}>
          <Typography>
            <h2>
              <b>User Management</b>
            </h2>
          </Typography>
        </Grid>
        {/* statistics section */}

        <Grid item md={3} container spacing={10} display={"flex"}>
          <Grid item md={4}>
            <Card sx={{ bgcolor: "#27144B" }}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Committee Members
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <CircularStatus /> <br />
                    <Typography variant="body2">15</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* panel members statistics */}

          <Grid item md={4}>
            <Card sx={{ bgcolor: "#27144B" }}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Panel Members
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <CircularStatus /> <br />
                    <Typography variant="body2">9</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* interns statistics */}

          <Grid item md={4}>
            <Card sx={{ bgcolor: "#27144B" }}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Interns
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <CircularStatus /> <br />
                    <Typography variant="body2">30</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* user roles section */}

        <Grid item md={6}>
          <CommonRoles /> {/* render the common roles component */}
          <UserRoles /> {/* render the user roles component */}
          {/* <index.js/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;
