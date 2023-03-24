import Dashboard from "./pages/DashBoard/Dashboard";
import UserManagement from "./pages/UserManagement/UserManagement";

//Admin
import AdminHomePage from "./pages/UserHomePage/AdminHomePage";

const routes = {
  Admin: [
    {
      path: '/',
      exact: true,
      component: AdminHomePage,
    },
    {
      path: '/admin',
      component: Dashboard,
    },
    {
        path: '/dashboard',
        component: Dashboard,
      },
    // other admin routes
  ],
  CommitteeMember: [
    {
      path: '/',
      exact: true,
      component: Dashboard,
    },
    {
      path: '/profile',
      component: Profile,
    },
    // other user routes
  ],
  guest: [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    // other guest routes
  ],
};

export default routes;
