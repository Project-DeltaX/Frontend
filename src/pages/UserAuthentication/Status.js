import React,{useState,useContext,useEffect} from "react";
import { AccountContext } from "./Account";
 
const Status=()=>{
const [status,setStatus]=useState(false);
const {getSession}=useContext(AccountContext);
useEffect(()=>{
getSession()
.then((session)=>{
    console.log("session:",session);
    setStatus(true);
})
},[])
return (
    <div>
        {status?"logged In":"failed"}
    </div>
)
};
export default Status;