import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Accountsidebar from '../Accountsidebar';
import { Mycontext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api.js';
import {Collapse} from 'react-collapse';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Myaccount = () => {
const [isLoading, setisLoading] = useState(false);
const [isLoading2, setisLoading2] = useState(false);
const [ischangePasswordshow, setischangePasswordshow] = useState(false);
  const [phone, setPhone] = useState("");


const [formFields, setformFields] = useState({
  name : '',
  email:'',
  mobile:''
});

const [changePassword, setchangePassword] = useState({
  email : '',
  oldPassword : '',
  newPassword:'',
  confirmPassword:''
});


const context = useContext(Mycontext);
const history = useNavigate();
useEffect(()=>{
if(context?.islogin===false){
setTimeout(()=>{
history("/");

}, 1000)
}
},[context?.islogin])



useEffect(()=>{
  if(context?.userData?._id !== "" && context?.userData?._id !== undefined){
    setformFields({
      name : context?.userData?.name,
      email:context?.userData?.email,
      mobile:context?.userData?.mobile
    })
const ph= `"${context?.userData?.mobile}"`;
setPhone(ph);

setchangePassword({
  email:context?.userData?.email
})

  }
},[context?.userData])



const onChangeInput = (e) =>  {
  const { name, value} = e.target;
  setformFields(()=> {
    return {
      ...formFields,
      [name]: value
    }
  })
  setchangePassword(()=> {
    return {
      ...changePassword,
      [name]: value
    }
  })
}







const handleSubmit =(e) =>{

 e.preventDefault();

 setisLoading(true);

if(formFields.name===""){
  context.openalertbox({
    type:"error",
    msg:"Please enter name"})       
return false
}

if(formFields.email===""){
  context.openalertbox({
    type:"error",
    msg:"Please enter emailId"})       
return false
}

if(formFields.mobile===""){
  context.openalertbox({
    type:"error",
    msg:"Please enter password"})       
return false
}

// editData(`/api/user/${userId}`, formFields, {withCredentials: true}).then((res) => {
//     console.log(res)
//     if (res?.error !== true) {
//         setisLoading(false);
//         context.openalertbox("success", res?.data?.message);
//     } else {
//         context.openalertbox("error", res?.data?.message);
//         setisLoading(false);
//     }
// })

}


const handleSubmitChangePassword =(e) =>{

 e.preventDefault();

 setisLoading2(true);

if(changePassword.oldPassword===""){
  context.openalertbox("error","Please enter old password")       
return false
}

if(changePassword.newPassword===""){
  context.openalertbox("error","Please enter new password")       
return false
}

if(changePassword.confirmPassword===""){
  context.openalertbox("error","Please enter confirm password")       
return false
}


if(changePassword.confirmPassword !== changePassword.newPassword){
  context.openalertbox("error","NewPassword and ConfirmPassword not matched")       
return false
}

postData(`/api/user/reset-password`, changePassword, { withCredentials: true}).then((res) => {
    if (res?.error !== true) {
        setisLoading2(false);
        context.openalertbox("success", res?.message);
    } else {
        context.openalertbox("error", res?.message);
        setisLoading2(true);
    }
})

return false;

}


  return (
    <>
    <section className='py-7 w-full '>
<div className="container flex gap-5">
<div className="col1 w-[20%]">
    <Accountsidebar/>
</div>

<div className="col2 w-[50%]">
<div className="card  p-5 shadow-md rounded-md  mb-5">
<div className="flex items-center pb-3">
  <h2 className='text-left p-2 font-[500] pb-0'>My Profile</h2>
<Button className='!ml-auto' onClick={()=> setischangePasswordshow(!ischangePasswordshow)}>Change Password</Button>
  </div>
<hr />






{/* form 1 */}
<form className=' p-4 mt-5'onSubmit={handleSubmit}>
<div className="flex items-center gap-5">
<div className='w-[50%] '>
     <TextField  label="Full Name" variant="outlined" size='small' name='name' value={formFields.name} className='w-full' onChange={onChangeInput} />

</div>

<div className='w-[50%] '>
     <TextField  label="Email" variant="outlined" size='small' name='name' value={formFields.email} className='w-full' />

</div>


</div>

<div className="flex items-center mt-4 gap-5">
<div className='w-[50%] '>
<PhoneInput
  defaultCountry="in"
  value={formFields?.mobile || ""}  // Add fallback
  onChange={(phone) => {
    setPhone(phone);
    setformFields({
      ...formFields,  // ✅ Keep existing fields
      mobile: phone
    });
  }}
/>
</div>




</div>

<br />

<div className="flex items-center gap-4   ">
     <Button className='btn-org  w-[200px] '  type='submit' >
{
  isLoading === true ? <CircularProgress color='inherit' />
  :
  'Update Profile'
}

    </Button>

</div>
</form>
</div>




              <Collapse isOpened={ischangePasswordshow}>
  
  <div className="card bg-white p-5 shadow-md rounded-md ">
<div className=" pb-3">
  <h2 className='text-left p-5 font-[500] pb-3'>Change Password</h2>
</div>
<hr />

<form className=' p-4 mt-2' onSubmit={handleSubmitChangePassword}>
<div className="flex items-center gap-5">
<div className='w-[50%] '>
     <TextField   label="Old Password" variant="outlined" size='small' value={changePassword.oldPassword} name='oldPassword' className='w-full'  disabled ={isLoading2 === true ?  true : false} onChange={onChangeInput}  />

</div>

<div className='w-[50%] '>
     <TextField    label="New Password" variant="outlined" size='small' value={changePassword.newPassword} name='newPassword'  className='w-full' disabled ={isLoading2 === true ?  true : false} onChange={onChangeInput} />

</div>


</div>


<div className='w-[50%] flex items-center mt-4 gap-5'>
     <TextField    label="Confirm Password" variant="outlined" size='small' value={changePassword?.confirmPassword} name='confirmPassword'  className='w-full' disabled ={isLoading2 === true ?  true : false} onChange={onChangeInput} />

</div>





<br />

<div className="flex items-center gap-4 ">
    <Button className='btn-org  w-[200px] ' type='submit' >
{
  isLoading2 === true ? <CircularProgress color='inherit' />
  :
  'Change Password'
}

    </Button>

</div>
</form>


</div>
</Collapse>







</div>
</div>
    </section>
    </>
  )
}

export default Myaccount;
