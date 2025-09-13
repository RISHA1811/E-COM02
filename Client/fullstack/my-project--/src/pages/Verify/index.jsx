import React, { useState } from 'react'
import Otpbox from '../../components/Otpbox'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const verify = () => {
  const [otp,setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

//   const verifyotp=(e)=>{
// e.preventDefault();
// alert(otp);
//   }

  return (
    <>
    <section className='section py-10'>
        <div className="container ">
            <div className="card shadow-md w-[400px]  m-auto rounded-md bg-white p-5 px-10">
              <div className="text-center flex items-center justify-center ">
                <img src="/verify2.jpeg" width="80px"/>
              </div>
                <h3 className='text-center text-[18px] text-black font-[600] mt-4 mb-3 link transition-all'>Verify OTP</h3>
                <p className='mb-2'> OTP send to <span className='text-primary font-bold '>rishabhjha1811@gmail.com</span></p>


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