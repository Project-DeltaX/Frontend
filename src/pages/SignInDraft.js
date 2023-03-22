import React, { useState } from "react";
import { CognitoUserPool,CognitoUserAttribute } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: 'us-east-1_qq3sm8GMX',
  ClientId: '2q2cdngim9ig9vsh7c5so41dka'
};

const UserPool = new CognitoUserPool(poolData);



const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(email,password,[], (err,result) => {
        if (err) {
          console.error("signIn failed",err,null);
        }
        console.log("Successfully SignIn",null,result);
      });   
    };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
