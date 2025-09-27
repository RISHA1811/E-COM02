import { Router } from "express";
import auth from "../middlewares/auth.js";
import { addToMylistController, deleteToMylistController, getMylistController } from "../controllers/mylist.controller.js";


const mylistRouter = Router();

mylistRouter.post('/add',auth,addToMylistController)
mylistRouter.delete('/:id',auth,deleteToMylistController)
mylistRouter.get('/',auth,getMylistController)


export default mylistRouter