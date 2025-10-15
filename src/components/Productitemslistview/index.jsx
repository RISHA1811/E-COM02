import React, { useContext } from 'react'
import "../Productitems/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { IoCartOutline } from "react-icons/io5";
import { Mycontext } from '../../App';

 const Productitems = () => {
 const  context =useContext(Mycontext);

  return (
    <div className="productitems1   rounded-lg overflow-hidden border-1 border-[#e0e0e0] bg-gray-100 shadow-md h-[400px] flex items-center text-left ">
      <div className="  imagewrapper w-[25%] h-[250px] overflow-hidden rounded-md relative  group text-left">
              <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" class="w-full h-[250px] pl-2"/>
              
      <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 text-primary rounded-md font-[900] bg-white py-0.5 px-2'>20%</span>


<div className="action absolute top-[10px]  right-[0px]  z-50 flex items-center   flex-col  w-[50px] transition-all  text-left">
             <Tooltip title="Wishlist" placement="bottom-start">
             <Button>
              < FaRegHeart className=' !w-[33px] !h-[33px] !min-w-[35px] rounded-full bg-white py-0.5 px-2 hover:bg-primary hover:text-white '/> </Button>
              </Tooltip>
                            <Tooltip title="Compare" placement="bottom-start">

            <Button>
              <IoIosGitCompare className=' !w-[33px] !h-[33px] !min-w-[35px] rounded-full bg-white py-0.5 px-2 hover:bg-primary hover:text-white '/> </Button>
              </Tooltip>

              <Tooltip title="Zoom" placement="bottom-start">
               <Button>
              <MdZoomOutMap className=' !w-[33px] !h-[33px] !min-w-[35px] rounded-full bg-white py-0.5 px-2 hover:bg-primary hover:text-white' onClick={()=>context.setOpen(true)}/>
            </Button>
            </Tooltip>

          </div>
      </div>

      

      
      
      <div className="info p-2 py-2  px-8  w-[75%] flex  justify-start flex-col  ">
        <h6 class="text-[25px] font-[300] text-left"><Link to="/" className='link transition-all'>Flying Machine</Link></h6>
        <h3 className='text-[28px] mt-2 font-[500] mb-1'><Link to="/" className='link transition-all'>Women Wide Leg High-Rise </Link></h3>
        <p className='text-[14px] mb-3 '>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever </p>
           
      <Rating name="size-small" defaultValue={4} size="large" readOnly />
      <div className="oldprice flex items-center gap-3">
        <span className="price line-through text-gray-400 text-[20px]">₹700</span>
          <span className="price text-primary font-[500] text-[20px]">₹500</span>

         



      </div>
      <Link to="/cart"><Button className='btn-org !mt-2 flex gap-2'><IoCartOutline className='text-[20px]'/>Add to Cart </Button></Link>
     

    

      </div>
    </div>





  )
}

export default Productitems;
