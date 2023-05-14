import React, { Dispatch, SetStateAction, useState } from "react";
import "./style.css";

const photos = [
  {
    id: 1,
    group: "coin",
    src: "assets/Argonath-A.jpg",
    title: "Software Factory Logo",
    description: "Brass 40mm round coin with",
  },
  {
    id: 2,
    group: "coin",
    src: "assets/Argonath-B.jpg",
    title: "Argonath Logo",
    description: "Brass 40mm round coin with custom logo",
  },
  {
    id: 3,
    group: "coin",
    src: "assets/StarWarsCoin-A.jpg",
    title: "Darth Vader with StarWars",
    description: "Brass 40mm round coin with custom design",
  },
  {
    id: 4,
    group: "coin",
    src: "assets/StarWarsCoin-B.jpg",
    title: "StarWars Aztec Calendar",
    description: "Brass 40mm round coin with custom design",
  },
  {
    id: 5,
    group: "coin",
    src: "assets/Hex-Coin-A.jpg",
    title: "StarWars Aztec Calendar",
    description: "Brass 40mm round coin with custom design",
  },
  {
    id: 6,
    group: "coin",
    src: "assets/Hex-Coin-B.jpg",
    title: "StarWars Aztec Calendar",
    description:
      "Brass " +
      `Diameter: 26.2 mm \n thickness: 1.5 mm Hexagon coin with custom design`,
  },
  {
    id: 7,
    group: "coin",
    src: "assets/coin-round-a.jpg",
    title: "StarWars Aztec Calendar",
    description: "Brass 40mm round coin with custom design",
  },
  {
    id: 6,
    group: "coin",
    src: "assets/coin-round-b.jpg",
    title: "StarWars Aztec Calendar",
    description:
      "Brass " +
      `Diameter: 26.2 mm \n thickness: 1.5 mm Hexagon coin with custom design`,
  },
  // Add more photos here...
];

// Define the type for the photo object
interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Define the props interface for the PhotoWall component
interface PhotoWallProps {
  photos: Photo[];
  activePhotoIndex: number;
  setActivePhotoIndex: Dispatch<SetStateAction<number>>;
}

const PhotoWall: React.FC<PhotoWallProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-wall">
      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="photo-wall img"
            onClick={() => handleClick(photo)}
          >
            <img src={photo.src} alt={photo.title} />
          </div>
        );
      })}
      {selectedPhoto && (
        <div className="photo-details">
          <div className="photo-details-content">
            <h2>{selectedPhoto.title}</h2>
            <p>{selectedPhoto.description}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoWall;
