import React from 'react';
import vegetables from '../assets/vegetables.jpg'

const Hero: React.FC = () => {
  return (
    <section className="bg-green-50 min-h-screen flex items-center pt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Fresh, Organic Food Delivered to You
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover the best in organic produce, sustainably sourced and packed with flavor.
          </p>
          <a
            href="#shop"
            className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={vegetables}
            alt="Organic Food"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;