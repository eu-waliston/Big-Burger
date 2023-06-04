import React from "react";
import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import BestBurger from "./pages/BestBurgers/BestBurger";




const App = () => {
  return (
    <>
      <Home />    
      <About />
      <Product />
      <BestBurger />
    </>
  )
}

export default App;