import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  // State variable to keep track of the login status

  const [status, setStatus] = useState(false);
  // Access the getSession function from the AccountContext

  const { getSession } = useContext(AccountContext);
  // Use the useEffect hook to call getSession when the component mounts

  useEffect(() => {
    getSession().then((session) => {
      console.log("session:", session);
      // If getSession succeeds, set the status to true

      setStatus(true);
    });
  }, []);
  // Render the login status

  return <div>{status ? "logged In" : "failed"}</div>;
};
// Export the Status component as the default export of the module

export default Status;
