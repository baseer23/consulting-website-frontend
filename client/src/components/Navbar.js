import React from 'react';
import logo from '../assets/images/aklo_logo.png'; // Import the logo
import { FaCanadianMapleLeaf } from 'react-icons/fa'; // Optional: Add icons

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
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 flex items-center justify-between px-8 py-4">
      {/* Logo and Company Name */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-12 h-12 mr-4" />
        <span className="text-2xl font-bold tracking-wide">
          AKLO Labs
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li>
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-red-400 transition font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#aisha" onClick={(e) => handleLinkClick(e, 'aisha')} className="hover:text-red-400 transition font-medium">
            Aisha
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-red-400 transition font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-red-400 transition font-medium">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="hover:text-red-400 transition font-medium">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-red-400 transition font-medium">
            Contact
          </a>
        </li>
      </ul>

      {/* Optional: Add Canadian Maple Leaf Icon */}
      <div className="hidden md:block text-red-500">
        <FaCanadianMapleLeaf size={24} />
      </div>
    </nav>
  );
}

export default Navbar;
