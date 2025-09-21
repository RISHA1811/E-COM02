import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { createCategory, deleteCategory, getCategories, getCategoriesCount, getCategory, getSubCategoriesCount, removeImageFromCloudinary, updateCategory, uploadImages } from "../controllers/Category.controller.js";


const  CategoryRouter = Router()
CategoryRouter.post('/uploadImages',auth,upload.array('images'),uploadImages);
CategoryRouter.post('/create',auth,createCategory);
CategoryRouter.get('/',getCategories);
CategoryRouter.get('/get/count',getCategoriesCount);
CategoryRouter.get('/get/count/subCat',getSubCategoriesCount);
CategoryRouter.get('/:id',auth,getCategory);
CategoryRouter.delete('/deleteImage',auth,removeImageFromCloudinary);
CategoryRouter.delete('/:id',auth,deleteCategory);
CategoryRouter.put('/:id',auth,updateCategory);

export default CategoryRouter;