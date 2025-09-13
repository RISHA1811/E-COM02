import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoBagCheckSharp } from "react-icons/io5";
import Cartitems2 from './Cartitems2';


const Cart = (props) => {
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
    <section className="section py-10 pb-10">
        <div className="container w-[70%] max-w-[80%] flex gap-5">
<div className="leftpart w-[70%]">
   
<div className="shadow-md rounded-md p-5 bg-white">
<div className='border-b border-[rhba(0,0,0,0.1)] py-3 px-3'>
     <h2 className='text-left font-[500] '>Your Cart</h2>
    <p className='mt-0 text-left '>There are <span className='font-bold text-primary'>2</span> products in your cart

</p>
</div>

<Cartitems2 size="S" qty="1" />
</div>
</div>



<div className="righpart w-[30%]">
    <div className="shadow-md rounded-md bg-white p-5 ">
        <h3 className='pb-3'>Cart Totals</h3>
        <hr />

        <p className='flex items-center justify-between w-full mb-4'>
            <span className='text-[14px] font-[500]'>Subtotal</span>
            <span className='text-primary font-bold'>₹758.00</span>
        </p>

        <p className='flex items-center justify-between w-full mb-4'>
            <span className='text-[14px] font-[500]'>Shipping</span>
            <span className='text-black font-bold'>Free</span>
        </p>

        <p className='flex items-center justify-between w-full mb-4'>
            <span className='text-[14px] font-[500]'>Estimate for</span>
            <span className='text-black font-bold'>United Kingdom</span>
        </p>

        <p className='flex items-center justify-between w-full mb-4'>
            <span className='text-[14px] font-[500]'>Total</span>
            <span className='text-primary font-bold'>₹758.00</span>
        </p>

<br />

        <Button className='btn-org btn-lg w-full flex gap-2 '> <IoBagCheckSharp className='text-[20px]'/> Checkout</Button>
    </div>
</div>
        </div>
    </section>
  )
}

export default Cart