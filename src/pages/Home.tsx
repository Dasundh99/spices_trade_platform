import React from 'react';
import heroVideo from '../assets/hero-video.mp4'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-[40px]">
      <video poster="/assets/hero-image.jpg" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1] rounded-b-[50px]">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/0"></div>
      <div className="container mx-auto flex md:flex-row items-center px-16">
        <div className="text-center md:text-left text-white justify-center">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-[30px]">
            Fresh, Organic Food Delivered to You
          </h1>
          <p className="text-lg mb-6">
            Discover the best in organic produce, sustainably sourced and packed with flavor.
          </p>
          <a href="#shop" className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition">
            Shop Now
          </a>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;