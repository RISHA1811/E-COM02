import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FiShoppingCart } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { Mycontext } from '../../App';
import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { fetchDataFromApi} from '../../utils/api.js';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));




 const Header = () => {
const context= useContext(Mycontext);
const context2= useContext(Mycontext);


  const handleClose = () => {
    setAnchorEl(null);
  };



const logout =()=>{
  setAnchorEl(null);
  fetchDataFromApi(`/api/user/logout?token=${localStorage.getItem('accesstoken')}`,{withCredentials : true}).then((res)=>{
console.log(res);

if(res?.error === false) {
    context.setislogin(false);
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    // history("/");

}
  })
}

  



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };




  return (
    <header className='bg-white'>
        <div className="top-strip py-2 border-t-[5px]  border-gray-250 border-b-[5px] border-gray-250">
        <div className='container'>
        <div className='flex item-center justify-between'>
        <div className="col1 w-[50%]">
        <p className=' text-[17px] font-[500] '>Get up to 50% off new season styles,limited time only</p>
        </div>
         <div className=" col2 flex items-center justify-end">
          <ul className='flex items-center gap-4'>
            <li className="list-none">
              <Link to="/help-center " className='text-[17px] link font-[500] transition'>Help Center</Link>
            </li>
            <li className="list-none">
              <Link to="/order-tracking" className='text-[17px] link font-[500] transition'>order Tracking</Link>
            </li>
          </ul>
        </div>
    </div>
    </div>
        </div>
        

        <div className='header py-4  border-b-[5px] border-gray-250'>
          <div className="container flex items-center justify-between">
            <div className="col1 w-[25%]">
              <Link to={"/"}>  <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className='w-[160px] px-2' />
</Link> 
            </div>
            <div className="col2 w-[40%]">
              <Search />
            </div>
            <div className="col3 w-[35%] flex-items-center pl-7 ">
             


               <ul className='flex items-center gap-3 justify-end w-full'>
                 {

                context.islogin === false ?
                (
                <li className='list-none'>
                  <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link> |&nbsp;   <Link to="/Register" className='link transition text-[15px] font-[500]'>Register</Link> 
                </li>
                )
              :(
                <>
               <Button className=" !text-[#000] myaccountwrap flex items-center gap-3 cursor-pointer"  onClick={handleClick}>
                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]' ><FaRegUser  className='text-[16px] text-[rgba(0,0,0,0.7)]'/></Button>

                <div className="info ">
                  <h4 className='text-[14px] text-[rgba(0,0,0,0.6)] font-[500]'>{context?.userData?.name}</h4>
                  <span className='text-[13px] flex font-[400] text-left text-[rgba(0,0,0,0.6)] justify-start'>{context.userData?.email}</span>

                </div>
               </Button>

                   <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/Myaccount">
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
          <FaRegUser  className='text-[18px] text-[rgba(0,0,0,0.7)]'/><span className='text-[14px]'> My Account </span> 
        </MenuItem>
        </Link>

        <Link to="/Myorder">
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
          <PiHandbagSimpleBold className='text-[18px]' /><span className='text-[14px]'> Orders </span> 
        </MenuItem>
                </Link>


                <Link to="/Mylist">
        <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
          <IoHeart className='text-[18px]' /> <span className='text-[14px]'> My List </span> 
        </MenuItem>
                </Link>


                
        <MenuItem onClick={logout} className='flex gap-2 !py-2'>
          <IoIosLogOut  className='text-[18px]'/> <span className=' text-[14px] '> Logout </span> 
        </MenuItem>
                

        
       
       
      </Menu>


               </>
              )
              }
                
              
                  <li>
                      <Tooltip title="Wishlist">
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <GoGitCompare />
                </StyledBadge>
                 </IconButton>
                 </Tooltip> 
                </li>
                  <li>
                      <Tooltip title="Compare">
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <FaRegHeart />
                </StyledBadge>
                 </IconButton>
                 </Tooltip>
                </li>
               
                <li>
                <Tooltip title="Cart">
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <FiShoppingCart  onClick={()=>context2.setOpencartpanel(true)}/>
                </StyledBadge>
                 </IconButton>
                 </Tooltip>
                </li>
               

              
              </ul>
            
            </div>
          </div>
        </div>

        <Navigation />

    </header>

    
  )
}




export default Header;