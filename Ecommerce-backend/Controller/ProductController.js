const cloudinary = require("cloudinary");
require('../AllimageSetup/Cloud');
const tshirt = require("../Modules/ProductTshirt");
const lower = require("../Modules/ProductLower");



// get t-shirt product api
const productTshirt = async(req, res)=>{
   res.send('productTshirt');
}


// Post t-shirt product api
const productTshirtPOST = async(req, res)=>{
   const { title,category,gender,size,colours,price,quantity} = req.body;
   let img = [];
   img = req.files;

   if(title && category && gender && size && colours && price && quantity && img ){
      
   try {
      
      let imguri = img.map((data)=>{
       return data.path;
      })
 
      let imgs;
      const imgs_url =[];
      let realuri;
 
      for(var i =0; i<imguri.length; i++){
        imgs = await cloudinary.v2.uploader.upload( imguri[i],{folder: 'EcommerceTshirt'});
        realuri = imgs.secure_url
        imgs_url.push(realuri);
      }

      await tshirt.create({
      title,
      category,
      gender,
      imgs_url,
      size,
      colours,
      price,
      quantity

     });

      res.json({massage:"ok"})
      
   } catch (error) {
      console.log("not vaild " + JSON.stringify(error) );
      res.send("ok product is not save");
   }
  
         
   }else{
      res.json({massage:"please enter all product details"});
   }
  

}

// get lower products api
const productLower = async(req, res)=>{
    res.send("Product lower");
 }


//  post lower product api
const productLowerPOST = async(req, res)=>{
   const { title,category,gender,size,colours,price,quantity} = req.body;
   let img = [];
   img = req.files;

   if(title && category && gender && size && colours && price && quantity && img ){
      
   try {
      
      let imguri = img.map((data)=>{
       return data.path;
      })
 
      let imgs;
      const imgs_url =[];
      let realuri;
 
      for(var i =0; i<imguri.length; i++){
        imgs = await cloudinary.v2.uploader.upload( imguri[i],{folder: 'EommerceLower'});
        realuri = imgs.secure_url
        imgs_url.push(realuri);
      }

      await lower.create({
      title,
      category,
      gender,
      imgs_url,
      size,
      colours,
      price,
      quantity

     });

      res.json({massage:"ok"})
      
   } catch (error) {
      console.log("not vaild " + JSON.stringify(error) );
      res.send("ok product is not save");
   }
  
         
   }else{
      res.json({massage:"please enter all product details"});
   }
  
  

}


 module.exports ={productTshirt, productLower, productTshirtPOST, productLowerPOST};