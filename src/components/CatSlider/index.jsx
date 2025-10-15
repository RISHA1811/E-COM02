import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom';


 const CatSlider = () => {
  return (
    <div className='homecatslider py-4 bg-gray-100 w-full '>
        <div className="container ">
             <Swiper
        slidesPerView={8}
        spaceBetween={30}
        
        modules={[Navigation]}
        
        className="mySwiper"
      >
        <Link>
        <SwiperSlide>
             <div className='items py-2  bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px] ' >
            <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" alt="banner" className='w-[60px] cursor-pointer'/>
            <h3>Bags</h3>
             </div>
        </SwiperSlide>
        </Link>
       <Link>
        <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" alt="banner" className='w-[60px] cursor-pointer transition-all'/>
                         <h3>Shoes</h3>

             </div>
             </SwiperSlide>
        </Link>
        <Link>
         <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png
" alt="banner" className='w-[60px] cursor-pointer transition-all'/>
            <h3>Grocery</h3>

             </div>
             </SwiperSlide>
             </Link>
<Link>
              <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png
" alt="banner" className='w-[60px] cursor-pointer transition-all'/>
            <h3>Beauty</h3>

             </div>
             </SwiperSlide>
             </Link>
<Link>
              <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1741661105893_well.png
" alt="banner" className='w-[60px] cursor-pointer transition-all'/>
            <h3>Wellness</h3>

             </div>
             </SwiperSlide>
</Link>
<Link>
              <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png" alt="banner" className='w-[60px] cursor-pointer transition-all'/>
                         <h3>Jewellery</h3>

             </div>
             </SwiperSlide>
             </Link>
<Link>

            <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1754414198666_fashion_cat.png" alt="banner" className='w-[60px] cursor-pointer transition-all'/>
                         <h3>Fashion</h3>

             </div>
             </SwiperSlide>
             </Link>
<Link>

             <SwiperSlide>
             <div className='items py-3 bg-white rounded-[20px] text-center flex items-center justify-center flex-col border-[2px]'><img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" alt="banner" className='w-[60px] cursor-pointer  transition-all'/>
                         <h3>Electronics</h3>

             </div>
             </SwiperSlide>
         </Link>
      </Swiper>
        </div>
    </div>
  )
}


export default CatSlider;




