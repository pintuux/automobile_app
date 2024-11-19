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
        <p>Phone: (+974) 70136605</p>
        <p>Email: udayapurudayapur90@gmail.com</p>
      </div>
      <div className="map mt-4">
        {/* Google Maps Embed */}
        <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.9585555689464!2d51.437!3d25.1974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x4834b08bc401ee3!2s5CXP%2B2JF%2C%20Doha%2C%20Qatar!5e1!3m2!1sen!2sin!4v1731925696227!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
       
      </div>
    </div>
  );
}

export default ContactUs;
