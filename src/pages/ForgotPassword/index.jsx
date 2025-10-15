import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Form, Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { Mycontext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';



const ForgotPassword = () => {
  const context= useContext(Mycontext);
  const[ispasswordshow,setispasswordshow] = useState(false);
  const[ispasswordshow2,setispasswordshow2] = useState(false);
     const[isLoading, setisLoading] = useState(false)

const [formFields, setformFields] = useState({
  email: localStorage.getItem("userEmail") ,
  newPassword: "",
  confirmPassword: ""
});




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
        
       
        
        if(formFields.newPassword===""){
          context.openalertbox("error","Please enter new Password");
          setisLoading(false);
        return false
        }
        
        if(formFields.confirmPassword===""){
          context.openalertbox("error","Please confirm your password");
          setisLoading(false);       
        return false
        }



      
        
        if(formFields.newPassword !== formFields.confirmPassword){
          context.openalertbox("error","Password and confirm password does not match");
          setisLoading(false);
        return false
        }
        postData(`/api/user/reset-password`,formFields).then((res)=>{
          console.log(res)
          localStorage.removeItem("userEmail")
          localStorage.removeItem("actionType")
          setisLoading(false);
          history("/Login")
        })

        }


  return (
    <>
    <section className='section py-10'>
        <div className="container ">
            <div className="card shadow-md w-[500px]  m-auto rounded-md bg-white p-5 px-10">
                <h3 className='text-center text-[24px] text-black font-[600]'>Forgot Password</h3>
                <form className="form w-full pl-7 pr-7 "  onSubmit={handleSubmit}>
                    <div className="form-group w-full pt-5 relative">
      <TextField type={ispasswordshow===false ? 'Password' : 'text'}  label="Password *" variant="outlined" className='w-full mb-5' name='newPassword' value={formFields.newPassword}
      disabled={isLoading===true ? true :false}  onChange={onchangeInput}  />

          <Button className='!absolute top-[30px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={()=>setispasswordshow(!ispasswordshow)}>

                          {
                            ispasswordshow===false ?  <MdOutlineRemoveRedEye className='text-[20px] opacity-75'/>              
                             :
                             <FaEyeSlash className='text-[20px] opacity-75'/> 
                          }
                          </Button>
                    </div>


                     <div className="form-group w-full pt-5 relative mb-4">
      <TextField type={ispasswordshow2===false ? 'Confirm_Password' : 'text'} label=" Confirm Password *" variant="outlined" className='w-full mb-5' value={formFields.confirmPassword}
      disabled={isLoading===true ? true :false}  name='confirmPassword'onChange={onchangeInput} />
                                   <Button className='!absolute top-[30px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black' onClick={()=>setispasswordshow2(!ispasswordshow2)}>

                          {
                            ispasswordshow2===false ?  <MdOutlineRemoveRedEye className='text-[20px] opacity-75'/>              
                             :
                             <FaEyeSlash className='text-[20px] opacity-75'/> 
                          }
                          </Button>

                    </div> 


                    <div className="flex items-center w-full mt-5 mb-3 pb-4">
                      <Button type='submit'   className='btn-org btn-lg w-full flex gap-3'>
                        
                        {
                          isLoading === true ?   <CircularProgress color="inherit" />
                          :
                          ' Change Password'
                        }
                        </Button>
                    </div>

                  


    </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default ForgotPassword;
