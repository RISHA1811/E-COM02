import React, { useState } from 'react'
import Accountsidebar from '../../components/Accountsidebar'
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { FaAngleUp } from "react-icons/fa";


const Myorder = (props) => {


    const [isOpenOrderedProduct,setIsOpenOrderedProduct] = useState(null)

    const isShowOrderedProduct = (index)=> {
        if(isOpenOrderedProduct===index){
            setIsOpenOrderedProduct(null);
        }else{
            setIsOpenOrderedProduct(index);
        }

        
    };


  return (
    <>

<section className='py-7 w-full '>
<div className="container flex gap-5">
<div className="col1 w-[20%]">
    <Accountsidebar/>
</div>

<div className="col2 w-[80%]">

   
<div className="shadow-md rounded-md p-5 bg-white">
<div className='border-b border-[rhba(0,0,0,0.1)] py-3 px-3'>
     <h2 className='text-left font-[500] '>My Orders</h2>
    <p className='mt-0 text-left '>There are <span className='font-bold text-primary'>2</span> Orders

</p>

<div class="relative overflow-x-auto mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                   Order Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Paymant Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    	Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Phone Number
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Address
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Pincode
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Total Amount	
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Email	
                </th><th scope="col" className="px-6 py-3 whitespace-nowrap">
                    User Id		
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Order Status			
                </th><th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Date		
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
                <td className="px-6 py-4">
                                       <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=> isShowOrderedProduct(0)}  >
                                        {
                                            isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                            : 
                                            <FaAngleDown   className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                        }
                                        
                                        
                                        </Button>

                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>
                          54555461dscfv4555561gg
                    </span>
                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>
                          5465446dcfgvhbj
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    Rishabh Jha
                </td>

                 <td className="px-6 py-4">
                    456541516561516
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>
                        dfcgvhbjnmfghjnfghjnkmrcfgvhjfgvhbjngvhbjkctfgfvhbj
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500]">
                    5664121
                </td>

                 <td className="px-6 py-4 font-[500]">
                    45000
                </td>

                 <td className="px-6 py-4 font-[500]">
                    fvghbjn@gmail.com
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>
                        54465ghbjnkmdfcgvhbjnm
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500] ">
                    <Badge status="delivered"/>
                </td>

                 <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    24-08-2025
                </td>

                
            </tr>

{
    isOpenOrderedProduct === 0 && (

         <tr>
                <td className='pl-20'  colSpan={6}>
                     <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                   Product Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    	Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    SubTotal
                </th> 
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

           
           
           
           
        </tbody>
    </table>
                </td>
            </tr>



    )    
}



            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
                <td className="px-6 py-4">
                                       <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=> isShowOrderedProduct(1)}  >
                                        {
                                            isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                            : 
                                            <FaAngleDown   className='text-[18px] text-[rgba(0,0,0,0.7)]' />
                                        }
                                        
                                        
                                        </Button>

                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>
                          54555461dscfv4555561gg
                    </span>
                </td>
                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>
                          5465446dcfgvhbj
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    Rishabh Jha
                </td>

                 <td className="px-6 py-4">
                    456541516561516
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='block w-[400px]'>
                        dfcgvhbjnmfghjnfghjnkmrcfgvhjfgvhbjngvhbjkctfgfvhbj
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500]">
                    5664121
                </td>

                 <td className="px-6 py-4 font-[500]">
                    45000
                </td>

                 <td className="px-6 py-4 font-[500]">
                    fvghbjn@gmail.com
                </td>

                 <td className="px-6 py-4 font-[500]">
                    <span className='text-primary'>
                        54465ghbjnkmdfcgvhbjnm
                    </span>
                </td>

                 <td className="px-6 py-4 font-[500] ">
                    <Badge status="delivered"/>
                </td>

                 <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    24-08-2025
                </td>

                
            </tr>

{
    isOpenOrderedProduct === 1 && (

         <tr>
                <td className='pl-20'  colSpan={6}>
                     <table class="w-full text-sm text-left rtl:text-right text-black-500 text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-black-50 bg-black-700 text-black-400">
            <tr>
                
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                   Product Id
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Product Title
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    	Image
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                </th>
                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Price
                </th> <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    SubTotal
                </th> 
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

             <tr class="bg-white border-b bg-white-800 border-white-700 border-black-200">
                
               
                 <td className="px-6 py-4 font-[500] text-gray-600">
                    
                          54555461dscfv4555561gg
                    
                </td>
                 <td className="px-6 py-4 font-[500]">
                    
                          Apple AirPods Max Over-Ear Wireless Headphone
                    
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-[500]">
                    <img src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp" className='w-[40px] h-[40px] object-cover rounded-md' />
                </td>

                 <td className="px-6 py-4">
                    2
                </td>

                 <td className="px-6 py-4 font-[500]">
                   1300
                </td>

                 <td className="px-6 py-4 font-[500]">
                    1300
                </td>

                

                
            </tr>

        
           
        </tbody>
    </table>
                </td>
            </tr>



    )  
}
           
           
           
           
        </tbody>
    </table>
</div>


</div>



</div>

</div>
</div>
    </section>    
    
    </>
  )
}

export default Myorder