import React from 'react'
import "../Products/product.css"
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from '../../Store/Addcart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';






function Product(props) {

  const items2 = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [Data , setData] = useState([]);
  let { rout, gender, Categore} = useParams()

  function addtocartfun(id) {
    dispatch(add(id));
  }

  useEffect(()=>{
  
  function productdatafun(){
    fetch(`http://localhost:4000/api/get/${rout}`)
      .then((res)=>res.json())
      .then((data)=>{
        setData(data);
        // console.log(Data)
      }).catch((err)=>console.log(err))
    }
    
    productdatafun();

  },[rout || gender || Categore])
  
  console.log(Data)

  return (
    <>
      <div id="productlistdiv">


        <div id="productslist">
          <div className="Categories">
            <h3>Categories</h3>
          </div>


          <div className="productmenus">
            <Link to="/product/tshirt/Male/Round">Mens T-Shirt </Link>
          </div>

          <div className="productmenus">
            <Link to="/product/Lowers/Male/Lowers">Mens Lower </Link>
          </div>

          <div className="productmenus">
            <Link to="/product/tshirt/Male/Basics">Mens Basic</Link>
          </div>

          <div className="productmenus">
            <Link to="/product/tshirt/Female/Round">Womens T-Shirt  </Link>
          </div>

          <div className="productmenus">
            <Link to="/product/tshirt/Female/Top">Womens Top </Link>
          </div>

        </div>

        <div id="products">

          <div id="homegriddiv">


            {
              Data.map((data)=>{
             if(gender === data.gender &&( Categore === data.category || Categore+" "+"Neck" === data.category) ){
              return(
                 <>
                 <div className="gridproductdiv">
              <div className="gridproductimage">
                <Link to={`/details/${rout}/${data._id}`}> 
                <img src={data.imgs_url[0]} alt="Looding..." /></Link>
              </div>

              <div className="gridproductdetails">
                <h4>{data.title}</h4>
                <p className="tagline">
                 {data.discripation}
                </p>
                <p>₹ {data.price} - <span className='red'>65% OFF</span> </p>

                <div className="addcart">
                  <button className='cartbtnh' > Wishlist</button>
                  <button className='cartbtnh' onClick={() => addtocartfun(data)}> Add To Cart</button>
                </div>

              </div>

            </div>
                 
                 
                 
                 
                 </>

                )}
              })




            }


           
            {/* <div className="gridproductdiv">
              <div className="gridproductimage">
                <Link to={"/details/Categore/id"}> 
                <img src={props.image} alt="Looding..." /></Link>
              </div>

              <div className="gridproductdetails">
                <h4>Reebok T-Shirt</h4>
                <p className="tagline">
                  Men's Red Leave Me Alone Typography Oversized T-shirt
                </p>
                <p>Rs 999/- <span className='red'>65% OFF</span> </p>

                <div className="addcart">
                  <button className='cartbtnh' > Wishlist</button>
                  <button className='cartbtnh' onClick={() => addtocartfun("idmy4")}> Add To Cart</button>
                </div>

              </div>

            </div> */}


          </div>

        </div>

      </div>


    </>
  )
}

export default Product