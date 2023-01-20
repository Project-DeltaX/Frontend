import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "../AccountSettings/UserProfile";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";

const MenuArr = ["Dashboard", "Interview", "Evaluation", "Account"];

const Interview = () => {
  return (
    <Box sx={{ bgcolor: "#E8E1FA", color: blue }}>
      <h1>Interview</h1>
    </Box>
  );
};

export default Interview;
