import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';


const Productzoom = () => {

    const [slideindex,setslideindex] = useState(0);
    const zoomsliderbig = useRef();
    const zoomslidersml = useRef();

    const goto = (index) =>{
        setslideindex(index);
        zoomslidersml.current.swiper.slideTo(index);
        zoomsliderbig.current.swiper.slideTo(index);
    }




  return (
    <>
    <div className='flex gap-3'>
        <div className="slider w-[15%]">
            <Swiper 
            ref={zoomslidersml}
            slidesPerView={4}
            direction={'vertical'}
             spaceBetween={10}
             
     navigation={true} modules={[Navigation]} className="productslider h-[500px] overflow-hidden"  >


        <SwiperSlide>

            <div className={`items h-[120px] rounded-md overflow-hidden cursor-pointer group ${slideindex===0 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(0)}>
                <img src="/w26.jpeg" className='w-full transition-all group-hover:scale-105'/>
               
            </div>
        </SwiperSlide>

        

        <SwiperSlide>

            <div className={`items h-[120px] rounded-md overflow-hidden cursor-pointer group ${slideindex===1 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(1)}>
                  <img src=
        "/w23.jpeg"                 
         className='w-full transition-all group-hover:scale-105'  />
                  </div>
                
        </SwiperSlide>

        <SwiperSlide>

            <div className={`items h-[120px] rounded-md overflow-hidden cursor-pointer group ${slideindex===2 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(2)}>
               
                <img src=
        "/w25.jpeg"                 
                className='w-full transition-all group-hover:scale-105'/>
                 </div>
                 </SwiperSlide>

                  <SwiperSlide>

            <div className={`items h-[120px] rounded-md overflow-hidden cursor-pointer group ${slideindex===3 ? 'opacity-1': 'opacity-30'}`} onClick={()=> goto(3)}>
                <img src=
        "/w24.jpeg"                 
                className='w-full transition-all group-hover:scale-105'/>
                </div>
</SwiperSlide>


   <SwiperSlide>

            <div className={`items h-[120px] rounded-md overflow-hidden cursor-pointer group ${slideindex===4 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(4)}>
                <img src=
        " https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp"                 
                className='w-full transition-all group-hover:scale-105'/>
                </div>
</SwiperSlide>


                
           
        

        

       


     </Swiper>

        </div>
        <div className="zoom w-[85%] pl-4 h-[500px] overflow-hidden rounded-md">
             <Swiper 
             ref={zoomsliderbig}
            slidesPerView={1}
             spaceBetween={0}
             
     navigation={false} modules={[Navigation]}>


        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1.3} src={"/w26.jpeg"}  />

        </SwiperSlide>

        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1.3} src={"/w23.jpeg"} />

        </SwiperSlide>

        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1.3} src={
        "/w25.jpeg"                 
                                } />

        </SwiperSlide>

        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1.3} src={
        "/w24.jpeg"                 
                                } />

        </SwiperSlide>

         <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1.3} src={
                                'https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp'
                                } />

        </SwiperSlide>

       


        </Swiper>

        </div>

</div>
    </>
  )
}

export default Productzoom