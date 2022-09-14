import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Reactslider/Slider.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import  cover from  "../../Images/cover1.jpg"
import  cover3 from  "../../Images/cover3.jpg"
import  cover4 from  "../../Images/cover4.jpg"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='gh' >
        <img
          className="d-block "
          src={cover}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className='gh' >
        <img
          className="d-block "
          src={cover3}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className='gh' >
        <img
          className="d-block"
          src={cover4}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
