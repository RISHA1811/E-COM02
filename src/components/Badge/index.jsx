import React from 'react'

const Badge = (props) => {
  return (
    <>
    <span className={ `inline-block py-2   text-[11px] px-4 rounded-full  ${props.status === "pending" && 'bg-primary text-white'}
      ${props.status === "confirmed" && 'bg-green-500 text-white'}
      ${props.status === "delivered" && 'bg-green-700 text-white'}
      `}>
        {props.status}
    </span>
    </>
  )
}

export default Badge;
