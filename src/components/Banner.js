import React from "react";
import b1 from "./assets/images/banner-1.jpg" ;
import b2 from "./assets/images/banner-2.jpg" ;


function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">

          <div className="slider-item">
            <img src={b1} alt="women's latest fashion sale" className="banner-img" />
            <div className="banner-content">
              <h2 className="banner-title">fashion sale</h2>
              <p className="banner-text">starting at $ <b>20</b>.00</p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>

          <div className="slider-item">
            <img src={b2} alt="modern sunglasses" className="banner-img" />
            <div className="banner-content">
              <h2 className="banner-title">new trends</h2>
              <p className="banner-text">starting at $ <b>15</b>.00</p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>

          <div className="slider-item">
            <img src={b1} alt="new fashion summer sale" className="banner-img" />
            <div className="banner-content">
              <h2 className="banner-title">New  summer sale</h2>
              <p className="banner-text">starting at $ <b>29</b>.99</p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
