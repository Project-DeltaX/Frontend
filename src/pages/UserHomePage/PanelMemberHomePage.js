import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "../AccountSettings/UserProfile";


const MenuArr = ["Dashboard", "Interview","Evaluation", "Account"];

const PanelMemberHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="PIconArr">
      <h1>Hiii PanelMemberHomePage</h1>

    </Layout>
  
  );
};

export default PanelMemberHomePage;;