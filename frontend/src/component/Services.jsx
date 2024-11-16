import React from 'react';

function Services() {
  const services = [
    { name: 'Oil Change', description: 'Complete oil change service' },
    { name: 'Tire Replacement', description: 'Professional tire replacement' },
    { name: 'Engine Diagnostics', description: 'Advanced engine diagnostics' },
    { name: 'Brake Services', description: 'Brake inspection and repair' },
    { name: 'Vehicle Inspections', description: 'Comprehensive inspections' },
  ];

  return (
    <div className='d-flex flex-column justify-content-center align-itmes-center'>
      <div className='services d-flex gap-4 justify-content-center'>
        <img src="/our_service.png" alt="not found" style={{width:'4rem', height:'4rem', backgroundColor:"#f0f2f5"}}  />
        <h2>Our Services</h2>
      </div>
      
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <button>Get a Quote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
