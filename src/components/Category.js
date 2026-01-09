import React from "react";
import { Link } from "react-router-dom";
import Cloths from "./Cloths";
import mobile from "./assets/images/products/mobile-1.jpg"  ;
import jacket from "./assets/images/products/jacket-1.jpg"  ;
import shoes from "./assets/images/products/shoes-1.jpg"  ;
import Mobiles from "./Mobiles";
import {IoHomeOutline} from "react-icons/io5";







function Category() {
  return (
    <>
    <div className="category-item-container">


      
    <div className="category-item" id="home">
            <Link className="category-img-body" to="/home" >
            <button className="action-btn"><IoHomeOutline /></button>
            
              
            </Link>

        <p className="category-item-name"></p>
       </div>




      <div className="category-item">
            <Link className="category-img-body" to="/Mobiles" >
            <img className="category-img" src={mobile} width="70" height="70" alt="category" />
              
            </Link>

        <p className="category-item-name">Mobiles</p>
       </div>



       <div className="category-item">
            <Link className="category-img-body"   to="/Cloths">
            <img className="category-img" src={jacket} width="70" height="70" alt="category" />
              
            </Link>

        <p className="category-item-name">Jacket</p>
       </div>




       <div className="category-item">
            <Link className="category-img-body"   to="/Shoes">
            <img className="category-img" src={shoes} width="70" height="70" alt="category" />
              
            </Link>

        <p className="category-item-name">shoes</p>
       </div>




       

    </div>
    </>

    
  );
}

export default Category;
