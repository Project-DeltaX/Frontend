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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import Bg01 from "../src/Images/BackgroundImg01.jpg";
import { RotateLeftOutlined } from "@mui/icons-material";

//"#e8e1fa"
const theme = createTheme({
<<<<<<< HEAD
  overrides: {

    Layout: {
      backgroundColor:"#000000"
=======
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
>>>>>>> origin
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

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
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

        <AdminHomePage />
        {/* <CommitteeMemberHomePage/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
