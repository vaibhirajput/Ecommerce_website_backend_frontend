const express = require("express")
const connection = require("./Modules/DbConnection");
const bodyparser = require("body-parser");
const products = require("./Routes/ProductRoute");
const signup = require("./Routes/SignupRoute");
const admin = require("./Routes/AdminRoute");

const app = express();
const PORT = 4000;

const cors = require("cors");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(products);
app.use(signup);
app.use(admin);


app.get('/', (req , res)=>{
    res.send("Server is running fine and Welcome to the Ecommerce website project");
})


app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
})