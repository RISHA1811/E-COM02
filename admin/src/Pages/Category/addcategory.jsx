import React from 'react'
import Uploadbox from '../../Components/Uploadbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";

const Addcategory = () => {
  return (
    <>
     <section className='p-5 bg-gray-50'>
      <form className='form p-8 py-3 '>
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4 ">


        <div className='grid grid-cols-1 mb-3'>
<div className="col w-[25%]">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Category Name</h3>
<input type="text " className='w-full h-[40px] p-3  text-sm border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>
</div>

<br />


<h3 className='font-[500] text-[18px] mb-1 text-black'>Category Image</h3>

<br />

            <div className="grid grid-cols-7 gap-4">
<div className="uploadboxwrapper relative">
  <span className='absolute w-[25px] h-[25px] rounded-full overflow-hidden  bg-red-700 -top-[5px] -right-[5px] flex items-center cursor-pointer justify-center z-50'><IoMdClose className='text-white text-[17px]'/></span>
    <div className="uploadbox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] mt-3 relative bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col ">

    <LazyLoadImage
    className='w-full h-full object-cover'
      alt={"images"}
      effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "1s"},
    }}
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp"}
      /> 



    </div>
    </div>

    <div className="uploadboxwrapper relative">
  <span className='absolute w-[25px] h-[25px] rounded-full overflow-hidden  bg-red-700 -top-[5px] -right-[5px] flex items-center cursor-pointer justify-center z-50'><IoMdClose className='text-white text-[17px]'/></span>
    <div className="uploadbox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] mt-3 relative bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col ">

    <LazyLoadImage
    className='w-full h-full object-cover'
      alt={"images"}
      effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "1s"},
    }}
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp"}
      /> 



    </div>
    </div>
   




    <Uploadbox multiple={true}/>
  </div>
        </div>

        <hr/>
<br />
<div className="w-[250px]">
<Button type='Submit' className='btn-blue btl-lg w-full flex gap-2 '><FaCloudUploadAlt className='text-[25px] text-white'/>Publish And View</Button>
       </div> 
        </form>
        </section>
    </>
  )
}

export default Addcategory;
