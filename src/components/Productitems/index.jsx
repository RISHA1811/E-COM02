import React, { useContext } from 'react'
import "../Productitems/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { Mycontext } from '../../App';

 const Productitems = () => {
     const  context =useContext(Mycontext);

  return (
    <div className="productitems1  rounded-lg overflow-hidden border-1 border-[#e0e0e0] bg-gray-100 shadow-md h-[400px]">
      <div className="  imagewrapper w-full h-[250px] overflow-hidden rounded-md relative  group "><Link to="/Product/:id">
              <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" class="w-full h-[250px]"/>
              </Link>
             
              
      <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 text-primary rounded-md font-[900] bg-white py-0.5 px-2'>20%</span>

<div className=" action icons absolute right-[0px] top-[0px] opacity-1 z-[50]  w-[50px] transition-all flex items-center flex-col  ">
 <Tooltip title="Wishlist" placement="bottom-start">
             <Button>
              < FaRegHeart className=' !w-[33px] !h-[33px] !min-w-[35px] rounded-full bg-white hover:bg-[rgba(254, 251, 251, 0.1)] hover:text-red-500 py-0.5 px-2  '/> </Button>
              </Tooltip>
                            <Tooltip title="Compare" placement="bottom-start">

            <Button>
              <IoIosGitCompare className=' !w-[33px] !h-[33px] !min-w-[35px] rounded-full bg-white py-0.5 px-2  '/> </Button>
              </Tooltip>

              <Tooltip title="Zoom" placement="bottom-start">
               <Button>
              <MdZoomOutMap className=' !w-[33px] !h-[33px] !min-w-[35px] rounded-full bg-white py-0.5 px-2  ' onClick={()=>context.setOpen(true)}/>
            </Button>
            </Tooltip>
</div>

      </div>

      

      
      
      <div className="info p-2 ">
        <h6 class="text-[14px] font-[300]"><Link to="/" className='link transition-all'>Flying Machine</Link></h6>
        <h3 className='text-[16px] mt-1 font-[400] mb-1'><Link to="/" className='link transition-all'>Women Wide Leg High-Rise ...</Link></h3>
           
      <Rating name="size-small" defaultValue={4} size="small" readOnly />
      <div className="oldprice flex items-center gap-3">
        <span className="price line-through text-gray-400 text-[14px]">₹700</span>
          <span className="price text-primary font-[500]">₹500</span>

         



      </div>
     

    

      </div>
    </div>





  )
}

export default Productitems;
