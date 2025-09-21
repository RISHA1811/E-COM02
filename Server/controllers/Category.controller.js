import CategoryModal from "../Models/Category.model.js";
import { v2 as cloudinary } from 'cloudinary';
import { error } from "console";
import fs from 'fs';


cloudinary.config({ 
        cloud_name: process.env.cloudinary_config_Cloud_Name , 
        api_key: process.env.cloudinary_config_API_Key, 
        api_secret: process.env.cloudinary_config_api_secret,
        secure:true,

    });

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


// create category 
export async function createCategory(request,response) {
    try {
        let category = new CategoryModal({
            name : request.body.name,
            images: imagesArr,
            parentId: request.body.parentId,
            parentCatName: request.body.parentCatName
        });

        if(!category){
            return response.status(400).json({
                message:"Category not created",
                error:true,
                success:false
            });
        }

category = await category.save();
imagesArr = [];


return response.status(500).json({
    message:"Category Created",
    error: false,
    success: true,
    category:category,
})



    } catch (error) {
return response.status(500).json({
    message:error.message || error,
    error:true,
    success:false
})       
    }
}


// get categories
export async function getCategories(request,response){
try {
    const categories = await CategoryModal.find();
    const categoryMap = {};

    categories.forEach(cat => {
        categoryMap[cat._id] = { ...cat._doc, children: []};
    });
    const rootcategories = [];
    
    categories.forEach(cat => {
        if(cat.parentId) {
            categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
        }else{
            rootcategories.push(categoryMap[cat._id]);
        }
    })
    

  return response.status(200).json
({
    error:false,
    success:true,
    data:rootcategories
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


// for counting the number of categories

export async function getCategoriesCount(request,response){
try {
    
const categoryCount = await CategoryModal.countDocuments({parentId:undefined});

if(!categoryCount){
    response.status(500).json({
        success:false,
        error:true
    });
}else{
    response.send({
        categoryCount : categoryCount,
    });
}


} catch (error) {
     return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})       
}
}


// for counting the number of subcategories

export async function getSubCategoriesCount(request,response){
try {
    
const categories = await CategoryModal.find();

if(!categories){
    response.status(500).json({
        success:false,
        error:true
    });
}
else{
    const subCatArr = [];
    for(let cat of categories){
        if(cat.parentId!== undefined){}
        subCatList.push(cat);

}
}

 response.send({
        SubcategoryCount : subCatList.length,
    });

} 
catch (error) {
     return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})       
}
}

// get single category 
export async function getCategory(request,response) {
    try {
        const category = await CategoryModal.findById(request.params.id);

        if(!category){
            response.status(500).json(
                {
                message:"The category with the given ID was not found",
                error:true,
                success:false
            }
        );

        }

return response.status(200).json({
    error:false,
    success:true,
    category:category
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


export async function deleteCategory(request,response){
try {
            const category = await CategoryModal.findById(request.params.id);
const images = category.images;
let img = " ";
for(img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image =urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];
    if(imageName){
    cloudinary.uploader.destroy(imageName, (error , result) => {

    });
const subCategory = await CategoryModal.find({
    parentId:request.params.id
});

for(let i=0; i<subCategory.length; i++){
    console.log(subCategory[i]._id);
    const thirdsubCategory = await CategoryModal.find({parentId:subCategory[i]._id

    });
    for(let i=0; i<thirdsubCategory.length; i++){
        const deleteThirdSubCat = await CategoryModal.findByIdAndDelete(thirdsubCategory[i]._id);
    }

    const deleteSubCat = await CategoryModal.findByIdAndDelete(subCategory[i]._id);
}

}


const deleteCat = await CategoryModal.findByIdAndDelete(request.params.id);

if(!deleteCat){
    response.status(404).json({
        message:"Category not found",
        success:false,
        error:true
    });

}



response.status(200).json({
    success:true,
    message:"Category Deleted",
    error:false
});





}

    
} catch (error) {
     return response.status(500).json
({
    message:error.message || error,
    error:true,
    success:false
})       
}

}

// update category 

export async function updateCategory(request,response){
    try {
        const category = await CategoryModal.findByIdAndUpdate(
            request.params.id,
            {
                name: request.body.name,
                images: imagesArr.length>0? imagesArr[0] : request.body.images ,
                parentId: request.body.parentId,
                parentCatName: request.body.parentCatName
            },
            {new: true}

        );

if(!category){
    return response.status(500).json({
        message:"Category cannot be updated",
        success:false,
        error:true
    });
}

imagesArr = [];
response.status(200).json({
    error:false,
    success:true,
    message:"Category Updated",
    category:category
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
