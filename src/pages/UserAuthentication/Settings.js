<<<<<<< HEAD
//need to delete this file

import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";
=======
// import React, { useEffect, useContext, useState } from "react";
// import { AccountContext } from "./Account";
// import ChangePassword from "./ChangePassword";
>>>>>>> d1f07cdcf914bf22c210e5abb0ffeb84ffc3f496

// // This component renders the settings page

// export default () => {
//   // Import the getSession method from the AccountContext

//   const { getSession } = useContext(AccountContext);
//   // Set the initial state of loggedIn to false

//   const [loggedIn, setLoggedIn] = useState(false);
//   // Use the useEffect hook to check if the user is logged in

//   useEffect(() => {
//     // Call the getSession method from the AccountContext

//     getSession().then(() => {
//       // If getSession is successful, set loggedIn to true

//       setLoggedIn(true);
//     });
//   }, []);
//   // If loggedIn is true, render the settings page

//   return (
//     <div>
//       {loggedIn && (
//         <>
//           <h2>Settings</h2>
//         </>
//       )}
//     </div>
//   );
// };
