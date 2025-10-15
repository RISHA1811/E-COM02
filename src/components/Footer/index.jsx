import React, { useContext } from 'react'
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel';
import { Mycontext } from '../../App';

 const Footer = () => {

  const context=useContext(Mycontext);


  return (
   <>
    <footer className='py-3 bg-gray-100'>
        <div className='container'>
            <div className="flex items-center justify-center gap-9 pb-5">
                <div className="col flex items-center justify-center flex-col group w-[20%]">
                    <FaShippingFast className='text-[40px] group-hover:text-primary group-hover:-translate-y-2 transition-all duration-300'/>
                    <h3 className='text-[18px] font-[600]'>
                        Free Shipping
                    </h3>
                    <p className='text-[14px] font-[600] '>
                        For all Orders Over ₹1000
                    </p>
                </div>

               
                <div className="col flex items-center justify-center flex-col group w-[20%]">
                    <PiKeyReturn className='text-[40px] group-hover:text-primary group-hover:-translate-y-2 transition-all duration-300'/>
                    <h3 className='text-[18px] font-[600]'>
                        30 Days Returns
                    </h3>
                    <p className='text-[14px] font-[600] '>
                    For an Exchange Product                    </p>
                </div>
               <div className="col flex items-center justify-center flex-col group w-[20%]">
                    <BsWallet2 className='text-[40px] group-hover:text-primary group-hover:-translate-y-2 transition-all duration-300'/>
                    <h3 className='text-[18px] font-[600]'>
                        Secured Payment
                    </h3>
                    <p className='text-[14px] font-[600] '>
                        Payment Cards Accepted
                    </p>
                </div>

                <div className="col flex items-center justify-center flex-col group w-[20%]">
                    <CiGift className='text-[40px] group-hover:text-primary group-hover:-translate-y-2 transition-all duration-300'/>
                    <h3 className='text-[18px] font-[600]'>
                        Special Gifts
                    </h3>
                    <p className='text-[14px] font-[600] '>
                        Our First Product Order
                    </p>
                </div>
                <div className="col flex items-center justify-center flex-col group w-[20%]">
                    <BiSupport className='text-[40px] group-hover:text-primary group-hover:-translate-y-2 transition-all duration-300'/>
                    <h3 className='text-[18px] font-[600]'>
                        Support 24/7
                    </h3>
                    <p className='text-[14px] font-[600] '>
                        Contact us Anytime
                    </p>
                </div>
            </div>

            <hr/>
             <div className="footer flex items-center">
                    <div className="part1 py-8 w-[25%] border-r border-[gray-50] ">
                      <h2 className='text-[22px] font-[600] mb-3 '>Contact us</h2>
                      <p className='text-[16px] font-[400] pb-4'>Classyshop - Mega Super Store <br/>
            507-Union Trade Centre France</p>
            <p><Link className='link' to="mailto:youremail@example.com
                     ?subject=Saying%20hello%20from%20GFG">sales@yourcompany.com</Link></p>
                     <span className='text-[22px] font-[600] text-primary mt-3 mb-4'>(+91) 9876-543-210</span>
            
            
                     <div className="flex items-center mt-3 pl-10">
                    <IoChatboxOutline className='text-[42px] text-primary'/>
                    <span className='text-[17px] font-[600]'>Online Chat<br/>
            Get Expert Help</span>
                     </div>
                    </div>
            
                    <div className="part2 w-[40%] flex items-center ">
                      <div className="part2_col1 w-[50%]">
                                  <h2 className='text-[22px] font-[600] mb-4 '>Products</h2>
                                  <ul className='list-none'>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                    Prices drop
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                    New products
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                   Best sales
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                   Contact us
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                    Sitemap
                                    </Link></li>
                                  </ul>
            
                      </div>
                       <div className="part2_col1 w-[50%]">
                                  <h2 className='text-[22px] font-[600] mb-4 '>Our company</h2>
                                  <ul className='list-none'>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                    Delivery
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                    Legal Notice
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                   Terms and conditions of use
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>
                                   About us
                                    </Link></li>
                                    <li className='text-[17px] w-full mb-3'><Link to="/" className='link'>Login
                                    </Link></li>
                                  </ul>
            
                      </div>
            
                    </div>
                            <div className="part2 flex w-[35%] pl-8 flex-col pr-8">
                              <h2 className='text-[25px] font-[600] mb-4'>Subscribe to newsletter</h2>
                              <p className='text-[15px] font-[500]'>Subscribe to our latest newsletter to get news about special discounts.</p>
            
                              <form className='mt-5'>
                                <input type="text" className='w-full h-[45px] border outline-none pl-4 pr-4 rounded-md focus:border-black'  placeholder='Your Email Address'/>
                              </form>
                            </div>
            
                            <Button className='btn-org absolute top-12 right-4 !rounded-full !text-white !px-6 !py-2 '>
                              SUBSCRIBE
                            </Button>
            
            
            
                
                
            
                   </div>
            
            
                   <div className="bottomstrip border-t border-[rgba(0,0,0,0.2)] py-5 bg-white block">
                    <div className="container flex items-center justify-between ">
                      <ul className='flex items-center gap-3'>
                        <li className='list-none'><Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all hover:scale-110'><FaFacebookF className='text-[20px]  group-hover:text-white'/></Link></li>
                        <li className='list-none'><Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all hover:scale-110'>< FaXTwitter className='text-[20px]  group-hover:text-white'/></Link></li>
                        <li className='list-none'><Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all hover:scale-110'><FiInstagram className='text-[20px]  group-hover:text-white'/></Link></li>
                        <li className='list-none'><Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all hover:scale-110'><AiOutlineYoutube className='text-[20px]  group-hover:text-white'/></Link></li>
                        <li className='list-none'><Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all hover:scale-110'><FaPinterestP className='text-[20px]  group-hover:text-white'/></Link></li>
            
                      </ul>
            
                      <p className='text-[16px] font-[500] uppercase '>© 2025 - ClassyShop </p>
            
                      <div className="imageswrapper flex items-center justify-between gap-3">
                        <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="visa" />
                        <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="visa" />
                        <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="visa" />
                        <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="visa" />
            
                      </div>
                    </div>
                </div>
            
        </div>
    </footer>

 <Drawer open={context.opencartpanel} onClose={context.togglecartpanel(true)} anchor='right' className='cartPanel' >
        <div className='flex items-center justify-between py-4 px-4 gap-5 border-b border-[rgba(0,0,0,0.1)]'>
        <h4 className='font-[600] text-[20px]'>Shopping Cart (1)</h4>
        <MdClose className='text-[20px] cursor-pointer font-[600] bg-gray-100 rounded-md ' onClick={context.togglecartpanel(false)}  />
        </div>


        <CartPanel/>
      </Drawer>





    </>

    
  )
}
export default Footer;