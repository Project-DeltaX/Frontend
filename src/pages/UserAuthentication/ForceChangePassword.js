import React, { useState, useEffect } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Button, TextField, Typography } from '@mui/material';

// Replace these values with your own Cognito User Pool details
const userPoolId = 'us-east-1_JeGJ5dp7G';
const clientId = '4b98f6bsasaj3e9bf8mva3ei6k';
const region = 'us-east-1';

const ForceChangePasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = () => {
    const cognitoUser = getCurrentUser();

    if (cognitoUser === null) {
      console.log('User not authenticated.');
      // Redirect to login page or handle authentication state accordingly
    } else {
      cognitoUser.getSession((error, session) => {
        if (error) {
          console.log('Error fetching user session:', error);
          // Redirect to login page or handle authentication state accordingly
        } else {
          console.log('User authenticated. Session:', session);
          // Handle authenticated state
        }
      });
    }
  };

  const getCurrentUser = () => {
    const userPool = new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    });

    return userPool.getCurrentUser();
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const cognitoUser = getCurrentUser();

    if (cognitoUser !== null) {
      cognitoUser.getSession((error, session) => {
        if (error) {
          console.log('Error fetching user session:', error);
          setErrorMessage('Error changing password. Please try again.');
        } else {
          const authenticationDetails = new AuthenticationDetails({
            Username: cognitoUser.getUsername(),
            Password: '', // Empty password as the user is forced to change it
            Session: session,
          });

          cognitoUser.authenticateUser(authenticationDetails, {
            newPassword,
          }, (error, result) => {
            if (error) {
              console.log('Error changing password:', error);
              setErrorMessage('Error changing password. Please try again.');
            } else {
              console.log('Password changed successfully.');
              // Redirect to desired page
            }
          });
        }
      });
    }
  };

  return (
    <div>
      <Typography variant="h4">Force Change Password</Typography>
      <TextField
        type="password"
        label="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <TextField
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handlePasswordChange}>
        Change Password
      </Button>
      {errorMessage && <Typography variant="body1">{errorMessage}</Typography>}
    </div>
  );
};

export default ForceChangePasswordPage;
