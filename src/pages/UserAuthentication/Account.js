

import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
// import { Email } from "@mui/icons-material";
import Pool from "../UserPool.js"

import React,{createContext, useState} from "react";


const AccountContext=createContext();
const Account=(props)=>{
  const [jToken,setJToken] = useState({});
  const [loginStatus,setLoginStatus] = useState(false);
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
            console.log("onSuccess:")
            console.log(data['accessToken']['jwtToken']);
            resolve(data);
            setJToken(data);
            setLoginStatus(true);
        },
        onFailure:(err)=>{
            console.error("onFailure:",err);
            reject(err);
        },
        newPasswordRequired:(data)=>{
            console.log("newPasswordReq:");
            resolve(data);
        },
    });
   })
  };

  const getToken=()=>{
    return jToken;
  }
  const getLoginStatus=()=>{
    return loginStatus;
  }
  return (
    <AccountContext.Provider value={{authenticate,getSession,setJToken,getToken,getLoginStatus}}>
{props.children}
    </AccountContext.Provider>
  );
};
export {Account,AccountContext};









