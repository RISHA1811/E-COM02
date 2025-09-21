import mongoose from "mongoose";


const productschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required:true,
    },
    images:[
        {
        type:String,
        required: true
    }
],
brand : {
    type:String,
    default:''
},
price: {
    type:Number,
    default: 0
},
oldPrice: {
    type: Number,
    default: 0
},
catName: {
    type:String,
    default:''
},
catId: {
    type:String,
    default:''
},
subcatId: {
    type:String,
    default:''
},
subCat: {
    type:String,
    default:''
},
subCatName:{
    type:String,
    default:''
},
thirdsubcat:{
    type:String,
    default:''
},
thirdsubcatName: {
    type:String,
    default:''
},
thirdsubcatId: {
    type:String,
    default:''
},
category: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category',
}],
countinstock: {
    type:Number,
    required:true
},
rating: {
    type:Number,
    default: 0,
},
isfeatured: {
    type:Boolean,
    default: false
},
discount: {
    type:String,
    required: true
},
productram:[
    {
    type:String,
    default: null
}
],
size:[
 {
    type:String,
    default: null
}
],
productweight:[
 {
    type:String,
    default: null
}
],

datecreated:{
    type:Date,
    default: Date.now
},
},


{
    timestamps : true
});


const ProductModel = mongoose.model('Product',productschema);
export default ProductModel ;
