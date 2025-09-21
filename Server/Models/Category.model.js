import mongoose  from "mongoose";

const CategorySchema = mongoose.Schema ({

name:{
    type:String,
    required: true,
    trim:true
},
images:[{
    type:String ,
}],
color:{
    type:String,
},
parentCatName:{
    type:String,
},

parentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category',
    default: null
}


},
{
    timestamps:true
});

const CategoryModal = mongoose.model('Category',CategorySchema)

export default CategoryModal;



