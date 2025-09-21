import ProductModel from "../Models/Product.model.js";

import { v2 as cloudinary } from 'cloudinary';
import { error } from "console";
import fs from 'fs';


cloudinary.config({ 
        cloud_name: process.env.cloudinary_config_Cloud_Name , 
        api_key: process.env.cloudinary_config_API_Key, 
        api_secret: process.env.cloudinary_config_api_secret,
        secure:true,

    });


    // uploading images
var imagesArr= [];
export async function uploadImages(request,response){
    try {
        imagesArr = [];
        const image = request.files;

   const options = {
        use_filename : true,
        unique_filename : false,
        overwrite :  false,
    };


// That image which was alraedy loaded or uploaded that we have to remove so we will do one thing 




for(let i = 0; i < request?.files?.length; i++){


   
    const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function(error,result) {
            imagesArr.push(result.secure_url);
            fs.unlinkSync(`uploads/${request.files[i].filename}`);
        }
    );

}



return response.status(200).json({
    images: imagesArr
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
// create product 
export async function createProduct(request,response){
    try {


let product = new ProductModel({
    name:request.body.name,
    description:request.body.description,
    images:imagesArr,
    brand:request.body.brand,
    price:request.body.price,
    oldPrice:request.body.oldPrice,
    catName:request.body.catName,
    catId:request.body.catId,
    subcatId:request.body.subcatId,
    subCat:request.body.subCat,
    thirdsubcat:request.body.thirdsubcat,
    thirdsubcatName:request.body.thirdsubcatName,
    thirdsubcatId:request.body.thirdsubcatId,
    category:request.body.category,
    countinstock:request.body.countinstock,
    rating:request.body.rating,
    isfeatured:request.body.isfeatured,
    discount:request.body.discount,
    productram:request.body.productram,
    size:request.body.size,
    productweight:request.body.productweight,
});


product = await product.save();
if(!product){
    response.status(500).json({
        error:true,
        success:false,
        message:"Product not created"
    });

}

imagesArr = [];
response.status(200).json({
    message:"Product created successfully",
    error:false,
    success:true,
    product:product
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

// get all products

export async function getAllProducts(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find().populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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

// get all products By Category Id
export async function getAllProductsByCatId(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find({
            catId:request.params.id
        }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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


// get all products By Category name
export async function getAllProductsByCatName(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find({
            catName:request.query.catName
        }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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



// get all products By SubCategory Id
export async function getAllProductsBySubCatId(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find({
            subcatId:request.params.id
        }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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


// get all products By SubCategory name
export async function getAllProductsBySubCatName(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find({
            subCat:request.query.subCat
        }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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


// get all products By thirdSubCategory Id
export async function getAllProductsByThirdLevelCatId(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find({
            thirdsubcatId:request.params.id
        }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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


// get all products By thirdSubCategory name
export async function getAllProductsByThirdLevelCatName(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
        const products = await ProductModel.find({
            thirdsubcat:request.query.thirdsubcat
        }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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


// get all products By price
export async function getAllProductsByPrice(request,response) {
let productList =[];

// for filter and get Catid
if(request.query.catId !== "" && request.query.catId !== undefined){
    const productListArr = await ProductModel.find({
        catId: request.query.catId,
    }).populate("category");

    productList = productListArr;

}



// for filter and get subCatid
if(request.query.subcatId !== "" && request.query.subcatId !== undefined){
    const productList = await ProductModel.find({
        subcatId: request.query.subcatId,
    }).populate("category");

    productList = productListArr;
    
}

// for filter and get thirdsubCatid
if(request.query.thirdsubcatId !== "" && request.query.thirdsubcatId !== undefined){
    const productListArr = await ProductModel.find({
        thirdsubcatId: request.query.thirdsubcatId,
    }).populate("category");

    productList = productListArr;
    
}



const filterProducts = productList.filter((product) => {
    if (request.query.minPrice && product.price < parseInt(+request.query.minPrice)) {
        return false;
    }
    if (request.query.maxPrice && product.price < parseInt(+request.query.maxPrice)) {
        return false;
    }
    return true;
});

return response.status(200).json({
    error:false,
    success:true,
    products: filterProducts,
    totalPages:0,
    page:0
});


}


// get all products By Rating
export async function getAllProductsByRating(request,response) {
    try {

const page = parseInt(request.query.page) || 1;
const perPage = parseInt(request.query.perPage);
const totalPosts = await ProductModel.countDocuments();
const totalPages = Math.ceil(totalPosts / perPage);

if(page> totalPages) {
    return response.status(400).json({
        "message":"Page not found",
        success:false,
        error:true
    });
}
        
let products=[];

if(request.query.catId!==undefined){
    
         products = await ProductModel.find({
            rating:request.query.rating,
            catId:request.query.catId
             }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();
}

//  for specially subcategory Id
if(request.query.subcatId!==undefined){
    
         products = await ProductModel.find({
            rating:request.query.rating,
            subcatId:request.query.subcatId
             }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();
}


//  for specially thirdsubcategory Id
if(request.query.thirdsubcatId!==undefined){
    
         products = await ProductModel.find({
            rating:request.query.rating,
            thirdsubcatId:request.query.thirdsubcatId
             }
        ).populate("category")
        .skip((page - 1)* perPage)
        .limit(perPage)
        .exec();
}


       

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products,
    totalPages: totalPages,
    page:page
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


// get all products count 

export async function getProductsCount(request,response) {
    try {
        
const productscount =await ProductModel.countDocuments();

if(!productscount){
    response.status(500).json({
        error:true,
        success:false
    })
}

return response.status(200).json({
    error:false,
    success:true,
    productscount:productscount
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


// get all featured Product
export async function getAllFeaturedProducts(request,response) {
    try {



        
        const products = await ProductModel.find({
            isfeatured:true
        }
        ).populate("category")
       

        if(!products){
            response.status(500).json({
                error:true,
                success:false
            })
        }

          return response.status(200).json
({
    error:false,
    success:true,
    products:products
 
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


// delete product
export async function deleteproduct(request,response) {
    const product = await ProductModel.findById(request.params.id).populate("category");

 if(!product){
        return response.status(404).json({
            message:"Product Not deleted",
            error:true,
            success:false
        })
    }

const images = product.images;
let img="";

for(img of images){
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
        const imageName =  image.split(".")[0];

    if(imageName){
     cloudinary.uploader.destroy(imageName,
        (error,result) => {

        }
    )
}

}

const  deleteproduct = await ProductModel.findByIdAndDelete(request.params.id);


    if(!deleteproduct){
        return response.status(404).json({
            message:"Product Not deleted",
            error:true,
            success:false
        })
    }

    return response.status(200).json({
        success: true,
        error:false,
        message:"Product deleted"
    });
}


// get single  product 
export async function getProduct(request,response) {
    try {
        const product = await ProductModel.findById(request.params.id).populate("category");

        if(!product){
            return response.status(404).json({
                message:"The Product Not Found",
                success:false,
                error:true
            })
        }


        return response.status(200).json({
        error:false,
        success:true,
        product:product
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

// delete images
export async function removeImageFromCloudinary(request,response){
    const imgUrl = request.query.img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];
        const imageName =  image.split(".")[0];

    if(imageName){
    const res = await cloudinary.uploader.destroy(imageName,
        (error,result) => {

        }
    );
    if(res){
        response.status(200).send(res);

    }
    }
   
} 

// update product 
export async function UpdateProduct(request,response){
    try {
        const product = await ProductModel.findByIdAndUpdate(
            request.params.id,
            {
                 name:request.body.name,
                description:request.body.description,
                images:imagesArr,
                brand:request.body.brand,
                price:request.body.price,
                oldPrice:request.body.oldPrice,
                catName:request.body.catName,
                catId:request.body.catId,
                subcatId:request.body.subcatId,
                subCat:request.body.subCat,
                thirdsubcat:request.body.thirdsubcat,
                thirdsubcatName:request.body.thirdsubcatName,
                thirdsubcatId:request.body.thirdsubcatId,
                category:request.body.category,
                countinstock:request.body.countinstock,
                rating:request.body.rating,
                isfeatured:request.body.isfeatured,
                discount:request.body.discount,
                productram:request.body.productram,
                size:request.body.size,
                productweight:request.body.productweight,
            },
            {new : true}
        );

if(!product){
    response.status(404).json({
        message:"The Product can't be updated",
        status:false
    });
}

imagesArr=[];

return response.status(200).json({
    message:"The product is updated",
    error:false,
    success:true
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