import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './component/HomePage';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import Gallery from './component/Gallery';
import ContactUs from './component/ContactUs';
import Footer from './component/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/"><h1>Garage Name</h1></Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
