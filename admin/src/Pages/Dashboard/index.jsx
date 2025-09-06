import React, { useState,PureComponent, useContext } from 'react'
import Dashboardbox from '../../Components/Dashboardboxes'
import { PiHandWavingFill } from "react-icons/pi";
import Button from '@mui/material/Button';
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { FaAngleUp } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progressbar from '../../Components/Progressbar';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Pagination from '@mui/material/Pagination';
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
import { IoMdAdd } from "react-icons/io";
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, Legend ,AreaChart, Area,} from 'recharts';
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





const Dashboard = () => {


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

const [chartdata,setchartdata] = useState([
  {
    name: 'JAN',
    TotalSales: 4000,
    TotalUser: 7000,
    amt: 2400,
  },
  {
    name: 'FEB',
    TotalSales: 8000,
    TotalUser: 6398,
    amt: 2210,
  },
  {
    name: 'MAR',
    TotalSales: 2000,
    TotalUser: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    TotalSales: 2780,
    TotalUser: 10908,
    amt: 2000,
  },
  {
    name: 'MAY',
    TotalSales: 6890,
    TotalUser: 2800,
    amt: 2181,
  },
  {
    name: 'JUNE',
    TotalSales: 4390,
    TotalUser: 5800,
    amt: 2500,
  },
  {
    name: 'JULY',
    TotalSales: 3490,
    TotalUser: 900,
    amt: 2100,
  },
    {
    name: 'AUG',
    TotalSales: 2490,
    TotalUser: 4300,
    amt: 2100,
  },
    {
    name: 'SEPT',
    TotalSales: 5490,
    TotalUser: 6300,
    amt: 2100,
  },
      {
    name: 'OCT',
    TotalSales: 6490,
    TotalUser: 8300,
    amt: 2100,
  },    {
    name: 'NOV',
    TotalSales: 4490,
    TotalUser: 9300,
    amt: 2100,
  },    {
    name: 'DEC',
    TotalSales: 5490,
    TotalUser: 8300,
    amt: 2100,
  },
]);

const[chartdata2,setchartdata2]=useState([

  {
    name: '15',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '16',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '17',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '18',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '19',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '20',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '21',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: '22',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },  {
    name: '23',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },  {
    name: '24',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },  {
    name: '25',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

]);


const context = useContext(MyContext);


    const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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




  return (
    <>

    <div className='w-full py-2 px-5 p-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md'>
<div className="info">
  <h1 className='text-[35px] font-bold leading-10 mb-3 '>Good Morning,<br/>
 <span className='flex items-center gap-2'>Cameron  <PiHandWavingFill className='text-[#fac036] text-[30px]'/> </span>  
 </h1>
 <p >Here’s What happening on your store today. See the statistics at once.

</p>
<br />

<Button className='btn-blue  !uppercase flex gap-2 ' onClick={()=>context.setisopenfullscreenpanel({open:true,model:'Add Product'})}><FaPlus/> Add Product</Button>
</div>

<img src="/dashboard.jpeg" className='w-[300px]' />


    </div>
    <Dashboardbox/>
{/* Product table 1 */}
<div className="card mt-3 my-3 shadow-md sm:rounded-lg">
<div className="flex items-center justify-between px-3 py-5">
  <h2 className='text-[20px] font-[600]'>Products</h2>


</div>
<div className="flex items-center w-full pl-5 ">
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


    <div className='col2 w-[28%] flex items-center gap-3  ml-auto'>
      <Button className='btn !bg-green-600 !text-[#fff] !font-[500] btn-sm flex gap-2'><BiExport className='!text-[20px]'/>Export</Button>
      <Button className='btn-blue !bg-green-600 !text-[#fff] !font-[500] btn-sm flex gap-1' onClick={()=>context.setisopenfullscreenpanel({open:true,model:'Add Product'})}><IoMdAdd className='!text-[20px]' />Add Product</Button>

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

{/* products table 2 */}
<div className="card mt-3 my-3 shadow-md sm:rounded-lg">
<div className="flex items-center justify-between px-3 py-5">
  <h2 className='text-[20px] font-[600]'>Products</h2>
</div>

 

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-700 bg-[#f1f1f1]">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr className='bg-[rgba(24,102,238)] color-[#f1f1f1]'>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-all-search" class="sr-only">checkbox</label>
          </div>
        </th>
        <th scope="col" className="px-6 py-3 text-[#fff] font-[700] text-[15px]">Product name</th>
        <th scope="col" className="px-6 py-3 text-[#fff] font-[700] text-[15px]">  Category</th>
        <th scope="col" className="px-6 py-3 text-[#fff] font-[700] text-[15px]">SubCategory</th>
        <th scope="col" className="px-6 py-3 text-[#fff] font-[700] text-[15px]">Price</th>
        <th scope="col" className="px-6 py-3 text-[#fff] font-[700] text-[15px]">Sale</th>
        <th scope="col" className="px-6 py-3 text-[#fff] font-[700] text-[15px]">Action</th>
        
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-search-2"
              type="checkbox"
              className="w-4 h-4 text-black-200 bg-black-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-table-search-2" className="sr-only bg-[#f1f1f1] text-[#ccc] ">checkbox</label>
          </div>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://ecme-react.themenate.net/img/products/product-8.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
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
        </th>
        <td class="px-6 py-4">Electronics</td>
        <td class="px-6 py-4">Women </td>

        <td class="px-6 py-4">
 <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
        </td>


        <td class="px-6 py-4">
             <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={60} type="middle"/>
        </td>
       
        <td class="flex items-center px-4 py-11">
                 <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]   hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1] '>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]   hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1] '>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
        </td>
      </tr>

      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-search-2"
              type="checkbox"
              className="w-4 h-4 text-black-200 bg-black-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-table-search-2" className="sr-only bg-[#f1f1f1] text-[#ccc] ">checkbox</label>
          </div>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://ecme-react.themenate.net/img/products/product-8.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
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
        </th>
        <td class="px-6 py-4">Electronics</td>
        <td class="px-6 py-4">Women </td>

        <td class="px-6 py-4">
 <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
        </td>


        <td class="px-6 py-4">
             <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={60} type="middle"/>
        </td>
       
        <td class="flex items-center px-4 py-11">
                 <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]   hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1] '>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]   hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1] '>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
        </td>
      </tr>

  <tr class="bg-white border-b hover:bg-gray-50">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-search-2"
              type="checkbox"
              className="w-4 h-4 text-black-200 bg-black-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-table-search-2" className="sr-only bg-[#f1f1f1] text-[#ccc] ">checkbox</label>
          </div>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <td className="px-0 py-3">
<div className="flex items-center gap-4">
    <div className="img w-[65px] rounded-md overflow-hidden h-[65px] group">
                <Link to="/product/45656" >

              <img src="https://ecme-react.themenate.net/img/products/product-8.jpg" class="w-full pl-2 group-hover:scale-105 transition-all "/>
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
        </th>
        <td class="px-6 py-4">Electronics</td>
        <td class="px-6 py-4">Women </td>

        <td class="px-6 py-4">
 <div className="oldpriice">
                <h3 className='line-through font-[600] leading--3'>$450</h3>
                <h3 className='font-[600] text-primary'>$350</h3>
            </div>
        </td>


        <td class="px-6 py-4">
             <p className='text-[14px] w-[100px]'><span className='font-[600]'>234</span> Sale</p>
            <Progressbar value={60} type="middle"/>
        </td>
       
        <td class="flex items-center px-4 py-11">
                 <div className="flex items-center gap-4">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1]'>
                    <MdEdit className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>
                <Button className='!w-[35px] !h-[35px] !min-w-[35px]   hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1] '>
                    <MdDelete className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px]   hover:!bg-[#ccc] !text-[#ccc] !rounded-full !bg-[#f1f1f1] '>
                    <IoMdEye className='text-[rgba(0,0,0,0.8)] text-[20px]'/>
                </Button>

            </div>
        </td>
      </tr>

   

    </tbody>
  </table>

 <nav className="flex items-center justify-between pt-4 mb-4 p-3">
      {/* Info */}
      <span className="text-sm text-gray-600">
        Showing <span className="font-semibold text-gray-900">1-10</span> of{" "}
        <span className="font-semibold text-gray-900">1000</span>
      </span>

      {/* Pagination */}
      <ul className="inline-flex space-x-1 text-sm">
        <li>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 h-8 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-100"
          >
            Previous
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`px-3 h-8 border ${
                currentPage === page
                  ? "border-blue-500 bg-blue-100 text-blue-600"
                  : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
              } rounded`}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, 5))}
            className="px-3 h-8 border border-gray-300 bg-white text-gray-600 rounded hover:bg-gray-100"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>



</div>



</div>

{/* recent order */}
{/* <div className="card mt-3 my-3 shadow-md sm:rounded-lg">
<div className="flex items-center justify-between px-3 py-5">
  <h2 className='text-[20px] font-[600]'>Recent Orders</h2>
</div>

 <div class="relative overflow-x-auto mt-5 pb-5">
    <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                   Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Paymant Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    	Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Phone Number
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Address
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Pincode
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Total Amount	
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Email	
                </th><th scope="col" className="px-6 py-3 whitespace-nowrap">
                    User Id		
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Order Status			
                </th><th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Date		
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
                <td className="px-6 py-4">
                                       <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=> isShowOrderedProduct(0)}  >
                                        {
                                            isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                            : 
                                            <FaAngleDown   className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                        }
                                        
                                        
                                        </Button>

                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary font-[600]'>
                          54555461dscfv4555561gg
                    </span>
                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary font-[600]'>
                          5465446dcfgvhbj
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    Rishabh Jha
                </td>

                 <td className="px-6 py-4">
                    456541516561516
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>
                        dfcgvhbjnmfghjnfghjnkmrcfgvhjfgvhbjngvhbjkctfgfvhbj
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500]">
                    5664121
                </td>

                 <td className="px-6 py-4 font-[500]">
                    45000
                </td>

                 <td className="px-6 py-4 font-[500]">
                    fvghbjn@gmail.com
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary font-[600]'>
                        54465ghbjnkmdfcgvhbjnm
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500] ">
                    <Badge status="delivered"/>
                </td>

                 <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    24-08-2025
                </td>

                
            </tr>

{
    isOpenOrderedProduct === 0 && (

         <tr>
                <td className='pl-20'  colSpan={6}>
                     <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                   Product Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    	Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    SubTotal
                </th> 
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

           
           
           
           
        </tbody>
    </table>
                </td>
            </tr>



    )    
}



            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
                <td className="px-6 py-4">
                                       <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=> isShowOrderedProduct(1)}  >
                                        {
                                            isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                            : 
                                            <FaAngleDown   className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                        }
                                        
                                        
                                        </Button>

                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary font-[600]'>
                          54555461dscfv4555561gg
                    </span>
                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary font-[600]'>
                          5465446dcfgvhbj
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    Rishabh Jha
                </td>

                 <td className="px-6 py-4">
                    456541516561516
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>
                        dfcgvhbjnmfghjnfghjnkmrcfgvhjfgvhbjngvhbjkctfgfvhbj
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500]">
                    5664121
                </td>

                 <td className="px-6 py-4 font-[500]">
                    45000
                </td>

                 <td className="px-6 py-4 font-[500]">
                    fvghbjn@gmail.com
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary font-[600]'>
                        54465ghbjnkmdfcgvhbjnm
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500] ">
                    <Badge status="delivered"/>
                </td>

                 <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    24-08-2025
                </td>

                
            </tr>

{
    isOpenOrderedProduct === 1 && (

         <tr>
                <td className='pl-20'  colSpan={6}>
                     <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                   Product Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    	Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    SubTotal
                </th> 
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

        
           
        </tbody>
    </table>
                </td>
            </tr>



    )  
}
           
           
           
           
        </tbody>
    </table>
</div>


  <Pagination count={10} color="primary"  className='p-6 flex items-center justify-center'/> 
</div> */}


{/* Graph */}
<div className="card mt-3 my-3 shadow-lg sm:rounded-lg  flex items-center justify-end">
<div className='w-[50%]'>
 <div className="flex items-center justify-between px-3 py-5 pb-0">
  <h2 className='text-[20px] font-[600]'>Total Users and Total Sale</h2>

</div>

 <div className="flex items-center  px-3 py-5 pt-1 gap-3">
  <span className='flex items-center gap-1 text-[15px] '><span className='block w-[10px] h-[8px] rounded-full bg-green-600'></span>Total Users</span>
  <span className='flex items-center gap-1 text-[15px] '><span className='block w-[10px] h-[8px] rounded-full bg-primary'></span>Total Sales</span>
</div>


      <LineChart
        width={500}
        height={270}
        data={chartdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke='none' />
        <XAxis dataKey="name" tick={{ fontSize: 12}} />
        <YAxis tick={{ fontSize: 12}}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalSales" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3} />
        <Line type="monotone" dataKey="TotalUser" stroke="#82ca9d" strokeWidth={3}/>
      </LineChart>

</div>

<div className='w-[50%]'>
 <div className="flex items-center justify-between px-3 py-5 pb-0">
  <h2 className='text-[20px] font-[600]'>Yearly Sales(10 years)</h2>

</div>




        <AreaChart
        width={500}
        height={270}
        data={chartdata2}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke='none' />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

<span className=' flex items-center justify-center'>(Years)</span>

</div>

</div>

    </>

  )
}

export default Dashboard;
