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
import PrivateRoute from "./pages/UserAuthentication/PrivateRoute";
import useAuth from "./hooks/useAuth";
import AccessDenied from "./pages/ErrorPages/AccessDenied";

//auth
import { AccountContext } from "./pages/UserAuthentication/Auth";
import jwtDecode from "jwt-decode";
import EmailConfirmation from "./pages/UserAuthentication/EmailConfirmation";
import SuccessfulPasswordReset from "./pages/UserAuthentication/SuccessfulPasswordReset";

function RouterComponent() {
  const { getLoginStatus } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="createnewaccount" element={<Register />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="emailConfiramation" element={<EmailConfirmation />} />
        <Route path="successfulPasswordReset" element={<SuccessfulPasswordReset />} />
        <Route
          path="homepage"
          element={
            getLoginStatus() ? <HomePage /> : <Navigate to="/" replace />
          }
        >
          <Route
            element={
              <PrivateRoute
                allowedRoles={["Admin", "CommitteeMember", "PanelMember"]}
              />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["Admin"]} />}>
            <Route path="usermanagement" element={<UserManagement />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["CommitteeMember"]} />}>
            <Route path="cvmanagement" element={<CvManagement />} />
            <Route path="interviewschedule" element={<InterviewSchedule />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["PanelMember"]} />}>
            <Route path="interview" element={<Interview />} />
            <Route path="evaluation" element={<Evaluation />} />
          </Route>
          <Route
            element={
              <PrivateRoute
                allowedRoles={["Admin", "CommitteeMember", "PanelMember","Intern"]}
              />
            }
          >
            <Route path="account" element={<OAccount />} />
          </Route>

          
        </Route>
        <Route path="/access-denied" element={<AccessDenied/>}/>
      </Routes>
    </div>
  );
}

export default RouterComponent;
