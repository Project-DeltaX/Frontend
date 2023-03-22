import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool.js";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const AccountContext = createContext();

const Account = (props) => {

  const getSession = async =>{
  };


  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.log("onFailure: ", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
        },
      });
    });
  };

  return (
    <AccountContext.Provider value={{ authenticate }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
