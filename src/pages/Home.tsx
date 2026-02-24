import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import '../pages/Home.css';

import GarlicImage from '../assets/Home/farah-alabbouchi-ubgCpgU4P9k-unsplash.jpg';
import CinnamonImage from '../assets/Home/hanna-balan-Q9-Px7V9pvQ-unsplash.jpg';
import SpiceImage from '../assets/Home/ratul-ghosh-updated.jpg';

// Interfaces
interface FeatureItem {
  icon: React.ReactElement;
  text: string;
}

interface SlideItem {
  image: string;
  title: string;
}

interface ContentItem {
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  // Updated Feature Highlights
  const features: FeatureItem[] = [
    { icon: <FaCheckCircle size={24} color="white" />, text: 'Export Quality' },
    { icon: <FaHandshake size={24} color="white" />, text: 'Trusted Supply' },
    { icon: <FaShieldAlt size={24} color="white" />, text: 'Certified Safe' },
  ];

  // Updated Slides
  const slides: SlideItem[] = [
    { image: GarlicImage, title: 'Premium Garlic' },
    { image: CinnamonImage, title: 'Pure Ceylon Cinnamon' },
    { image: SpiceImage, title: 'Authentic Spices' },
  ];

  // Updated Content Variations
  const contentVariations: ContentItem[] = [
    {
      title: "Premium Sri Lankan Garlic for Exceptional Flavor",
      description:
        "Carefully sourced from trusted farms, our high-quality garlic delivers bold aroma, rich taste, and natural freshness — perfect for culinary and commercial use worldwide.",
    },
    {
      title: "World-Renowned Ceylon Cinnamon",
      description:
        "Experience the finest true cinnamon, harvested and processed with care to preserve its delicate sweetness, warm aroma, and superior quality trusted by global markets.",
    },
    {
      title: "Authentic Sri Lankan Spices",
      description:
        "From farm to export, our spices are cultivated in fertile lands to deliver unmatched purity, vibrant flavor, and natural goodness for every kitchen and industry.",
    },
    {
      title: "Sustainably Sourced & Export-Grade Quality",
      description:
        "We follow strict quality standards and sustainable sourcing practices to ensure every product meets international export requirements with consistency and reliability.",
    },
    {
      title: "Trusted Partner for Global Spice Supply",
      description:
        "With a commitment to quality, integrity, and long-term partnerships, we supply premium garlic, cinnamon, and spices to customers around the world.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center rounded-b-none px-0 bg-gradient-to-b from-transparent to-black/60"
    >
      {/* Slideshow Background */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 transform scale-110' 
                : 'opacity-0 transform scale-100'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/20 to-black/10" />

      {/* Main Content with Smooth Transition */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
        <div className="space-y-4" key={currentIndex}>
          <h1 
            className="
              text-cream 
              font-Semibold
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-7xl 
              tracking-tight 
              leading-tight 
              opacity-90 
              font-lato 
              antialiased
              transition-all 
              duration-1000 
              ease-in-out
            "
          >
            {contentVariations[currentIndex].title}
          </h1>
          <p 
            className="
              mx-auto
              max-w-2xl 
              text-spice-red-light
              text-base 
              md:text-lg 
              leading-relaxed 
              opacity-80 
              font-light 
              font-lato 
              antialiased
              transition-all 
              duration-1000 
              ease-in-out
              delay-200
            "
          >
            {contentVariations[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Feature Highlights with Animation */}
      <div className="absolute bottom-0 font-lato flex w-full items-center justify-center p-5 pb-6 md:pb-10 sm:pb-8 lg:pb-12 md:gap-20 lg:gap-32 sm:gap-10 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center animate-slide-rotate transition-bg-scale duration-500 hover:scale-105 hover:bg-transparent" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="opacity-60">
              {feature.icon}
            </div>
            <p 
              className="
                pt-2
                text-xs 
                font-medium 
                text-white 
                opacity-40 
                tracking-wide 
                antialiased
              "
            >
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;