import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/7.jpg?auto=compress&cs=tinysrgb&w=800&h=800",
      title: "Elegant Wedding Setup"
    },
    {
      src: "/2.jpg?auto=compress&cs=tinysrgb&w=800&h=800",
      title: "Reception Decoration"
    },
    {
      src: "/3.jpg?auto=compress&cs=tinysrgb&w=800&h=800",
      title: "Outdoor Wedding"
    },
    {
      src: "4.jpg?auto=compress&cs=tinysrgb&w=800&h=800",
      title: "Grand Tent Setup"
    },
    {
      src: "5.jpg?auto=compress&cs=tinysrgb&w=800&h=800",
      title: "Evening Reception"
    },
    {
      src: "6.jpg?auto=compress&cs=tinysrgb&w=800&h=800",
      title: "Beautiful Lighting"
    }
  ];

return (
  <section id="gallery" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our beautiful setups and memorable celebrations we've helped create
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>



        <div className="text-center mt-12">
          <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            View More Photos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;