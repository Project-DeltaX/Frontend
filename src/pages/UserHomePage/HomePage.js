import React from "react";
import Layout from "../../components/Layout";
import { Outlet } from "react-router-dom";
//Sidebar Pages
import UserManagement from "../UserManagement/UserManagement";
import OAccount from "../AccountSettings/OAccount";
import Dashboard from "../Dashboard/Dashboard";

// Create an array of menu items to be displayed in the sidebar
const MenuArr = ["Dashboard", "UserManagement", "Account"];
// Define the AdminHomePage component

const HomePage = (props) => {
  return (
    // Render the Layout component with the menu items passed as a prop
    <>
    <Layout>
    <Outlet/>
    </Layout>
    
    </>
    
      
  );
};
// Export the AdminHomePage component as the default export

export default HomePage;
