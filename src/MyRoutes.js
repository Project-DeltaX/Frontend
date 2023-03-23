import React, { useState, useEffect } from "react";
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
import LoginPage from "./pages/UserAuthentication/LoginPage";
import Register from "./pages/UserAuthentication/createNewAccount";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import NewPassword from "./pages/UserAuthentication/NewPassword";


function RouterComponent() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userType = await getUserType();
      setUserType(userType);
    }

    fetchData();
  }, []);

  async function getUserType() {
    try {
      const userInfo = Pool.getCurrentUser;
      const userType = userInfo.attributes["custom:guestRole"];
      return userType;
    } catch (error) {
      console.error(error);
    }
  }

  const userRoutes = routes[userType];
  const [loginState, setLoginState] = useState(true);

  return (<div>
      {loginState ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/createnewaccount" element={<Register/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/Emailconfirmationpage" element={<NewPassword />} />
          {/* <Route path="/newpw" element={<SuccessfulPasswordReset />} />
          <Route path="createacc" element={<EmailConfirmation />} /> */}
        </Routes>
      ) : (
        <Routes>
          {userRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      )}
      </div>
  );

}

export default RouterComponent;
