import React, { createContext, useState, useEffect } from "react";
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

// Create a new context object
const AuthContext = createContext();
// Define the Auth component that will use the context

const Auth = (props) => {
  const navigate = useNavigate();
  // Alert message
  const [showAlert, setShowAlert] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");


  // Define state variables for JWT token and login status

  const [jwtToken, setJWTToken] = useState('');

  // Define a function to get the session for a user

  const getSession = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            reject();
          } else {
            // Get the user attributes

            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) {
                  reject(err);
                } else {
                  const results = {};
                  // Extract the attribute name and value pairs from the attributes array

                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }
                  // Resolve the promise with the results object

                  resolve(results);
                  console.log(results);
                }
              });
            });
            // Resolve the promise with the session, user, and attributes objects

            resolve({ user, ...session, ...attributes });
          }
        });
      } else {
        // If no user is found, reject the promise

        reject();
      }
    });
  };
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
          localStorage.setItem('idtoken',token["idToken"]["jwtToken"]);
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


  const idtoken = localStorage.getItem('idtoken');
  // if(!idtoken){
  //   navigate('/');
  // }else{
  //   setInterval(() => {
  //     checkJwtExpiration();
  //   }, 5000);
  // }

  function checkJwtExpiration() {
    const isExpired = isJwtExpired();
    if (isExpired) {
      alert('Session Expired');
      navigate('/')
      // console.log("Expired");
    }
  }

  function isJwtExpired() {
    
    try {
      const decoded = jwtDecode(idtoken);
      const expirationTime = decoded.exp; // Get the expiration timestamp from the decoded JWT
      const currentTimestamp = Math.floor(Date.now() / 1000); // Get the current timestamp in seconds
      return currentTimestamp >= expirationTime; // Compare the timestamps
    } catch (error) {
      return false; // Invalid JWT (could not be decoded)
    }
  }

  
  


  // This function returns the current JWT token

  const getjwtToken = () => {
    return jwtToken;
  };
  // This function returns the current login status

  const getLoginStatus = () => {
    return (localStorage.getItem("idtoken") != null);
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
        getSession,
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

export { Auth, AuthContext, };
