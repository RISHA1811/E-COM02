import React, { useContext, useEffect, useState } from 'react'
import Otpbox from '../../components/Otpbox'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../utils/api';
import { Mycontext } from '../../App';

const verify = () => {
  const [otp,setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };




const history = useNavigate();
const context = useContext(Mycontext)
  const verifyotp=(e)=>{
e.preventDefault();
postData("/api/user/verifyEmail",{
  email:localStorage.getItem("userEmail"),
  otp:opt
}).then((res)=>{
 if(res?.error==false){
context.openalertbox("success", res?.message);
localStorage.removeItem("userEmail")
history("/login")
 }else{
context.openalertbox("error", res?.message);
 }
})

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
                <p className='mb-2'> OTP send to <span className='text-primary font-bold '>{localStorage.getItem("userEmail")}</span></p>


{/* onSubmit={verifyotp} this will be with form tag */}
                <form >

                <Otpbox length={6} onChange={handleOtpChange} />


                <div className="flex items-center justify-center">
                  <Button type='submit' className=' w-full btn-org btn-lg !mt-4'>Verify OTP</Button>
                </div>

                </form>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default verify