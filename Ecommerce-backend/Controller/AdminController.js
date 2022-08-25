const admin = require("../Modules/adminModule");
const  bcryptjs = require('bcryptjs');

const adminfun = async(req,res)=>{
    try {
        const password = req.body.password;
        const user = await admin.findOne({adminuser:"vaibhavrajput2001"})
        const rightpassword = await bcryptjs.compare(password,user.adminpassword);
        res.send(rightpassword);


    } catch (error) {
        console.log("error " +error)
        res.json({massge:"not vaild"});
    }

}

module.exports = adminfun;