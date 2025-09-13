import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';

const CartPanel = () => {
  return (
    <>
    <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4  ">
          <div className="cartitem w-full flex items-center justify-between gap-3 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
              <Link to="/Product/45869" className='block group'>
              <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
              </Link>
              </div>
           <div className="info w-[75%] pr-5  relative">
            <h4 className='text-[14px]'><Link to="/Product/456123" className='link transition-all'>Cropped Satin Bomber Jacket </Link></h4>
           <p className='flex items-center gap-5 mt-2 mb-2'>
           <span> Qty : <span>2</span> </span>
           <span className='text-primary font-bold'>Price : $25</span>
           </p>
           <MdDelete className='absolute top-[10px] right-[10px]  cursor-pointer text-[20px] link transition-all '/>
            </div>

          </div>

           <div className="cartitem w-full flex items-center justify-between gap-3 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
              <Link to="/Product/45869" className='block group'>

              <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
             </Link>
              </div>
           <div className="info w-[75%] pr-5  relative">
            <h4 className='text-[14px]'><Link to="/Product/456123" className='link transition-all'>Cropped Satin Bomber Jacket</Link></h4>
           <p className='flex items-center gap-5 mt-2 mb-2'>
           <span> Qty : <span>2</span> </span>
           <span className='text-primary font-bold'>Price : $25</span>
           </p>
           <MdDelete className='absolute top-[10px] right-[10px]  cursor-pointer text-[20px] link transition-all '/>
            </div>

          </div>

           <div className="cartitem w-full flex items-center justify-between gap-3 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
              <Link to="/Product/45869 " className='block group'>

              <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
              </Link>
              </div>
           <div className="info w-[75%] pr-5  relative">
            <h4 className='text-[14px]'><Link to="/Product/456123" className='link transition-all'>Cropped Satin Bomber Jacket </Link ></h4>
           <p className='flex items-center gap-5 mt-2 mb-2'>
           <span> Qty : <span>2</span> </span>
           <span className='text-primary font-bold'>Price : $25</span>
           </p>
           <MdDelete className='absolute top-[10px] right-[10px]  cursor-pointer text-[20px] link transition-all '/>
            </div>

          </div>

           <div className="cartitem w-full flex items-center justify-between gap-3 border-b border-[rgba(0,0,0,0.1)] pb-4">
            <div className="img w-[25%] overflow-hidden h-[90px] rounded-md">
              <Link to="/Product/45869" className='block group'>

              <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
              </Link>
              </div>
           <div className="info w-[75%] pr-5  relative">
           <h4 className='text-[14px]'>  <Link to="/Product/456123" className='link transition-all'>Cropped Satin Bomber Jacket</Link></h4>
           <p className='flex items-center gap-5 mt-2 mb-2'>
           <span> Qty : <span>2</span> </span>
           <span className='text-primary font-bold'>Price : $25</span>
           </p>
           <MdDelete className='absolute top-[10px] right-[10px]  cursor-pointer text-[20px] link transition-all '/>
            </div>

          </div>
        </div>
<br />
<div className="bottomsec absolute bottom-[10px] left-[10px] w-full">
        <div className="bottominfo w-full px-4 border-t border-[rgba(0,0,0,0.1)] py-3 flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-between w-full">
<span className='text-[14px] font-[600]'>1 item</span>
            <span className='text-primary font-bold'>$86.00</span>
            </div>
            
            </div>
             <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-between w-full">
<span className='text-[14px] font-[600]'>Shipping</span>
            <span className='text-primary font-bold'>$8.00</span>
            </div>
            
            </div>
            
        </div>

        <div className="bottominfo w-full px-4 border-t border-[rgba(0,0,0,0.1)] py-3 flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-between w-full">
<span className='text-[14px] font-[600]'>Total (tax excl.)</span>
            <span className='text-primary font-bold'>$93.00</span>
            </div>
            
            </div>
             <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-between w-full">
<span className='text-[14px] font-[600]'>Total (tax incl.)</span>
            <span className='text-primary font-bold'>$93.00</span>
            </div>
            
            </div>
             <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-between w-full">
<span className='text-[14px] font-[600]'>Taxes:</span>
            <span className='text-primary font-bold'>$0.00</span>
            </div>
            
            </div>
            
        </div>
<br />

<div className="flex items-center justify-between w-full gap-3">
  <Link to="/cart" className='w-[50%] d-block'><Button className='btn-org btn-lg w-full'>View Cart</Button></Link>
   <Link to="/Checkout" className='w-[50%] d-block'> <Button className='btn-org btn-border btn-lg w-full'>Checkout</Button></Link>
</div>
</div>
    </>
  )
}

export default CartPanel