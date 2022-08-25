const products = require("express").Router();
const {productTshirt, productLower, productTshirtPOST, productLowerPOST} = require("../Controller/ProductController");
const multer = require("../AllimageSetup/Multer");



// get t-shirt product route
products.get('/api/tshirt/:category/:gender', productTshirt);

// post t-shirt product route
products.post('/api/tshirt/:category/:gender',multer.array('image'), productTshirtPOST);

// get lower product route
products.get('/api/lower/:category/:gender', productLower);

// post lower product route
products.post('/api/lower/:category/:gender',multer.array('image'), productLowerPOST);

module.exports = products; 