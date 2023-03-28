// Importing necessary libraries and dependencies

import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";

// Functional Component to change password

const ChangePassword = () => {
  // Declaring state variables using useState hook

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Accessing getSession method from AccountContext using useContext hook

  const { getSession } = useContext(AccountContext);
  // onSubmit function to handle form submission

  const onSubmit = (event) => {
    event.preventDefault();
    // Calling getSession method from AccountContext and handling promise using then

    getSession().then(({ user }) => {
      // Calling changePassword method on user object received from getSession promise

      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          // Handling error condition
          console.error(err);
        } else {
          // Handling success condition
          console.log(result);
        }
      });
    });
  };
  // Returning the JSX markup
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Current password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label>New password</label>
        <input
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <button type="submit">ChangePassword</button>
      </form>
    </div>
  );
};
// Exporting the ChangePassword component

export default ChangePassword;
