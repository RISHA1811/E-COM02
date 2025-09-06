import React from 'react'

const Progressbar = (props) => {
  return (
    <div className="w-[100px] h-auto overflow-hidden rounded-md bg-[#f1f1f1]">
        <span className={`flex items-center w-[${props.value}%] h-[8px] bg-blue-500 ${props.type==="success" && 'bg-green-600'}                         ${props.type==="middle" && 'bg-yellow-600'} 
                        ${props.type==="middle" && 'bg-orange-600'}      ${props.type==="danger" && 'bg-pink-600'} `}>

        </span>
    </div>
  )
}

export default Progressbar;