import React from 'react';
import heroVideo from '../assets/hero-video.mp4'
import { FaHandshake, FaLeaf, FaSeedling } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[120vh] flex items-center px-[0px] rounded-b-[px] bg-gradient-to-b from-transparent to-black">
      <video poster="/assets/hero-image.jpg" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/0"></div>
      <div className="container mx-auto flex md:flex-row items-center px-10">
        <div className="text-center md:text-left text-white justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] font-bold text-green-100 uppercase tracking-wider text-left pl-2.5 opacity-60">
            To global markets with quality and integrity.
          </h1>
          <p className="text-lg mb-6 text-green-100 opacity-60">
            From the diverse soils of Ceylon to the world, we bring you the finest agricultural products, nurtured with care and tradition.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center gap-20 pb-40 items-center">
        <div className="flex flex-col items-center">
          <div className="rounded-full border-2 border-green-500 p-4">
            <FaSeedling size={50} color="#2ecc71" />
          </div>
          <p className="text-sm text-white opacity-60">Farming Roots</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full border-2 border-green-500 p-4">
            <FaLeaf size={50} color="#2ecc71" />
          </div>
          <p className="text-sm text-white opacity-60">Sustainability</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full border-2 border-green-500 p-4">
            <FaHandshake size={50} color="#2ecc71" />
          </div>
          <p className="text-sm text-white opacity-60">Reliability</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;