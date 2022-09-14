import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import '../Admin/Cpenel.css'

function Cpenel() {
 
 const newproductfrom = useRef("");
 const findorderfrom = useRef("");
 const orderconfrom = useRef("");
 const dropdowunmenu = useRef();
 const dropdowunmenu2 = useRef();
 const symbol = useRef();
 const symbol2 = useRef();
 const clear = useRef();
 const imagess = useRef([]);
 const [images , setimages] = useState("");
 const [color , setcolor] = useState([]);
 const [size , setsize] = useState([]);

// images data function
function imagefun(e){
  const imglist = Array.prototype.slice.call(e.target.files);
  console.log(imglist);

  setimages(imglist)
 
 }

 console.log(images);

// colorues data function
 function colourfun(e){
  let {value , checked} = e.target;

  if(checked){
    let present = color.includes(value);
    if(!present){
      setcolor([...color, value]);
    }
  }else if(!checked){
    setcolor(color.filter((e)=> e !==value));
  }
 
 }

 console.log(color);


// Size data Fucction!!! 
function sizefun(e){
  let {value , checked} = e.target;

  if(checked){
    let present = size.includes(value);
    if(!present){
      setsize([...size, value]);
    }
  }else if(!checked){
    setsize(size.filter((e)=> e !==value));
  }
 
 }
 
 console.log(size);


// dashbord menu functions start from here!!!
function fromshowfun1(){
  newproductfrom.current.style.display="flex"
  findorderfrom.current.style.display="none"
  orderconfrom.current.style.display="none"
}

function fromshowfun2(){
  findorderfrom.current.style.display="block"
  newproductfrom.current.style.display="none"
  orderconfrom.current.style.display="none"
}

function fromshowfun3(){
  orderconfrom.current.style.display="block"
  findorderfrom.current.style.display="none"
  newproductfrom.current.style.display="none"
}
// dashbord menu functions end from here!!!


// Coloures dropdwon menu function!!!
function dropfun(){
  if(dropdowunmenu.current.style.display === "block"){
    dropdowunmenu.current.style.display = "none"
    symbol.current.innerHTML= "&#8964;"
  }
  else{
    dropdowunmenu.current.style.display = "block"
    symbol.current.innerHTML= "&#8963;"
  }
}

// Size dropdwon menu function!!!
function dropfun2(){
  if(dropdowunmenu2.current.style.display === "block"){
    dropdowunmenu2.current.style.display = "none"
    symbol2.current.innerHTML= "&#8964;"
  }
  else{
    dropdowunmenu2.current.style.display = "block"
    symbol2.current.innerHTML= "&#8963;"
  }
}

//Add New Product Function. and send all details of new Product to server!!!  
  async function click(e){
  if(color.length === 0 && size.length === 0){
    alert("Please select all Feilds")
    e.preventDefault();
    return;
  }
  e.preventDefault();
 
  const data = new FormData(e.target);
  let newproductdata = Object.fromEntries(data.entries());
  console.log(newproductdata.images);
  const fromdata = new FormData();

  for(var j=0; j<images.length;j++){
    fromdata.append("images",images[j]);
   }

  fromdata.append("colours",[color]);
  fromdata.append("title",newproductdata.title);
  fromdata.append("category",newproductdata.category);
  fromdata.append( "discripation",newproductdata.discripation);
  fromdata.append( "gender",newproductdata.gender);
  fromdata.append("price",newproductdata.price);
  fromdata.append("quantity",newproductdata.quantity);
  fromdata.append("size",[size]);

;
  
  fetch("http://localhost:4000/api/Lowers/category/gender",{
    method:"POST",
    body:fromdata
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data)
  }).catch((err)=>console.log(err))
 
  clear.current?.reset();
  setcolor([]);
 }



  return (
    <>
      <div id="Ccontent">

        <div id="orders">

          <div id="neworder">
            <h3>New Order</h3>
            <div className="newproductserver">
              <span>Customer Id:</span> <span>4455445</span>
             </div>
          </div>

          <div id="cencelorders">
            <h3>Cencel Orders</h3>

            <div className="newproductserver">
              <span>Customer Id:</span> <span>4455445</span>
             </div>

             <div className="newproductserver">
              <span>Customer Id:</span> <span>4455445</span>
             </div>

             <div className="newproductserver">
              <span>Customer Id:</span> <span>4455445</span>
             </div>
          </div>

        </div>

        <div id="product">

          <div id="productheader">
            <div id="newproduct" onClick={fromshowfun1} >
              <h3>Add New Product</h3>
            </div>

            <div id="findorders" onClick={fromshowfun2} >
              <h3>Find Orders By Date</h3>
            </div>

            <div id="confromorder" onClick={fromshowfun3} >
              <h3>Order is Fulfil</h3>
            </div>
          </div>

          <div id="productcontent">


            
            <div id="newproductfromdiv" ref={newproductfrom}>
        
              <form id='newproductfrom' onSubmit={click} method="post" encType='multipart/form-data' ref={clear} >
              

              <div className="headline ">
              <h3>Add New Product</h3>
              </div>
                <div className="feilds ">
                  <input className="feildinput" type="text" name='title' placeholder='Title' required />
                </div>

                <div className="feilds">
                  <input className="feildinput" type="text" name='category' placeholder='Category' required />
                </div>

                <div className="feilds">
                  <input className="feildinput" type="number" name='price' placeholder='Price' required />
                </div>

                <div className="feilds">
                  <input className="feildinput" type="number" name='quantity' placeholder='Quantity' required />
                </div>
                
                <div >
                <textarea id='txtarea' name="discripation" cols="30" rows="10" placeholder='Discripation' required></textarea> 
                </div>

                <div className="feilds bottomborder">
                  <span>Gender:</span>  <input type="radio" name='gender' value="Male" placeholder='Gender' required />
                  <span>Male</span> 	&nbsp; 	&nbsp;
                  <input type="radio" name='gender' value="Female" placeholder='Gender' required />
                  <span>Female</span>
                </div>

                <div className="dropdwon2">
                <span>Sizes</span>  <span className='symbol' ref={symbol2} onClick={dropfun2}>&#8964;</span>
                </div>

                <div className="dropdowunmenu2" ref={dropdowunmenu2}>
                 <div className="checkdiv">
                   <span>Small</span> <input type="checkbox" value="Small" name="sizes[]" onChange={sizefun}  />
                 </div>

                 <div className="checkdiv">
                   <span>Medium</span> <input type="checkbox" value="Medium" name="sizes[]" onChange={sizefun}  />
                 </div>

                 <div className="checkdiv">
                   <span>Large</span> <input type="checkbox" value="Large" name="sizes[]" onChange={sizefun}  />
                 </div>

                 <div className="checkdiv">
                   <span>Extra Large</span> <input type="checkbox" value="Extra Large" name="sizes[]" onChange={sizefun}  />
                 </div>

                </div>


                <div className="dropdwon">
                 <span>Coloures</span>  <span className='symbol' ref={symbol} onClick={dropfun}>&#8964;</span>
                </div>

                <div className="dropdowunmenu" ref={dropdowunmenu}>
                 <div className="checkdiv">
                   <span>Black</span> <input type="checkbox" value="Black" name="coloures[]" onChange={colourfun}  />
                 </div>

                 <div className="checkdiv">
                   <span>Blue</span> <input type="checkbox" value="Blue" name="coloures[]" onChange={colourfun} />
                 </div>
                 <div className="checkdiv">
                   <span>Red</span> <input type="checkbox" value="Red" name="coloures[]"  onChange={colourfun} />
                 </div>
                 <div className="checkdiv">
                   <span>Grey</span> <input type="checkbox" value="Grey" name="coloures[]" onChange={colourfun}  />
                 </div>
                 <div className="checkdiv">
                   <span>Yellow</span> <input type="checkbox" value="Yellow" name="coloures[]" onChange={colourfun} />
                 </div>
                 <div className="checkdiv">
                   <span>White</span> <input type="checkbox" value="White" name="coloures[]" onChange={colourfun} />
                 </div>
                 <div className="checkdiv">
                   <span>Nvay Blue</span> <input type="checkbox" value="Nvay Blue" name="coloures[]" onChange={colourfun} />
                 </div>
                 <div className="checkdiv">
                   <span>Pink</span> <input type="checkbox" value="Pink" name="coloures[]" onChange={colourfun}/>
                 </div>
                 <div className="checkdiv">
                   <span>Purpual</span> <input type="checkbox" value="Purpual" name="coloures[]" onChange={colourfun} />
                 </div>
                </div>

                <div className="feilds bottomborder ">
                  <input type="file" name='images' placeholder='' ref={imagess} multiple="multiple" required onChange={imagefun} />
                </div>

                <button className='btndashbord' > Add Product</button>
              </form>
            </div>


            <div id="findorder" ref={findorderfrom}>

              <div id="findorderformdiv">
                <h3>Find Products By Date</h3>
                <form action="">

                  <div className="feilds">
                    <input className="feildinput" type="date" name='finddate' placeholder='Enterr Date' required />
                  </div>

                  <button className='btndashbord' > Find Products</button>
                </form>

              </div>

            </div>

            <div id="orderconfrom" ref={orderconfrom}>

              <div id="orderconfromdiv">
                <h3>Update Order is Fullfil or Not</h3>
                <form action="">

                  <div className="feilds">
                    <input className="feildinput" type="text" name='productid' placeholder='Enter Product Id' required />
                  </div>

                  <div className="feilds">
                  <span>Order Fullfil:</span>  <input type="radio" name='fullfil' required />
                  <span>Yes</span> 	&nbsp; 	&nbsp;
                  <input type="radio" name='fullfil'  required />
                  <span>No</span>
                </div>


                  <button className='btndashbord' > Update status</button>
                </form>

              </div>



            </div>

          </div>

        </div>



      </div>

    </>
  )
}

export default Cpenel