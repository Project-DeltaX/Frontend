import React from "react";
import '../../App.css';
import Layout from "../../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "../AccountSettings/UserProfile";
import LoginPage from "../UserAuthentication/LoginPage";
// const MenuArr = [
//   {
//     text: "Dashboard",
//     // path: "/dashboard",
//   },
//   {
//     text: "User Management",
//     // path: "/user Management",
//   },{
//     text: "Account",
//     // path: "/account",
//   },

// ];

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
        <Route path="/Account" element={<h1>Hii Account</h1>} />
      </Routes>
      
    </Layout>
  
  );
};

export default AdminHomePage;