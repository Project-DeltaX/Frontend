import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import Amplify, { Auth } from "aws-amplify";
import routes from "./MyRoutes";
import Pool from "./UserPool.js";

//Before Login routes
import LoginPage from "./pages/UserAuthentication/LoginPage";
import Register from "./pages/UserAuthentication/createNewAccount";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import NewPassword from "./pages/UserAuthentication/NewPassword";
import HomePage from "./pages/UserHomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import OAccount from "./pages/AccountSettings/OAccount";
import UserManagement from "./pages/UserManagement/UserManagement";
import CvManagement from "./pages/CvManagement/CvManagement";
import InterviewSchedule from "./pages/InterviewSchedule/InterviewSchedule";
import Interview from "./pages/Interview&evaluation/Interview";
import Evaluation from "./pages/Interview&evaluation/Evaluation";
import RequireAuth from "./pages/UserAuthentication/RequireAuth";

//auth
import { AccountContext } from "./pages/UserAuthentication/Auth";
import jwtDecode from "jwt-decode";

function RouterComponent() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="createnewaccount" element={<Register />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="homepage" element={<RequireAuth><HomePage /></RequireAuth>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="usermanagement" element={<UserManagement />} />
            <Route path="cvmanagement" element={<CvManagement />} />
            <Route path="interviewschedule" element={<InterviewSchedule />} />
            <Route path="interview" element={<Interview />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route path="account" element={<OAccount />} />
          </Route>
      </Routes>
    </div>
  );
}

export default RouterComponent;
