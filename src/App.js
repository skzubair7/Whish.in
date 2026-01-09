
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Cloths from "./components/Cloths";
import Footer from "./components/Footer";
import Mobiles from "./components/Mobiles";
import Shoes from "./components/Shoes";



function App() {
  return (
    <Router>
      <Header />
      <Category />
     
      

      <Routes>
          <Route path="/" element={<><Banner /><Mobiles /></>} />

          <Route path="/home" element={<><Banner /><Mobiles /></>} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Cloths" element={<Cloths />} />
        <Route path="/Shoes" element={<Shoes />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
