// Import necessary modules
import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import Pool from "../UserPool.js"

import React,{createContext, useState} from "react";





// Create a new context object
const AccountContext=createContext();
// Define the Account component that will use the context

const Account=(props)=>{
    // Define state variables for JWT token and login status
    
  const [jToken,setJToken] = useState({});
  const [loginStatus,setLoginStatus] = useState(false);
    // Define a function to get the session for a user

  const getSession=async(Username,Password) =>{
    return await new Promise((resolve, reject)=>{
      const user=Pool.getCurrentUser();
      if(user){
        user.getSession(async(err,session) =>{
          if(err){
            reject();
          }else{
           // Get the user attributes

            const attributes=await new Promise((resolve,reject)=>{
              user.getUserAttributes((err,attributes)=>{
                if(err){
                  reject(err);
              }else{
                const results={};
             // Extract the attribute name and value pairs from the attributes array

                for(let attribute of attributes)
                {
                  const {Name,Value} = attribute;
                  results[Name] = Value;
                }
                                  // Resolve the promise with the results object

                resolve(results);

            }
          });
        });
                    // Resolve the promise with the session, user, and attributes objects

            resolve({user,...session,...attributes});
          }
        });

      } else {
                // If no user is found, reject the promise

        reject();
      }
    });
  };
    // Define a function to authenticate a user

  const authenticate =async(Username,Password)=>{
   return await new Promise((resolve, reject)=>{

      // Create a new Cognito user with the provided username and user pool

    const user=new CognitoUser({ Username, Pool });
    const authDetails=new AuthenticationDetails({
        Username,
        Password,
    });
          // Authenticate the user with the provided authentication details

    // user.authenticateUser(authDetails,{
    //     onSuccess:(data)=>{
    //     // Print the access token and JWT token on successful authentication

    //         console.log("onSuccess:")
            
    //         console.log(data['accessToken']['jwtToken']);
    //                 // Resolve the promise with the authentication data and update state

    //         resolve(data);
    //         setJToken(data);
    //         setLoginStatus(true);
    //     },
    //     onFailure:(err)=>{
    //               // Log the error and reject the promise on authentication failure

    //         console.error("onFailure:",err);
    //         reject(err);
    //     },
    //     newPasswordRequired:(data)=>{
    //               // Print a message if a new password is required

    //         console.log("newPasswordReq:");
    //         resolve(data);
    //     },
    // });

    user.authenticateUser(authDetails,{
      onSuccess:(data)=>{
      // Print the access token and JWT token on successful authentication

          console.log("onSuccess:")
          
          console.log(data['accessToken']['jwtToken']);
                  // Resolve the promise with the authentication data and update state

          resolve(data);
          setJToken(data);
          setLoginStatus(true);
      },
      onFailure:(err)=>{
                // Log the error and reject the promise on authentication failure

          console.error("onFailure:",err);
          reject(err);
      },
      newPasswordRequired:(data)=>{
                // Print a message if a new password is required

          console.log("newPasswordReq:");
          resolve(data);
      },
  });
 })
}; 

  // This function returns the current JWT token

  const getToken=()=>{
    return jToken;
  }
  // This function returns the current login status

  const getLoginStatus=()=>{
    return loginStatus;
  }
  // Here, a new AccountContext is created with the necessary values passed in as a value object
// These values are used throughout the application to manage user authentication and login status
  return (
    <AccountContext.Provider value={{authenticate,getSession,setJToken,getToken,getLoginStatus}}>
{props.children}
    </AccountContext.Provider>
  );
};
// The Account and AccountContext components are exported to be used in other parts of the application

export {Account,AccountContext};

