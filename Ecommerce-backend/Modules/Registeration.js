const connection = require("../Modules/DbConnection");
const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,    
    },
    phone_no:{
        type:Number,
        required:true,
        unique:true,    
    },
    password:{
        type:String,
        required:true,    
    },

})

const users = mongoose.model("Users",Userschema);
module.exports = users;