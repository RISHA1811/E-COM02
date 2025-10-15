import React from 'react'
import { Link } from 'react-router-dom';
 const Bannerbox = (props) => {
  return (
     <div className="box flex items-center justify-between gap-5 py-5 group ">
        <Link to="/">
        <img src={props.img} className='w-full group-hover:scale-105 group-hover:rotate-1 rounded-lg' alt="banner"/>
</Link>


        {/* <Link to="/">
                <img src="https://serviceapi.spicezgold.com/download/1753859360822_1737020916820_New_Project_52.jpg" className='  w-full  '/>
                </Link>

                {/* <img src="https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png" className=' box2 w-full transition-all'/>
                <img src="https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg" className=' box3 w-full transition-all' /> */} 
{/* <img src="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" class="w-full transition-all duration-150 group-hover:scale-105"></img> */}
    </div>
  )
}


export default Bannerbox;