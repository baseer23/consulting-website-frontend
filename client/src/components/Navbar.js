import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import navigation hooks
import logo from '../assets/images/aklo_logo.png';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, id) => {
    e.preventDefault();

    // If the current path is not the homepage, navigate back to it
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(id); // Scroll after navigating back to homepage
      }, 100); // Small delay to ensure the homepage is rendered before scrolling
    } else {
      scrollToSection(id); // Scroll directly if already on homepage
    }
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  const scrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'aisha', label: 'Aisha' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 flex items-center justify-between px-6 py-3 md:px-8 md:py-4">
      {/* Logo and Company Name */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-10 h-10 mr-3 md:w-12 md:h-12" />
        <span className="text-lg md:text-2xl font-bold tracking-wide">AKLO Labs</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 md:gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="hover:text-red-400 transition font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="block md:hidden relative">
        <button
          className="text-white hover:text-red-400 focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isMobileMenuOpen && (
          <ul className="absolute right-0 top-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-gray-700 last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="block px-4 py-2 hover:bg-gray-700 hover:text-red-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Optional: Add Canadian Maple Leaf Icon */}
      <div className="hidden md:block text-red-500">
        <FaCanadianMapleLeaf size={24} />
      </div>
    </nav>
  );
}

export default Navbar;
