import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';
import Button from '@mui/material/Button';



 const homeslider = () => {
  return (
    <>
    <div className='homeslider py-4  '>
        <div className='container '>
     <Swiper 
     
     loop={true}
             spaceBetween={10}
              autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
     navigation={true} modules={[Navigation,Autoplay]} className="homeslider   !overflow-hidden" >
        <SwiperSlide>
            <div className='item   w-full rounded-md   overflow-hidden relative'>
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" alt="Banner slide" className='w-full cursor-pointer'/>

             <div className="info absolute top-0 -right-[100%] w-[50%] z-50 p-8 h-[100%] flex items-center flex-col justify-center transition-all opacity-0 ">
              <h4 className='  text-[18px] font-[500] text-left w-full mb-3 relative -right-[100%] transition-all opacity-0 '>Big Saving Days Sale</h4>

              <h2 className=' text-[35px] font-[700] w-full text-left relative -right-[100%] transition-all opacity-0 '>Women Solid Round Green T-Shirt</h2>
              <h3 className='  text-[18px] font-[500] text-left w-full mb-3 mt-3 flex items-center gap-3 font-[700] relative -right-[100%] transition-all opacity-0 '>Starting At Only <span className='text-primary text-[40px]'>$59.00</span></h3>
              <div className=' w-full   btn relative -right-[100%] transition-all opacity-0 '>
                <Button className="btn-org   ">Shop Now</Button>
              </div>

            </div>




            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='item   w-full rounded-md  overflow-hidden'>
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" alt="Banner slide" className='w-full cursor-pointer'/>

             <div className="info absolute top-0 -right-[100%] w-[50%] z-50 p-8 h-[100%] flex items-center flex-col justify-center transition-all opacity-0 duration-700">
              <h4 className='text-[18px] font-[500] text-left w-full mb-3 relative -right-[100%] transition-all opacity-0'>Big Saving Days Sale</h4>

              <h2 className='text-[35px] font-[700] w-full text-left relative -right-[100%] transition-all opacity-0'>Buy Modern Chair In
Black Color</h2>
              <h3 className='text-[18px] font-[500] text-left w-full mb-3 mt-3 flex items-center gap-3 font-[700] relative -right-[100%] transition-all opacity-0'>Starting At Only <span className='text-primary text-[40px]'>$99.00</span></h3>
              <div className='w-full   relative -right-[100%] transition-all opacity-0 btn'>
                <Button className="btn-org">Shop Now</Button>
              </div>

            </div>
            </div>
        </SwiperSlide>

         {/* <SwiperSlide>
            <div className='item  rounded-[20px]  overflow-hidden'>
            <img src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" alt="Banner slide" className='w-full cursor-pointer'/>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className='item  rounded-[20px]  overflow-hidden'>
            <img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" alt="Banner slide" className='w-full cursor-pointer'/>
            </div>
        </SwiperSlide>        */}
                   

      </Swiper>
      </div>
      </div>
    </>
  )
}

export default homeslider;
