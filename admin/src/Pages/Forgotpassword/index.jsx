import Button from '@mui/material/Button'
import React, { useContext, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";






const Forgotpassword = () => {

  const[isshowpassword,setisshowpassword] =useState(false);




  return (
    <>
    <section className=' bg-[#fff] w-full h-full top-0 left-0 fixed '>
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
<h1 className='text-[40px] font-[800]  text-center'>Having trouble to sign in? <br /> Reset your password</h1>

<div className="form-group w-full pt-5 px-8">
      <TextField id="email"  variant="outlined" className='w-full mb-5' name='name' placeholder='Enter your Email'/>
                    </div> 
                  
   <div className="flex items-center w-full mt-6 mb-0 px-8 flex-col">
                      <Button className='btn-blue !btn-lg  w-[100%] !text-[18px]   !text-[#fff] '>Reset Password </Button>
                    </div>
                    <br />
                    
 <div className="text-center flex  items-center justify-center gap-4">
                    <p>Don't Want to reset?</p>
                                      <Link to="/Signup">  <p className=" text-primary link text-left cursor-pointer text-[14px] font-[600]  cursor-pointer" > Sign In</p></Link>
                    
                   </div>
                 

                   





                      </div>
</div>
</div>
</div>
    </section>
    </>
  )
}

export default Forgotpassword ;

