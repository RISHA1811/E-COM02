import Button from '@mui/material/Button'
import React, { useContext, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { BiExport } from "react-icons/bi";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progressbar from '../../Components/Progressbar';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Pagination from '@mui/material/Pagination';
import Searchbox from '../../Components/Searchbox';
import { MyContext } from '../../App';
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";







const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Men',
  'Women',
  'Kids',
  'Jewellery',
  'Bags',
  'Fashion'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}




const User = () => {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [isOpenOrderedProduct,setIsOpenOrderedProduct] = useState(null)

    const isShowOrderedProduct = (index)=> {
        if(isOpenOrderedProduct===index){
            setIsOpenOrderedProduct(null);
        }else{
            setIsOpenOrderedProduct(index);
        }

        
    };

    const context = useContext(MyContext);

  return (
    <>
 

<div className="card mt-3 pt-5 my-3 shadow-md sm:rounded-lg ">

<div className="flex items-center w-full px-5 ">
     <div className="flex items-center justify-between px-2 py-0 mt-3">
  <h2 className='text-[25px] font-[700]'>Users List</h2>

  
</div>

    <div className="col2 w-[30%] ml-auto  ">
<Searchbox/>
</div>






</div>

<div class="relative overflow-x-auto mt-5 pb-5">
    <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                <th scope="col" class="px-6 py-3 w-[10%]">
                    <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>

                </th>
                <th scope="col" className="px-0 text-[14px] py-3 whitespace-nowrap w-[120px]">
                   User Image
                </th>
                <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap ">
                    User Name
                </th>
                <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap ">
                    User Email
                </th>
                
                 <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    User Phone number
               </th>
               <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    Created Date
               </th>
               
            </tr>
        </thead>
        <tbody>



{/* Aarav Mehta – aarav.mehta24@gmail.com

Ishita Sharma – ishita.sharma92@yahoo.com

Rohan Kapoor – rohan.kapoor01@outlook.com

Priya Nair – priya.nair07@gmail.com

Arjun Verma – arjun.v.verma98@protonmail.com

Sneha Iyer – sneha.iyer2000@gmail.com

Kabir Malhotra – kabir.malhotra23@yahoo.com

Ananya Singh – ananya.singh08@outlook.com

Vikram Joshi – vikram.joshi1997@gmail.com

Neha Desai – neha.desai14@rediffmail.com */}


       
             <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/1.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
                Aarav Mehta
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> Vikash4332@gmail.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-98945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 02-2-2004

            </span>
            
</td>    

  
           </tr>
           
  
              <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/4.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
                Ishita Sharma 
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> ishita.sharma92@yahoo.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-85945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 18-12-1998

            </span>
            
</td>    

  
           </tr>



               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/2.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
                Rohan Kapoor 
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> rohan.kapoor01@outlook.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-9945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 24-01-2008

            </span>
            
</td>    

  
           </tr>




               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/1.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
               Priya Nair 
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> priya.nair07@gmail.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-96945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 14-02-2010

            </span>
            
</td>    

  
           </tr>




               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/5.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
                Arjun Verma
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> arjun.v.verma98@protonmail.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-92945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 16-08-2001

            </span>
            
</td>    

  
           </tr>




               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/4.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
               Sneha Iyer
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> sneha.iyer2000@gmail.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-78945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 10-12-2006

            </span>
            
</td>    

  
           </tr>



               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/3.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
               Kabir Malhotra
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> kabir.malhotra23@yahoo.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-82945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 21-12-2006

            </span>
            
</td>    

  
           </tr>




               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/2.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
                Ananya Singh 
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> ananya.singh08@outlook.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-98945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 24-07-2002

            </span>
            
</td>    

  
           </tr>



               <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[45px] rounded-md overflow-hidden h-[45px] group">
                <Link to="/product/45656" >

              <img src="https://mui.com/static/images/avatar/1.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    

</div>
</td>


            <td className="px-6 py-3">
                Vikram Joshi
</td>

          <td className="px-6 py-3">
            <span className='flex items-center gap-2'>
                           <MdMarkEmailRead/> vikram.joshi1997@gmail.com

            </span>
</td>
 <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <FaPhone/> +91-92945612345

            </span>
            
</td>

     <td className="px-6 py-3">
     <span className='flex items-center gap-2'>
                           <SlCalender/> 07-07-2007

            </span>
            
</td>    

  
           </tr>


      
           
        </tbody>
    </table>
</div>

<div className="flex items-center justify-end pt-4 pb-4">
      <Pagination count={10} color="primary"  />

</div>

</div>




    </>
  )
}

export default User