import Button from '@mui/material/Button';
import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


 const Blogitem = () => {
  return (
    <div className='blogitem group'>

        <div className="imgwrapper w-full overflow-hidden rounded-lg">

            <img src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg" alt="blogimages " className='w-full transition-all group-hover:scale-105 group-hover:rotate-1 cursor-pointer relative' />

            <span className='flex items-center justify-between p-1 absolute top-[15px] text-white bg-primary rounded-md font-[700] gap-1 group-hover:opacity-100 opacity-0 transition-all duration-300'>
                <IoMdTime/> 5 APRIL 2023
            </span>
            </div>


            <div className="info ">
                <h2 className='text-[20px] font-[600]'><Link to="/" className='link transition-all'>
                sustainable living through cutting-edge prefabricated homes</Link></h2>
                <p className='text-[15px] font-[400] mb-4'>
                Discover how prefabricated homes are revolutionizing sustainable living with their eco-friendly designs....
                </p>
                <Link to="/" className='link bg-[rgba(255,0,0,0.6)] group-hover:bg-white py-1 px-1 text-[17px] font-[400] transition-all rounded-sm flex items-center gap-1'>Read More<IoIosArrowForward/></Link>
                </div>
        
    </div>
  )
}

export default Blogitem;