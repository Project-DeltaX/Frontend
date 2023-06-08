import { useLocation, Navigate ,Outlet} from "react-router-dom";
import { Auth } from "./Auth";
import jwtDecode from "jwt-decode";

const RequireAuth = (props) =>{
    const location = useLocation();
    const token = localStorage.getItem("idtoken");
  let role = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      role = decodedToken["custom:guestRole"];
    } catch (error) {
      console.error("Error decoding the JWT token:", error);
    }
  }

    return(
        <>
        {token?(props.children):(<Navigate to="/" state={{ from: location }} replace/>)}
        </>        
    )
}

export default RequireAuth;