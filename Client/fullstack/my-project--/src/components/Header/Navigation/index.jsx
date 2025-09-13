import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from './categorypanel';

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  }
  
  return (
    <>
      <nav >
        <div className='container flex items-center justify-end gap-8 '>
          <div className="col1 w-[22%]">
            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}> 
              <HiOutlineMenuAlt1 className='text-[18px]'/> 
              SHOP BY CATEGORIES 
              <FaAngleDown className='text-[14px] ml-auto font-bolder'/>
            </Button>
          </div>

          <div className="col2 w-[56%] nav ">
            <ul className='flex item-center gap-8 '>
              {/* fashion part  */}
              <li className=' list-none relative'>
                <Link to="/Productlisting" className='link transition text-[14px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>Fashion</Button></Link>




                <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                      



 




                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                      </Link>
                      
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </li>




              <li className=' list-none relative'>
                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] '>ELECTRONICS</Button></Link>
             {/* electronics part */}

              <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Mobile</Button>
                      



 






                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Laptops</Button>
                      </Link>
                      
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Smart Watches</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Clocks</Button>
                      </Link>
                    </li>
                     
                  </ul>
                </div>
                
              </li>
              <li className=' list-none relative'>
                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>BAGS</Button></Link>
  {/* bags part */}
                 <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men's Bags</Button>
                      










                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women's Bags</Button>
                      </Link>
                      
                    </li>
                     
                  </ul>
                </div>

              </li>
              <li className=' list-none relative'>
                <Link to="/" className='link transition text-[13px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>FOOTWEAR</Button></Link>
  {/* footwear part */}
                 <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men's Footwear</Button>
                      









                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women's Footwear</Button>
                      </Link>
                      
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li className=' list-none relative'>
                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>GROCERIES</Button></Link>
                 {/* <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                      



 <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity:0 transition-all'>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shoes</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Sleepers</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Trousers</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jackets</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pants</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-shirts</Button>
                      </Link>
                    </li>
                  </ul>
                </div>






                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                      </Link>
                      
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Children</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}

              </li>
              <li className=' list-none relative'>
                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>WELLNESS</Button></Link>
                 {/* <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                      



 <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity:0 transition-all'>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shoes</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Sleepers</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Trousers</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jackets</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pants</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-shirts</Button>
                      </Link>
                    </li>
                  </ul>
                </div>






                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                      </Link>
                      
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Children</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li className=' list-none relative'>
                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition font-[400] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252]'>JEWELLERY</Button></Link>
                 {/* <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity:0 transition-all '>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                      



 <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity:0 transition-all'>
                  <ul>
                    <li className='list-none w-full text-left justify-start'>
                      <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shoes</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Sleepers</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Trousers</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jackets</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pants</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-shirts</Button>
                      </Link>
                    </li>
                  </ul>
                </div>






                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                          <Link to="/" className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                      </Link>
                      
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Children</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                      </Link>
                    </li>
                     <li className='list-none w-full text-left justify-start'>
                                            <Link to="/" className='w-full'>

                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
            </ul>
          </div>

          <div className="col3 w-[22%]">
            <p className='text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0'><MdOutlineRocketLaunch className='text-[18px]'/>Free International Delivery</p>
          </div>
        </div>
      </nav>
      
      <CategoryPanel 
        isOpenCatPanel={isOpenCatPanel} 
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  )
}

export default Navigation;