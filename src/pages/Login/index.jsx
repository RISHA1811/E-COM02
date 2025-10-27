import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form, Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Mycontext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api.js';


const Login = () => {
  
  const[ispasswordshow,setispasswordshow] = useState(false);
     const[isLoading, setisLoading] = useState(false)
      // use state to use api
      const [formFields, setformFields] = useState({
        email:"",
        password:""
      })
    
    
    const context = useContext(Mycontext);
    const history = useNavigate();
    



 const forgotpassword = ()=>{

      if(formFields.email===""){
        context.openalertbox("error","Please enter email Id")       
        return false;
}
else {   
  context.openalertbox("success",`OTP Send to ${formFields.email}`);    
  localStorage.setItem("userEmail",formFields.email);
  localStorage.setItem("actionType",'forgot-password');


  postData("/api/user/forgot-password", {
    email:formFields.email,
  }).then((response) => {
    if(response?.error === false) {
      context.openalertbox("Success", response?.message);
      history("/Verify")
    }
    else{
      context.openalertbox("error", res?.message);
    }
  })
}


  }


    const onchangeInput = (e)=>{
      const {name, value}= e.target;
    setformFields(()=> {
      return {
        ...formFields,
        [name]:value
      }
    })
    }
    
    
    const validevalue = Object.values(formFields).every(el => el)
    
    
    
    
    
    const handleSubmit =(e) =>{
    
     e.preventDefault();
    
     setisLoading(true);
    
   
    
    if(formFields.email===""){
      context.openalertbox("error","Please enter emailId")       
    return false
    }
    
    if(formFields.password===""){
      context.openalertbox("error","Please enter password")       
    return false
    }
    
    try {
      postData("/api/user/login",formFields,{withCredentials : true}).then((res)=>{
        console.log(res)
    
        if(res?.error !== true){
            context.openalertbox("success",res?.message)       
            // localStorage.setItem("userEmail",formFields.email)
            setformFields(
              {
                
                email:"",
                password:""
              })

            localStorage.setItem("accesstoken",res?.data?.accesstoken);
            localStorage.setItem("refreshtoken",res?.data?.refreshtoken);

            context.setislogin(true);
            history("/")
              // Optionally redirect to login page
              // navigate('/login');
            } else {
              context.openalertbox("error",res?.message);
              setisLoading(false)
    
            }
          })
        } catch(error) {
          context.openalertbox("error", error?.message || "Login failed!");
          setisLoading(false);
        }
    }




 

  return (
    <>
    <section className='section p-9'>
        <div className="container ">
            <div className="card shadow-md w-[500px]  m-auto rounded-md bg-white ">
              <div className='p-6'>
                <h3 className='text-center text-[22px] text-black font-[600]'>Login to your account</h3>
                <form className="form w-full " onSubmit={handleSubmit}>
                    
                    <div className="form-group w-full pt-5">
      <TextField id="email"  
      label="Email Id *" variant="outlined" 
      className='w-full mb-5'
       name='email'
      value={formFields.email}
      disabled={isLoading===true ? true :false} 
      onChange={onchangeInput} 
       />
                    </div> 
                    
                     <div className="form-group w-full pt-5 relative mb-4">
      <TextField type={ispasswordshow===false ? 'password' : 'text'} 
      label="Password *" 
      variant="outlined" className='w-full mb-5'
      name='password' 
      value={formFields.password}
      disabled={isLoading===true ? true :false}
      onChange={onchangeInput} 
       />
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
                      <Button type='submit' disabled={!validevalue}  className='btn-org btn-lg w-full flex gap-3'>
                        
                        {
                          isLoading === true ?   <CircularProgress color="inherit" />
                          :
                          ' Login'
                        }
                        </Button>
                    </div>


                    <p >
                      Not Registered? <Link className='link font-[500] text-[14px] text-primary ' to="/register">Sign Up</Link>
                    </p>


                    <p className='text-center mt-3 font-[500]'>Or continue with social account</p>

<Button className='flex gap-3 text-[20px] !bg-gray-100 w-full !mt-2 !btn-lg !text-black'><FcGoogle className='text-[30px]'/> Login with Google</Button>




    </form>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login