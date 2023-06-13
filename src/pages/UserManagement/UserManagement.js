import { Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
// import custom components

// import CircularStatus from "./CircularStatus";
import UserRoles from "./UserRoles/UserRoles";
import UserRole2 from "./UserRoles/UserRoles2";
import UserRole3 from "./UserRoles/UserRoles3";
// import CommonRoles from "./Roles";
import AllUsers from "./UserRoles/AllUsers";
// define UserManagement component

const UserManagement = () => {
  const [transformType, setTransformType] = useState("/");
  const [committeeMembersCount, setCommitteeMembersCount] = useState(0);
  const [panelMembersCount, setPanelMembersCount] = useState(0);
  const [internsCount, setInternsCount] = useState(0);

  const handleChange = (event) => {
    setTransformType(event.target.defaultValue);
  };

  const fetchCommitteeMembersCount = () => {
    fetch(
      "https://pyf6lzcajk.execute-api.us-east-1.amazonaws.com/dev/committeememberstatus"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCommitteeMembersCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching Committee Members count:", error);
      });
  };

  const fetchPanelMembersCountCount = () => {
    fetch(
      "https://de53o85765.execute-api.us-east-1.amazonaws.com/dev/panelmemberstatus"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPanelMembersCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching Panel Members count:", error);
      });
  };

  const fetchInternsCount = () => {
    fetch(
      "https://estsn66whh.execute-api.us-east-1.amazonaws.com/dev/internstatus"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInternsCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching Interns count:", error);
      });
  };

  useEffect(() => {
    fetchCommitteeMembersCount();
    fetchPanelMembersCountCount();
    fetchInternsCount();
  }, []);

  const transformComponent = () => {
    switch (transformType) {
      case "/":
        return <AllUsers />;
        break;
      case "committeeMembers":
        return <UserRoles />;
        break;
      case "panelMembers":
        return <UserRole2 />;
        break;
      case "interns":
        return <UserRole3 />;
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
          <Typography variant="h5">
            <b>User Management</b>
          </Typography>
        </Grid>
        {/* statistics section */}

        <Grid item md={3} container spacing={10} display={"flex"}>
          <Grid item md={4}>
            <Card
              sx={{ bgcolor: "#27144B", cursor: "pointer" }}
              onClick={() => {
                setTransformType("committeeMembers");
              }}
            >
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Committee Members
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    {/* <CircularStatus /> <br /> */}
                    <Typography
                      variant="h3"
                      sx={{ color: "white", marginLeft: "8px" }}
                    >
                      <b>{committeeMembersCount}</b>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* panel members statistics */}

          <Grid item md={4}>
            <Card
              sx={{ bgcolor: "#27144B", cursor: "pointer" }}
              onClick={() => {
                setTransformType("panelMembers");
              }}
            >
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Panel Members
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    {/* <CircularStatus /> <br /> */}
                    <Typography
                      variant="h3"
                      sx={{ color: "white", marginLeft: "8px" }}
                    >
                      <b>{panelMembersCount}</b>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/* interns statistics */}

          <Grid item md={4}>
            <Card
              sx={{ bgcolor: "#27144B", cursor: "pointer" }}
              onClick={() => {
                setTransformType("interns");
              }}
            >
              <CardContent>
                <Grid container spacing={8} display={"flex"}>
                  <Grid item md={6}>
                    <Typography variant="h5" component="div" color="#E8E1FA">
                      Company Interns
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    {/* <CircularStatus /> <br /> */}
                    <Typography
                      variant="h3"
                      sx={{ color: "white", marginLeft: "8px" }}
                    >
                      <b>{internsCount}</b>
                    </Typography>
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
