import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form, Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Mycontext } from '../../App';


const Login = () => {
  
  const context= useContext(Mycontext);
  const[ispasswordshow,setispasswordshow] = useState(false);
const[formfields,setformfields] = useState({
  email: '',
  password: ''
});

const history = useNavigate();

  const forgotpassword = ()=>{
    
history("/verify");
context.openalertbox("success","OTP Send");
    


  }

  return (
    <>
    <section className='section py-10'>
        <div className="container ">
            <div className="card shadow-md w-[500px]  m-auto rounded-md bg-white p-5 px-10">
                <h3 className='text-center text-[18px] text-black font-[600]'>Login to your account</h3>
                <form className="form w-full ">
                    <div className="form-group w-full pt-5">
      <TextField id="email" label="Email Id *" variant="outlined" className='w-full mb-5' name='name' />
                    </div> 
                     <div className="form-group w-full pt-5 relative mb-4">
      <TextField type={ispasswordshow===false ? 'password' : 'text'} label="Password *" variant="outlined" className='w-full mb-5' name='password' />
                                   <Button className='!absolute top-[30px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={()=>setispasswordshow(!ispasswordshow)}>

                          {
                            ispasswordshow===false ?  <MdOutlineRemoveRedEye className='text-[20px] opacity-75'/>              
                             :
                             <FaEyeSlash className='text-[20px] opacity-75'/> 
                          }
                          </Button>

                    </div> 
<div className='text-left'>
                    <a className="link text-left cursor-pointer text-[14px] font-[600] " onClick={forgotpassword}>Forgot Password ?</a>
</div>

                    <div className="flex items-center w-full mt-5 mb-3">
                      <Button className='btn-org btn-lg w-full'>Login</Button>
                    </div>

                    <p >
                      Not Registered? <Link className='link font-[500] text-[14px] text-primary ' to="/register">Sign Up</Link>
                    </p>


                    <p className='text-center mt-3 font-[500]'>Or continue with social account</p>

<Button className='flex gap-3 text-[20px] !bg-gray-100 w-full !mt-2 !btn-lg !text-black'><FcGoogle className='text-[30px]'/> Login with Google</Button>




    </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login