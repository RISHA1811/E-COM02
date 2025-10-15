import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <>
    <section className='py-10 relative'>
<div className="container flex items-center gap-3">
    <div className="leftcol w-[65%]">
        <div className="card bg-white shadow-md rounded-md w-full text-left">
            <h1>BILLING DETAILS</h1>

            <form className='w-full mt-5'>
                <div className="flex items-center gap-5 pb-5">
                    <div className="col w-[50%]">
<TextField className='w-full bg-gray-100' label="Full Name *" variant="outlined" size='small' />

                    </div>

<div className="col w-[50%]">
<TextField className='w-full bg-gray-100' label="Country *" variant="outlined" size='small' />

                    </div>





                </div>


                <h6 className='text-[14px] font-[500] pb-4'>Street address *</h6>
                <div className="flex items-center gap-5 pb-3">
  <div className="col w-[100%]">
<TextField className='w-full bg-gray-100 !mb-4' label="House number and street name *" variant="outlined" size='small'  />
</div>
                    </div>




                     <div className="flex items-center gap-5 pb-1">
  <div className="col w-[100%]">
<TextField className='w-full bg-gray-100 !mb-4' label="Apartment,Suits,Units and etc.. *" variant="outlined" size='small'  />
</div>
                    </div>



    <h6 className='text-[14px] font-[500] pb-2'>Town / City  *</h6>
                <div className="flex items-center gap-5 pb-2">
  <div className="col w-[100%]">
<TextField className='w-full bg-gray-100 !mb-4' label="City *" variant="outlined" size='small'  />
</div>
                    </div>


                    <h6 className='text-[14px] font-[500] pb-2'>State / County *</h6>
                <div className="flex items-center gap-5 pb-2">
  <div className="col w-[100%]">
<TextField className='w-full bg-gray-100 !mb-4' label="State *" variant="outlined" size='small'  />
</div>
                    </div>


                    <h6 className='text-[14px] font-[500] pb-2'>Postcode / ZIP *</h6>
                <div className="flex items-center gap-5 pb-2">
  <div className="col w-[100%]">
<TextField className='w-full bg-gray-100 !mb-4' label="ZIP Code *" variant="outlined" size='small'  />
</div>
                    </div>



                <div className="flex items-center gap-5 pb-5">
                    <div className="col w-[50%]">
<TextField className='w-full bg-gray-100' label="Phone Number *" variant="outlined" size='small' />

                    </div>

<div className="col w-[50%]">
<TextField className='w-full bg-gray-100' label="Email Address *" variant="outlined" size='small' />

                    </div>
                    </div>
            </form>
        </div>
    </div>

    <div className="rightcol w-[30%]  absolute top-[30px] right-[10px] ml-4">
        <div className="card shadow-md bg-white  rounded-md !text-top">
            <h2 className='border-b border-[rgba(0,0,0,0.1)] text-left !mb-2 font-[600]'>YOUR ORDER</h2>

            <div className="flex items-center justify-between py-3 px-2 border-b border-[rgba(0,0,0,0.1)]">
                <span className='text-[14px] font-[600]'>Product</span>
                <span className='text-[14px] font-[600]'>Subtotal</span>
            </div>
           

<div className="scroll mb-5 max-h-[250px] overflow-y-scroll overfloow-x-hidden pr-5 ">

           <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>

           <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>


           <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>


            <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>



            <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>



           <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>



            <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50px] object-cover py-2 overflow-hidden rounded-md group cursor-pointer">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-full group-hover:scale-105' />
                </div>
                <div className="info">
                    <h4 className='text-[14px]'>Men Alias-N Regular ... </h4>
                    <span className='text-[13px] '>Qty : 1</span>
                </div>
            </div>

            <span className='text-[14px] font-[500]'>₹298.00</span>
           </div>
</div>


<Button className='w-full btn-org btn-lg flex gap-2 items-center'><BsFillBagCheckFill/>CheckOut</Button>

           

        </div>
    </div>
</div>
    </section>
    </>
  )
}

export default Checkout;
