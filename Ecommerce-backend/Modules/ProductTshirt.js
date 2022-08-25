const connection = require("../Modules/DbConnection");
const mongoose = require("mongoose");

const Tshirtschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    imgs_url:[{
        type:String,
        required:true,   
    }],
    size:[{
        type:String,
        required:true,    
    }],
    colours:[{
        type:String,
        required:true,    
    }],
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },


})

const tshirt = new mongoose.model("Tshirts",Tshirtschema);
module.exports = tshirt;