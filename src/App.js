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
<<<<<<< HEAD
import { BrowserRouter , Route,Routes } from "react-router-dom";
<<<<<<< HEAD
import Interview from "./pages/Interview&evaluation/Interview";
=======
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "@fontsource/poppins"
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import Bg01 from "../src/Images/BackgroundImg01.jpg";
import { RotateLeftOutlined } from "@mui/icons-material";
import ChangePassword from "./pages/AccountSettings/components/draftpw";
>>>>>>> origin

import Dashboard from "./pages/Dashboard/Dashboard";


import Register from "./pages/SignInDraft";
import { Account } from "./pages/UserAuthentication/Account";


//


//




//"#e8e1fa"
const theme = createTheme({
  overrides: {
    Layout: {
      backgroundColor: "#000000",
    },

<<<<<<< HEAD
>>>>>>> origin
=======
    typography: {
      allVariants: {
        fontFamily: "Poppins",
      },
      h4: {
        fontSize: "30px",
        fontWeight: 600,
      },
      h6: {
        fontSize: "18px",
        color: "#e8e1fa",
      },
      h5: {
        fontSize: "22px",
        color: "#1168DC",
        fontWeight: 500,
      },
      body1:{
        color: "#e8e1fa",
      }
    },
    stack: {},
    TextField: {
      allVariants:{
        fontFamily: "Poppins",
        fontSize: "30px",
      }
    },
  },
  MuiListItem: {
    root: {
      "&.Mui-selected": {
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "red",
        },
      },
    },
  },
  stack: {},
});
>>>>>>> origin

function App() {
  return (
    <div>
<<<<<<< HEAD
=======
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
>>>>>>> origin
      {/* <Routes>
=======
        {/* <Routes>
>>>>>>> origin
        <Route path="/" element={<LoginPage/>} />
        <Route path="/createnewaccount" element={<CreateNewAccount/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/Emailconfirmationpage" element={<NewPassword/>} />
        <Route path="/newpw" element={<SuccessfulPasswordReset/>} />
        <Route path="createacc" element={<EmailConfirmation/>} />
        <Route path="/adminHome" element={<AdminHomePage/>}/>
        <Route path="/adminHome/Dashboard" element={<Dashboard/>}/>

        
      </Routes> */}
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <Interview/> */}
      <CommitteeMemberHomePage/>
      
=======
      
      <AdminHomePage/>
      {/* <CommitteeMemberHomePage/> */}
=======

        <AdminHomePage />
        {/* <CommitteeMemberHomePage/> */}
>>>>>>> origin
      </ThemeProvider>
>>>>>>> origin
    </div>
  );
}

export default App;
