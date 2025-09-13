import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// Lecture number 14 

const Mylistitems = (props) => {
      



    
  return (
    <>
    <div className="cartitem w-full  flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[15%]  rounded-md overflow-hidden">
            <Link to="/Product/456789" className='group'>
            <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" alt="54" className='w-full group-hover:scale-105 transition-all ' />
            </Link>
        </div>
        <div className="info w-[90%] relative text-left">
            <IoCloseOutline className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] bg-gray-100 rounded-md link transition-all mt-1'/>
            <h5 className='text-[13px] text-left'>RARE RABBIT</h5>
            <h3 className='text-[15px] text-left'><Link className='link'>Men Alias-N Regular Fit Spread Collar ShirtSGHWSRHSFDHFDH </Link></h3>
                  <Rating name="size-small" defaultValue={4} size="small" readOnly className='mt-2' />
    
    
   
    
    
    
    
    
    
              <div className="oldprice flex items-center gap-3 mt-2 mb-2">
                          <span className="price text-black font-[500]">₹500</span>
            <span className="price line-through text-gray-400 text-[14px]">₹700</span>
              <span className="price text-primary font-[500]">55% OFF</span>
          </div>


       

          <Button className='btn-org btn-sm '> Add to Cart</Button>
        </div>
    </div>

    </>
   
  )
}

export default Mylistitems;