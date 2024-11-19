import React from 'react';

function Gallery() {
  const images = [
    '/gearbox_4.jpeg',
    '/gearbox_5.jpeg',
    '/gearbox_6.jpeg',
    '/gearbox_7.jpeg',
    '/gearbox_8.jpg',
    '/gearbox_9.jpg',
  ];

  return (
    <div>
      {/* <h2>Gallery</h2> */}
      <div className="gallery d-flex ">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Garage ${index + 1}`} style={{width:'400px', height:'400px'}}/>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
