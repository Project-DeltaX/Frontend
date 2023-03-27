import React from "react";
import Layout from "../../components/Layout";
import { Route, Routes } from "react-router-dom";

//side bar component page imports
import OAccount from "../AccountSettings/OAccount";
import CvManagement from "../CvManagement/CvManagement";
import InterviewSchedule from "../InterviewSchedule/InterviewSchedule";
import Dashboard from "../DashBoard/Dashboard";
const MenuArr = ["Dashboard", "CV Management","Interview Schedule", "Account"];

const CommitteeMemberHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="CIconArr">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/CV Management" element={<CvManagement/>}/>
        <Route path="/Interview Schedule" element={<InterviewSchedule/>} />
        <Route path="/Account" element={<OAccount/>}/>
      </Routes>
    </Layout>
  
  );
};

export default CommitteeMemberHomePage;;