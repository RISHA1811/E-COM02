import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoBagCheckSharp } from "react-icons/io5";
import Cartitems2 from './Mylistitems';
import Mylistitems from './Mylistitems';
import Accountsidebar from '../../components/Accountsidebar';


const Mylist = (props) => {
   const [sizeanchorEl, setsizeAnchorEl] = useState(null);
         const [selectedsize,setselectedsize] = useState(props.size);
       const opensize = Boolean(sizeanchorEl);
       const handleClicksize = (event) => {
         setsizeAnchorEl(event.currentTarget);
       };
       const handleClosesize = () => {
         setsizeAnchorEl(null);
       };


  return (
    <>

    <section className='py-7 w-full '>
<div className="container flex gap-5">
<div className="col1 w-[20%]">
    <Accountsidebar/>
</div>

<div className="col2 w-[70%]">

   
<div className="shadow-md rounded-md p-5 bg-white">
<div className='border-b border-[rhba(0,0,0,0.1)] py-3 px-3'>
     <h2 className='text-left font-[500] '>My List</h2>
    <p className='mt-0 text-left '>There are <span className='font-bold text-primary'>2</span> products in my List

</p>
</div>

<Mylistitems />
<Mylistitems />
<Mylistitems />
<Mylistitems />
<Mylistitems />
<Mylistitems />
<Mylistitems />
<Mylistitems />




</div>

</div>
</div>
    </section>


 
    </>
  )
}

export default Mylist;
