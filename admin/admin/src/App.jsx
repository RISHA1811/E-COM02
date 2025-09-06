import React, { createContext, useState, useEffect, useContext } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Head from './Components/Head/index.jsx';
import Sidebar from './Components/Sidebar/index.jsx';
import Dashboard from './Pages/Dashboard/index.jsx';
import { useMediaQuery } from 'react-responsive';
import Login from './Pages/Login/index.jsx';
import Signup from './Pages/Signup/index.jsx';
import Profile from './Pages/Profile/index.jsx';
import Orders from './Pages/Orders/index.jsx';
import LoginSecurity from './Pages/LoginSecurity/index.jsx';
import Exclusive from './Pages/Exclusive/index.jsx';
import Addresses from './Pages/Addresses/index.jsx';
import PaymentOptions from './Pages/PaymentOptions/index.jsx';
import PayBalance from './Pages/PayBalance/index.jsx';
import ContactUs from './Pages/ContactUs/index.jsx';

const MyContext= createContext();

const Layout = () => {
  const { isMobile, issidebaropen } = useContext(MyContext);
  return (
    <>
      <section className="main relative">
        <Head/>
        <div className="contentmain flex">
          <div className={`sidebarwrapper bg-white ${isMobile ? 'absolute top-0 left-0 h-full z-10' : 'relative'} ${issidebaropen ? (isMobile ? 'w-64' : 'w-[18%]') : 'w-0'} transition-all overflow-hidden`}>
            <Sidebar/>
          </div>
          <div className={`contentright py-4 px-5 ${isMobile ? 'w-full' : (issidebaropen ? 'w-[82%]' : 'w-full')} ${isMobile && issidebaropen ? 'ml-64' : 'ml-0'} transition-all`}>
            <Outlet/>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [issidebaropen,setissidebaropen] = useState(true);

  useEffect(() => {
    if(isMobile){
      setissidebaropen(false);
    } else {
      setissidebaropen(true);
    }
  }, [isMobile]);

  const values = {
    issidebaropen,
    setissidebaropen,
    isMobile
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "login-security",
          element: <LoginSecurity />,
        },
        {
          path: "exclusive",
          element: <Exclusive />,
        },
        {
          path: "addresses",
          element: <Addresses />,
        },
        {
          path: "payment-options",
          element: <PaymentOptions />,
        },
        {
          path: "pay-balance",
          element: <PayBalance />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router}/>
    </MyContext.Provider>
  )
}

export default App;
export {MyContext} ;
