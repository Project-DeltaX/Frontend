import React from "react";
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../UserAuthentication/LoginPage";
import OAccount from "../AccountSettings/OAccount";



const MenuArr = [
  "Dashboard", 
  "User Management", 
  "Account"
];

const AdminHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="AIconArr">
      <Routes>
        <Route path="/" element={<h1>Hii Dashboard</h1>} />
        <Route path="/Dashboard" element={<h1>Hii Dashboard</h1>} />
        <Route path="/User Management" element={<h1>Hii User Management</h1>} />
        <Route path="/Account" element={<OAccount/>} />
      </Routes>
      
    </Layout>
  
  );
};

export default AdminHomePage;