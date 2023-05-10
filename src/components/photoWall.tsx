import React, { Dispatch, SetStateAction, useState } from "react";
import "./style.css";

// Define the type for the photo object
interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Define the props interface for the PhotoWall component
interface PhotowallProps {
  photos: Photo[];
  activePhotoIndex: number;
  setActivePhotoIndex: Dispatch<SetStateAction<number>>;
}

const PhotoWall: React.FC<PhotowallProps> = ({ photos }) => {
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
