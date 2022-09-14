import React from 'react'
import "../Footer/Footer.css"
import  payment from  "../../Images/payments_1.jpg";
import instagram  from "../../Images/instagram.png"
import facebok from "../../Images/facebook.png"
import twitter  from "../../Images/twitter.png"
import app  from "../../Images/app_android.webp"
import { Link } from "react-router-dom";





function Footer() {
  return (
  <>
  <div id="paymentImg">
    <img src={payment} alt="" />
  </div>

  <div id="footerdiv">

   <div id="footermenudiv">
   <h3>Mini Store</h3>
   <Link to="/about"> About Us</Link>
   <Link to="/about"> Contect Us</Link>
   <Link to="/about"> Home</Link>
   </div>

   <div id="footerwebsitedetailsdiv">
   <h3>Our Policies</h3>
   <Link to="/about"> Private Policy</Link>
   <Link to="/about"> Retrun Policy</Link>
   <Link to="/about"> Cancellation Policy</Link>
   <Link to="/about"> T & Cs</Link>
   </div>

   <div id="footersocialmedia">
   
   <div id="socialmediaImg">
    <img className='social' src={instagram} alt="" />
    <img className='social' src={facebok} alt="" />
    <img className='social' src={twitter} alt="" />
    <img id='app' src={app} alt="" />
   </div>

   <div id="copyrights">
    <p>Copyright © 2022 Mini Store | Powered by Mini Store </p>
   </div>

   </div>


  </div>
  
  </>
  )
}

export default Footer