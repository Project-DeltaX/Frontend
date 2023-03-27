import "./App.css";
import LoginPage from "./pages/UserAuthentication/LoginPage";
import CreateNewAccount from "./pages/UserAuthentication/createNewAccount";
import NewPassword from "./pages/UserAuthentication/NewPassword";
import EmailConfirmation from "./pages/UserAuthentication/EmailConfirmation";
import SuccessfulPasswordReset from "./pages/UserAuthentication/SuccessfulPasswordReset";
import Verification from "./pages/UserAuthentication/Verification";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import AdminHomePage from "./pages/UserHomePage/AdminHomePage";
import CommitteeMemberHomePage from "./pages/UserHomePage/CommitteeMemberHomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/poppins";
import Bg01 from "../src/Images/BackgroundImg01.jpg";
import RouterComponent from "./MyRoutes";



import PanelMemberHomePage from "./pages/UserHomePage/PanelMemberHomePage";
import { Login, RotateLeftOutlined } from "@mui/icons-material";
// import ChangePassword from "./pages/AccountSettings/components/draftpw";



import Register from "./pages/UserAuthentication/createNewAccount";

import { Account } from "./pages/UserAuthentication/Account";
import Status from "./pages/UserAuthentication/Status";
import Settings from "./pages/UserAuthentication/Settings";

//

//

//"#e8e1fa"
const theme = createTheme({
  overrides: {
    Layout: {
      backgroundColor: "#000000",
    },

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
      body1: {
        color: "#e8e1fa",
      },
    },
    stack: {},
    TextField: {
      allVariants: {
        fontFamily: "Poppins",
        fontSize: "30px",
      },
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

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
      {/* <Account>
      <RouterComponent/>
      </Account> */}
      <AdminHomePage/>
      
      </ThemeProvider>

    </div>
  );
}

export default App;
