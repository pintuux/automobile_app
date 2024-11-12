import React from 'react';
import './styles.css';

function AboutUs() {
  return (
    <div className="container my-5">
      <h2>About Us</h2>
      <p>We are dedicated to providing high-quality auto repair and maintenance services.</p>
      <h3>Our Team</h3>
      <div className="team d-flex flex-wrap justify-content-around">
        <div className="team-member">
          <h4>John Doe</h4>
          <p>Mechanic</p>
        </div>
        <div className="team-member">
          <h4>Jane Smith</h4>
          <p>Specialist</p>
        </div>
      </div>
      <h3 className="mt-4">Certifications & Awards</h3>
      <p>Certified by the Auto Care Association.</p>
    </div>
  );
}

export default AboutUs;
