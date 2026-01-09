import React from "react";
import { IoHeartOutline, IoEyeOutline, IoRepeatOutline, IoBagAddOutline, IoStar, IoStarOutline } from "react-icons/io5";
import shoes1 from "./assets/images/products/shoes-1.jpg"  ;
import shoes2 from "./assets/images/products/shoes-2.jpg"  ;
import shoes3 from "./assets/images/products/shoes-3.jpg"  ;
import shoes4 from "./assets/images/products/shoes-4.jpg"  ;





function Cloths() {
  return (
    <>
    
    <div className="product-container">

       <div className="container">

                   <div className="product-main">

                            <h2 className="title">New Shoes</h2>

                        <div className="product-grid">

                           <div className="showcase">
                              <div className="showcase-banner">

                                    <img  src={shoes1} alt=" Leathers Jackets" width="300" className="product-img default"></img>
                              </div>
                           
                                    <div className="showcase-content">
                                          <a href="#" className="showcase-category">sports shoes</a>

                                              <a href="#">
                                                <h3 className="showcase-title"> nike</h3>
                                              </a>
                                              <div className="showcase-rating">
                                                  <IoStar /><IoStar /><IoStar /><IoStarOutline /><IoStarOutline />
                                              </div>


                                              <div className="price-box">
                                                <p className="price">$99.00</p>
                                                <del>$175.00</del>
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
