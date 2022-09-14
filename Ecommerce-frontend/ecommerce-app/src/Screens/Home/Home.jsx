import React from 'react'
import Cart from '../../Components/Cart/Cart'
import "../Home/Home.css"
import ControlledCarousel from '../../Components/Reactslider/ControlledCarousel'
import  cart from  "../../Images/cart-mens2.jpg";
import  cart1 from  "../../Images/cart-mensL3.jpg";
import  cart2 from  "../../Images/cart-womans4.jpg";
import  cart4 from  "../../Images/cart-mensT5.jpg";
import  cart5 from  "../../Images/cart-womanT6.jpg";
import  infromationbar from  "../../Images/information_bar_1.jpg";
import Homegrid from '../../Components/Homegrid/Homegrid';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';



function Home() {
  const [tshirtData , settshirtData] = useState([]);

  useEffect(()=>{
    function tshirtdatafun(){
      fetch("http://localhost:4000/api/get/tshirt")
      .then((res)=>res.json())
      .then((data)=>{
        settshirtData(data);
        console.log(data)
      }).catch((err)=>console.log(err))
    }
    
    tshirtdatafun();

  },[])


var count=0;
  return (
<>

<ControlledCarousel/>

 <div id="Categories">
  <h3>Discover Categories </h3>
 </div>

<div id="cartdivshow">
<Cart   image={cart}  go={"/product/tshirt/Male/Round"} />
<Cart   image={cart1} go={"/product/Lowers/Male/Lowers"} />
<Cart   image={cart4} go={"/product/tshirt/Male/Basics"}  />
<Cart   image={cart5} go={"/product/tshirt/Female/Top"}  />
<Cart   image={cart2} go={"/product/tshirt/Female/Round"}  />
</div>

<div id="trendingheadline">
  <h3>Shop Trending Clothes</h3>
</div>

<div id="trendingproductsdiv">

{

tshirtData.map((data, index)=>{
    
  if(count <7){
    count++
    return(
      <>
    <div className="trendingproduct" key={data._id}>
    
    <div className="productimg">
    <Link className='lk' to={`/details/tshirt/${data._id}`} > 
    <img src={data.imgs_url[0]} alt="" /></Link>
    </div>
    
    <div className="producttitle">
    <h4>{data.title}</h4>
    <h5>₹ {data.price} - <span className='red'>65% OFF</span> </h5>
    </div>
    
    </div>
      </>
       )

  }

})
}
  

</div>

<div id="infromationbar">
  <img src={infromationbar} alt="" />
</div>

<div id="homegridproductsdiv">

  <Homegrid  data={tshirtData}/>
</div>


</>
    
  )
}

export default Home;