import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function HomePage() {
  return (
    <div className="hero text-center">
      <h2>Quality Auto Repair & Maintenance You Can Trust</h2>
      <Link to="/contact-us">
        <button className="btn btn-primary">Get a Free Quote</button>
      </Link>
    </div>
  );
}

export default HomePage;
