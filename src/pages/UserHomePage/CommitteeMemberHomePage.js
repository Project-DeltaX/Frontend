import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InterviewSchedule from "../InterviewSchedule/InterviewSchedule";

const MenuArr = ["Dashboard", "CV Management","Interview Schedule", "Account"];

const CommitteeMemberHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="CIconArr">
      <Routes>
        <Route path="/" element={<h1>Hiii Dashboard</h1>} />
        <Route path="/Dashboard" element={<h1>Hiii Dashboard</h1>} />
        <Route path="/CV Management" element={<h1>Hiii CV Management</h1>}/>
        <Route path="/Interview Schedule" element={<InterviewSchedule/>} />
        
        <Route path="/Account" element={<h1>Hiii Account Settings</h1>}/>
      </Routes>

    </Layout>
  
  );
};

export default CommitteeMemberHomePage;;