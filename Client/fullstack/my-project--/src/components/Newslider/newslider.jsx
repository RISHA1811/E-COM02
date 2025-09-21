import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Newslider = () => {
  return (
    <>
       <Swiper navigation={true}
          loop={true}
           autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide>
          <div className="w-full rounded-md overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" className='rounded-md' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full rounded-md overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" className='rounded-md'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full rounded-md overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" className='rounded-md'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full rounded-md overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" className='rounded-md' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Newslider;
