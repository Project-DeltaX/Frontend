import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "../AccountSettings/UserProfile";

const MenuArr = ["Account"];

const InternHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="IIconArr">
      <h1>Hiii InternHomePage</h1>

    </Layout>
  
  );
};

export default InternHomePage;;