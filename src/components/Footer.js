import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo-white.png" 
                alt="Samawati Sounds" 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">Samawati Sounds</h3>
            </div>
            <p className="text-blue-100 mb-6 text-sm">
              Experience the authentic rhythm of African music with Samawati Sounds. 
              We bring musical heritage to life through performances, recordings, and events.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com/samawatisounds" 
                className="text-blue-200 hover:text-white transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://twitter.com/samawatisounds" 
                className="text-blue-200 hover:text-white transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://instagram.com/samawatisounds" 
                className="text-blue-200 hover:text-white transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://youtube.com/samawatisounds" 
                className="text-blue-200 hover:text-white transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Events', 'Music', 'Gallery', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="text-xs mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-blue-100">123 Music Avenue, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-300 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+254123456789" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  +254 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@samawatisounds.com" 
                  className="text-blue-100 hover:text-white transition-colors duration-300"
                >
                  info@samawatisounds.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Newsletter</h4>
            <p className="text-blue-100 mb-4 text-sm">Subscribe to receive updates on our latest events and music releases.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-blue-700 text-white placeholder-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-blue-700 my-6"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {currentYear} Samawati Sounds. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-white transition-colors duration-300">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;