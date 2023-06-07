import { Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useEffect } from "react";
// import custom components

import CircularStatus from "./CircularStatus";
import UserRoles from "./UserRoles/UserRoles";
import UserRole2 from "./UserRoles/UserRoles2";
import UserRole3 from "./UserRoles/UserRoles3";
import CommonRoles from "./Roles";
// define UserManagement component

const UserManagement = () => {
  
  const [transformType, setTransformType] = useState("/");
  const [committeeMembersCount, setCommitteeMembersCount] = useState(0);

  const handleChange = (event) => {
    setTransformType(event.target.defaultValue);
  };

  const fetchCommitteeMembersCount = () => {
    fetch('https://pyf6lzcajk.execute-api.us-east-1.amazonaws.com/dev/committeememberstatus')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCommitteeMembersCount(data.count);
      })
      .catch(error => {
        console.error('Error fetching Committee Members count:', error);
      });
  };

  useEffect(() => {
    fetchCommitteeMembersCount();
  }, []);

  const transformComponent = () => {
    switch (transformType) {
      case "/":
        return <CommonRoles/>;
        break;
      case "committeeMembers":
        return <UserRoles/>;
        break;
        case "panelMembers":
          return <UserRole2/>;
          break;
          case "interns":
        return <UserRole3/>;
        break;
      default:
        return null;
    }
  };



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
            <Card sx={{ bgcolor: "#27144B" ,cursor:'pointer'}} onClick={()=>{setTransformType('committeeMembers')}}>
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Committee Members
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <CircularStatus /> <br />
                    <Typography  variant="body2" sx={{color:"white" ,marginLeft:'8px'}}>{committeeMembersCount}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* panel members statistics */}

          <Grid item md={4}>
          <Card sx={{ bgcolor: "#27144B" ,cursor:'pointer'}} onClick={()=>{setTransformType('panelMembers')}}>
                          <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Panel Members
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <CircularStatus /> <br />
                    <Typography variant="body2" sx={{color:"white" ,marginLeft:'8px'}}>9</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* interns statistics */}

          <Grid item md={4}>
          <Card sx={{ bgcolor: "#27144B" ,cursor:'pointer'}} onClick={()=>{setTransformType('interns')}}>
                          <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Interns
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <CircularStatus /> <br />
                    <Typography variant="body2" sx={{color:"white" ,marginLeft:'8px'}}>30</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* user roles section */}

        <Grid item md={6}>
          {/* <CommonRoles />     */}
           {/* <UserRoles />  */}
          {/* <index.js/> */}
          {transformComponent()}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;
