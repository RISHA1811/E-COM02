import React, { useState } from 'react'
import Uploadbox from '../../Components/Uploadbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Addsubcatlist = () => {
const [productweight, setproductweight] = useState('');

     const handleChangeproductweight = (event) => {
    setproductweight(event.target.value);
  };

    
  return (
    <>
     <section className='p-5 bg-gray-50'>
      <form className='form p-8 py-3 '>
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4 pt-4 ">


        <div className='grid grid-cols-4 mb-3 gap-5'>
<div className="col ">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Category</h3>
 <Select
          labelId="demo-simple-select-label"
          id="productcategorydrop"
          size='small'
          className='w-full'
          value={productweight}
          label="category"
          onChange={handleChangeproductweight}
        >
          <MenuItem value={''}>None</MenuItem>
          <MenuItem value={10}>2KG</MenuItem>
          <MenuItem value={20}>4GB</MenuItem>
          <MenuItem value={30}>5GB</MenuItem>
        </Select>
</div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>SubCategory Name</h3>
<input type="text " className='w-full h-[40px] p-3  text-sm border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>

</div>
        </div>

        
<br />
<div className="w-[250px]">
<Button type='Submit' className='btn-blue btl-lg w-full flex gap-2 '><FaCloudUploadAlt className='text-[25px] text-white'/>Publish And View</Button>
       </div> 
        </form>
        </section>
    </>
  )
}

export default Addsubcatlist;
