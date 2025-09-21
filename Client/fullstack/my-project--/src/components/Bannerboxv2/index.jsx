import React from 'react'
import './style.css'
import Button from '@mui/material/Button'

const Bannerboxv2 = () => {
  return (
    <>
    <div className="bannerboxv2 w-full flex items-center  justify-between flex-col  pt-4 group relative ">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" alt="banner" className='w-full overflow-hidden rounded-md transition-all duration-150 group-hover:scale-105' />
        <div className="info absolute top-10 left-5 flex items-center  flex-col ">
        <h2 className='text-[20px] font-[500] mb-3'>Samsung Gear<br/> VR Camera</h2>
        <span className='text-[24px] text-primary font-[600] mb-3'>$129.00</span>
        <Button className='uppercase btn-org '>Shop NOW</Button>
    </div>

    </div>
    <div className="bannerboxv2 w-full flex items-center justify-between flex-col   group relative">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" alt="banner" className='w-full overflow-hidden rounded-md transition-all duration-150 group-hover:scale-105' />
        <div className="info absolute top-10 right-10 flex items-center flex-col">
        <h2 className='text-[20px] font-[500] mb-3'>Marcel Dining <br/>Room Chair</h2>
        <span className='text-[24px] text-primary font-[600] mb-3'>$179.00</span>
        <Button className='uppercase btn-org'>Shop NOW</Button>
    </div>

    </div>

    

    
   
   
   </>
  )
}

export default Bannerboxv2