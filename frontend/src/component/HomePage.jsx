// import React, { useState, useEffect } from 'react';
import './styles.css';
import ImageSlider from './ImageSlider';
import CarModels from './CarModel';

const HomePage = () => {
  

  return (
    <div className="hero text-center">
      <ImageSlider/>
      {/* <h2 style={{padding:'20px', width:'auto', backgroundColor:"springgreen"}}>Quality Auto Repair & Maintenance You Can Trust</h2> */}
      <CarModels/>

    </div>
  );
};

export default HomePage;
