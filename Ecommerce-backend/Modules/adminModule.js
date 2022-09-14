const mongoose = require("mongoose");
const connection = require("../Modules/DbConnection");


const Adminschema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    
})

const admin = new mongoose.model("Admin",Adminschema );
module.exports = admin;