import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/Style.css";
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Sidebar = () => {

    const [isopencategorypanel,setisopencategorypanel]= useState(true);
        const [isopencategorypanel2,setisopencategorypanel2]= useState(true);
                const [isopencategorypanel3,setisopencategorypanel3]= useState(true);


  return (
    <>
    <aside className='sidebar py-5'>
        <div className="box ">
            <h3 className='uppercase mb-4 font-[600] flex items-center'>Filter By  <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black' onClick={()=>setisopencategorypanel(!isopencategorypanel)}>
                {
                    isopencategorypanel===true ? <FaAngleUp/> : <FaAngleDown/>
                }
                </Button>
                </h3>
            <Collapse isOpened={isopencategorypanel}>
            <div className="scroll px-10">
                <FormControlLabel control={<Checkbox  size="small" />} label="Fashion" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label="Electronics" className='w-full' />
                <FormControlLabel control={<Checkbox  size="small" />} label="Bags" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label="Footwear" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label="Groceries" className='w-full' />
                <FormControlLabel control={<Checkbox  size="small" />} label="Wellness" className='w-full'/>
               
            </div>
            </Collapse>
        </div>

        <div className="box ">
            <h3 className='uppercase mb-4 font-[600] flex items-center'>Availability  <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black' onClick={()=>setisopencategorypanel2(!isopencategorypanel2)}>
                {
                    isopencategorypanel2===true ? <FaAngleUp/> : <FaAngleDown/>
                }
                </Button>
                </h3>
            <Collapse isOpened={isopencategorypanel2}>
            <div className="scroll px-10 w-full">
                <FormControlLabel control={<Checkbox  size="small" />} label=" Available (17)" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label="In Stock (17)" className='w-full' />
                <FormControlLabel control={<Checkbox  size="small" />} label="Not Available (17)" className='w-full'/>
                {/* <FormControlLabel control={<Checkbox  size="small" />} label="Footwear" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label="Groceries" className='w-full' />
                <FormControlLabel control={<Checkbox  size="small" />} label="Wellness" className='w-full'/>
                */}
            </div>
            </Collapse>
        </div>


        <div className="box ">
            <h3 className='uppercase mb-4 font-[600] flex items-center'>Size  <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black' onClick={()=>setisopencategorypanel3(!isopencategorypanel3)}>
                {
                    isopencategorypanel3===true ? <FaAngleUp/> : <FaAngleDown/>
                }
                </Button>
                </h3>
            <Collapse isOpened={isopencategorypanel3}>
            <div className="scroll px-10">
                <FormControlLabel control={<Checkbox  size="small" />} label=" Small" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label="Medium" className='w-full' />
                <FormControlLabel control={<Checkbox  size="small" />} label="Large" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label=" XL" className='w-full'/>
                <FormControlLabel control={<Checkbox  size="small" />} label=" XXL" className='w-full' />
               
            </div>
            </Collapse>
        </div>


         <div className="box mt-4">
            <h3 className='uppercase mb-4 font-[600] flex items-center'> Filter By Price  </h3>
               <RangeSlider/>
               <div className='flex pt-2 pb-2 pricerange'>
                <span className='text-[13px]'>
                    From: <strong className='text-dark'>Rs: {100}</strong>
                </span>
                <span className='ml-auto text-[13px]'>
                    From: <strong className='text-dark'>Rs: {5000}</strong>
                </span>
               </div>
        </div>

 <div className="box mt-4">
            <h3 className='uppercase mb-4 font-[600] flex items-center'> Filter By Rating</h3>
            <div className="rating flex items-center flex-col text-[20px]">
              <Rating name="half-rating text-[20px]" defaultValue={5} precision={0.5} />
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              <Rating name="half-rating" defaultValue={3} precision={0.5} />
              <Rating name="half-rating" defaultValue={2} precision={0.5} />
              <Rating name="half-rating" defaultValue={1} precision={0.5} />
              </div>
        </div>

    </aside>
    
    </>
  )
}

export default Sidebar