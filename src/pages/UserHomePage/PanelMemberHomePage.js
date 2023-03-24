import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interview from "../Interview&evaluation/Interview";
import Evaluation from "../Interview&evaluation/Evaluation";
import Account from "../Interview&evaluation/Account";



const MenuArr = ["Dashboard", "Interview","Evaluation", "Account"];

const PanelMemberHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="PIconArr">
     <Routes>
        <Route path="/" element={<h1>Hiii Dashboard</h1>} />
        <Route path="/dashboard" element={<h1>Hiii Dashboard</h1>} />
        <Route path="/interview" element={<Interview/>}/>
        <Route path="/evaluation" element={<Evaluation/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>

    </Layout>
  
  );
};

export default PanelMemberHomePage;