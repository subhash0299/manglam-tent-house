import React from 'react';
import { Tent, Sparkles, Utensils, Music, Camera, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Tent,
      title: "Wedding Tents",
      description: "Elegant and spacious tents perfect for wedding ceremonies and receptions",
      features: ["Waterproof & Weather Resistant", "Various Sizes Available", "Premium Quality Materials"]
    },
    {
      icon: Sparkles,
      title: "Event Decoration",
      description: "Beautiful decorations to transform your venue into a magical setting",
      features: ["Floral Arrangements", "Lighting Solutions", "Custom Themes"]
    },
    {
      icon: Utensils,
      title: "Catering Setup",
      description: "Complete catering arrangements with professional kitchen setup",
      features: ["Kitchen Equipment", "Serving Stations", "Professional Staff"]
    },
    {
      icon: Music,
      title: "Sound & Lighting",
      description: "Professional audio-visual equipment for your special moments",
      features: ["High-Quality Sound Systems", "Stage Lighting", "DJ Equipment"]
    },
    {
      icon: Camera,
      title: "Photography Setup",
      description: "Perfect backdrops and lighting for memorable photography",
      features: ["Photo Booths", "Professional Backdrops", "Lighting Equipment"]
    },
    {
      icon: Users,
      title: "Guest Management",
      description: "Comfortable seating and arrangements for all your guests",
      features: ["Premium Seating", "Table Arrangements", "Guest Coordination"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive wedding and event solutions to make your celebration perfect and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <service.icon className="text-amber-600" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;