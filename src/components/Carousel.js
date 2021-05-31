import React from 'react';
import './Carousel.css';
import '../App.css'

import image1 from '../assets/BG-Images/1.jpg';
import image2 from '../assets/BG-Images/2.jpg';
import image3 from '../assets/BG-Images/3.jpg';

function Carousel() {
  return (
        <div id="home" className="carousel slide pt-5" data-ride="carousel">

            <ul className="carousel-indicators">
              <li data-target="#home" data-slide-to="0" className="active"></li>
              <li data-target="#home" data-slide-to="1"></li>
              <li data-target="#home" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} alt="" />
              </div>
              <div className="carousel-item">
                <img src={image2} alt="" />
              </div>
              <div className="carousel-item">
                <img src={image3} alt="" />
              </div>
            </div>

            <a className="carousel-control-prev" href="#home" data-slide="prev">
                <span ><i className="fas fa-angle-double-left fa-2x"></i></span>
              </a>
              <a className="carousel-control-next" href="#home" data-slide="next">
                <span><i className="fas fa-angle-double-right fa-2x"></i></span>
              </a>

        </div>
  );
}

export default Carousel;
