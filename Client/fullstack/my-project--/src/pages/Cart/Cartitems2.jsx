import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// Lecture number 14 

const Cartitems2 = (props) => {
        const [sizeanchorEl, setsizeAnchorEl] = useState(null);
        const [selectedsize,setselectedsize] = useState(props.size);
      const opensize = Boolean(sizeanchorEl);

       const [sizeanchorEl2, setsizeAnchorEl2] = useState(null);
        const [selectedsize2,setselectedsize2] = useState(props.qty);
      const opensize2 = Boolean(sizeanchorEl2);


      const handleClicksize = (event) => {
        setsizeAnchorEl(event.currentTarget);
      };
      const handleClosesize = (value) => {
                setsizeAnchorEl(null);

        if(value!=null){
          setselectedsize(value)
        }
      };

       const handleClick2 = (event) => {
        setsizeAnchorEl2(event.currentTarget);
      };
      const handleClose2 = (value) => {
                setsizeAnchorEl2(null);

        if(value!=null){
          setselectedsize2(value)
        }
      };



    
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
    
    
    <div className="flex items-center gap-4 mt-2">
    <span className='flex items-center justify-between bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer' onClick={handleClicksize}>
        Size: {selectedsize} <GoTriangleDown />
         <Menu
        id="size-menu"
        anchorEl={sizeanchorEl}
        open={opensize}
        onClose={()=>handleClosesize(null)}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={()=>handleClosesize('S')}>S</MenuItem>
        <MenuItem onClick={()=>handleClosesize('M')}>M</MenuItem>
        <MenuItem onClick={()=>handleClosesize('L')}>L</MenuItem>
        <MenuItem onClick={()=>handleClosesize('XL')}>XL</MenuItem>
        <MenuItem onClick={()=>handleClosesize('XXL')}>XXL</MenuItem>

      </Menu>

    </span>
    <span className='flex items-center justify-between bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer' onClick={handleClick2}>
        Qty: {selectedsize2} <GoTriangleDown />
            <Menu
        id="size-menu"
        anchorEl={sizeanchorEl2}
        open={opensize2}
        onClose={()=>handleClose2(null)}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={()=>handleClose2(1)}>1</MenuItem>
        <MenuItem onClick={()=>handleClose2(2)}>2</MenuItem>
        <MenuItem onClick={()=>handleClose2(3)}>3</MenuItem>
        <MenuItem onClick={()=>handleClose2(4)}>4</MenuItem>
        <MenuItem onClick={()=>handleClose2(5)}>5</MenuItem>
        <MenuItem onClick={()=>handleClose2(6)}>6</MenuItem>
        <MenuItem onClick={()=>handleClose2(7)}>7</MenuItem>
        <MenuItem onClick={()=>handleClose2(8)}>8</MenuItem>
        <MenuItem onClick={()=>handleClose2(9)}>9</MenuItem>
        <MenuItem onClick={()=>handleClose2(10)}>10</MenuItem>

      </Menu>
    </span>
     
    </div>
    
    
    
    
    
    
              <div className="oldprice flex items-center gap-3 mt-2">
                          <span className="price text-black font-[500]">₹500</span>
            <span className="price line-through text-gray-400 text-[14px]">₹700</span>
              <span className="price text-primary font-[500]">55% OFF</span>
          </div>
        </div>
    </div>

    </>
   
  )
}

export default Cartitems2;