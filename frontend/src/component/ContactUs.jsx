import React from 'react';
import './styles.css';

function ContactUs() {
  return (
    <div className="contact-form container mt-5">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="contact-info mt-4">
        <h4>Contact Information</h4>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@garage.com</p>
      </div>
      <div className="map mt-4">
        <p>[Google Maps Embed]</p>
      </div>
    </div>
  );
}

export default ContactUs;
