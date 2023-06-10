import { useLocation, Navigate, Outlet, Route } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import jwtDecode from "jwt-decode";

function PrivateRoute({ allowedRoles }) {
  const location = useLocation();
  const token = localStorage.getItem("idtoken");
  let role = null;
  const decodedToken = jwtDecode(token);
  role = decodedToken["custom:guestRole"];

  const { getLoginStatus } = useAuth();
  const isAuthenticated = getLoginStatus();

  // if (!isAuthenticated) {
  //   // Redirect to login page if user is not authenticated
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }else{

  // }

  // // Check if the user's role is allowed to access the route
  // if (!allowedRoles.includes(role)) {
  //   // Redirect to a fallback page or show an access denied message
  //   return <Navigate to="/access-denied" state={{ from: location }} replace />;
  // }

  // Render the component for the authenticated user with allowed role
  return (
    !isAuthenticated ? (
      <Navigate to="/" state={{ from: location }} replace />
    ) : isAuthenticated && !allowedRoles.includes(role) ? (
      <Navigate to="/access-denied" state={{ from: location }} replace />
    ) : (
      <Outlet/>
    )
  );
}

export default PrivateRoute;
