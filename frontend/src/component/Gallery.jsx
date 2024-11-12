import React from 'react';

function Gallery() {
  const images = [
    '/images/garage1.jpg',
    '/images/garage2.jpg',
    '/images/garage3.jpg',
  ];

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Garage ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
