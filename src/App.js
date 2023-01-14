import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./pages/UserAuthentication/LoginPage";
import CreateNewAccount from "./pages/UserAuthentication/createNewAccount";
import NewPassword from "./pages/UserAuthentication/NewPassword";
import EmailConfirmation from "./pages/UserAuthentication/EmailConfirmation";
import SuccessfulPasswordReset from "./pages/UserAuthentication/SuccessfulPasswordReset";
import Verification from "./pages/UserAuthentication/Verification";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";

function App() {
  return (
    <div>
      <Layout><LoginPage/></Layout>
    </div>
  );
}

export default App;
