// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './component/HomePage';
// import AboutUs from './component/AboutUs';
// import Services from './component/Services';
// import Gallery from './component/Gallery';
// import ContactUs from './component/ContactUs';
// import Footer from './component/footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
        
//         <header className="container-fluid bg-dark py-3">
//         <div className="d-flex justify-content-between align-items-center flex-wrap" style={{width:'100%'}}>
//         <Link to="/" style={{ textDecoration: 'none' }} className="d-flex align-items-center">
//           <img
//             src='/GAT.jpg'
//             style={{ height: '40px', width: '40px', margin: '0px 5px', borderRadius: '50%' }}
//             alt='Gupta Auto Transmission logo'
//           />
//           <h1 className="m-0 fs-4">Gupta Auto Transmission</h1>
//         </Link>
//           <div>
//           <nav className="d-flex flex-wrap mt-3 mt-md-0">
//             <Link to="/" className="nav-link">Home</Link>
//             <Link to="/about-us" className="nav-link">About Us</Link>
//             <Link to="/services" className="nav-link">Services</Link>
//             <Link to="/gallery" className="nav-link">Gallery</Link>
//             <Link to="/contact-us" className="nav-link">Contact Us</Link>
//           </nav>
//           </div>
        
//       </div>
//     </header>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import HomePage from './component/HomePage';
// import AboutUs from './component/AboutUs';
// import Services from './component/Services';
// import Gallery from './component/Gallery';
// import ContactUs from './component/ContactUs';
// import Footer from './component/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="container-fluid bg-dark py-3">
//           <Navbar expand="md" variant="dark" style={{width:'100%'}} >
//             <div className="container d-flex justify-content-between align-items-center" style={{width:'100%', margin:'0px'}} >
//               <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//                 <img
//                   src='/GAT.jpg'
//                   style={{ height: '40px', width: '40px', margin: '0px 5px', borderRadius: '50%' }}
//                   alt='Gupta Auto Transmission logo'
//                 />
//                 <h1 className="m-0 fs-4">Gupta Auto Transmission</h1>
//               </Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ms-auto">
//                   <Nav.Link as={Link} to="/">Home</Nav.Link>
//                   <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
//                   <Nav.Link as={Link} to="/services">Services</Nav.Link>
//                   <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
//                   <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </div>
//           </Navbar>
//         </header>
        
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//         </Routes>
        
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './component/HomePage';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import Gallery from './component/Gallery';
import ContactUs from './component/ContactUs';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HamburgerMenu from './component/Dropdown_menu';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Debugging useEffect to log state changes and re-renders
  useEffect(() => {
    console.log("isOpen state changed:", isOpen);
  }, [isOpen]); // This will run every time `isOpen` changes

  return (
    <Router>
      <div className="App">
        <header className="container-fluid py-3 bg-dark">
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
            <div className="d-flex align-items-center">
              <Link to="/" className="d-flex align-items-center text-decoration-none">
                <img src='/GAT.jpg' className="logo-img me-2" alt='Gupta Auto Transmission Logo' />
                <h1 className="h4 mb-0" style={{ color: 'lightgray' }}>Gupta Auto Transmission</h1>
              </Link>
            </div>
            <HamburgerMenu  onClick={toggleMenu}
              style={{ color: 'lightgray', border: 'none', background: 'none' }}/>
            
            <nav className="d-none d-lg-flex ms-auto">
              <Link to="/" className="nav-link" style={{ color: 'lightgray' }}>Home</Link>
              <Link to="/about-us" className="nav-link" style={{ color: 'lightgray' }}>About Us</Link>
              <Link to="/services" className="nav-link" style={{ color: 'lightgray' }}>Services</Link>
              <Link to="/gallery" className="nav-link" style={{ color: 'lightgray' }}>Gallery</Link>
              <Link to="/contact-us" className="nav-link" style={{ color: 'lightgray' }}>Contact Us</Link>
            </nav>
          </div>

          {/* Mobile Navbar */}
          
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
};

export default App;
