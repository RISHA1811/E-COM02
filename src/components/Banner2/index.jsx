import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Autoplay} from 'swiper/modules';
import Bannerbox from '../Bannerbox';
import { Link } from 'react-router-dom';

 const Banner2 = (props) => {
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


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp"} link={"/"}/>

        </SwiperSlide>
         <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"} link={"/"}/>

        </SwiperSlide>
 <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp"} link={"/"}/>

        </SwiperSlide>

        <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp"} link={"/"}/>

        </SwiperSlide>
        <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp"} link={"/"}/>

        </SwiperSlide>

                <SwiperSlide>


           <Bannerbox img={"https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp"} link={"/"}/>

        </SwiperSlide>

     </Swiper>
     </div>
  )
}

export default Banner2;
