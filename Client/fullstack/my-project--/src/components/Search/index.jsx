import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

 const Search = () => {
  return (
    <div className='SearchBox w-[100%] h-[50px]  bg-[#e5e5e5]  rounded-[5px] relative p-2'>
      <div className="input">
        <input type="text" placeholder='Search for products....' className=' w-[100%] h-[35px] focus:outline-none bg-inherit p-2'/>
        <Button className='!absolute top-[8px] right-[5px] z-50 !w-[40px] !min-w-[40px] h-[40px] !rounded-full !text-black'>
          <FaSearch className='text-black text-[20px]'/>
        </Button>
        </div>
        
    </div>
  )
}


export default Search;