import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : '';
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-bold text-gray-800">SAMAWATI SOUNDS</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              to="/analytics" 
              className={`text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive('/analytics')}`}
            >
              Analytics
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 ${location.pathname === '/' ? 'text-blue-600 bg-blue-50' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 ${location.pathname === '/about' ? 'text-blue-600 bg-blue-50' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/analytics"
              className={`block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 ${location.pathname === '/analytics' ? 'text-blue-600 bg-blue-50' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Analytics
            </Link>
            <Link
              to="/contact"
              className={`block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 ${location.pathname === '/contact' ? 'text-blue-600 bg-blue-50' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;