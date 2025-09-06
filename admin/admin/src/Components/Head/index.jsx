import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaRegBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import {MyContext} from "../../App";
import { RiMenu2Fill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Head = () => {
  const [anchormyacc, setAnchormyacc] = useState(null);
  const openmyacc = Boolean(anchormyacc);
  const navigate = useNavigate();

  const handleClickmyacc = (event) => {
    setAnchormyacc(event.currentTarget);
  };
  const handleClosemyacc = () => {
    setAnchormyacc(null);
  };

  const handleSignout = () => {
    navigate('/login');
  };

  const context = useContext(MyContext);

  return (
    <>
      <header className={`w-full h-auto py-2 ${context.isMobile ? 'pl-5' : (context.issidebaropen ? 'pl-64' : 'pl-5')} pr-7 bg-[#fafafa] shadow-md flex items-center justify-between transition-all`}>
        <div className="part1">
          <Button className='!w-10 !h-10 !rounded-full !min-w-10 !text-gray-800' onClick={() => context.setissidebaropen(!context.issidebaropen)}>
            {context.issidebaropen ? (
              <RiMenu2Fill className='text-xl font-black text-gray-800' />
            ) : (
              <RiMenu3Fill className='text-xl font-black text-gray-800' />
            )}
          </Button>
        </div>

        <div className="part2 w-2/5 flex items-center justify-end gap-5">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <FaRegBell />
            </StyledBadge>
          </IconButton>

          <div className="relative">
            <div className="rounded-full w-9 h-9 overflow-hidden cursor-pointer" onClick={handleClickmyacc}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9zt6SEFH7r9AQ3GeOyGbOFPUMo74dLRlxw&s" className='w-full h-full object-cover' />
            </div>

            <Menu
              anchorEl={anchormyacc}
              id="account-menu"
              open={openmyacc}
              onClose={handleClosemyacc}
              onClick={handleClosemyacc}
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
              <MenuItem onClick={handleClosemyacc} className='!bg-white'>
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-9 h-9 overflow-hidden cursor-pointer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9zt6SEFH7r9AQ3GeOyGbOFPUMo74dLRlxw&s" className='w-full h-full object-cover' />
                  </div>
                  <div className="info">
                    <h3 className='text-sm font-medium leading-5'>Angelina Gotelli</h3>
                    <p className='text-xs font-normal opacity-70'>admin-01@ecme.com</p>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate("/profile")} className='flex items-center gap-3'>
                <FaRegUser className='text-base' /> <span className='text-sm'>Profile</span>
              </MenuItem>
              <MenuItem onClick={handleSignout} className='flex items-center gap-3'>
                <IoLogOutOutline className='text-lg' /> <span className='text-sm'>Sign Out</span>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
