import './App.css';
import Dashboard from './pages/Dashboard';
import LoginPage from "./pages/LoginPage";
import CreateNewAccount from './pages/createNewAccount';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import EmailConfirmation from './pages/EmailConfirmation';
import SuccessfulPasswordReset from './pages/SuccessfulPasswordReset';
import Verification from './pages/Verification';

function App() {
  return (
    <div>
      <LoginPage />
      <Dashboard/>
      <CreateNewAccount/>
  <ForgotPassword/>

  <NewPassword />
  <EmailConfirmation/>
  <Verification />
<SuccessfulPasswordReset/>

    </div>
  );
}

export default App;
