import React from "react";
import { IoHeartOutline, IoEyeOutline, IoRepeatOutline, IoBagAddOutline, IoStar, IoStarOutline } from "react-icons/io5";
import jacket1 from "./assets/images/products/jacket-1.jpg"  ;


function Cloths() {
  return (
    <>
    
    <div className="product-container">
       <div className="container">
         <div className="product-main">
                    <h2 className="title">New Cloths</h2>
             
              <div className="product-grid">

                          <div className="showcase">

                                <div className="showcase-banner">

                                        <img  src={jacket1} alt=" Leathers Jackets" width="300" className="product-img default"></img>
                                </div>     

                            <div className="showcase-content">

                                          <a href="#" className="showcase-category">jacket</a>

                                          <a href="#">
                                            <h3 className="showcase-title"> Leathers Jackets</h3>
                                          </a>
                                      <div className="showcase-rating">
                                          <IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline />
                                      </div>

                                        <div className="price-box">
                                          <p className="price">$48.00</p>
                                          <del>$75.00</del>
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

export default Cloths;
