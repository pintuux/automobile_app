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
    <div>
      <h2>Our Services</h2>
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
