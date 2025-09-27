import cartProductModel from "../Models/cartproduct.model.js";
import UserModel from "../Models/user.model.js";


// to add the items in cart
export async function addItemController(request,response) {
    try {
        const userId = request.userId;
        const {productId} = request.body;

        if(!productId){
            return response.status(402).json({
                message:"Provide ProductId",
                error:true,
                success:false
            });
        }

        const checkItemsCart = await cartProductModel.findOne({
            userId: userId,
            productId : productId
        });

        if(checkItemsCart){
            return response.status(400).json({
                message:"Item already in cart",
            })
        }


const cartitem = new cartProductModel({
    quantity:1,
    userId: userId,
    productId:productId
});

const save = await cartitem.save();

const updateUser = await UserModel.updateOne({
    _id : userId
},{
    $push : {
        shopping_cart : productId
    }
})

return response.status(200).json({
    data: save,
    message: "Item add successfully",
    error: false,
    success : true
});



    } catch (error) {
         return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})       
    }
}


// get the cart product 
export async function getCartItemController(request,response) {
    try {
        const userId = request.userId;

        const cartitem = await cartProductModel.find({
            userId: userId
        }).populate('productId')

return response.json({
    date: cartitem,
    error:false,
    success:true
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

// update the cart items 
export async function updatecartItemQtyController(request,response){
    try {

        const userId = request.userId
        const { _id , qty} = request.body

if(!_id || !qty){
    return response.status(400).json({
        message:"Provide _id,qty"
    })
}

const updatecartitem = await cartProductModel.updateOne({
    _id : _id,
    userId : userId
},
{
    quantity: qty
})


return response.json({
    message: "Update Cart",
    success: true,
    error: false,
    data : updatecartitem
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


// delete the product from cart
export async function deleteCartItemQtyController(request,response){
    try {
        
const userId = request.userId 
const { _id, productId } = request.body

if(!_id){
    return response.status(400).json({
        message:"Provide _id",
        error:true,
        success:false
    })

}


const deleteCartItem = await cartProductModel.deleteOne({
    _id: _id,
    userId : userId
})

if(!deleteCartItem){
   return response.status(404).json({
    message:"The product in the cart is not found ",
    error:true,
    success:false
   })
}

const user = await UserModel.findOne({
    _id:userId
})

const cartItems = user?.shopping_cart;

const updatedUserCart =[...cartItems.slice(0, cartItems.indexOf(productId)), ... cartItems.slice(cartItems.indexOf(productId) + 1)]

user.shopping_cart = updatedUserCart;

await user.save();



return response.json({
    message:"Item remove",
    error:false,
    success: true,
    data : deleteCartItem
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

