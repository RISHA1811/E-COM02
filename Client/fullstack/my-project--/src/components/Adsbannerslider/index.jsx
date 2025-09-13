import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Autoplay} from 'swiper/modules';
import Bannerbox from '../Bannerbox';
import { Link } from 'react-router-dom';

 const Adsbannerslider = (props) => {
  return (
    <div className='py-6 w-full '>
        <Swiper
           slidesPerView={props.items}
           spaceBetween={20}
            autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
            navigation={true}
           modules={[Navigation,Autoplay]}
           
           
           className="Smbtn"
         >




        <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"} link={"/"}/>

        </SwiperSlide>
         <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg"} link={"/"}/>

        </SwiperSlide>
 <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg"} link={"/"}/>

        </SwiperSlide>

        <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg"} link={"/"}/>

        </SwiperSlide>

                <SwiperSlide>


           <Bannerbox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"} link={"/"}/>

        </SwiperSlide>

     </Swiper>
     </div>
  )
}

export default Adsbannerslider;
