import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start planning your perfect event? Contact us today for a free consultation and personalized quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@manglamtenthouse.com</p>
                    <p className="text-gray-600">bookings@manglamtenthouse.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Wedding Street<br />Event City, EC 12345<br />India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Emergency: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-600 text-white p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Free Consultation</h4>
              <p className="mb-4">Get expert advice and a personalized quote for your event. No obligation required!</p>
              <a href="tel:+919876543210" className="bg-white text-amber-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 inline-block">
                Call Now
              </a>
            </div>
          </div>

          {/* Clickable Text for Map */}
          <div className="flex items-center justify-center">
            <a
              href="https://www.google.com/maps/place/Manglam+Tent+House"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-bold text-lg hover:underline"
            >
              Click here to open map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;