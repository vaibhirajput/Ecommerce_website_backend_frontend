import React, { useRef } from 'react';
import './Header.css';
import  serach from  "../../Images/search.png"
import cart from "../../Images/shopping-cart1.png"
import user from "../../Images/user.png"
import { Link,useNavigate, } from "react-router-dom";
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useState } from 'react';

function Header() {

const items = useSelector((state)=>state.cart);  
const userdiv = useRef();
const bborder = useRef();
const signin = useRef();
const signup = useRef();
const navigate = useNavigate();
 







function logoutfun(){
 
  localStorage.removeItem("token");
  navigate('/')
  window.location.reload();
  
}

useEffect(()=>{
  const token = localStorage.getItem("token");
  if(token){
    signin.current.style.display="none";
    signup.current.style.display="none"
    bborder.current.style.display="block";
  }
})


function userinfomFun(){
  if(userdiv.current.style.display === "flex"){
    userdiv.current.style.display="none";
 
  }
  else{
    userdiv.current.style.display="flex";


  }
}




  return (
    <>
    <div id="headerdiv">
    
    <div id="headerlogo">
    <Link to={"/"} > <h3>Mini Store</h3></Link> 
    </div>

    <div id="searchdiv">

       <div id="search">
       <input type="text" name='search' placeholder='Search' />
       <img src={serach} alt="" />
       </div>
     
       <Link to={"/Cart"}>   <div id="cartdiv">
      <b><img src={cart} alt="" /></b> <span id='col'>{items.length}</span>
      </div></Link> 

      <div id="Signin" ref={signin}>
     <Link to={"/login"}> <button  >Sign in</button></Link>
      </div>

      <div id="Signup" ref={signup}>
      <Link to={"/registration"}><button>Sign up </button></Link>
      </div>

     

      <div id="user" onClick={userinfomFun} ref={bborder} >
      <img src={user} alt="" />

      <div id="userinfodiv"  ref={userdiv}>
       
       <div id="userpic">
       <img src={user} alt="" />
       </div>

       <div className="username">
        <span><b>Name :</b> &ensp; &ensp;</span> <span> Vaibhav Rajput</span> 
       </div>

       <div className="username">
        <span><b>Email:</b> &ensp; &ensp; &ensp;</span> <span> Vaibhav Rajput</span>
       </div>

       <div className="username">
        <span><b>Phone no:</b> &ensp;</span> <span> Vaibhav Rajput</span>
       </div>

       <div className="username">
        <button onClick={logoutfun}>Logout</button>
       </div>
       
       <div className="manage">
        <Link to="/registeration"> Manage or Edited Details</Link>
        
       </div>



      </div>
      </div>


    </div>
    
   
    </div>
  
    <div id="headermenu">
      <Link  to="product/tshirt/Male/Round"> <li>Mens T-shirt</li> </Link>
      <Link  to="/product/Lowers/Male/Lowers"> <li>Mens Lower</li> </Link>
      <Link  to="/product/tshirt/Female/Round"> <li>Womens T-shirt</li> </Link>
      <Link  to="/product/tshirt/Female/Top"> <li>Womens Top</li> </Link>
    </div>
    
    
    </>
  )
}

export default Header