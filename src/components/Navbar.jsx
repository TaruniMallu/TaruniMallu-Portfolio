import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Circle with T M initials */}
        <div className="initials-circle">T M</div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="my-name-box">
        <span className="my-name">Taruni Mallu</span>
      </div>
    </nav>
  );
};

export default Navbar;
