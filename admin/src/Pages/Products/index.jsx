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




const Products = () => {

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
  <div className="flex items-center justify-between px-2 py-0 mt-3">
  <h2 className='text-[25px] font-[700]'>Products</h2>

  <div className='col2 w-[28%] flex items-center justify-end gap-3  ml-auto'>
      <Button className='btn !bg-green-600 !text-[#fff] !font-[500] btn-sm flex gap-2'><BiExport className='!text-[20px]'/>Export</Button>
      <Button className='btn-blue !bg-green-600 !text-[#fff] !font-[500] btn-sm flex gap-1' onClick={()=>context.setisopenfullscreenpanel({open:true,model:'Add Product'}) } ><IoMdAdd className='!text-[20px]' />Add Product</Button>

    </div>
</div>

<div className="card mt-3 pt-5 my-3 shadow-md sm:rounded-lg ">

<div className="flex items-center w-full px-5 ">
    <div className="col1 w-[20%]">
    <h4 className='font-[600] text-[15px] mb-2 pl-4'>Category By</h4>
    
 <FormControl sx={{ m: 1, width: 300, mt: 0 }}>
        <Select
        className='w-full'
        size='large'
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>Filter </span>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem  value="">
            <span>None</span>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>

    <div className="col2 w-[20%] ml-auto ">
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
                <th scope="col" className="px-0 text-[14px] py-3 whitespace-nowrap w-[350px]">
                   Products
                </th>
                <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    Category
                </th>
                <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    	Sub Category
                </th>
                
                 <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    Price
                </th> <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    Sales
                </th> <th scope="col" className="px-6 text-[14px] py-3 whitespace-nowrap">
                    Action	
                </th>
               
            </tr>
        </thead>
        <tbody>
       
             <tr className="odd:bg-white  border-b dark:border-gray-300 border-gray-200">
            <td className="px-6 pr-0  py-3">
                <div className='w-[60px]'>
                          <Checkbox {...label} size="small" />

                    </div>
            </td>
            <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
       Tasty Metal Shirt
        </Link>
        </h3>
    <span className='text-[12px]'>Books</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>134</span> Sale</p>
            <Progressbar value={20} type="success"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/3.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Modern Gloves        </Link>
        </h3>
    <span className='text-[12px]'>Kids</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={70} type="middle"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
        Rustic Steel Computer
        </Link>
        </h3>
    <span className='text-[12px]'>Games</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={10} type="danger"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/11.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Licensed Concrete Cheese        </Link>
        </h3>
    <span className='text-[12px]'>Electronics</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={80} type="success"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Electronic Rubber Table        
</Link>
        </h3>
    <span className='text-[12px]'>Books</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={20} type="danger"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/16.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Gorgeous Bronze Gloves        </Link>
        </h3>
    <span className='text-[12px]'>Shoes</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={50} type="middle"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/6.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Practical Steel Keyboard        </Link>
        </h3>
    <span className='text-[12px]'>Kids</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={90} type="success"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/8.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Sleek Frozen Ball        </Link>
        </h3>
    <span className='text-[12px]'>Electronics</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={100} type="success"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/9.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
Ergonomic Frozen Pants        </Link>
        </h3>
    <span className='text-[12px]'>Books</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={70} type="middle"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp" class="w-full pl-2 group-hover:scale-105 transition-all "/>
              </Link>

    </div>
    <div className="info w-[75%]">
    <h3 className='font-[600] text-[14px] leading-4 hover:text-primary'>
        <Link to="/product/45656" >
        The sandcastle began to melt under the waves force
        </Link>
        </h3>
    <span className='text-[12px]'>Books</span>
    </div>

</div>
</td>


            <td className="px-6 py-3">
                Electronics
</td>

          <td className="px-6 py-3">
            Women
</td>
          <td className="px-6 py-3 flex flex-col gap-1">
            <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
</td>

          <td className="px-6 py-3 ">
            <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={80} type="success"/>
</td>

          <td className="px-6 py-3 ">
            <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]  hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
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

export default Products