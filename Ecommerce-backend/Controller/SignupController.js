const users = require("../Modules/Registeration");
const  bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require("../Modules/adminModule");

const KEY = "myfirstfullstackproject##truemusclescience@gmail.com";
const ADMINKEY ="myadminkeyforcpeneltoaddproductsonthewebsite9998887776666";
// sign up api
const registerfun = async(req,res)=>{
    try {
        const {first_name, last_name, email, phone_no, password} = req.body;


      const vailduser = await users.findOne({email}) 
      const vaildadmin = await admin.findOne({email}) 
      if(vailduser && vaildadmin){
        return res.json({massage:"User is already Exists"})
      }
     
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
        const {loginemail, loginpassword} = req.body;

       const vaildadmin = await admin.findOne({email:loginemail}) 
       const vailduser = await users.findOne({email:loginemail}) 

       if(vailduser){
        const rightpassword = await bcryptjs.compare(loginpassword, vailduser.password)
        if(rightpassword){

            const Token = jwt.sign({email:vailduser.email , id:vailduser._id}, KEY);
            const user ={ email:vailduser.email,
                id: vailduser._id,
                first_name:vailduser.first_name,
                last_name:vailduser.last_name,
                phone_no:vailduser.phone_no,
                token:Token}

            res.json(user);
        }
        else{
            res.json({massage:"Not Vaild User"})
        }
       }

       else if(vaildadmin){
        const rightadminpas = await bcryptjs.compare(loginpassword, vaildadmin.password);
        if(rightadminpas){
            const Tokenc =  jwt.sign({email:vaildadmin.email, id:vaildadmin._id}, ADMINKEY)
            const adminobj ={email:vaildadmin.email, token:Tokenc }
            res.json(adminobj);

        }
        else{
            res.json({massage:"Not Vaild User"})
        }



       }
       else{
        res.json({massage:"Not Vaild User"})
       }  
       

    } catch (error) {
        
    }
}

module.exports = {registerfun, loginfun};