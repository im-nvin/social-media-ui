import Login from "./pages/login/Login"
import Home from "./pages/home/Home"

import Profile from "./pages/profile/Profile"

import Register from "./pages/register/Register";
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext)
  // ----------------------------------------------------------------------------
  //we have create current user to chck wheather user is login or not if not then redirect user to login page
  const currentUser = true;
  //this is dummy user so in backened first create auth and real user from 1 prt.. 
  // ------------------------------------------------------------------------------------------
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`} style={{margin:0, padding:0}}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="./login" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
