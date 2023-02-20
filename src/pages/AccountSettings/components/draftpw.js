import React, { useState } from 'react';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPasswordType, setCurrentPasswordType] = useState('password');
  const [newPasswordType, setNewPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // Here you can implement your password change logic, e.g. using an API call
      setMessage('Password successfully changed');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  const handleShowPassword = (inputType, setInputType) => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Change Password</h2>
      <label>
        Current Password:
        <input type={currentPasswordType} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        <span onClick={() => handleShowPassword(currentPasswordType, setCurrentPasswordType)}>{currentPasswordType === 'password' ? 'Show' : 'Hide'}</span>
      </label>
      <br />
      <label>
        New Password:
        <input type={newPasswordType} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <span onClick={() => handleShowPassword(newPasswordType, setNewPasswordType)}>{newPasswordType === 'password' ? 'Show' : 'Hide'}</span>
      </label>
      <br />
      <label>
        Confirm New Password:
        <input type={confirmPasswordType} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <span onClick={() => handleShowPassword(confirmPasswordType, setConfirmPasswordType)}>{confirmPasswordType === 'password' ? 'Show' : 'Hide'}</span>
      </label>
      <br />
      <button type="submit">Submit</button>
      <div>{message}</div>
    </form>
  );
}

export default ChangePassword;
