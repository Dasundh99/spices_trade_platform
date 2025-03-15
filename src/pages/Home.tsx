import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaHandshake, FaShieldAlt } from 'react-icons/fa';

import fruitImage from '../assets/ilyuza-mingazova-G1rAFQ5pdz4-unsplash (2).jpg';
import VegetableImage from '../assets/nathan-dumlao-bRdRUUtbxO0-unsplash.jpg';
import SpiceImage from '../assets/ratul-ghosh-NPrWYa69Mz0-unsplash.jpg';
import teaImage from '../assets/rashid-New8EgKnSds-unsplash.jpg';

// Define interface for feature items
interface FeatureItem {
  icon: React.ReactElement;
  text: string;
}

// Define interface for slideshow items
interface SlideItem {
  image: string;
  title: string;
}

/**
 * Hero Section Component
 * Displays a slideshow background with overlay content and feature highlights
 * @returns {JSX.Element} Hero section component
 */
const Hero: React.FC = () => {
  // Feature items configuration
  const features: FeatureItem[] = [
    { icon: <FaCheckCircle size={16} color="#2ecc71" />, text: 'Quality' },
    { icon: <FaHandshake size={16} color="#2ecc71" />, text: 'Reliability' },
    { icon: <FaShieldAlt size={16} color="#2ecc71" />, text: 'Integrity' },
  ];

  // Slideshow items configuration
  const slides: SlideItem[] = [
    { image: fruitImage, title: 'Premium Ceylon Tea' },
    { image: VegetableImage, title: 'Exotic Spices' },
    { image: SpiceImage, title: 'Fresh Produce' },
    { image: teaImage, title: 'Natural Quality' },
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center rounded-b-none bg-gradient-to-b from-transparent to-green-800/90 px-0"
    >
      {/* Slideshow Background */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Uncomment if you want titles back */}
              {/* <h2
                className="
                  text-white 
                  text-2xl 
                  md:text-3xl 
                  lg:text-4xl 
                  font-bold 
                  tracking-tight 
                  opacity-90 
                  font-sans 
                  antialiased
                  bg-black/30 
                  px-6 
                  py-3 
                  rounded-lg
                "
              >
                {slide.title}
              </h2> */}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/20 to-black/10" />

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center px-10 md:flex-row">
        <div className="space-y-6 text-left text-white">
          <h1 
            className="
              font-bold 
              text-green-100 
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              tracking-tight 
              leading-tight 
              opacity-90 
              font-sans 
              antialiased
            "
          >
            To Global Markets with Quality
          </h1>
          <p 
            className="
              max-w-2xl 
              text-green-50 
              text-base 
              md:text-lg 
              leading-relaxed 
              opacity-80 
              font-light 
              font-sans 
              antialiased
            "
          >
            From the diverse soils of Ceylon to the world, we bring you the finest agricultural products,
            nurtured with care and tradition.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="absolute bottom-0 flex w-full items-center justify-center gap-15 p-5 pb-12 md:gap-20 lg:gap-32">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full border-2 border-green-500 bg-black/20 p-4">
              {feature.icon}
            </div>
            <p 
              className="
                pt-3 
                text-sm 
                font-medium 
                text-white 
                opacity-70 
                font-sans 
                tracking-wide 
                antialiased
              "
            >
              {feature.text} {/* Uncommented this to show feature text */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;