import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form, Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Mycontext } from '../../App';


const ForgotPassword = () => {
  const context= useContext(Mycontext);
  const[ispasswordshow,setispasswordshow] = useState(false);
  const[ispasswordshow2,setispasswordshow2] = useState(false);


const history = useNavigate();



  return (
    <>
    <section className='section py-10'>
        <div className="container ">
            <div className="card shadow-md w-[500px]  m-auto rounded-md bg-white p-5 px-10">
                <h3 className='text-center text-[18px] text-black font-[600]'>Forgot Password</h3>
                <form className="form w-full ">
                    <div className="form-group w-full pt-5 relative">
      <TextField type={ispasswordshow===false ? 'Password' : 'text'}  label="Password *" variant="outlined" className='w-full mb-5' name='name' />

          <Button className='!absolute top-[30px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={()=>setispasswordshow(!ispasswordshow)}>

                          {
                            ispasswordshow===false ?  <MdOutlineRemoveRedEye className='text-[20px] opacity-75'/>              
                             :
                             <FaEyeSlash className='text-[20px] opacity-75'/> 
                          }
                          </Button>
                    </div>


                     <div className="form-group w-full pt-5 relative mb-4">
      <TextField type={ispasswordshow2===false ? 'Confirm_Password' : 'text'} label=" Confirm Password *" variant="outlined" className='w-full mb-5' name='password' />
                                   <Button className='!absolute top-[30px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={()=>setispasswordshow2(!ispasswordshow2)}>

                          {
                            ispasswordshow2===false ?  <MdOutlineRemoveRedEye className='text-[20px] opacity-75'/>              
                             :
                             <FaEyeSlash className='text-[20px] opacity-75'/> 
                          }
                          </Button>

                    </div> 


                    <div className="flex items-center w-full mt-5 mb-3">
                      <Button className='btn-org btn-lg w-full'>Change Password</Button>
                    </div>

                  


    </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default ForgotPassword;
