import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Productzoom from '../../components/Productzoom';
import Rating from '@mui/material/Rating';
import Qtybox from '../../components/Qtybox';
import TextField from '@mui/material/TextField';
import Productslide from '../../components/Productslide';
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

const Newproductdetails = () => {
        const [sizeaction,setsizeaction] = useState(null);
    
  return (
    <>
     <div className='productdetails'>
                 <h1 className='text-[24px] font-[600] text-[rgba(36,36,36,1)] text-left'>Apple AirPods Max Over-Ear Wireless Headphone</h1>
                                   <p className='pt-3 pb-2'>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that they cannot foresee.</p>

                                     <hr/>
                                   <div className="flex  items-center   gap-3 pt-3">
                                       <span className='text-gray-400 text-[15px]'>Brand: <span className='font-[500] text-black opacity-75'>Gadget Zone</span>
                                       </span>
                                                               <Rating name="size-small" defaultValue={5} size="small" readOnly />
                                                               <span className='text-[13px] cursor-pointer text-[#666]'>Review(5)</span>
               
                                   </div>

                                    <div className="flex  items-center   gap-3 pt-3">
                                       <span className='text-gray-400 text-[15px]'>Condition: <span className='font-[500] text-black opacity-75'> New</span>
                                       </span>
                                                               
                                   </div>
               
                                   <div className="flex  items-center   gap-3 pt-3">
                                       <span className='text-gray-400 text-[15px]'>Reference: <span className='font-[500] text-black opacity-75'>Product1</span>
                                       </span>
                                                               
               
                                   </div>
               
                                   <div className="flex  items-center   gap-3 pt-3">
                                       <span className='text-gray-400 text-[15px]'>Available In Stock: <span className='font-[500] text-green-600 opacity-75 font-bold'>244 Items</span>
                                       </span>
                                                              
               
                                   </div>

                                      <div className="oldprice flex items-center gap-3 mt-4 mb-4">
                       <span className="price line-through text-gray-400 text-[20px]">₹700</span>
                         <span className="price text-primary font-[700] text-[20px]">₹500</span>
               
                     </div>


                      <div className="flex items-center gap-3 mt-6 mb-7">
                   <span className='text-[16px]'>Size:</span>
                   <div className="flex items-center gap-1 actions">
                       <Button className={`${sizeaction === 0 ? '!bg-primary !text-white' : ''}`} onClick={()=>setsizeaction(0)}>S</Button>
                       <Button className={`${sizeaction === 1 ? '!bg-primary !text-white' : ''}`} onClick={()=>setsizeaction(1)}>M</Button>
                       <Button className={`${sizeaction === 2 ? '!bg-primary !text-white' : ''}`} onClick={()=>setsizeaction(2)}>L</Button>
                       <Button className={`${sizeaction === 3 ? '!bg-primary !text-white' : ''}`} onClick={()=>setsizeaction(3)}>XL</Button>
               
                   </div>
               </div>


 <div className="flex items-center mt-6 mb-5 gap-4">
                 <div className='qtyboxwrapper w-[70px]'>
               <Qtybox/>
               </div>
               
                     <Button className='btn-org flex gap-2 '><IoCartOutline className='text-[22px]'/>Add to Cart </Button>
               
                     
               </div>
               
               <div className="flex items-center gap-4 mt-4">
                
                                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[600]'>< FaRegHeart className='text-[18px]'/>  Add to Wishlist </span>
                                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[600]'>< MdOutlineContentCopy className='text-[18px]'/>  Add to Compare	</span>
               
                                
                             </div>



              </div>
    </>
  )
}

export default Newproductdetails