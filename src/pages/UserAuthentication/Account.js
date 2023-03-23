// import React, { createContext } from "react";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
// import Pool from "../UserPool.js";
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

// const AccountContext = createContext();

// const Account = (props) => {

//     const getSession = async =>{

//     };
//   const authenticate = async (Username, Password) => {
//     return await new Promise((resolve, reject) => {
//       const user = new CognitoUser({ Username, Pool });

//       const authDetails = new AuthenticationDetails({ Username, Password });

//       user.authenticateUser(authDetails, {
//         onSuccess: (data) => {
//           console.log("onSuccess: ", data);
//           resolve(data);
//         },
//         onFailure: (err) => {
//           console.log("onFailure: ", err);
//           reject(err);
//         },
//         newPasswordRequired: (data) => {
//           console.log("newPasswordRequired: ", data);
//           resolve(data);
//         },
//       });
//     });
//   };

//   return (
//     <AccountContext.Provider value={{ authenticate }}>
//       {props.children}
//     </AccountContext.Provider>
//   );
// };

// export { Account, AccountContext };




// // draft for login


// import React, { useState } from "react";
// import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

// const poolData = {
//   UserPoolId: 'us-east-1_YrVK0wUkH',
//   ClientId: '3ukk5rm8h91qiu7mi8n0m1cge8'
// };

// const userPool = new CognitoUserPool(poolData);



// const Demo = () => {
//     const [username,setUsername]=useState("");
//     const [password,setPassword]=useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user=new CognitoUser({
//         Username:username,
//         Pool:userPool
//     });
//     const authDetails=new AuthenticationDetails({
//         Username:username,
//         Password:password,
//     });
//     user.authenticateUser(authDetails,{
//         onSuccess:(data)=>{
//             console.log("onSuccess:",data)
//         },
//         onFailure:(err)=>{
//             console.error("onFailure:",err);
//         },
//         newPasswordRequired:(data)=>{
//             console.log("newPasswordReq:",data);
//         }
//     });
    
//     };
//   return (
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <input
//         type="text"
//         name="username"
//         placeholder="user name"
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Demo;

import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
// import { Email } from "@mui/icons-material";

import React,{createContext} from "react";

const poolData = {
  UserPoolId: 'us-east-1_JeGJ5dp7G',
  ClientId: '4b98f6bsasaj3e9bf8mva3ei6k'
};

const Pool = new CognitoUserPool(poolData);

const AccountContext=createContext();
const Account=(props)=>{
//for the session
  const getSession=async(Username,Password) =>{
    return await new Promise((resolve, reject)=>{
      const user=Pool.getCurrentUser();
      if(user){
        user.getSession(async(err,session) =>{
          if(err){
            reject();
          }else{
            const attributes=await new Promise((resolve,reject)=>{
              user.getUserAttributes((err,attributes)=>{
                if(err){
                  reject(err);
              }else{
                const results={};
                  
                for(let attribute of attributes)
                {
                  const {Name,Value} = attribute;
                  results[Name] = Value;
                }
                resolve(results);

            }
          });
        });
            resolve({user,...session,...attributes});
          }
        });

      } else {
        reject();
      }
    });
  };
  //
  const authenticate =async(Username,Password)=>{
   return await new Promise((resolve, reject)=>{


    const user=new CognitoUser({ Username, Pool });
    const authDetails=new AuthenticationDetails({
        Username,
        Password,
    });
    user.authenticateUser(authDetails,{
        onSuccess:(data)=>{
            console.log("onSuccess:",data)
            resolve(data);
        },
        onFailure:(err)=>{
            console.error("onFailure:",err);
            reject(err);
        },
        newPasswordRequired:(data)=>{
            console.log("newPasswordReq:",data);
            resolve(data);
        },
    });
   })
  };
  return (
    <AccountContext.Provider value={{authenticate,getSession}}>
{props.children}
    </AccountContext.Provider>
  );
};
export {Account,AccountContext};









