import React from 'react'
import "../Cartpage/Cartpage.css";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from "react"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../Store/Addcart';






function Cartpage() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [size, setsize] = useState();
  const [tprice, settprice] = useState();

  function renovefun(item) {
    dispatch(remove(item));
    console.log(item)
  }

  var totalprice = 0;
  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      totalprice += cart[i].price;
    }

    settprice(totalprice);

  }, [cart])



  return (
    <>
      <div className="cartdatadiv">


        {
          cart.map((cd) => {
            return (
              <>
                <div className="cartdata">

                  <div className="cartimg">
                  <Link to={`/details/${cd.category}/${cd._id}`}>
                   <img src={cd.imgs_url[0]} alt="Loading" />
                  </Link> 
                  </div>

                  <div className="cartdetails ">

                    <div className="productdetailsinfo">
                      <h3>{cd.title}</h3>
                      <p> {cd.discripation}</p>
                      <h4>₹ {cd.price} - 65% OFF</h4>
                      <p>inclusive of all taxes</p>
                    </div>


                    <div className="productSize ">

                      <h4>Select Size</h4>

                      <div className='sizeRadiobtn'>
                        <input label="S" type="radio" name="size" value="S" onClick={(e) => setsize(e.target.value)} />
                        <input label="M" type="radio" name="size" value="M" onClick={(e) => setsize(e.target.value)} />
                        <input label="L" type="radio" name="size" value="L" onClick={(e) => setsize(e.target.value)} />
                        <input label="XL" type="radio" name="size" value="XL" onClick={(e) => setsize(e.target.value)} />
                      </div>
                    </div>

                    <button id='removebtn' onClick={() => renovefun(cd._id)}>Remove</button>
                  </div>

                </div>

              </>
            )

          })
        }
         </div>
        <div id="pricediv">
        <div className="price">
          <h3>Total Price -{tprice} </h3>
          <p>inclusive of all taxes</p>
          <button className='cartbuybtn'>Buy Now</button>
        </div>
         
        </div>



     




    </>
  )
}

export default Cartpage;