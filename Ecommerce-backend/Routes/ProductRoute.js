const products = require("express").Router();
const {productTshirt, productLower, productTshirtPOST, productLowerPOST} = require("../Controller/ProductController");
const multer = require("../AllimageSetup/Multer");



// get t-shirt product route
products.get('/api/get/tshirt', productTshirt);

// post t-shirt product route
products.post('/api/tshirt',multer.array('images',12) , productTshirtPOST);

// get lower product route
products.get('/api/get/Lowers', productLower);

// post lower product route
products.post('/api/Lowers',multer.array('images',12), productLowerPOST);

module.exports = products; 