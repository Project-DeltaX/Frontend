


// draft for login


import React, { useState } from "react";
import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_YrVK0wUkH',
  ClientId: '3ukk5rm8h91qiu7mi8n0m1cge8'
};

const userPool = new CognitoUserPool(poolData);



const Demo = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(email,password,[], (err,result) => {
        if (err) {
          console.error("signIn failed",err,null);
        }
        console.log(result);
      });   
    };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="username"
        placeholder="user name"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Demo;



















