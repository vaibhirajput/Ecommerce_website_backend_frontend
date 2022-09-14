import React from 'react'
import { Link } from 'react-router-dom'
import "../Homegrid/Homegrid.css"
import cart5 from "../../Images/cart-womanT6.jpg";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../Store/Addcart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';




function Homegrid(props) {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function addtocartfun2(Data) {
    dispatch(add(Data));
  }

var count =4;
var count2 = 6;
var ur="";
  return (
    <>

      <div id="homegriddiv">
        
       {
         props.data.map((Data)=>{
    
          if(count <13 && count2 == 0){
            count++
            
           return(

            <div className="gridproductdiv">

          <div className="gridproductimage">
            <Link to={`/details/tshirt/${Data._id}`}><img src={Data.imgs_url[0]} alt="Looding..." /> </Link>
          </div>

          <div className="gridproductdetails">
            <h4>{Data.title}</h4>
            <p className="tagline">
              {Data.discripation}
            </p>
            <p>₹ {Data.price}  <span className='red'>65% OFF</span> </p>

            <div className="addcart">
              <button className='cartbtnh' > Wishlist</button>
              <button className='cartbtnh' onClick={() => addtocartfun2(Data)} >Add To Cart</button>
            </div>

          </div>
        </div>
           )
          }
          else{
            count2--;
          }
         
         })

       }

       
      </div>

    </>
  )
}

export default Homegrid