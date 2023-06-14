import React, { createContext, useState, useEffect } from "react";
import AWS from "aws-sdk";
// Import necessary modules
import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import Pool, { poolData } from "../../UserPool.js";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Auth } from "aws-amplify";
import { env } from "process";

// Create a new context object
const AuthContext = createContext();
// Define the Auth component that will use the context

const Auths = (props) => {
  const navigate = useNavigate();
  // Alert message
  const [showAlert, setShowAlert] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // Define state variables for JWT token and login status

  const [jwtToken, setJWTToken] = useState("");

  // Define a function to authenticate a user

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      // Create a new Cognito user with the provided username and user pool

      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });
      // Authenticate the user with the provided authentication details

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          // Print the access token and JWT token on successful authentication

          console.log("onSuccess:");
          // Resolve the promise with the authentication data and update state
          resolve(data);
          const token = data;
          setJWTToken(token["idToken"]["jwtToken"]);
          localStorage.setItem("idtoken", token["idToken"]["jwtToken"]);
          setShowAlert(false);
        },
        onFailure: (err) => {
          // Log the error and reject the promise on authentication failure

          console.error("onFailure:", err);
          setShowAlert(true);

          reject(err);
        },
        newPasswordRequired: (data) => {
          // Print a message if a new password is required

          console.log("newPasswordReq:");
          resolve(data);
        },
      });
    });
  };

  //session out

  const idtoken = localStorage.getItem("idtoken");

  useEffect(() => {
    const interval = setInterval(() => {
      checkJwtExpiration();
    }, 5000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  function checkJwtExpiration() {
    const isExpired = isJwtExpired();
    if (isExpired) {
      localStorage.removeItem('idtoken');
      navigate("/");

    }
  }
  
  function isJwtExpired() {
    try {
      if (!idtoken) {
        return false;
      } else {
        const decoded = jwtDecode(idtoken);
        const expirationTime = decoded.exp; // Get the expiration timestamp from the decoded JWT
        const currentTimestamp = Math.floor(Date.now() / 1000); // Get the current timestamp in seconds
        return currentTimestamp >= expirationTime; // Compare the timestamps
      }
    } catch (error) {
      return false; // Invalid JWT (could not be decoded)
    }
  }
  

  // Define a function to Delete Account

  const DeleteAccount = async () => {
    try {
      // Delete user account from Cognito
      const user = await Auth.currentAuthenticatedUser();
      await Auth.deleteUser(user);

      // Delete user data from DynamoDB via API Gateway
      const apiEndpoint = "YOUR_API_GATEWAY_ENDPOINT";
      const requestData = { userId: user.username };
      await axios.delete(apiEndpoint, { data: requestData });

      // Account deletion successful
      console.log("Account deleted successfully");
    } catch (error) {
      // Handle errors
      console.error("Error deleting account:", error);
    }

    // try {
    //   const cognitoUser = Pool.getCurrentUser();
    //   cognitoUser.;

    //   if (cognitoUser) {
    //     cognitoUser.deleteUser((error, result) => {
    //       if (error) {
    //         console.error('Error deleting account:', error);
    //         return;
    //       }

    //       // Delete user data from DynamoDB via API Gateway
    //       const requestData = { email: cognitoUser.email };
    //       console.log(requestData);

    //       axios.delete("https://58u6bkd13k.execute-api.us-east-1.amazonaws.com/New/userdata", { data: requestData })
    //         .then(() => {
    //           // Account deletion successful
    //           localStorage.removeItem('idtoken');
    //           navigate('/');
    //           console.log('Account deleted successfully');
    //         })
    //         .catch((err) => {
    //           // console.log(cognitoUser);
    //           console.error('Error deleting user data:', err);
    //         });
    //     });
    //   }
    // } catch (error) {
    //   // Handle errors
    //   console.error('Error deleting account:', error);
    // }
  };

  // This function returns the current JWT token

  const getjwtToken = () => {
    return jwtToken;
  };
  // This function returns the current login status

  const getLoginStatus = () => {
    return localStorage.getItem("idtoken") != null;
  };
  const getShowAlert = () => {
    return showAlert;
  };

  // Here, a new AuthContext is created with the necessary values passed in as a value object
  // These values are used throughout the application to manage user authentication and login status
  return (
    <AuthContext.Provider
      value={{
        authenticate,
        DeleteAccount,
        getjwtToken,
        getShowAlert,
        getLoginStatus,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
// The Auth and AuthContext components are exported to be used in other parts of the application

export { Auths, AuthContext };
