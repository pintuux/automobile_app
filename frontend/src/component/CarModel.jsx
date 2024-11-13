import React from 'react';
// import './CarModels.css';


const CarModels = () => {
    const carData = [
        {
            model: 'Land Rover',
            image: '/rang_rower.jpeg',
            description: 'Comprehensive maintenance and repair services for Land Rovers, from oil changes to complex diagnostics.',
          },
        {
          model: 'Mercedes-Benz',
          image: '/marcedes_benz2.jpeg',
          description: 'Expert repair and maintenance for Mercedes-Benz. Ensure smooth performance and reliability with our certified technicians.',
        },
        {
            model: 'Porsche',
            image: '/porsche.jpeg',
            description: 'We understand that Porsche owners demand the highest standards for their vehicles. Our expert technicians specialize in maintaining the performance, luxury, and precision engineering that Porsche is known for.',
          },
        {
          model: 'Jeep',
          image: '/jeep.jpeg',
          description: 'Quality repair services for Jeep. Our team provides engine repair, brake replacement, and regular maintenance.',
        },
        {
          model: 'Ford Mustang',
          image: 'Ford_Mustang.jpeg',
          description: 'High-performance repair and tuning services for Ford Mustang to keep it in top condition and running smoothly.',
        },
        {
          model: 'BMW 3 Series',
          image: '/bmw2.jpeg',
          description: 'Comprehensive maintenance and repair services for BMW 3 Series, from oil changes to complex diagnostics.',
        },

        // Add more car models as needed
      ];
      
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Car Models for Repair Services</h2>
      <div className="row">
        {carData.map((car, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card car-card shadow-sm">
              <img src={car.image} className="card-img-top " alt={`${car.model}`} />
              <div className="card-body">
                <h5 className="card-title">{car.model}</h5>
                <p className="card-text">{car.description}</p>
                <a href="/contact-us" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModels;
