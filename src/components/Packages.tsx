import React from 'react';
import { Check } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Essential",
      price: "₹25,000",
      duration: "For 100-150 guests",
      features: [
        "Basic tent setup (20x30 ft)",
        "Standard seating arrangement",
        "Basic lighting",
        "Sound system",
        "Setup & cleanup",
        "1 day rental"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹45,000",
      duration: "For 200-300 guests",
      features: [
        "Large tent setup (30x50 ft)",
        "Premium seating & tables",
        "Decorative lighting",
        "Professional sound system",
        "Stage setup",
        "Catering equipment",
        "Setup & cleanup",
        "2 days rental"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "₹75,000",
      duration: "For 400+ guests",
      features: [
        "Grand tent setup (50x80 ft)",
        "Luxury seating & decor",
        "Premium lighting & AV",
        "Complete catering setup",
        "Stage & dance floor",
        "Photo booth setup",
        "Dedicated coordinator",
        "Setup & cleanup",
        "3 days rental"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Wedding Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your special day. All packages are customizable to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              pkg.popular ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300' : 'bg-white border border-gray-200'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-amber-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600">{pkg.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`w-full py-3 px-6 rounded-full font-medium transition-colors duration-300 text-center block ${
                pkg.popular 
                  ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                  : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
              }`}>
                Choose Package
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom package? We're here to help!</p>
          <a href="#contact" className="text-amber-600 hover:text-amber-700 font-medium underline">
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;