import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./pages/UserAuthentication/LoginPage";
import CreateNewAccount from "./pages/UserAuthentication/createNewAccount";
import NewPassword from "./pages/UserAuthentication/NewPassword";
import EmailConfirmation from "./pages/UserAuthentication/EmailConfirmation";
import SuccessfulPasswordReset from "./pages/UserAuthentication/SuccessfulPasswordReset";
import Verification from "./pages/UserAuthentication/Verification";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import UserProfile from "./pages/AccountSettings/UserProfile";
import AdminHomePage from "./pages/UserHomePage/AdminHomePage";
import CommitteeMemberHomePage from "./pages/UserHomePage/CommitteeMemberHomePage";
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Interview from "./pages/Interview&evaluation/Interview";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/createNewAccount" element={<CreateNewAccount/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/adminHome" element={<AdminHomePage/>}/>
        <Route path="/verification" element={<Verification/>} />
        <Route path="/Emailconfirmationpage" element={<NewPassword/>} />
        <Route path="/newpw" element={<SuccessfulPasswordReset/>} />
        <Route path="createacc" element={<EmailConfirmation/>} />
        
      </Routes> */}
      {/* <Interview/> */}
      <CommitteeMemberHomePage/>
      
    </div>
  );
}

export default App;
