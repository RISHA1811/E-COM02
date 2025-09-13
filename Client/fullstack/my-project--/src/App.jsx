
import React, { useState } from 'react'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Rating from '@mui/material/Rating';
import Home from './pages/home';
import Search from './components/search';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import Footer from "./components/Footer";
import Qtybox from './components/Qtybox';
import Productlisting from './components/Productlisting';
import Productdetails from "./pages/Productdetails";
import  { createContext } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Productzoom from './components/Productzoom';
import { IoCloseSharp } from "react-icons/io5";
import Newproductdetails from './components/Newproductdetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart';
import Verify from './pages/Verify';
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
import Myaccount from './components/Myaccount';
import Mylist from './pages/Mylist';
import Myorder from './pages/Myorder';


const Mycontext = createContext();


function App() {
const [open, setOpen] = useState(false);
 const [maxWidth, setMaxWidth] = useState('lg');
 const [fullWidth, setFullWidth] = useState(true);
     const [sizeaction,setsizeaction] = useState(null);
  const [opencartpanel, setOpencartpanel] = useState(false);
const [closecartpanel,setclosecartpanel] =useState(false);

const[islogin , setislogin] =useState(false);


  
const cartclose = () => {
  setclosecartpanel(false);
};
  const handleClose = () => {
    setOpen(false);
  };
 const togglecartpanel = (newOpen) => () => {
    setOpencartpanel(newOpen);
  };



  const openalertbox=(status,msg)=>{
if(status==="success"){
  toast.success(msg);
}
if(status==="error"){
  toast.error(msg);
}

  }

  const values={
setOpen,
setOpencartpanel,
togglecartpanel,
opencartpanel,
openalertbox,
islogin,
setislogin
  };

  return (
    <>
    
    <BrowserRouter>
    <Mycontext.Provider value={values}>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home/>}/>
        <Route path={"/Productlisting"} exact={true} element={<Productlisting/>}/>
        <Route path={"/Product/:id"} exact={true} element={<Productdetails/>}/>
        <Route path={"/Login"} exact={true} element={<Login/>}/>
         <Route path={"/Register"} exact={true} element={<Register/>}/>
          <Route path={"/Cart"} exact={true} element={<Cart/>}/>
          <Route path={"/Verify"} exact={true} element={<Verify/>}/>
          <Route path={"/Forgot-Password"} exact={true} element={<ForgotPassword/>}/>
          <Route path={"/Checkout"} exact={true} element={<Checkout/>}/>
          <Route path={"/Myaccount"} exact={true} element={<Myaccount/>}/>
          <Route path={"/Mylist"} exact={true} element={<Mylist/>}/>
          <Route path={"/Myorder"} exact={true} element={<Myorder/>}/>

      </Routes>
      <Footer/>
      </Mycontext.Provider>
    </BrowserRouter>

      <Toaster />

     <Dialog
        open={open}
         fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productdetailsmodal'
      >
        
        <DialogContent>
          <div className="flex items-center w-full productdetailsmodalcontainer relative">
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute !top-0 !right-0 !bg-gray-100 ' ><IoCloseSharp className='text-[25px]' onClick={handleClose}/></Button>
            <div className="col1 w-[40%]">
              <Productzoom />
              
            </div>
            <div className="col2 w-[60%] py-8 px-8 productcontainer">
           
<Newproductdetails/>

            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/*cart panel*/}
     


    </>
  )
}

export default App;
export {Mycontext}
