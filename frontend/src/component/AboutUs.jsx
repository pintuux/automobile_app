import React from 'react';
import './styles.css';

function AboutUs() {
  return (
    <div className="container my-5">
      <h2>About Us</h2>
      <p>We are dedicated to providing high-quality auto repair and maintenance services.</p>
      <h3>Our Team</h3>
      <div className="team d-flex flex-wrap justify-content-around mb-2">
        <div className="team-member">
          <img src="/gearbox_engineer.jpeg" alt="empty" />
          <h4>John Doe</h4>
          <p>Mechanic</p>
          <p className='fw-bold'>Expr: 7 Year+</p>
        </div>
        <div className="team-member">
          <img src="/expert_eng.jpeg" alt="empty" />
          <h4>Jane Smith</h4>
          <p>Specialist</p>
          <p className='fw-bold'>Expr: 5 Year+</p>
        </div>
        </div>
        <div className="team-member mb-1">
          <h4>Expertise in Transmission Systems: </h4>
          <p>Highlight the company’s specialization in transmission repair, servicing, and maintenance for a variety of car models.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Commitment to Quality:</h4>
          <p> Emphasize a strong commitment to quality workmanship and premium service standards.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Advanced Diagnostic Tools:</h4>
          <p> Mention the use of cutting-edge diagnostic technology for accurate and efficient repairs.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Highly Trained Technicians:</h4>
          <p> Describe the team as experienced, certified technicians who understand the technical demands of high-end and performance vehicles.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Customer-Centric Approach: </h4>
          <p> Focus on personalized customer service, making every client feel valued and their vehicle needs prioritized.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Reliable & Transparent Services: </h4>
          <p> Stress the company's reputation for honesty and transparency in pricing, repair recommendations, and delivery timelines.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Sustainability Practices: </h4>
          <p> If applicable, mention eco-friendly practices or recycling programs to appeal to environmentally conscious clients.</p>
        </div>
        <div className="team-member mb-1">
          <h4>Qatar-Specific Expertise: </h4>
          <p> Note that the team understands the specific needs of vehicles in Qatar’s climate and road conditions, which can affect maintenance requirements.</p>
        </div>
        <div className="team-member mb-1">
          <h4> Convenient Location & Facilities:</h4>
          <p> If in a prime location or offering facilities like a waiting area, mention them for added customer convenience.</p>
        </div>
        <div className="team-member mb-1">
          <h4> Diverse Range of Services: </h4>
          <p>Detail all services offered—routine maintenance, complex repairs, vehicle inspections, etc., to show that clients can rely on Gupta Auto Transmission as a one-stop shop.</p>
        </div>
      
      <h3 className="mt-4">Certifications & Awards</h3>
      <p>Certified by the Auto Care Association.</p>
    </div>
  );
}

export default AboutUs;
