import React, {useState} from 'react'

const Otpbox = ({length,onChange}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));

    const handleChange = (element, index) =>{
        const value = element.value;
        if(isNaN(value)) return;

        // update OTP Value

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        onChange(newOtp.join(""));

        // focus on next input 
        if( value && index < length - 1) {
            document.getElementById( `otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = ( event,index) =>{
        if(event.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById( `otp-input-${index - 1}`).focus();
        }
    };
  return (
    <>
    <div style={{ display: "flex" , gap:"5px" , justifyContent: "center" }} className='otpbox'>
        {otp.map((data,index) =>(
            <input
            key={index}
            id={`otp-input-${index}`}
            type='text'
            maxLength= "1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e)=> handleKeyDown(e, index)}
            className=' otpBox w-[45px] text-center text-[17px] h-[45px]'
            />
        ))}


    </div>
    </>
    )
}

export default Otpbox