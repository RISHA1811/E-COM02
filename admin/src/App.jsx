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
import Homesliderbanner from './Pages/Homesliderbanner/index.jsx';
import Addhomeslide from './Pages/Homesliderbanner/addhomeslide.jsx';
import Categorylist from './Pages/Category/index.jsx';
import Addcategory from './Pages/Category/addcategory.jsx';
import Subcatlist from './Pages/Category/subcatlist.jsx';
import Addsubcatlist from './Pages/Category/addsubcat.jsx';
import User from './Pages/Users/index.jsx';
import Order from './Pages/Order/index.jsx';
import Forgotpassword from './Pages/Forgotpassword/index.jsx';
import Verifyaccount from './Pages/Verifyaccount/index.jsx';
import Changepassword from './Pages/Changepassword/index.jsx';



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
        <>
        <Signup/>
        </>
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

     {
      path:"/Homeslider/list",
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
              <Homesliderbanner/>
            </div>
          </div>
        </section>
        </>
      ),
    },



  {
      path:"/Forgotpassword",
      exact:true,
      element: (
        <>
        <section className="main">
          
          <div className="contentmain flex">
            <div className={` overflow-hidden sidebarwrapper ${issidebaropen===true ? 'w-[18%]': 'w-[0px] opacity-0'}  transition-all`}>
              <Sidebar/>
            </div>
            <div className={`contentright py-4 px-5 ${issidebaropen===false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Forgotpassword/>
            </div>
          </div>
        </section>
        </>
      ),
    },
 {
      path:"/Verifyaccount",
      exact:true,
      element: (
        <>
        <section className="main">
          
          <div className="contentmain flex">
            <div className={` overflow-hidden sidebarwrapper ${issidebaropen===true ? 'w-[18%]': 'w-[0px] opacity-0'}  transition-all`}>
              <Sidebar/>
            </div>
            <div className={`contentright py-4 px-5 ${issidebaropen===false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Verifyaccount/>
            </div>
          </div>
        </section>
        </>
      ),
    },


 {
      path:"/Changepassword",
      exact:true,
      element: (
        <>
        <section className="main">
           
          <div className="contentmain flex">
            <div className={` overflow-hidden sidebarwrapper ${issidebaropen===true ? 'w-[18%]': 'w-[0px] opacity-0'}  transition-all`}>
              <Sidebar/>
            </div>
            <div className={`contentright py-4 px-5 ${issidebaropen===false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Changepassword/>
            </div>
          </div>
        </section>
        </>
      ),
    },


      {
      path:"/Category/list",
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
              <Categorylist/>
            </div>
          </div>
        </section>
        </>
      ),
    },

       {
      path:"/SubCategory/list",
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
              <Subcatlist/>
            </div>
          </div>
        </section>
        </>
      ),
    },

        {
      path:"/user",
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
              <User/>
            </div>
          </div>
        </section>
        </>
      ),
    },
    

         {
      path:"/order",
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
              <Order/>
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

       {
        isopenfullscreenpanel?.model === "Add Slides" && <Addhomeslide/>
       }

 {
        isopenfullscreenpanel?.model === "Add New Category" && <Addcategory/>
       }

        {
        isopenfullscreenpanel?.model === "Add New Sub Category" && <Addsubcatlist/>
       }



      </Dialog>



    </MyContext.Provider>
    </>
  )
}

export default App;
export {MyContext} ;

