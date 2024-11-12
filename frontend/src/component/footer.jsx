import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Garage Name</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <p>Follow us on social media</p>
    </footer>
  );
}

export default Footer;
