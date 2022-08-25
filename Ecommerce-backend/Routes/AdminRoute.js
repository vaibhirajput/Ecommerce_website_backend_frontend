const admin = require("express").Router();
const adminfun = require("../Controller/AdminController");


// login route only!!!
admin.post('/adminEcommerce982152/login', adminfun);


module.exports = admin;