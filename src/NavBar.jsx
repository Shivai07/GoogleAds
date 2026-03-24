import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300"
            >
              Praise The Sun
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-blue-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`block h-6 w-6 transition-transform duration-300 ${
                isMobileMenuOpen ? 'transform rotate-45' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 ml-auto">
            <li>
              <Link 
                to="/" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              {/* <Link 
                to="/dcma" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                DCMA
              </Link> */}
            </li>
            <li>
              {/* <Link 
                to="/disclaimer" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Disclaimer
              </Link> */}
            </li>
            <li>
              <Link 
                to="/privacy" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                to="/terms" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link 
                to="/phones" 
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Phones
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-in fade-in duration-200">
            <Link 
              to="/" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/dcma" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DCMA
            </Link>
            <Link 
              to="/disclaimer" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </Link>
            <Link 
              to="/privacy" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/phones" 
              className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Phones
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;