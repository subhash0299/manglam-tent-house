import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dinesh Jangu",
      event: "Wedding Reception",
      rating: 5,
      text: "Manglam Tent House made our wedding reception absolutely magical! The attention to detail and professional service exceeded our expectations. Our guests are still talking about how beautiful everything looked.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Rahul",
      event: "Wedding Ceremony",
      rating: 5,
      text: "From the initial consultation to the final cleanup, the team was incredibly professional. They understood our vision perfectly and brought it to life. Highly recommended for anyone planning a wedding!",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sonu",
      event: "Anniversary Celebration",
      rating: 5,
      text: "We chose Manglam Tent House for our 25th anniversary celebration, and they delivered beyond our dreams. The elegant setup and seamless coordination made our special day unforgettable.",
      image: "sonu.jpg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families who trusted us with their special moments have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="text-amber-300 absolute top-4 right-4" size={32} />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;