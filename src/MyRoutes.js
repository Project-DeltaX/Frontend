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

//auth
import { AccountContext } from "./pages/UserAuthentication/Account"; 
import jwtDecode from "jwt-decode";


function RouterComponent() {
  const [userType, setUserType] = useState(null);
  const {getToken,getLoginStatus} = useContext(AccountContext);
  const token = getToken();
  if(getLoginStatus()){
    console.log(token);
  }
  
  // const jToken = token['accessToken']['jwtToken'];
  // const decodedToken = jwtDecode(jToken);
  // console.log(decodedToken);
  useEffect(() => {
    async function fetchData() {
      // const userType = await getUserType();
      // setUserType(userType);
    }

    fetchData();
  }, []);

  // async function getUserType() {
  //   const userData = {
  //     Username: userSub,
  //     Pool: Pool
  //   };
  //   try {
  //     const userInfo = Pool.getCurrentUser();
  //     userInfo.getUserData(userData,(err,data)=>{
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log('Username:', data.family_name);
  //       }
  //     });
      
  //     // const userType = userInfo.arguments
  //     // console.log(userInfo);
  //     return userType;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const userRoutes = routes[userType];
  const [loginState, setLoginState] = useState(true);

  return (<div>
      {loginState ? (
        <Routes>
          <Route path="/" element={<Account><LoginPage /></Account>} />
          <Route path="/createnewaccount" element={<Register/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/adminHome" element={<AdminHomePage/>}/>
          {/* <Route path="/Emailconfirmationpage" element={<NewPassword />} />
          <Route path="/newpw" element={<SuccessfulPasswordReset />} />
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
