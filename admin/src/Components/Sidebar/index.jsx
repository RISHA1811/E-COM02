import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { GrProductHunt } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import {Collapse} from 'react-collapse';
import { GoDotFill } from "react-icons/go";
import { FaAngleUp } from "react-icons/fa";
import { useContext } from 'react';
import { MyContext } from '../../App';


const Sidebar = () => {

const context= useContext(MyContext);

  const[submenuindex,setsubmenuindex] = useState(null);
  const[submenuindex2,setsubmenuindex2] = useState(null);
  const[submenuindex3,setsubmenuindex3] = useState(null);

  const isopensubmenu =(index)=>{

    if(submenuindex===1){
setsubmenuindex(null);
    }else{
      setsubmenuindex(index);
    }
    

  }




   const isopensubmenu2 =(index2)=>{

    if(submenuindex2===3){
setsubmenuindex2(null);
    }else{
      setsubmenuindex2(index2);
    }
    

  }




    const isopensubmenu3 =(index3)=>{

    if(submenuindex3===4){
setsubmenuindex3(null);
    }else{
      setsubmenuindex3(index3);
    }
    

  }


  return (
    <>
    <div className={`sidebar fixed top-0 left-0 bg-[#fff] border-r border-[rgba(0,0,0,0.1)]  h-full py-2 px-2 ${context.issidebaropen===true ? 'w-[17%]': 'w-[0%]'}`}>
<div className='py-2 w-full '>
  <Link>
  <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className='w-[120px] px-2' />
  </Link>
</div>
<ul className='mt-4'>
  <li >
    <Link to="/">
    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'> <RxDashboard className='text-[18px] '/> <span>Dashboard </span></Button>
    </Link>
  </li>
  <li >

    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={()=>isopensubmenu(1)}> <FaRegImage  className='text-[18px] '/> <span>Home Slides </span> <span className='ml-auto block w-[30px] h-[30px] flex items-center justify-center' > <FaAngleDown className={`transition-all ${submenuindex===1 ? 'rotate-180' : ' '}`}/></span>

    {/* // <span className='ml-auto block w-[30px] h-[30px] flex items-center justify-center' > <FaAngleUp/></span> */}

    
    
    </Button>

<Collapse isOpened={submenuindex===1 ? true : false}>
<ul className='w-full'>
<li className='w-full'>
  <Button className='!w-full !p-3 !text-[rgba(0,0,0,0.7)] !font-[500] !uppercase !justify-start gap-2 !text-[13px]'><GoDotFill className='opacity-30'/>Home banner slide list</Button>
</li>

<li className='w-full'>
  <Button className='!w-full !p-3 !text-[rgba(0,0,0,0.7)] !font-[500] !uppercase !justify-start gap-2 !text-[13px] '><GoDotFill className='opacity-30'/>Home slide list</Button>
</li>
</ul>
</Collapse>


  </li>

 <li >
  <Link to="/user">
    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'> <LuUsers className='text-[18px] '/> <span>Users </span></Button>
  </Link>
  </li>



     <li >
    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={()=>isopensubmenu2(3)}> <FaRegImage  className='text-[18px] '/> <span>Product </span> <span className='ml-auto block w-[30px] h-[30px] flex items-center justify-center' > <FaAngleDown className={`transition-all ${submenuindex2===3 ? 'rotate-180' : ' '}`}/></span>

    {/* // <span className='ml-auto block w-[30px] h-[30px] flex items-center justify-center' > <FaAngleUp/></span> */}

    
    
    </Button>

<Collapse isOpened={submenuindex2===3 ? true : false}>
<ul className='w-full'>
<li className='w-full'>
    <Link to="/product">
  <Button className='!w-full !p-3 !text-[rgba(0,0,0,0.7)] !font-[500] !uppercase !justify-start gap-2 !text-[13px]'><GoDotFill className='opacity-30'/>Product list</Button>
  </Link>
</li>

<li className='w-full'>
  <Link to="product/upload">
  <Button className='!w-full !p-3 !text-[rgba(0,0,0,0.7)] !font-[500] !uppercase !justify-start gap-2 !text-[13px] '><GoDotFill className='opacity-30'/>Product Upload</Button>
</Link>
</li>
</ul>
</Collapse>


  </li>




     <li >
    <Link to="category">
    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={()=>isopensubmenu3(4)}> <FaRegImage  className='text-[18px] '/> <span>Category </span> <span className='ml-auto block w-[30px] h-[30px] flex items-center justify-center' > <FaAngleDown className={`transition-all ${submenuindex3===4 ? 'rotate-180' : ' '}`}/></span>

    {/* // <span className='ml-auto block w-[30px] h-[30px] flex items-center justify-center' > <FaAngleUp/></span> */}
    </Button>
    </Link>

<Collapse isOpened={submenuindex3===4 ? true : false}>
<ul className='w-full'>
<li className='w-full'>
  <Link to="category/add">
  <Button className='!w-full !p-3 !text-[rgba(0,0,0,0.7)] !font-[500] !uppercase !justify-start gap-2 !text-[13px]'><GoDotFill className='opacity-30'/>Category list</Button>
</Link>
</li>

<li className='w-full'>
  <Link to="category/subcat/add">
  <Button className='!w-full !p-3 !text-[rgba(0,0,0,0.7)] !font-[500] !uppercase !justify-start gap-2 !text-[13px] '><GoDotFill className='opacity-30'/>Add  Category</Button>
</Link>
</li>
</ul>
</Collapse>


  </li>

   <li >
    
    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'> <IoBagCheckOutline className='text-[20px] '/> <span>Orders </span></Button>
  </li>
  <li >
    <Button className='w-full !uppercase !justify-start flex  gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'> <IoIosLogOut className='text-[20px] '/> <span>Logout </span></Button>
  </li>
</ul>
    </div>
    </>
  )
}

export default Sidebar;
