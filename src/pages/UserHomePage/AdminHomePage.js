import React from "react";
import '../../App.css';
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../UserAuthentication/LoginPage";
import UserManagement from "../UserManagement/UserManagement";



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
        <Route path="/User Management" element={<UserManagement/>} />
        <Route path="/Account" element={<h1>Hii Account</h1>} />
      </Routes>
      
    </Layout>
  
  );
};

export default AdminHomePage;