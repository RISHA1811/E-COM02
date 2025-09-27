import MyListModal from "../Models/mylist.modal.js";




// add the items in an list 
export const addToMylistController = async (request, response) =>{
try {
            const userId = request.userId; // middleware
            const {productId,
                productTitle,
                 rating , 
                 price, 
                 image, 
                 oldPrice ,
                  discount , 
                  brand } = request.body;

const item = await MyListModal.findOne({
    userId:userId,
    productId:productId
});

if(item){
    return response.status(400).json({
        message:"Item already in my list"
    })
}

const mylist = new MyListModal({
   productId,
productTitle,
    rating , 
    price, 
    image, 
    oldPrice ,
    discount , 
    brand,
    userId
});

const save = await mylist.save();


return response.status(200).json({
    error:false,
    success:true,
    message:"The product saved in the my list"
})



} catch (error) {
   return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})   
}
}

// delete the item from an list

export const deleteToMylistController = async (request, response) =>{
try {
    
const myListItem = await MyListModal.findById(request.params.id);

if(!myListItem){
    return response.status(404).json({
        error:true,
        success:false,
        message:"The item with this given id was not found"
    })
}

const deletedItem = await MyListModal.findByIdAndDelete(request.params.id);

if(!deletedItem){
     return response.status(404).json({
        error:true,
        success:false,
        message:"The item is not deleted "
    })
}

return response.status(200).json({
    error:false,
    success:true,
    message:"The item removed from my list"
})



} catch (error) {
    return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})   
}
}

// get the item from the list 

export const getMylistController = async (request, response) =>{
try {
        const userId = request.userId;
        const  myListItems = await MyListModal.find({
            userId:userId
        })

return response.status(200).json({
    error:false,
    success:true,
    data:myListItems
})



} catch (error) {
    return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})    
}
}