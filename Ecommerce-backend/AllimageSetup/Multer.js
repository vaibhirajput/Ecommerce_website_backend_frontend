const multer = require("multer");


module.exports  = multer({
 storage:multer.diskStorage({}),
 fileFilter:(req, file, cb)=>{
    if(!file.mimetype.match(/jpe|png|jpg/)){
        console.log("Not vaild file type of this image")
       return cb(new Error("not support"), false); 
      
    }
    cb(null, true);
    
 }
})
