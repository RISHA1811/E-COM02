import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const Qtybox = () => {
    const[qtyvalue,setqtyvalue]=useState(1);
    const plusqty=()=>{
        setqtyvalue(qtyvalue+1);
    }
    const minusqty=()=>{
        if(qtyvalue===1){
            setqtyvalue(qtyvalue);
        }else{
            setqtyvalue(qtyvalue-1);
        }
    }
  return (
    <>
    <div className="qtybox flex items-center relative">
        <input type="number" className='w-full h-[35px] p-2 pl-5 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md' value={qtyvalue} />
        <div className="flex items-center flex-col justify-between h-[40px] !absolute !top-0 !right-0 !z-50">
        <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]' onClick={plusqty}>
            <FaAngleUp className='text-[12px] opacity-55'/>
            </Button>
        <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]' onClick={minusqty}>
            <FaAngleDown className='text-[12px] opacity-55'/>
            </Button>
        </div>



        
    </div>

    </>
  )
}

export default Qtybox