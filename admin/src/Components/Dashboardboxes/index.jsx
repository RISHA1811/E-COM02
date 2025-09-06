import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FiGift } from "react-icons/fi";
import { IoStatsChartSharp } from "react-icons/io5";
import { LuChartPie } from "react-icons/lu";
import { AiOutlineBank } from "react-icons/ai";


const Dashboardbox = () => {
  return (
    <>
    <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="dashboardboxesslider"
          >
            <SwiperSlide>
                <div className="box p-5 cursor-pointer rounded-md  flex items-center gap-4 bg-[#3872fa]">
                  <FiGift className='text-[40px] text-[#fafafa]'/>
                    <div className="info w-[70%] text-[#fafafa] ">
                        <h4>New Orders</h4>
                        <b>1,390</b>
                    </div>
                    <IoStatsChartSharp className='text-[40px] text-[#fafafa]'/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="box p-5 cursor-pointer rounded-md  flex items-center gap-4 bg-[#10b981] hover:scale-100">
                  <LuChartPie className='text-[40px] text-[#fafafa]'/>
                    <div className="info w-[70%] text-[#fafafa] ">
                        <h4>Sales</h4>
                        <b>$57,890</b>

                    </div>
                    <IoStatsChartSharp className='text-[40px] text-[#fafafa]'/>
                </div>
              </SwiperSlide>



              <SwiperSlide>
                <div className="box p-5 cursor-pointer rounded-md  flex items-center gap-4 bg-[#7928ca]">
                  <AiOutlineBank className='text-[40px] text-[#fafafa]'/>
                    <div className="info w-[70%] text-[#fafafa]">
                        <h4>Revenue</h4>
                        <b>$12,390</b>
                    </div>
                    <IoStatsChartSharp className='text-[40px] text-[#fafafa]'/>
                </div>
              </SwiperSlide>


             



            </Swiper>
            
    </>
  )
}

export default Dashboardbox;