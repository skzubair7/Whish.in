import React from "react";
import { IoHeartOutline, IoEyeOutline, IoRepeatOutline, IoBagAddOutline, IoStar, IoStarOutline } from "react-icons/io5";
import m1 from "./assets/images/products/mobile-1.jpg"  ;
import m2 from "./assets/images/products/mobile-2.jpg"  ;
import m3 from "./assets/images/products/mobile-3.jpg"  ;
import m4 from "./assets/images/products/mobile-4.jpg"  ;
import lastmobile from "./assets/images/products/lastmobile.jpg"  ;



function Mobiles() {
  return (
    <>
    
    <div className="product-container">

       <div className="container">



                <div className="product-main">

                  <h2 className="title">New smart phones</h2>

                  <div className="product-grid">

                    <div className="showcase">

                          <div className="showcase-banner">

                                <img  src={m1} alt="watch" width="300" className="product-img default"></img>
                                
                          </div>

                      <div className="showcase-content">

                            <a href="#" className="showcase-category">phone</a>

                            <a href="#">
                              <h3 className="showcase-title">vivo</h3>
                            </a>
                            <div className="showcase-rating">
                                <IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline />
                            </div>


                            <div className="price-box">
                              <p className="price">$38.00</p>
                              <del>$85.00</del>
                            </div>

                      </div>

                    </div>
                  








                  </div>
                </div>

       </div>
           
     </div>
 </>


  );
}

export default Mobiles;
