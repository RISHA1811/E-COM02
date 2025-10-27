import React, { useContext, useEffect, useState } from 'react'
import Otpbox from '../../components/Otpbox'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../utils/api.js';
import { Mycontext } from '../../App';

const verify = () => {
  const [otp,setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

const context = useContext(Mycontext);



const history = useNavigate();


const verifyotp =(e)=>{
  e.preventDefault();

const actionType = localStorage.getItem("actionType");

if(actionType !== "forgot-password"){

 postData("/api/user/verifyEmail", {
    email:localStorage.getItem("userEmail"),
    otp: otp
  }).then((response) => {
    if(response?.error === false) {
      context.openalertbox("Success", response?.message);
      localStorage.removeItem("userEmail")
      history("/Login")
    } else {
      context.openalertbox("error", response?.message);
    }
  }) 
} else {
  postData("/api/user/verify-forgot-password-otp", {
    email:localStorage.getItem("userEmail"),
    otp: otp
  }).then((response) => {
    if(response?.error === false) {
      context.openalertbox("Success", response?.message);
      history("/Forgot-Password")
    } else {
      context.openalertbox("error", response?.message);
    }
  }) 
}

}



  return (
    <>
    <section className='section py-10'>
        <div className="container ">
            <div className="card shadow-md w-[400px]  m-auto rounded-md bg-white p-5 px-10">
              <div className="text-center flex items-center justify-center ">
                <img src="/verify2.jpeg" width="80px"/>
              </div>
                <h3 className='text-center text-[18px] text-black font-[600] mt-4 mb-3 link transition-all'>Verify OTP</h3>
                <p className='mb-2 text-center'> OTP send to <span className='text-primary font-bold '>{localStorage.getItem("userEmail")}</span></p>


 
               <form onSubmit={verifyotp}>
  <Otpbox length={6} onChange={handleOtpChange} />

  <div className="flex items-center justify-center p-3">
    <Button type="submit" className="w-full btn-org btn-lg !mt-4">
      Verify OTP
    </Button>
  </div>
</form>


            </div>
        </div>
    </section>
    
    </>
  )
}

export default verify