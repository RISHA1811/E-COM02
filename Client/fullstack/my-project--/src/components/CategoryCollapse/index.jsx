import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GiClothes } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegSquareMinus } from "react-icons/fa6";


const CategoryCollapse = () => {
    const [submenuIndex,setsubmenuIndex] = useState(null);
       const [innersubmenuIndex,setinnersubmenuIndex] = useState(null);


        const opensubmenu = (index) => {
    if(submenuIndex===index){
      setsubmenuIndex(null);
    }else{
    setsubmenuIndex(index);
    }
  }
const openinnersubmenu = (index) => {
    if(innersubmenuIndex===index){
      setinnersubmenuIndex(null);
    }else{
    setinnersubmenuIndex(index);
    }
  }
  return (
    <>
   <div className='scroll'>
      {/* start part */}
      <ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Fashion </Button></Link>
          
          {
            submenuIndex===0 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(0)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(0)} />


          }
          
            {

              submenuIndex===0 && (
              <ul className='submenu  w-full pl-3 flex-column'>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Men's</Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(0)}/>
           
                <ul className='submenu  w-full pl-3 flex-column'>
            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>T-Shirts </Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Jeans</Link>
            </li>

           
          </ul>
            </li>
          </ul>
          )}

           {

              submenuIndex===0 && (
              <ul className='submenu  w-full pl-3 flex-column'>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Womens </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(0)}/>
           
                <ul className='submenu  w-full pl-3 flex-column'>
            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Sarees </Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Tops </Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Jeans </Link>
            </li>

            
          </ul>
            </li>
          </ul>
          )}


           {

              submenuIndex===0 && (
              <ul className='submenu  w-full pl-3 flex-column'>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Girls </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(0)}/>
           
                <ul className='submenu  w-full pl-3 flex-column'>
            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Kurtas and suits </Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Tops </Link>
            </li>

            
          </ul>
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>


{/* 1st part */}
       <ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Electronics </Button></Link>
          
          {
            submenuIndex===1 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)} />

                      
          }
          
            {

              submenuIndex===1 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Appliances </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
                <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Mobile </Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Laptops </Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Smart Watches</Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Clocks</Link>
            </li>
          </ul>
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>

{/* 2nd part */}
      <ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Bags </Button></Link>
          
          {
            submenuIndex===2 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(2)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(2)} />

                      
          }
          
            {

              submenuIndex===2 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Men's </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(2)}/>
           
                <ul className='submenu  w-full pl-3 flex-column '>
           

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Men's Bag</Link>
            </li>

            <li className='list-none flex items-center relative mb-3 flex-col'>
              <Link to={"/"} className=' link w-full !text-left !justify-start !px-3  justify-between transition text-[14px]'>Womens's Bag</Link>
            </li>
          </ul>
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>


{/* 3rd part */}
<ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Footwear </Button></Link>
          
          {
            submenuIndex===3 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(3)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(3)} />

                      
          }
          
            {

              submenuIndex===3 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Men's Footwear </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
                
            </li>
          </ul>

          
          )}

           {

              submenuIndex===3 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Women's Footwear </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
                
            </li>
          </ul>

          
          )}
         
          



        </li>
      </ul>

{/* 4th part */}

<ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Groceries </Button></Link>
          
          {
            submenuIndex===4 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(4)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(4)} />

                      
          }
          
            {

              submenuIndex===4 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Detergents </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
               
            </li>
          </ul>
          )}
         
          {

              submenuIndex===4 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Powders </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
               
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>

{/* 5th part */}
<ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Beauty </Button></Link>
          
          {
            submenuIndex===5 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(5)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(5)} />

                      
          }
          
            {

              submenuIndex===5 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Premium Beauty Products </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
               
            </li>
          </ul>
          )}

           {

              submenuIndex===5 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Natural Beauty Products </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
               
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>

{/* 6th part */}
<ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Wellness </Button></Link>
          
          {
            submenuIndex===6 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(6)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(6)} />

                      
          }
          
            {

              submenuIndex===6 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '> </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
               
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>

{/* 7th part */}
<ul className='w-full'>
        <li className='list-none flex items-center relative flex-col'>
          <Link to={"/"} className='w-full'>
          <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '>Jewellery </Button></Link>
          
          {
            submenuIndex===7 ?
            <FaRegSquareMinus className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(7)} />
            :
                      <FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(7)} />

                      
          }
          
            {

              submenuIndex===7 && (
              <ul className='submenu  w-full pl-3 flex-column '>
            <li className='list-none flex items-center relative mb-3 flex-col'>
            <Link to={"/"} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] justify-between '> </Button></Link><FaRegPlusSquare className='text-[20px] absolute top-[5px] right-[25px] coursor-pointer ' onClick={()=>opensubmenu(1)}/>
           
               
            </li>
          </ul>
          )}
         
          



        </li>
      </ul>


      






     </div>
    </>
  )
}

export default CategoryCollapse