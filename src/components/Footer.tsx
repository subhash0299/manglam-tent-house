import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-amber-400">Manglam</span> Tent House
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating magical moments for over 15 years. We specialize in wedding tent rentals, 
              event decorations, and comprehensive celebration services that make your special day unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Gallery</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Packages</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300">info@manglamtenthouse.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1" />
                <span className="text-gray-300">123 Wedding Street<br />Event City, EC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Manglam Tent House. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;