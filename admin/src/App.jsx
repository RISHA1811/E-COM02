import React, { createContext, useState } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Head from './Components/Head/index.jsx';
import Sidebar from './Components/Sidebar/index.jsx';
import Dashboard from './Pages/Dashboard/index.jsx';

const MyContext= createContext();



function App() {


const [issidebaropen,setissidebaropen] = useState(true)

    const values = {
issidebaropen,
setissidebaropen
  }


  const router = createBrowserRouter([
    {
      path:"/",
      exact:true,
      element: (
        <>
        <section className="main">
          <Head/>
          <div className="contentmain flex">
            <div className={` overflow-hidden sidebarwrapper ${issidebaropen===true ? 'w-[18%]': 'w-[0px] opacity-0'}  transition-all`}>
              <Sidebar/>
            </div>
            <div className={`contentright py-4 px-5 ${issidebaropen===false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Dashboard/>
            </div>
          </div>
        </section>
        </>
      ),
    },
  ]);



  return (
    <>
    <MyContext.Provider value={values}>
    <RouterProvider router={router}/>
    </MyContext.Provider>
    </>
  )
}

export default App;
export {MyContext} ;

