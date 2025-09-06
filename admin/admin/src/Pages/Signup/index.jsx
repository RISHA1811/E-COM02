import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [isshowpassword, setisshowpassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Basic validation
    if (fullName && email && password) {
      navigate('/');
    }
  };

  return (
    <>
      <section className='bg-[#fff] w-full h-full top-0 left-0 fixed'>
        <header className='w-full top-0 left-0 px-4 py-3 flex items-center justify-between z-50'>
          <Link to="/">
            <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className='w-[150px]' />
          </Link>
        </header>

        <img src="https://fullstack-ecommerce-add-admin.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp" className='w-full fixed top-0 left-0 opacity-5' />

        <div className="loginbox py-10">
          <div className="container">
            <div className="login">
              <div className="card shadow-md m-auto w-[620px] bg-[#f1f1f1] !rounded-lg p-4">
                <h3 className='text-[40px] font-[800] text-center'>Join us today get special</h3>
                <h3 className='text-[40px] font-[800] text-center'>benefits and stay up-to-date.</h3>

                <div className="form-group w-full pt-5 px-8">
                  <TextField id="fullname" label="Full Name *" variant="outlined" className='w-full mb-5' name='fullname' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>

                <div className="form-group w-full pt-5 px-8">
                  <TextField id="email" label="Email Id *" variant="outlined" className='w-full mb-5' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group w-full pt-5 px-8 relative">
                  <TextField
                    type={isshowpassword ? 'text' : 'password'}
                    id="Password"
                    label="Password *"
                    variant="outlined"
                    className='w-full mb-5'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    className='!absolute top-[30px] right-[40px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px]'
                    onClick={() => setisshowpassword(!isshowpassword)}
                  >
                    {isshowpassword ? <IoMdEye className='text-gray-600 text-[18px]' /> : <FaEyeSlash className='text-gray-600 text-[18px]' />}
                  </Button>
                </div>

                <div className='text-left mt-2 px-8'>
                  <Link to="/forgotpassword" className="link text-left cursor-pointer text-[14px] font-[600]">
                    Forgot Password ?
                  </Link>
                </div>

                <div className="flex items-center w-full mt-6 mb-4 px-8">
                  <Button className='!bg-[rgba(0,0,0,0.8)] !btn-lg w-[100%] !text-[17px] uppercase !text-[#fff]' onClick={handleSignup}>
                    Create account
                  </Button>
                </div>

                <p className='px-8'>
                  Already have an account? <Button className='link font-[500] text-[14px] text-primary' onClick={() => navigate('/login')}>Login</Button>
                </p>

                <p className='text-center mt-3 font-[400] w-full'>
                  <span className='opacity-20 text-[20px]'>----------</span>
                  Or continue with social accounts
                  <span className='opacity-20 text-[20px]'>----------</span>
                </p>

                <div className="icons flex items-center justify-between gap-3 px-8">
                  <Button className='flex gap-3 text-[20px] !bg-gray-200 w-full !mt-2 btn-sm !text-black'>
                    <FcGoogle className='text-[30px]' /> Signup with Google
                  </Button>
                  <Button className='flex gap-3 !bg-lg text-[20px] !bg-gray-200 w-full !mt-2 btn-sm !text-black'>
                    <FaApple className='text-[30px]' /> Signup with Apple
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;