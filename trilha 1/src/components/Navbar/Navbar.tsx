import React from 'react';
import './Navbar.css'; // Importando o CSS

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;