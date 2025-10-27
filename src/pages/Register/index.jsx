import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { postData } from '../../utils/api.js';
import { Mycontext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';




const Register = () => {
  const[isLoading, setisLoading] = useState(false)
  const[ispasswordshow,setispasswordshow] = useState(false);
  // use state to use api
  const [formFields, setformFields] = useState({
    name : "",
    email:"",
    password:""
  })


const context = useContext(Mycontext);
const history = useNavigate();

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

if(formFields.name===""){
  context.openalertbox("error","Please enter name")       
return false
}

if(formFields.email===""){
  context.openalertbox("error","Please enter email id")       
return false
}

if(formFields.password===""){
  context.openalertbox("error","Please enter password")       
return false
}
  postData("/api/user/register",formFields).then((res)=>{
    console.log(res)

    if(res?.error !== true){
      setisLoading(false);
        context.openalertbox("success",res?.message);       
        localStorage.setItem("userEmail",formFields.email)
        setformFields(
          {
            name:"",
            email:"",
            password:""
          })
        history("/Verify")
          // Optionally redirect to login page
          // navigate('/login');
        } else {
          context.openalertbox("error",res?.message);
          setisLoading(false)

        }
      })
    
}
  return (
    <>
    <section className='section py-10'>
        <div className="container ">
            <div className="card shadow-md w-[500px]  m-auto rounded-md bg-white p-5 px-10">
                <h3 className='text-center text-[22px] text-black font-[700]'>Register with a new account</h3>
                <form className="form w-full p-5" onSubmit={handleSubmit}>
                   <div className="form-group w-full pt-5">
      <TextField id="fullname"
      label="Full Name *" 
      variant="outlined" 
      className='w-full mb-5'
       name='name'
      value={formFields.name}
      disabled={isLoading===true ? true :false}
      onChange={onchangeInput}
      />

                    </div> 
                    <div className="form-group w-full pt-5">
      <TextField id="email" 
      label="Email Id *" 
      value={formFields.email}
      disabled={isLoading===true ? true :false}
      name='email'
      variant="outlined" 
      className='w-full mb-5 ' 
            onChange={onchangeInput}
      />
                    </div> 
                     <div className="form-group w-full pt-5 relative mb-4">
      <TextField type={ispasswordshow===false ? 'password' : 'text'} label="Password *"
      name='password'
      value={formFields.password}
      disabled={isLoading===true ? true :false}
       variant="outlined" 
       className='w-full mb-5' 
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
                    {/* <a className="link text-left cursor-pointer text-[14px] font-[600] ">Forgot Password ?</a> */}
</div>

                    <div className="flex items-center w-full mt-5 mb-3">
                      <Button type='submit' disabled={!validevalue} className='btn-org btn-lg w-full flex gap-3'>
                        
                        {
                          isLoading === true ?   <CircularProgress color="inherit" />
                          :
                          ' Register'
                        }
                        </Button>
                    </div>

                    <p >
                      Already have an account? <Link className='link font-[500] text-[14px] text-primary ' to="/login">Login</Link>
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

export default Register
