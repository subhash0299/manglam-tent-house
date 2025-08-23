import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@manglamtenthouse.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-amber-600">मंगलम</span> टेन्ट हाउस

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium">Gallery</a>
            <a href="#packages" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium">Packages</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors duration-300" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors duration-300" onClick={toggleMenu}>Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors duration-300" onClick={toggleMenu}>Gallery</a>
              <a href="#packages" className="text-gray-700 hover:text-amber-600 transition-colors duration-300" onClick={toggleMenu}>Packages</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors duration-300" onClick={toggleMenu}>About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
              <div className="pt-4">
                <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 inline-block">
                  Book Now
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;