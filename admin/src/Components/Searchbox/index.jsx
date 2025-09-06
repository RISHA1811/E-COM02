import React from 'react'
import { GoSearch } from "react-icons/go";

const Searchbox = () => {
  return (
    <>
    <div className="w-full h-auto  bg-[#f1f1f1] relative overflow-hidden">
        <GoSearch className='absolute top-[13px] left-[10px] z-50 pointer-events-none'/>
<input type="text" className='w-full border pl-8 border-[rgba(0,0,0,0.1)] h-[40px] bg-[#f1f1f1] p-2 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px] opacity-50' placeholder='Search here....'/>
    </div>
    </>
  )
}

export default Searchbox