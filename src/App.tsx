import React, { useState } from "react";
import { Navbar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Pricing from "./pages/Pricing";

const App = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
