import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//file resources
import "@fontsource/poppins";
import Bg01 from "../src/Images/BackgroundImg01.jpg";
import "@fontsource/poppins";

//user defined Component imports
import AdminHomePage from "./pages/UserHomePage/AdminHomePage";
import CommitteeMemberHomePage from "./pages/UserHomePage/CommitteeMemberHomePage";
import RouterComponent from "./MyRoutes";
import InternHomePage from "./pages/UserHomePage/InternHomePage";
import { Account } from "./pages/UserAuthentication/Account";
import Register from "./pages/UserAuthentication/createNewAccount";
import LoginPage from "./pages/UserAuthentication/LoginPage";
import ForgotPassword from "./pages/UserAuthentication/ForgotPassword";
import EmailConfirmation from "./pages/UserAuthentication/EmailConfirmation";
import SuccessfulPasswordReset from "./pages/UserAuthentication/SuccessfulPasswordReset";

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
        <Account>
          <LoginPage />
        </Account>

        {/* <AdminHomePage/> */}

        <Register />
        <ForgotPassword />
        <EmailConfirmation />
        <SuccessfulPasswordReset />
      </ThemeProvider>
    </div>
  );
}

export default App;
