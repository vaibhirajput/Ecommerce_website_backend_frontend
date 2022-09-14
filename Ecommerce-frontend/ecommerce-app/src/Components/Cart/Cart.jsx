import React from 'react'
import { Link } from "react-router-dom";
import "../Cart/Cart.css"




function Cart(props) {
  return (
    <>
    <Link to={props.go}>
    <div id='cartdivphoto'>
        <img src={props.image} alt="Loading..." />
    </div>
    </Link>
    
    </>
  )
}

export default Cart;