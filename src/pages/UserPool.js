import { CognitoUserPool,CognitoUserAttribute,AuthenticationDetails,CognitoUser } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_JeGJ5dp7G',
    ClientId: '4b98f6bsasaj3e9bf8mva3ei6k'
  };

export default new CognitoUserPool(poolData);