import React from 'react'
import "../Productdetail/Productdetail.css"
import photo1 from "../../Images/cart-mens2.jpg";
import photo2 from "../../Images/cart-mensL3.jpg";
import { useState } from 'react';
import { useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from '../../Store/Addcart';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';



function Productdetails() {
  const [big, setbig] = useState();
  const [size, setsize] = useState();
  const [quantity, setquantity] = useState(1);
  const {rout , id} = useParams();
  const [Data , setData] = useState([]);

  const height1 = useRef();
  const height2 = useRef();
  const change1 = useRef();
  const change2 = useRef();

  const items3 = useSelector((state)=>state.cart);  
  const  dispatch3 = useDispatch();
 

  function squantityfun(){
 if(quantity>1){
  setquantity(quantity-1)
 }
  }

  function heightfun1() {
    if (height1.current.style.display === "block") {
      height1.current.style.display = "none";
      change1.current.innerHTML ="+"
    }
    else {
      height1.current.style.display = "block";
      change1.current.innerHTML ="-"

    }

  }

  function heightfun2() {
    if (height2.current.style.display === "block") {
      height2.current.style.display = "none";
      change2.current.innerHTML ="+"
    }
    else {
      height2.current.style.display = "block";
      change2.current.innerHTML ="+"

    }
   
  }

  
  function addtocartfun3(id){
    dispatch3(add(id));
  }

   console.log(rout)
  useEffect(()=>{
   
    function productdatafun(){

      if(rout === "Round Neck"){
        fetch(`http://localhost:4000/api/get/tshirt`)
        .then((res)=>res.json())
        .then((data)=>{
          setData(data);
          // console.log(Data)
           
         data.map((e)=>{
          if(id === e._id){
            setbig(e.imgs_url[0]);
          }
         })


        }).catch((err)=>console.log(err))
      }else{
        fetch(`http://localhost:4000/api/get/${rout}`)
        .then((res)=>res.json())
        .then((data)=>{
          setData(data);
          // console.log(Data)
           
         data.map((e)=>{
          if(id === e._id){
            setbig(e.imgs_url[0]);
          }
         })


        }).catch((err)=>console.log(err))
      
      }
      }
    
      productdatafun();
  
    },[rout])


  return (
    <>
      <div id="productdetailsdiv">

        <div id="productdetails">

          <div className="productdetailsImg">

            <div className="bigimg" >
              <img src={big} alt="" className='smooth' />

            </div>

            <div className="smallsimg">
             

            {
              Data.map((data)=>{
                
               if(id === data._id){
              return(
                data.imgs_url.map((imgs_url)=>{
                  return(
                    <div className="simg" onMouseOver={(ee) => setbig(imgs_url)} >
                    <img src={imgs_url} alt="" />
                    </div>
                  )
                })  
                
              )}
                    
              })
            }
            </div>


          </div>

          <div className="productdetailsinfo">
              
            {
              Data.map((data)=>{
                if(id === data._id){
               return(
                <div className="productTittleAndPrice">
                <h3>{data.title}</h3>
                <p> {data.discripation}</p>
                <br />
                <h4>₹ {data.price} - 65% OFF</h4>
                <p>inclusive of all taxes</p>
  
              </div>


               )
                }
              })
            }

          

            <div className="productSize">

              <h4>Select Size</h4>

              <div className='sizeRadiobtn'>
                <input label="S" type="radio" name="size" value="S" onClick={(e) => setsize(e.target.value)} />
                <input label="M" type="radio" name="size" value="M" onClick={(e) => setsize(e.target.value)} />
                <input label="L" type="radio" name="size" value="L" onClick={(e) => setsize(e.target.value)} />
                <input label="XL" type="radio" name="size" value="XL" onClick={(e) => setsize(e.target.value)} />
              </div>
               

               <div id="quantity">
   
                 <h4>Quantity</h4> 	&nbsp; 	&nbsp;  <span className='point' onClick={squantityfun}><b>-</b></span>   
              	&nbsp; <span className='quant'><b> {quantity} </b></span> 	&nbsp; <span className='point' onClick={()=>setquantity(quantity+1)}><b>+</b></span> 
               </div>


               <div id="buynowbtndiv">
               <Link to={"/payment"}> <button >Buy Now</button></Link>
               </div>

            </div>

            <div className="addtoCart">
              <h4>Add Your Card And Wishlist</h4>
              <div className="productbtndiv">
                <button className='productbtn' onClick={()=> addtocartfun3("idmy4")}>Add To Cart</button> 
               <button className='productbtn'> Wishlist</button>
              </div>


            </div>

            <div className="productdiscription">

              <div className="pdiscription" >
                <div className='common'>

                <p>PRODUCT DESCRIPTION</p>
                <span onClick={heightfun1} ref={change1} >+</span>
                </div>
                
                <div className="pdiscription2" ref={height1}>
                PRODUCT DESCRIPTION - Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque, omnis tempora mollitia assumenda dolor ullam numquam, itaque, officiis eveniet error. Eligendi quam fuga, optio aspernatur adipisci cupiditate exercitationem? Placeat.
                </div>

              </div>

              <div className="returnpolicy" >

              <div className='common'>
                <p>15 DAY RETURNS & EXCHANGE</p>
                <span onClick={heightfun2} ref={change2} >+</span>
                </div>

                <div className="returnpolicy2" ref={height2}>
                15 DAY RETURNS - Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloremque id officia, consequatur porro consequuntur, omnis impedit, corrupti repudiandae debitis nihil? Ex, dolores. Cum praesentium, id officia saepe itaque iusto.
                </div>

              </div>

            </div>



          </div>



        </div>





      </div>



    </>
  )
}

export default Productdetails;