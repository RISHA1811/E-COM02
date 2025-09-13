import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GiClothes } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import './style.css';
import CategoryCollapse from '../../CategoryCollapse';





const CategoryPanel = (props) => {

  
  const handleClose = () => props.setIsOpenCatPanel(false);


  


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className='categorypanel'>
      <h3 className='py-3 text-[18px] font-[500] flex item-center justify-between '>SHOP BY CATEGORIES<IoCloseOutline onClick={handleClose} className='text-[22px] cursor-pointer'/></h3>
     <CategoryCollapse/>
    </Box>
  );

  return (
    <Drawer open={props.isOpenCatPanel} onClose={handleClose}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;