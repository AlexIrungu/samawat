import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Assuming you're using React Icons library

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Connect with Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com/samawatisounds" className="text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/samawatisounds" className="text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/samawatisounds" className="text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Samawati Sounds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
