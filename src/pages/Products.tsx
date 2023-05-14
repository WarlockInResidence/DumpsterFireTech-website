import React, { useState } from "react";
import PhotoWall from "../components/photoWall";
import { photos } from "../components/photos";

const Products = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  return (
    <div className="app">
      <h1>Product Wall</h1>
      <PhotoWall
        photos={photos}
        activePhotoIndex={activePhotoIndex}
        setActivePhotoIndex={setActivePhotoIndex}
      />
    </div>
  );
};

export default Products;
