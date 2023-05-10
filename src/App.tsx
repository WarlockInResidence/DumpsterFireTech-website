import React, { useState } from "react";
import PhotoWall from "./components/photoWall";

const photos = [
  {
    id: 1,
    src: "assets/Argonath-A.jpg",
    title: "Software Factory Logo",
    description: "Brass 40mm round coin with",
  },
  {
    id: 2,
    src: "assets/Argonath-B.jpg",
    title: "Argonath Logo",
    description: "Brass 40mm round coin with custom logo",
  },
  {
    id: 3,
    src: "assets/StarWarsCoin-A.jpg",
    title: "Darth Vader with StarWars",
    description: "Brass 40mm round coin with custom design",
  },
  {
    id: 4,
    src: "assets/StarWarsCoin-B.jpg",
    title: "StarWars Aztec Calendar",
    description: "Brass 40mm round coin with custom design",
  },
  // Add more photos here...
];

const App = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  return (
    <div className="app">
      <h1>PhotoWall</h1>
      <PhotoWall
        photos={photos}
        activePhotoIndex={activePhotoIndex}
        setActivePhotoIndex={setActivePhotoIndex}
      />
    </div>
  );
};

export default App;
