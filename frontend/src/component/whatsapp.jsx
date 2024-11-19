import React from 'react';
// import './whatsapp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Example: Brand icons


const FontWhatsapp = () => {
    const phoneNumber = '97451822231';
  return (
    <div className="position-fixed bottom-0 end-0 m-4">
      <a
       href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="d-inline-block bg-success rounded-circle p-3"
        style={{ boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)', width:'3.5rem',height:"3.5rem" }}
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{width:'1.5rem',height:"1.5rem", color:'white'}} />
      </a>
    </div>
  );
};

export default FontWhatsapp;
