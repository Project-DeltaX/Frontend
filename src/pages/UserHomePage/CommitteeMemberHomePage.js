import React from "react";
import { Route, Routes } from "react-router-dom";

//user defined components
import Layout from "../../components/Layout";

//side bar component imports
import OAccount from "../AccountSettings/OAccount";
import CvManagement from "../CvManagement/CvManagement";
import Dashboard from "../Dashboard/Dashboard";
import InterviewSchedule from "../InterviewSchedule/InterviewSchedule";


const CommitteeMemberHomePage = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CV Management" element={<CvManagement />} />
        <Route path="/Interview Schedule" element={<InterviewSchedule />} />
        <Route path="/Account" element={<OAccount />} />
      </Routes>
    </Layout>
  );
};

export default CommitteeMemberHomePage;
