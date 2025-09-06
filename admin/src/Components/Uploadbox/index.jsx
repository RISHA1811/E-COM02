import React from 'react'
import { IoImagesOutline } from "react-icons/io5";

const Uploadbox = (props) => {
  return (
    <>
    <div className="uploadbox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] mt-3 relative bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col ">

<IoImagesOutline className='text-[40px] opacity-35'/>
<h4 className='text-[14px] pointer-event-none'>Image Upload</h4>
<input type="file" multiple={props.multiple!==undefined ? props.multiple : false}  className='absolute top-0 pointer-event-none left-0 w-full h-full z-50 opacity-0'/>
    </div>

    </>
  )
}

export default Uploadbox