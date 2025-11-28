import React from 'react'
import Homeslider from '../../components/Homeslider';
import CatSlider from '../../components/CatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import Adsbannerslider from '../../components/Adsbannerslider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Productslide from '../../components/Productslide';
import Productitems from '../../components/Productitems';
import Banner2 from '../../components/banner2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import Blogitem from '../../components/Blogitem';

import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import Homebannerv2 from '../../components/Homebannerv2';
import Bannerboxv2 from '../../components/bannerboxv2';
import Newslider from '../../components/Newslider/newslider';









 const Home = () => {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    
        <>
        <section className='py-6'>
          <div className="container flex ">
            <div className="part1 w-full ">
        {/* <Homeslider/> */}
        <Newslider/>
        </div>
                    {/* <div className="part2 w-[30%] pl-5  flex items-center justify-between flex-col ">
                      <Bannerboxv2/>
                      

      </div> */}
        </div>
        </section>

        
        <CatSlider/>

        <section className='bg-white py-7  '>

          <div className="container ">
            <div className="flex items-center justify-between">
              <div className="leftsec">
                <h2 className='text-[20px] font-[500]'>
                  Popular Products
                </h2>
                <p className='text-[15px] font-[400]'>
                  Do not miss the current offers until the end of March.
                </p>
              </div>
              <div className="rightsec w-[50%]">
                 <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="footwear" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Grocery" />
        <Tab label="Jewellery" />
      </Tabs>
              </div>
            </div>


            <Productslide items={5}/>
            


          </div>
        </section>







        <section className='py-8 pt-2 bg-white w-full px-4 '>
          <div className="container  w-full">
            <div className="materials flex items-center justify-between flex-col">
            <div className="freeshipping w-full bg-gray-100 py-4 border border-[#ff5252] flex items-center justify-between rounded-lg px-7 ">
              <div className="col1 flex items-center justify-between gap-3 ">
              <LiaShippingFastSolid className='text-[50px]'/>
              <span className='text-[20px] font-[400] uppercase'>Free Shipping</span>
              </div>
              <div className="col2">
              <p className='text-[19px] font-[400] items-center justify-center'>Free Delivery Now On Your First Order and over $200</p>
            </div>

            <div className="col3">
              <p className='text-[25px] font-[600]'>- Only $200*</p>
            </div>
            </div>

            
          </div>


           <Adsbannerslider  items={4}/>


          </div>
        </section>


        <section className='py-4 pt-3  px-4 w-full '>
          <div className="container ">
            <div className="flex items-center justify-between">
              <div className="leftsec">
                <h2 className='text-[25px] font-[600]'>
                  Latest Products
                </h2>
                {/* <p className='text-[15px] font-[400]'>
                  Do not miss the current offers until the end of March.
                </p> */}
              </div>
              <div className="rightsec w-[50%]">
                 {/* <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {/* <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" /> */}
      {/* </Tabs>  */}
              </div>
            </div>


            <Productslide items={5}/>


            <Banner2  items={4}/>

          </div>
          
        </section>


        <section className='py-4 pt-0  px-4 w-full '>
          <div className="container  ">
            <div className="flex items-center justify-between ">
              <div className="leftsec ">
                <h2 className='text-[25px] font-[600] '>
                  Featured Products
                </h2>
                {/* <p className='text-[15px] font-[400]'>
                  Do not miss the current offers until the end of March.
                </p> */}
              </div>
              <div className="rightsec w-[50%]">
                 {/* <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {/* <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" /> */}
      {/* </Tabs>  */}
              </div>
            </div>


            <Productslide items={5}/>


            <Banner2  items={3}/>

          </div>
          
        </section>
       <section className="blogsection py-5 pt-0">
        <div className='container'>
           <div className="flex items-center justify-between">
              <div className="leftsec">
                <h2 className='text-[25px] font-[600] mb-4'>
                  From The Blog
                </h2>
                {/* <p className='text-[15px] font-[400]'>
                  Do not miss the current offers until the end of March.
                </p> */}
              </div>
              <div className="rightsec w-[50%]">
                 {/* <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {/* <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" />
        <Tab label="" /> */}
      {/* </Tabs>  */}
              </div>
            </div>
          <Swiper
                     slidesPerView={3}
                     spaceBetween={20}
                      
                      navigation={true}
                     modules={[Navigation]}
                     
                     
                     className="blogslider"
                   >
                    <SwiperSlide>
                      <Blogitem/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Blogitem/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Blogitem/>
                    </SwiperSlide>
                    
                   </Swiper>
        </div>
       </section>

<br/><br/>
       

      
   
        </>
  )
}


export default Home;