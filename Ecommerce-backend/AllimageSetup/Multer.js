const multer = require("multer");


module.exports  = multer({
 storage:multer.diskStorage({}),
 fileFilter:(req, files, cb)=>{
    if(!files.mimetype.match(/jpe|png|jpg/)){
        console.log("Not vaild file type of this image")
       return cb(new Error("not support"), false); 
      
    }
    cb(null, true);
    
 }
})
 

