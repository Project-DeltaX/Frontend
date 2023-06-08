// Importing the required classes and functions from the "amazon-cognito-identity-js" library

import {
  CognitoUserPool,
} from "amazon-cognito-identity-js";
// The object containing the configuration details of the Cognito User Pool

export const poolData = {
  UserPoolId: "us-east-1_JeGJ5dp7G", // The ID of the User Pool
  ClientId: "4b98f6bsasaj3e9bf8mva3ei6k", // The ID of the app client associated with the User Pool
};
// Creating a new instance of the CognitoUserPool class and exporting it as a default module



export default new CognitoUserPool(poolData);
