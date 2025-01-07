import React from 'react';
import logo from '../assets/images/aklo_logo.png'; // Import the logo

function Navbar() {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50 flex items-center justify-between px-6 py-4">
      {/* Logo and Company Name */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-10 h-10 mr-3" />
        <span className="text-xl font-bold">AKLO Labs</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="hover:text-blue-400 transition">Portfolio</a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-blue-400 transition">Services</a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-blue-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
