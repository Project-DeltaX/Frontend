import React from "react";
import Layout from "../../components/Layout";
import { Route, Routes } from "react-router-dom";
//Sidebar Pages
import UserManagement from "../UserManagement/UserManagement";
import OAccount from "../AccountSettings/OAccount";
import Dashboard from "../Dashboard/Dashboard.js";



const MenuArr = [
  "Dashboard", 
  "User Management", 
  "Account"
];
const AdminHomePage = () => {
  return (
    <Layout MenuArr={MenuArr} IconArr="AIconArr">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Dashboard" element={<h1><Dashboard/></h1>} />
        <Route path="/User Management" element={<UserManagement/>} />
        <Route path="/Account" element={<OAccount/>} />
      </Routes>
      
    </Layout>
  
  );
};

export default AdminHomePage;
