import { Router } from "express";
import { addItemController, deleteCartItemQtyController, getCartItemController, updatecartItemQtyController } from "../controllers/cart.controller.js";
import auth from "../middlewares/auth.js";

const CartRouter = Router();

CartRouter.post('/addcart',auth,addItemController)
CartRouter.get('/getitems',auth,getCartItemController)
CartRouter.put('/update-qty',auth,updatecartItemQtyController)
CartRouter.delete('/delete-cart-item',auth,deleteCartItemQtyController)


export default CartRouter