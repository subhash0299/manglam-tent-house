import React from 'react';
import { Star, CheckCircle, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-amber-600">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 500+ Families</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Make Your <span className="text-amber-600">Wedding Dreams</span> Come True
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your special day with our premium tent rentals, elegant decorations, and exceptional service. 
              Creating unforgettable moments for over 15 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-center transform hover:scale-105">
                Book Your Event
              </a>
              <a href="#gallery" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-center">
                View Gallery
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-600">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Elegant wedding tent setup" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={24} />
                <div>
                  <div className="font-semibold text-gray-800">Premium Quality</div>
                  <div className="text-sm text-gray-600">Guaranteed Excellence</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Calendar size={24} />
                <div>
                  <div className="font-semibold">Free Consultation</div>
                  <div className="text-sm opacity-90">Book Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;