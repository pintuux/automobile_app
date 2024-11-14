import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HamburgerMenu = () => (
  <Dropdown className="menu-toggle d-lg-none">
    <Dropdown.Toggle variant="light" id="dropdown-basic">
      <i className="" style={{ fontSize: '1.2rem' }}></i>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/">Home</Dropdown.Item>
      <Dropdown.Item href="/about-us">About Us</Dropdown.Item>
      <Dropdown.Item href="/services">Services</Dropdown.Item>
      <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
      <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>
);

export default HamburgerMenu;
