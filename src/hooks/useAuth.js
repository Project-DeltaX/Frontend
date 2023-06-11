import { useContext } from "react";
import { AuthContext } from "../pages/UserAuthentication/Auth";


const useAuth = () =>{
    return useContext(AuthContext);
} 

export default useAuth;