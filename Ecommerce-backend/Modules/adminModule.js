const mongoose = require("mongoose");
const connection = require("../Modules/DbConnection");


const Adminschema = new mongoose.Schema({
    adminuser:{
        type:String,
        required:true,
    },
    adminpassword:{
        type:String,
        required:true,
    },
    
})

const admin = new mongoose.model("Admin",Adminschema );
module.exports = admin;