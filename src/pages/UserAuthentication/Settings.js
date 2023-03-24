import React , {useEffect,useContext, useState} from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";








export default()=>{
const {getSession} =useContext(AccountContext);
    const [loggedIn,setLoggedIn]=useState(false);
    useEffect(()=>{
        getSession().then(()=>{
            setLoggedIn(true);
        

        });
    },
   [] );
 return(
    <div>
        { loggedIn && (
            <>
<h2>Settings</h2>
            </>
        )}
    </div>
 );
        };