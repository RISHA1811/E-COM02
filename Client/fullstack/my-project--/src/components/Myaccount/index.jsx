import React from 'react'
import Button from '@mui/material/Button';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Accountsidebar from '../Accountsidebar';


const Myaccount = () => {
  return (
    <>
    <section className='py-7 w-full '>
<div className="container flex gap-5">
<div className="col1 w-[20%]">
    <Accountsidebar/>
</div>

<div className="col2 w-[50%]">
<div className="card bg-white p-5 shadow-md rounded-md ">
<h2 className='text-left p-2 font-[500] pb-3'>My Profile</h2>
<hr />

<form className=' p-4'>
<div className="flex items-center gap-5">
<div className='w-[50%] '>
     <TextField  label="Full Name" variant="outlined" size='small' className='w-full' />

</div>

<div className='w-[50%] '>
     <TextField  label="Email" variant="outlined" size='small' className='w-full' />

</div>


</div>

<div className="flex items-center mt-4 gap-5">
<div className='w-[50%] '>
     <TextField  label="Phone Number" variant="outlined" size='small' className='w-full' />

</div>




</div>

<br />

<div className="flex items-center gap-4 ">
    <Button className='btn-org btn-lg w-[100px]'>Save</Button>
        <Button className='btn-org btn-border btn-lg w-[100px]'>Cancel</Button>

</div>
</form>
</div>
</div>
</div>
    </section>
    </>
  )
}

export default Myaccount;
