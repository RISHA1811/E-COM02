import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Productitems from '../../components/Productitems';
import Productitemslistview from '../../components/Productitemslistview';
import Button from '@mui/material/Button';
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




const Productlisting = () => {

const [itemview,setitemview] = useState('grid');


   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='py-5 bg-gray-100 '>
      <div className="container pl-4">
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className='link transition'>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition'
        >
          Fashion
        </Link>
      </Breadcrumbs>
      </div>
      <div className='bg-white p-2 mt-4'>
        <div className="conatiner flex gap-3">
             <div className="sidebar  flex gap-3 w-[22%] h-full bg-white">
            <Sidebar/>
          </div>
          <div className='w-[78%] py-3 '>

            <div className='bg-[#f1f1f1] p-2 w-full rounded-md flex items-center justify-between mb-4 '>
              <div className="col1 flex items-center w-full itemviewaction">
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemview ==="list" && "active"}`} onClick={()=>setitemview('list')}><LuMenu className='text-[0,0,0,0.7]'/></Button>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemview ==="grid" && "active"}`} onClick={()=>setitemview('grid')}><IoGridSharp className='text-[0,0,0,0.7]'/></Button>

                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>
                  There are 18 products.
                </span>
              </div>


              <div className="col2 ml-auto flex items-center  justify-end w-full gap-3 pr-4">
                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>
                  Sort by:
                </span>
                 <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='!bg-white !text-[12px] !text-[#000] !uppercase !border-2 !border-[#000]'
      >
       Relevance
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}         className=' !text-[13px] !text-[#000] !uppercase '
>
        Sales, highest to lowest</MenuItem>
        <MenuItem onClick={handleClose}         className=' !text-[13px] !text-[#000] !uppercase '
>
        Name, A to Z
      </MenuItem>
        <MenuItem onClick={handleClose}         className=' !text-[13px] !text-[#000] !uppercase '
>
        Name, Z to A
      </MenuItem>
      <MenuItem onClick={handleClose}         className=' !text-[13px] !text-[#000] !uppercase '
>
        
        Price, low to high
      </MenuItem>
        <MenuItem onClick={handleClose}         className=' !text-[13px] !text-[#000] !uppercase '
>
        
        Price, high to low
      </MenuItem>
      </Menu>
    </div>
              </div>

            </div>
            <div className={`grid ${itemview==='grid' ? 'grid-cols-4  md:grid-cols-4' : 'grid-cols-4  md:grid-cols-1' }   gap-4`}>
              {
                itemview ==='grid' ?
                <>
                 <Productitems/>
              <Productitems/>
              <Productitems/>
              <Productitems/>
              <Productitems/>
              <Productitems/>
              <Productitems/>
              <Productitems/>
                </>
                :
                <>
                 <Productitemslistview/>
                <Productitemslistview/>
                 <Productitemslistview/>
                 <Productitemslistview/>
                 <Productitemslistview/>
                 <Productitemslistview/>
                 <Productitemslistview/>
                 <Productitemslistview/>

              
                </>

              }
             

            </div>
            <div className="flex items-center justify-center mt-10">
                          <Pagination count={10} hidePrevButton hideNextButton />

            </div>
          </div>
      </div>

      
    </div>

          
        
    </section>
  )
}

export default Productlisting