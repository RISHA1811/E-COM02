import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Accountsidebar from '../Accountsidebar';
import Radio from '@mui/material/Radio';
import { Mycontext } from '../../App';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import { FaCloudUploadAlt } from "react-icons/fa";
import { deleteData, fetchDataFromApi, postData } from '../../utils/api';
import { MdCancel } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";


const Address = () => {

const[address,setaddress] = useState([]);
const context = useContext(Mycontext);
  const [phone, setPhone] = useState(false);
const [isopenmodel, setisopenmodel]= useState(false);
  const [isLoading, setisLoading] = useState(false);



  const handleClose = () => {
setisopenmodel(false);
  };

    const handleChangestatus = (event) => {
    setAge(event.target.value);
    setformFields((prevState)=>({
    ...prevState,
      status:event.target.value
  }))
   
  };


 const [formFields, setformFields] = useState({
    address_line : '',
    city:'',
    state:'',
    pincode:'',
    country:'',
    mobile:'',
    status: true,
    selected:false
  });


 const [selectedValue, setSelectedValue] =useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    
   
  }


   


const onChangeInput = (e) =>  {
  const { name, value} = e.target;
  setformFields(()=> {
    return {
      ...formFields,
      [name]: value
    }
  })
 
}


const removeAddress = (id)=> {
deleteData(`/api/address/${id}`).then((res)=>{
fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res)=>{
              setaddress(res.data)
          })
        })
}

const handleSubmit =(e) =>{

 e.preventDefault();

 setisLoading(true);

if(formFields.address_line===""){
  context.openalertbox("error","Please enter Address_Line")       
return false
}

if(formFields.city===""){
  context.openalertbox("error","Please enter Your City Name")       
return false
}

if(formFields.state===""){
  context.openalertbox("error","Please enter Your  State Name")       
return false
}

if(formFields.pincode===""){
  context.openalertbox("error","Please enter Your Pincode")       
return false
}

if(formFields.country===""){
  context.openalertbox("error","Please enter Your Country")       
return false
}

if(phone ===""){
  context.openalertbox("error","Please enter Your 10 digit Mobile Number")       
return false
}

postData(`/api/address/add`, formFields, {withCredentials: true}).then((res) => {
    console.log(res)
    if (res?.error !== true) {
        setisLoading(false);
        context.openalertbox("success", res?.message);

    setisopenmodel(false);

        
fetchDataFromApi(`/api/address/get?userId=${context?.userData?._id}`).then((res)=>{
              setaddress(res.data)
          })

    } else {
        context.openalertbox("error", res?.message);
        setisLoading(false);
    }
})

}





  return (
    <>
     <section className='py-7 w-full '>
<div className="container flex gap-5">
<div className="col1 w-[20%]">
    <Accountsidebar/>
</div>

<div className="col2 w-[50%]">
<div className="card  p-5 shadow-md rounded-md  mb-5">
<div className="flex items-center pb-3">
  <h2 className='text-left p-2 font-[500] pb-0'>Address</h2>
  </div>
<hr />

<div className="flex items-center justify-center hover:bg-[#e7f3f9] p-5 border border-dashed border-[rgba(0,0,0,0.1)] bg-[#f1faff] cursor-pointer rounded-md " 
onClick={()=>setisopenmodel(true)}>
<span className='text-[15px] font-[500]'>Add Address</span>
</div>

<div className="border border-dashed border-[rgba(0,0,0,0.2)] flex gap-2 flex-col mt-4 p-2">
{address.length > 0 && address.map((address, index) => (
    <label
      key={address._id || index}
      className=" relative group addressBox w-full flex items-center justify-center bg-[#f1f1f1] p-3 rounded-md cursor-pointer"
    >
      <div className="mr-auto">
      <Radio
        {...label}
        name="address"
        checked={
          selectedValue === 
          (
          address?._id
          )
        }
        value={
           address?._id
        }
        onChange={handleChange}
      />
        <span className='text-[14px]'>
        {
        address.address_line+ "  "+
         address.city+"  "+
          address.state+"  "+
           address.pincode+"  "+
         address.country+"  "+
           address.mobile
        }</span>

    </div>
    
 <span onClick={()=>{
  removeAddress(address?._id)
 }} 
 className=' hidden group-hover:flex z-50 items-center w-[30px] h-[30px] rounded-full bg-primary text-white justify-center ml-auto bg-gray-500 ' >
<RiDeleteBin5Line/>
</span>

    </label>
  ))
  }



</div>
</div>











</div>
</div>
    </section>




    <Dialog  open={isopenmodel}>
      <DialogTitle>Add Address</DialogTitle>
     
<form className='p-8 py-3 pb-8' onSubmit={handleSubmit}>
  <div className="flex items-center gap-5 pb-5">
                    <div className="col w-[100%]">
<TextField className='w-full bg-gray-100' 
label="Address_Line" 
variant="outlined" 
size='small'
name='address_line' 
onChange={onChangeInput} 
value={formFields.address_line}
 />

                    </div>

                </div>
 <div className="flex items-center gap-5 pb-5">
                    <div className="col w-[50%]">
<TextField className='w-full bg-gray-100' 
label="City" 
variant="outlined" 
size='small' 
name='city' 
onChange={onChangeInput} 
value={formFields.city}
/>

                    </div>


                      <div className="col w-[50%]">
<TextField className='w-full bg-gray-100' 
label="State" 
variant="outlined" 
size='small' 
name='state' 
onChange={onChangeInput} 
value={formFields.state}
/>

                    </div>

                </div>

 <div className="flex items-center gap-5 pb-5">
                    <div className="col w-[50%]">
<TextField className='w-full bg-gray-100' 
label="Pincode" 
variant="outlined" 
size='small' 
name='pincode' 
onChange={onChangeInput} 
value={formFields.pincode}
/>

                    </div>


                      <div className="col w-[50%]">
<TextField className='w-full bg-gray-100' 
label="Country" 
variant="outlined" 
size='small' 
name='country' 
onChange={onChangeInput} 
value={formFields.country}
/>

                    </div>

                </div>

<div className="flex items-center gap-5 pb-5">
                    <div className="col w-[50%]">
<PhoneInput
  defaultCountry="in"
  value={formFields?.mobile || ""}  // Add fallback
  onChange={(phone) => {
    setPhone(phone);
    setformFields({
      ...formFields,  // ✅ Keep existing fields
      mobile: phone
    });
  }}
/>

                    </div>


<div className="col w-[50%]">
<FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Status
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    onChange={handleChangestatus}
    inputProps={{
      name: 'phone',
      id: 'uncontrolled-native',
      className:"w-full border border-[rgba(0,0,0,0.1)]" 
     
    }}
  >
    <option value={true}>True</option>
    <option value={false}>False</option>
  </NativeSelect>
</FormControl>
</div>

                </div>

<div className="flex items-center gap-5">
  <Button type='submit' className='btn-org btn-lg w-full gap-2'><FaCloudUploadAlt className='text-[25px] text-white'/>Save</Button>
   <Button className='btn-org btn-border btn-lg w-full gap-2' onClick={handleClose}><MdCancel className='text-[25px] text-white'/>Cancel</Button>
</div>
</form>

    </Dialog>



    </>
  )
}

export default Address