import React from 'react';
import heroVideo from '../assets/hero-video.mp4'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[120vh] flex items-center px-[40px] rounded-b-[px]">
      <video poster="/assets/hero-image.jpg" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/0"></div>
      <div className="container mx-auto flex md:flex-row items-center px-16">
        <div className="text-center md:text-left text-white justify-center">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-[30px]">
            To global markets with quality and integrity.
          </h1>
          <p className="text-lg mb-6">
            From the diverse soils of Ceylon to the world, we bring you the finest agricultural products, nurtured with care and tradition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;