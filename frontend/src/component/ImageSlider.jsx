import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    '/garage_image_106.jpg',
    '/garage_image_101.jpg',
    '/garage_image_102.jpg',
    '/garage_image_103.jpg',
    '/garage_image_104.jpg',
    
    
    // Add more image paths as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Transition to the next image every second from right to left
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slide every 1 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 2s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} className="slider-image" alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
