import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Productzoom from '../../components/Productzoom';
import Rating from '@mui/material/Rating';
import Qtybox from '../../components/Qtybox';
import TextField from '@mui/material/TextField';
import Productslide from '../../components/Productslide';
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import Newproductdetails from '../../components/Newproductdetails';

const Productdetails = () => {

  const [activetab,setactivetab] = useState(0);

  return (
    <>
    <div className='py-5 '>
        <div className="container">
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className='link transition !text-[14px]'>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition !text-[14px]'
        >
          Fashion
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition !text-[14px]'
        >
          Apparel
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition !text-[14px]'
        >
           Apple AirPods Max Over-Ear Wireless Headphone
        </Link>

         
      </Breadcrumbs>
      </div>

     
    </div>
    <section className='bg-white py-5 '>

         <div className="container flex gap-5 ">
        <div className="productzoomcontainer w-[40%]">
            <Productzoom/>
        </div>

                <div className="productcontainer w-[60%] ">
                                 <Newproductdetails/>
               
               </div>


               
      </div>

      <div className="container pt-10 ">
        <div className="flex items-center gap-8 mb-5">
          <span className={`link cursor-pointer font-[500] text-[17px] description ${activetab===0 ? 'text-primary' : ''}`} onClick={()=>setactivetab(0)}>Description</span>
          <span className={`link cursor-pointer font-[500] text-[17px] description ${activetab===1 ? 'text-primary' : ''}`} onClick={()=>setactivetab(1)}> Product Details</span>
          <span className={`link cursor-pointer font-[500] text-[17px] description ${activetab===2 ? 'text-primary' : ''}`} onClick={()=>setactivetab(2)}> Reviews (4)</span>

        </div>

{
  activetab===0 &&
  <div className="shadow-md w-full px-8 py-5 rounded-md ">
          <p>Symbol of lightness and delicacy, the hummingbird evokes curiosity and joy. Studio Design' PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime.</p>
          <h3 className='font-[600] mt-3 text-left mb-3'>The standard Lorem Ipsum passage, used since the 1500</h3>
          <p className='mb-4'>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance.</p>
          <h3 className='font-[600] mt-3 text-left mb-3'>Contrary to popular belief, Lorem Ipsum is not simply random text.</h3>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
}
{
  activetab===1 &&
  <>
    <div className="shadow-md w-full px-8 py-5 rounded-md ">
<div className='text-left text-[16px] font-[600] mt-4'>
  <h3 className='mt-3 mb-3'>
    Reference Product1
  </h3>
  <h3 className='mt-3 mb-3'>
    Condition New
  </h3>
  <h3 className='mt-3 mb-3'>
    In stock <span className='text-green-600'>244 Items</span>
  </h3>
</div>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</>
}

{
  activetab===2 && 
  <>
      <div className="shadow-md w-[80%] px-8 py-5 rounded-md ">
  <div className="productreview text-left">
    <h2 className='text-[20px]'>Customer questions & answers</h2>

    <div className="newscroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-4">
      <div className="review w-full pb-5 pt-3 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="info w-[60%] flex items-center gap-2">
          <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
            <img src="https://th.bing.com/th/id/OIP.GDzD9q-sQFLKPcjBMUOBOQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full ' />
          </div>
<div className='w-[70%]'>
  <h2 className='font-[600] text-[16px]'>Rishabh Jha</h2>
  <h5 className='font-[400] text-[13px]'>2024-12-01</h5>
  <p className='font-[400] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  
</div>

        </div>
                                                        <Rating name="size-small" defaultValue={5} size="medium" readOnly  className='mr-5'/>

      </div>
       <div className="review w-full pb-5 pt-3 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="info w-[60%] flex items-center gap-2">
          <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
            <img src="https://th.bing.com/th/id/OIP.GDzD9q-sQFLKPcjBMUOBOQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full ' />
          </div>
<div className='w-[70%]'>
  <h2 className='font-[600] text-[16px]'>Rishabh Jha</h2>
  <h5 className='font-[400] text-[13px]'>2024-12-01</h5>
  <p className='font-[400] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  
</div>

        </div>
                                                        <Rating name="size-small" defaultValue={5} size="medium" readOnly  className='mr-5'/>

      </div>

       <div className="review w-full pb-5 pt-3 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="info w-[60%] flex items-center gap-2">
          <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
            <img src="https://th.bing.com/th/id/OIP.GDzD9q-sQFLKPcjBMUOBOQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full ' />
          </div>
<div className='w-[70%]'>
  <h2 className='font-[600] text-[16px]'>Rishabh Jha</h2>
  <h5 className='font-[400] text-[13px]'>2024-12-01</h5>
  <p className='font-[400] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  
</div>

        </div>
                                                        <Rating name="size-small" defaultValue={5} size="medium" readOnly  className='mr-5'/>

      </div>


       <div className="review w-full pb-5 pt-3 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="info w-[60%] flex items-center gap-2">
          <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
            <img src="https://th.bing.com/th/id/OIP.GDzD9q-sQFLKPcjBMUOBOQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full ' />
          </div>
<div className='w-[70%]'>
  <h2 className='font-[600] text-[16px]'>Rishabh Jha</h2>
  <h5 className='font-[400] text-[13px]'>2024-12-01</h5>
  <p className='font-[400] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  
</div>

        </div>
                                                        <Rating name="size-small" defaultValue={5} size="medium" readOnly  className='mr-5'/>

      </div>



       <div className="review w-full pb-5 pt-3 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="info w-[60%] flex items-center gap-2">
          <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
            <img src="https://th.bing.com/th/id/OIP.GDzD9q-sQFLKPcjBMUOBOQHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-full ' />
          </div>
<div className='w-[70%]'>
  <h2 className='font-[600] text-[16px]'>Rishabh Jha</h2>
  <h5 className='font-[400] text-[13px]'>2024-12-01</h5>
  <p className='font-[400] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  
</div>

        </div>
                                                        <Rating name="size-small" defaultValue={5} size="medium" readOnly  className='mr-5'/>

      </div>




    </div>

    <br />

    <div className="reviewform bg-[#fafafa] p-4 rounded-md">
      <h2 className='text-[18px]'>Add a review</h2>

      <form className='w-full mt-5'>
                 <TextField
          id="outlined-multiline-flexible"
          label="Write a review ..."
          className='w-full'
          multiline
          Rows={4}
        />
        <Rating name="size-small" defaultValue={5} size="medium"   className='mr-5 mt-5'/>

        <div className="flex items-center mt-5">
          <Button className='btn-org'>Submit Review</Button>
        </div>
      </form>
    </div>

  </div>
  </div>
  </>
}


        
      </div>



      <div className="conatiner">
        <h2 className='text-[25px] font-[600] text-left mt-4 mb-2'>
                  Related Products
                </h2>
        <Productslide items={5}/>
        <Productslide items={5}/>
        <Productslide items={5}/>
       

      </div>
    </section>
    </>
  )
}

export default Productdetails