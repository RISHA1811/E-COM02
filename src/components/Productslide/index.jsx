import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import Productitems from '../Productitems';

 const Productslide = (props) => {
  return (
    <div className='productslider p-6 mt-1'>

         <Swiper
                slidesPerView={props.items}
                spaceBetween={30}
                 navigation={true}
                modules={[Navigation]}
                
                className="mySwiper "
              >

                <SwiperSlide>

                    <Productitems  />

                    
                </SwiperSlide>
                <SwiperSlide>

                    <Productitems  />
                    
                </SwiperSlide>
                <SwiperSlide>

                    <Productitems />
                    
                </SwiperSlide>
                <SwiperSlide>

                    <Productitems />
                    
                </SwiperSlide>
                <SwiperSlide>

                                        <Productitems />

                    
                </SwiperSlide>
               
                
               

                

              </Swiper>
    </div>





  )
}

export default Productslide;