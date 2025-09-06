import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Uploadbox from '../../Components/Uploadbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";

const Addproduct = () => {

const [productcat, setproductcat] = useState('');
const [productsubcat, setproductsubcat] = useState('');
const [productfeatured, setproductfeatured] = useState('');
const [productrams, setproductrams] = useState('');
const [productweight, setproductweight] = useState('');
const [productsize, setproductsize] = useState('');


 const handleChangeproductcat = (event) => {
    setproductcat(event.target.value);
  };
   const handleChangeproductsubcat = (event) => {
    setproductsubcat(event.target.value);
  };

     const handleChangeproductfeatured = (event) => {
    setproductfeatured(event.target.value);
  };

      const handleChangeproductrams = (event) => {
    setproductrams(event.target.value);
  };

       const handleChangeproductweight = (event) => {
    setproductweight(event.target.value);
  };
       const handleChangeproductsize = (event) => {
    setproductsize(event.target.value);
  };

  return (
    <>
    <section className='p-5 bg-gray-50'>
      <form className='form p-8 py-3 '>
        <div className="scroll max-h-[75vh] overflow-y-scroll pr-4">
        <div className='grid grid-cols-1 mb-3'>
<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Name</h3>
<input type="text " className='w-full h-[40px] p-3  text-sm border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>
</div>

 <div className='grid grid-cols-1 mb-3'>
<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Description</h3>
<textarea type="text " className='w-full h-[140px] p-3 text-sm border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>
</div>

 <div className='grid grid-cols-4 mb-3 gap-4'>
<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product category</h3>
 <Select
          labelId="demo-simple-select-label"
          id="productcategorydrop"
          size='small'
          className='w-full'
          value={productcat}
          label="category"
          onChange={handleChangeproductcat}
        >
          <MenuItem value={null}>None</MenuItem>
          <MenuItem value={10}>Fashion</MenuItem>
          <MenuItem value={20}>Beauty</MenuItem>
          <MenuItem value={30}>Wellness</MenuItem>
        </Select></div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Sub category</h3>
 <Select
          labelId="demo-simple-select-label"
          id="productcategorydrop"
          size='small'
          className='w-full'
          value={productsubcat}
          label="category"
          onChange={handleChangeproductsubcat}
        >
          <MenuItem value={null}>None</MenuItem>
          <MenuItem value={10}> Mens</MenuItem>
          <MenuItem value={20}>Womens</MenuItem>
          <MenuItem value={30}>Kids</MenuItem>
        </Select></div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Price</h3>
<input type="number" className='w-full h-[40px] p-3 text-sm border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Old Price</h3>
<input type="number" className='w-full h-[40px] p-3 text-sm border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>

</div>



 <div className='grid grid-cols-4 mb-3 gap-4'>
<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Is Featured?</h3>
 <Select
          labelId="demo-simple-select-label"
          id="productcategorydrop"
          size='small'
          className='w-full'
          value={productfeatured}
          label="category"
          onChange={handleChangeproductfeatured}
        >
          <MenuItem value={10}>True</MenuItem>
          <MenuItem value={20}>False</MenuItem>
        </Select></div>


<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Stock</h3>
<input type="number" className='w-full h-[40px] p-3 text-sm border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Brand</h3>
<input type="text" className='w-full h-[40px] p-3 text-sm border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Discount</h3>
<input type="number" className='w-full h-[40px] p-3 text-sm border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md '/>
</div>


</div>

<div className='grid grid-cols-4 mb-3 gap-4'>
<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product RAMS</h3>
 <Select
          labelId="demo-simple-select-label"
          id="productcategorydrop"
          size='small'
          className='w-full'
          value={productrams}
          label="category"
          onChange={handleChangeproductrams}
        >
          <MenuItem value={10}>4GB</MenuItem>
          <MenuItem value={20}>6GB</MenuItem>
          <MenuItem value={20}>8GB</MenuItem>
        </Select></div>


<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Weight</h3>
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
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Weight</h3>
 <Select
          labelId="demo-simple-select-label"
          id="productcategorydrop"
          size='small'
          className='w-full'
          value={productsize}
          label="category"
          onChange={handleChangeproductsize}
        >
          <MenuItem value={''} >None</MenuItem>
          <MenuItem value={10}>S</MenuItem>
          <MenuItem value={20}>M</MenuItem>
          <MenuItem value={30}>L</MenuItem>
          <MenuItem value={40}>XL</MenuItem>
          <MenuItem value={50}>XXL</MenuItem>

        </Select>
</div>

<div className="col">
<h3 className='font-[500] text-[14px] mb-1 text-black'>Product Rating</h3>
 <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
</div>


</div>



<div className="col w-full p-5 px-0">
  <h3 className='font-[700] text-[18px] mb-3'>Media & Images</h3>

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
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp"}
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
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp"}
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
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"}
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
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/16.webp"}
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
      src={"https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/9.webp"}
      /> 



    </div>
    </div>




    <Uploadbox multiple={true}/>
  </div>
</div>

</div>

<hr/>
<br />

<Button type='Submit' className='btn-blue btl-lg w-full flex gap-2'><FaCloudUploadAlt className='text-[25px] text-white'/>Publish And View</Button>

      </form>
    </section>
    </>
  )
}

export default Addproduct;
