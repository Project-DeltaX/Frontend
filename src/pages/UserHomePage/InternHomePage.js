import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAccount from "../AccountSettings/OAccount";

const MenuArr = ["Account"];

const InternHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="IIconArr">
      <Routes>
        <Route path="/" element={<OAccount/>} />
        <Route path="/Account" element={<OAccount/>}/>
      </Routes>

    </Layout>
  
  );
};

export default InternHomePage;