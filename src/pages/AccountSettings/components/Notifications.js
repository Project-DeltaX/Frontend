import React, { useState } from "react";
import { Alert, Box, Stack } from "@mui/material";
import "../../AccountSettings/OAccount.css";
import "../../../App.css";

const Notifications = () => {
  return (
    <div className="BoxContainer">
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: "#bdb2ff",
          padding: "1px",
          margin: "1px",
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Box>
    </div>
  );
};

export default Notifications;
