import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram , FaTiktok} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Gupta Auto Transmission</p>
      <h2>About Us</h2>
      <p>At Gupta Auto Transmission, we’re dedicated to driving excellence in automotive solutions. With a focus on precision, reliability, and innovation, we bring years of expertise to every transmission system we work with. Our commitment to quality ensures your vehicle performs at its best, every mile of the way. Discover the difference with Gupta Auto Transmission—where your journey begins with excellence.</p>
      <h3>Follow us on social media</h3>
      <nav>
      <Link to='/facebook'><FaFacebook /> Facebook </Link>
      <Link to='/Instagram'> <FaInstagram/> Instagram</Link>
      <Link to='/Tiktok'><FaTiktok/> Tiktok</Link>
      <Link to='/Gmail'><SiGmail /> Gmail</Link>
      </nav>

    </footer>
  );
}

export default Footer;
