import Button from '@mui/material/Button'
import React, { useContext, useState } from 'react'
import { Link , NavLink } from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import Otpbox from '../../Components/Otpbox';






const Verifyaccount = () => {

 const [otp,setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };



  return (
    <>
    <section className=' bg-[#fff] w-full h-[100vh] top-0 left-0 fixed '>
        <header className='w-full top-0 left-0 px-4 py-3 flex items-center justify-between z-50 '>
            <Link to="/">
            <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className='w-[150px]'/>
            </Link>


            <div className="flex items-center gap-4 ">
 <NavLink 
        to="/Login" 
        className={({ isActive }) => (isActive ? "active-link" : "normal-link")}
      >     <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1 '><FiLogIn className='text-[15px]'/>Signup</Button>
</NavLink>
             

                

            </div>
        </header>


{/* <img src="https://fullstack-ecommerce-add-admin.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp" className='w-full fixed top-0 left-0 opacity-5' /> */}




<div className="loginbox py-10 ">
<div className="container">
<div className="login  ">

  
  <div className="card shadow-md m-auto w-[600px] bg-[#f1f1f1] !rounded-lg p-4">


  
  <img src="/verify2.jpeg" className='w-[100px]'  />
    

<h3 className='text-[40px] font-[800]  text-center '>Welcome Back!</h3>
<h3 className='text-[40px] font-[800]  text-center '>Please Verify Your Account</h3>

<p className='text-center text-[15px]'>OTP send to <span className='text-primary font-bold'>rishabhjha23@gamil.com</span></p>
<br />


    <div className="text-center flex items-center justify-center flex-col">
      <Otpbox length={6} onChange={handleOtpChange} />
</div>

<br />
<div className='w-[300px] m-auto'>
<Button className='btn-blue w-full '>Verify Otp</Button>
</div>

                      </div>
</div>
</div>
</div>
    </section>
    </>
  )
}

export default Verifyaccount;

