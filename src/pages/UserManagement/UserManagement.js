import { Grid, Link } from "@mui/material";
// import React from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Av from "../../Images/Avatar02.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import CircularStatus from "./CircularStatus";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import UserRoles from "./UserRoles/UserRoles";
import CommonRoles from "./Roles";

const UserManagement = () => {
  return (
    <div>
      <Grid container direction={"column"} rowSpacing={2}>
        <Grid item md={3}>
          <Typography>
            <h2>
              <b>User Management</b>
            </h2>
          </Typography>
        </Grid>

        <Grid item md={3} container spacing={10} display={"flex"}>
          <Grid item md={4}>
            <Card sx={{ bgcolor: "#27144B" }}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div">
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

          <Grid item md={4}>
            <Card sx={{ bgcolor: "#27144B" }}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div">
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

          <Grid item md={4}>
            <Card sx={{ bgcolor: "#27144B" }}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div">
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

        <Grid item md={6}>
          <CommonRoles/>

          <UserRoles />
          {/* <index.js/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;
