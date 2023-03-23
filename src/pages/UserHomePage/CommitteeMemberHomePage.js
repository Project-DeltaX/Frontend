import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAccount from "../AccountSettings/OAccount";
import CvManagement from "../CvManagement/CvManagement";


const MenuArr = ["Dashboard", "CV Management","Interview Schedule", "Account"];

const CommitteeMemberHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="CIconArr">
      <Routes>
        <Route path="/" element={<h1>Hiii Dashboard</h1>} />
        <Route path="/Dashboard" element={<h1>Hiii Dashboard</h1>} />
        <Route path="/CV Management" element={<CvManagement/>}/>
        <Route path="/Interview Schedule" element={<h1>Hiii Interview Schedule</h1>} />
        <Route path="/Account" element={<OAccount/>}/>
      </Routes>
    </Layout>
  
  );
};

export default CommitteeMemberHomePage;;