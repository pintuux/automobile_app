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
      <Link to='https://www.facebook.com/profile.php?id=61568431381071'><FaFacebook /> Facebook </Link>
      <Link to='https://www.instagram.com/guptaautotransmission/'> <FaInstagram/> Instagram</Link>
      <Link to='https://www.tiktok.com/@gattransmission002'><FaTiktok/> Tiktok</Link>
      <SiGmail /> <span style={{color:'#f08a24'}}>Gmail: udayapurudayapur90@gmail.com</span>
      </nav>

    </footer>
  );
}

export default Footer;
