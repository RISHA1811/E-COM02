import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Mycontext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { editData } from '../../utils/api.js';
import { useEffect } from 'react';
import { LuMapPinCheck } from "react-icons/lu";

const Accountsidebar = () => {
const [isLoading, setisLoading] = useState(false);
const [Previews, setPreviews] = useState([]);
const [Uploading, setUploading] = useState(false);


const context = useContext(Mycontext);






const formdata = new FormData();

useEffect(()=>{
    const userAvatar = [];
    if(context?.userData?.avatar !== "" && context?.userData?.avatar !== undefined){
        userAvatar.push(context?.userData?.avatar);
        setPreviews(userAvatar);
    }
   }, [context?.userData]   )

   let selectedImages =[]
const onChangeFile = async (e, apiEndPoint) =>{
    try {
        setPreviews([]);
        const files = e.target.files;
        setUploading(true);
        console.log(files);

        for(var i=0; i< files.length; i++){
            if (
                files[i] &&(files[i].type === "image/jpeg" ||
                    files[i].type === "image/jpg" ||
                    files[i].type === "image/png" ||
                    files[i].type === "image/webp" )
                    
                ) {
                    let file= files[i];
                    selectedImages.push(file);
                    formdata.append('avatar', file);

                    console.log(formdata)
                    editData("/api/user/user-avatar",formdata).then((res)=>{
                        console.log(res);
                    })

                } else {
                    context.openalertbox("error","Please select valid JPG ,webp or PNG file.");
                    setUploading(false);
                    return false;
                }
        }
                 

    } catch (error) {
        console.log(error);
    }
}





  return (
    <>
    <div className="card bg-white shadow-md rounded-md  sticky top-[10px]">
        <div className="w-full  flex items-center justify-center flex-col mb-2">
            <div className='w-[110px] h-[110px] rounded-full overflow-hidden relative group flex items-center justify-center bg-gray-200'>
                 
        {
    Uploading === true ? <CircularProgress color="inherit" />
    :
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9zt6SEFH7r9AQ3GeOyGbOFPUMo74dLRlxw&s" className='w-full h-full object-cover'/> 
        }


                <div className="overlay w-full h-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 treansition-all group-hover:opacity-100">
                    <FaCloudUploadAlt  className='text-[#fff] text-[25px] cursor-pointer'/>
                    <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 ' 
                    accept='image/*'
                    onChange={(e)=>
                        onChangeFile(e, "/api/user/user-avatar")
                    }
                    name='avatar'
                    />
                </div>
                
            </div>

            <h3 className='mb-2 mt-1'>{context?.userData?.name}</h3>
            <h6 className='text-[14px] font-[400] mb-2'>{context?.userData?.email}</h6>

        </div>

<ul className=' newpart list-none pb-5 bg-[#fafafa] myaccountabs'>
    <li className='w-full ' exact={true}  activeClassName="isActive" >

        <NavLink to="/Myaccount">
<Button className='flex items-center !text-left !justify-start !py-2 !px-5 gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.8)] '><FaRegUserCircle className='text-[18px]'/>User Profile</Button>
</NavLink>
    </li>


  <li className='w-full '  >

        <NavLink to="/address"  exact={true}  activeClassName="isActive">
<Button className='flex items-center !text-left !justify-start !py-2 !px-5 gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.8)] '><LuMapPinCheck className='text-[18px]'/>Address</Button>
</NavLink>
    </li>



     <li className='w-full'>
                <NavLink to="/Mylist" exact={true}  activeClassName="isActive">

<Button className='flex items-center !text-left !justify-start !py-2 !px-5 gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.8)]'><PiHandbagSimpleBold className='text-[18px]'/>My List</Button>
   </NavLink>
    </li>

     <li className='w-full'>
                <NavLink to="/Myorder" exact={true}  activeClassName="isActive">
<Button className='flex items-center !text-left !justify-start !py-2 !px-5 gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.8)]'><IoHeart className='text-[18px]'/>My Orders</Button>
    </NavLink>

    </li>

     <li className='w-full'>
                <NavLink to="/Myout" exact={true}  activeClassName="isActive">
<Button className='flex items-center !text-left !justify-start !py-2 !px-5 gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.8)]'><IoIosLogOut className='text-[18px]'/>Logout</Button>
    </NavLink>

    </li>
</ul>



    </div>
    
    </>
  )
}

export default Accountsidebar