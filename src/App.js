import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./pages/UserAuthentication/LoginPage";
import CreateNewAccount from "./pages/UserAuthentication/createNewAccount";
import NewPassword from "./pages/UserAuthentication/NewPassword";
import EmailConfirmation from "./pages/UserAuthentication/EmailConfirmation";
import SuccessfulPasswordReset from "./pages/UserAuthentication/SuccessfulPasswordReset";
import Verification from "./pages/UserAuthentication/Verification";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import AdminHomePage from "./pages/UserHomePage/AdminHomePage";
import CommitteeMemberHomePage from "./pages/UserHomePage/CommitteeMemberHomePage";
import { BrowserRouter , Route,Routes } from "react-router-dom";
<<<<<<< HEAD
import Interview from "./pages/Interview&evaluation/Interview";
=======
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "@fontsource/poppins"

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    },
    h4: {
      fontSize:'26px',
      fontWeight: 600,
    },
    h6:{
      fontSize:'18px',
      color:"#e8e1fa"
    }
  },
  stack:{
    
  }
});

>>>>>>> origin

function App() {
  return (
    <div>
<<<<<<< HEAD
=======
      <ThemeProvider theme={theme}>
>>>>>>> origin
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
<<<<<<< HEAD
      {/* <Interview/> */}
      <CommitteeMemberHomePage/>
      
=======
      
      <AdminHomePage/>
      {/* <CommitteeMemberHomePage/> */}
      </ThemeProvider>
>>>>>>> origin
    </div>
  );
}

export default App;
