import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { createProduct, deleteproduct, getAllFeaturedProducts, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllProductsByThirdLevelCatId, getAllProductsByThirdLevelCatName, getProduct, getProductsCount, removeImageFromCloudinary, UpdateProduct, uploadImages } from "../controllers/product.controller.js";
const  productRouter = Router();
productRouter.post('/uploadImages',auth,upload.array('images'),uploadImages);
productRouter.post('/create',auth,createProduct);
productRouter.get('/getAllProducts',getAllProducts);
productRouter.get('/getAllProductsByCatId/:id',getAllProductsByCatId);
productRouter.get('/getAllProductsByCatName',getAllProductsByCatName);
productRouter.get('/getAllProductsBySubCatId/:id',getAllProductsBySubCatId);
productRouter.get('/getAllProductsBySubCatName',getAllProductsBySubCatName);
productRouter.get('/getAllProductsByThirdLevelCat/:id',getAllProductsByThirdLevelCatId);
productRouter.get('/getAllProductsByThirdLevelCatName',getAllProductsByThirdLevelCatName);
productRouter.get('/getAllProductsByPrice',getAllProductsByPrice);
productRouter.get('/getAllProductsByRating',getAllProductsByRating);
productRouter.get('/getAllProductsCount',getProductsCount);
productRouter.get('/getAllfeaturedProducts',getAllFeaturedProducts);
productRouter.delete('/:id',deleteproduct);
productRouter.get('/:id',getProduct);
productRouter.delete('/deleteImage',auth,removeImageFromCloudinary);
productRouter.put('/update product',auth,UpdateProduct);


export default productRouter;

