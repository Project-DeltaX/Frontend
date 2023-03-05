import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_qq3sm8GMX',
    ClientId: '2q2cdngim9ig9vsh7c5so41dka'
  };

export default new CognitoUserPool(poolData);