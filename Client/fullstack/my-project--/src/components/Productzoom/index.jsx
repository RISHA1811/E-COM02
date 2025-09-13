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

            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideindex===0 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(0)}>
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-home_default/hummingbird-printed-t-shirt.jpg" className='w-full transition-all group-hover:scale-105'/>
               
            </div>
        </SwiperSlide>

        

        <SwiperSlide>

            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideindex===1 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(1)}>
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/25-home_default/hummingbird-printed-t-shirt.jpg" className='w-full transition-all group-hover:scale-105'  />
                  </div>
                
        </SwiperSlide>

        <SwiperSlide>

            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideindex===2 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(2)}>
               
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/24-home_default/hummingbird-printed-t-shirt.jpg"  className='w-full transition-all group-hover:scale-105'/>
                 </div>
                 </SwiperSlide>

                  <SwiperSlide>

            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideindex===3 ? 'opacity-1': 'opacity-30'}`} onClick={()=> goto(3)}>
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/27-home_default/hummingbird-printed-t-shirt.jpg"  className='w-full transition-all group-hover:scale-105'/>
                </div>
</SwiperSlide>


   <SwiperSlide>

            <div className={`items rounded-md overflow-hidden cursor-pointer group ${slideindex===4 ? 'opacity-1' : 'opacity-30'}`} onClick={()=> goto(4)}>
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/28-home_default/hummingbird-printed-t-shirt.jpg"  className='w-full transition-all group-hover:scale-105'/>
                </div>
</SwiperSlide>


                
           
        

        

       


     </Swiper>

        </div>
        <div className="zoom w-[85%] h-[500px] overflow-hidden rounded-md">
             <Swiper 
             ref={zoomsliderbig}
            slidesPerView={1}
             spaceBetween={0}
             
     navigation={false} modules={[Navigation]}>


        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/29-large_default/hummingbird-printed-t-shirt.jpg'}  />

        </SwiperSlide>

        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/25-medium_default/hummingbird-printed-t-shirt.jpg'} />

        </SwiperSlide>

        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/24-medium_default/hummingbird-printed-t-shirt.jpg'} />

        </SwiperSlide>

        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/27-medium_default/hummingbird-printed-t-shirt.jpg'} />

        </SwiperSlide>

         <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/28-medium_default/hummingbird-printed-t-shirt.jpg'} />

        </SwiperSlide>

       


        </Swiper>

        </div>

</div>
    </>
  )
}

export default Productzoom