import React, { createContext, useState } from 'react';
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Head from './Components/Head/index.jsx';
import Sidebar from './Components/Sidebar/index.jsx';
import Dashboard from './Pages/Dashboard/index.jsx';
import Login from './Pages/Login/index.jsx';
import Signup from './Pages/Signup/index.jsx';
import Products from './Pages/Products/index.jsx';
import Addproduct from './Pages/Addproduct/index.jsx';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const MyContext= createContext();



function App() {


const[islogin,Setislogin] =useState(false)
  const [isopenfullscreenpanel,setisopenfullscreenpanel] = useState(
    {
      open:false,
      model:''
    }
  )

const [issidebaropen,setissidebaropen] = useState(true)




    const values = {
issidebaropen,
setissidebaropen,
islogin,
Setislogin,
isopenfullscreenpanel,
setisopenfullscreenpanel
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
    {
      path:"/Login",
      exact:true,
      element: (
        <>
        <Login/>
        </>
      ),
    },

      {
      path:"/Signup",
      exact:true,
      element: (
        
        <Signup/>
        
      ),
    },

 


 {
      path:"/Product",
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
              <Products/>
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


{/* on clicking the add product in product section this is component of that */}
 <Dialog
        fullScreen
        open={isopenfullscreenpanel.open}
        onClose={()=>setisopenfullscreenpanel({
          open:false
        })}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>

            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>setisopenfullscreenpanel({
          open:false
        })}
              aria-label="close"
            >
              <IoMdClose className='text-gray-800' />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className='text-gray-800'>{isopenfullscreenpanel?.model}</span>
            </Typography>
            
          </Toolbar>
        </AppBar>
       {
        isopenfullscreenpanel?.model === "Add Product" && <Addproduct/>
       }
      </Dialog>



    </MyContext.Provider>
    </>
  )
}

export default App;
export {MyContext} ;

