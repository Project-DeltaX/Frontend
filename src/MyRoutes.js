import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import Amplify, { Auth } from "aws-amplify";
import routes from "./MyRoutes";
import Pool from "./pages/UserPool.js";


//Before Login routes
import { Account } from "./pages/UserAuthentication/Account";
import LoginPage from "./pages/UserAuthentication/LoginPage";
import Register from "./pages/UserAuthentication/createNewAccount";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import NewPassword from "./pages/UserAuthentication/NewPassword";
import AdminHomePage from "./pages/UserHomePage/AdminHomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import OAccount from "./pages/AccountSettings/OAccount";
import UserManagement from "./pages/UserManagement/UserManagement";

//auth
import { AccountContext } from "./pages/UserAuthentication/Account"; 
import jwtDecode from "jwt-decode";


function RouterComponent() {

  const {getToken,getLoginStatus} = useContext(AccountContext);
  const token = getToken();
  if(getLoginStatus()){
    const jToken = token['accessToken']['jwtToken'];
  const decodedToken = jwtDecode(jToken);
  }
  
  
  useEffect(() => {
    async function fetchData() {
      // const userType = await getUserType();
      // setUserType(userType);
    }

    fetchData();
  }, []);


  return (<div>
      <Routes>
          <Route path="/" element={<Account><LoginPage /></Account>} />
          <Route path="/createnewaccount" element={<Register/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/adminHome/*" element={<AdminHomePage />} />
          {/* <Route path="/Emailconfirmationpage" element={<NewPassword />} />
          <Route path="/newpw" element={<SuccessfulPasswordReset />} />
          <Route path="createacc" element={<EmailConfirmation />} /> */}
        </Routes>
      </div>
  );

}

export default RouterComponent;
