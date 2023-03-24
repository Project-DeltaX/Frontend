
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









