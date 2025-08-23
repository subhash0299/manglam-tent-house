import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "500+",
      label: "Successful Events"
    },
    {
      icon: Heart,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Users,
      number: "5000+",
      label: "Team Members"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Manglam Tent House</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, Manglam Tent House has been the trusted partner for families celebrating their most important moments. 
              We specialize in creating magical wedding experiences with our premium tent rentals and comprehensive event services.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our journey began with a simple mission: to make every celebration extraordinary. Today, we're proud to have served over 500 families, 
              creating unforgettable memories with our attention to detail, quality service, and passionate team.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <achievement.icon className="text-amber-600 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-800">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1024974/pexels-photo-1024974.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our team setting up a beautiful wedding" 
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Our Promise</h3>
              <p className="text-sm opacity-90">Making your dreams come true with dedication and excellence</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Choose Manglam Tent House?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={32} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600 text-sm">We use only the finest materials and equipment to ensure your event is perfect</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-600" size={32} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Personal Touch</h4>
              <p className="text-gray-600 text-sm">Every event is unique, and we customize our services to match your vision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-600" size={32} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Our experienced professionals handle every detail so you can enjoy your special day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;