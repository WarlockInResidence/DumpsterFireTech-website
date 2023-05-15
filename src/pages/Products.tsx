import React, { useState } from "react";
import PhotoWall from "../components/photoWall";
import { photos } from "../components/photos";
import Accordion from "../components/Accordion";

const Products = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  // @ts-ignore
  const accordionItems = [
    {
      title: "Coins",
      content: (
        <div>
          <PhotoWall
            photos={photos.filter((photo) => photo.group === "coin")}
            activePhotoIndex={activePhotoIndex}
            setActivePhotoIndex={setActivePhotoIndex}
          />
        </div>
      ),
    },
    {
      title: "Drinkware",
      content: (
        <div>
          <PhotoWall
            photos={photos.filter((photo) => photo.group === "drinkware")}
            activePhotoIndex={activePhotoIndex}
            setActivePhotoIndex={setActivePhotoIndex}
          />
        </div>
      ),
    },
    {
      title: "Jewelry",
      content: (
        <div>
          <PhotoWall
            photos={photos.filter((photo) => photo.group === "jewelry")}
            activePhotoIndex={activePhotoIndex}
            setActivePhotoIndex={setActivePhotoIndex}
          />
        </div>
      ),
    },
    {
      title: "Utility",
      content: (
        <div>
          <PhotoWall
            photos={photos.filter((photo) => photo.group === "utility")}
            activePhotoIndex={activePhotoIndex}
            setActivePhotoIndex={setActivePhotoIndex}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <h1>Wall of Work </h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Products;
