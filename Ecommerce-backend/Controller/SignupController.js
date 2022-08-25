const users = require("../Modules/Registeration");
const  bcryptjs = require('bcryptjs');

// sign up api
const registerfun = async(req,res)=>{
    try {
        const {first_name, last_name, email, phone_no, password} = req.body;
     if(first_name && last_name && email && phone_no && password){
        const bcryptjspassword = await bcryptjs.hash(password, 10);

        await users.create({
         first_name,
         last_name,
         email,
         phone_no,
         password:bcryptjspassword,
     })

     res.json({massage:"user is save sucessfully"});

     }
     else{
        console.log("user not fill the all details")
     }


    } catch (error) {
        console.log("Something is wrong "+ error);
        
    }
}

const loginfun = async(req,res)=>{
    try {
        const {email, password} = req.body;



    } catch (error) {
        
    }
}

module.exports = {registerfun, loginfun};