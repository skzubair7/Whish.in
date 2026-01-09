import React, { useState } from "react";
import {
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoMenuOutline,
  IoHomeOutline,
} from "react-icons/io5";

function Header() {

  
const [mode,setmode]=useState(false);

   
const menu=()=>{
  setmode(!mode);
};
   

  return (
    <header>
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <h1>Wish.in</h1>
          </a>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <IoSearchOutline />
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn"><IoPersonOutline /></button>
            <button className="action-btn"><IoHeartOutline /></button>
            <button className="action-btn"><IoBagHandleOutline /></button>
          </div>
        </div>
      </div>

      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={menu}>
          <IoMenuOutline />
           </button>
        <button className="action-btn"><IoBagHandleOutline /></button>
        <button className="action-btn"><IoHomeOutline /></button>
        <button className="action-btn"><IoHeartOutline /></button>
      </div>

      <div id="popup"style={{ display:mode? "block":"none",widht:"700px",backgroundColor:"lightgray",}} >
         <h3 style={{ padding: "20px" }}>Menu</h3>
         <ul style={{ padding: "20px" }}>
          <li>account</li>
          <li>settings</li>
          <li>new</li>
          <li>trending</li>
          <li>share</li>
          <li>feedback</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
