import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import '../pages/Home.css';

import welcomeImage from '../assets/pexels-ffatmaozel-18476615.jpg';
import fruitImage from '../assets/emilia-igartua-AUqTjPy88P4-unsplash.jpg';
import VegetableImage from '../assets/matilda-bellman-bEnSMaiHeX0-unsplash.jpg';
import SpiceImage from '../assets/ratul-ghosh-NPrWYa69Mz0-unsplash.jpg';
import CoconutImage from '../assets/zdenek-machacek-jvdvp6bplTs-unsplash.jpg';

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
  const features: FeatureItem[] = [
    { icon: <FaCheckCircle size={32} color="white" />, text: 'Quality' },
    { icon: <FaHandshake size={32} color="white" />, text: 'Reliability' },
    { icon: <FaShieldAlt size={32} color="white" />, text: 'Integrity' },
  ];

  const slides: SlideItem[] = [
    { image: welcomeImage, title: 'Welcome' },
    { image: fruitImage, title: 'Premium Ceylon Tea' },
    { image: VegetableImage, title: 'Exotic Spices' },
    { image: SpiceImage, title: 'Fresh Produce' },
    { image: CoconutImage, title: 'Natural Quality' },
  ];

  const contentVariations: ContentItem[] = [
    {
      "title": "Bringing Ceylon’s Finest to Global Markets",
      "description": "Sourced from the rich soils of Ceylon, our premium agricultural products embody the essence of quality, tradition, and sustainability—delivering nature’s best to the world."
    },
    {
      "title": "Exotic Tropical Fruits, Harvested with Care",
      "description": "Indulge in the vibrant flavors of Ceylon’s tropical fruits, handpicked at peak ripeness to ensure unmatched freshness, taste, and nutritional value."
    },
    {
      "title": "Farm-Fresh Tropical Vegetables from Ceylon",
      "description": "Enjoy the crispness and rich flavors of Ceylon’s tropical vegetables, cultivated in fertile lands and delivered fresh to your table with uncompromising quality."
    },
    {
      "title": "Authentic Ceylon Spices, A Symphony of Flavors",
      "description": "Enhance your culinary creations with the bold aromas and rich flavors of Ceylon’s world-renowned spices, carefully cultivated and expertly processed for purity and potency."
    },
    {
      "title": "Ceylon Coconut, Nature’s Purest Gift",
      "description": "Experience the richness of Ceylon coconut, harvested from the tropical paradise of Sri Lanka, renowned for its natural goodness, versatility, and unmatched quality in every form."
    }
    
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
      className="relative flex min-h-[90vh] items-center rounded-b-none px-0 bg-gradient-to-b from-transparent to-black/40"
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
              text-green-100 
              font-bold
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
              transform
              ${currentIndex === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            "
          >
            {contentVariations[currentIndex].title}
          </h1>
          <p 
            className="
              mx-auto
              max-w-2xl 
              text-green-50
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
              transform
              delay-200
              ${currentIndex === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            "
          >
            {contentVariations[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="absolute bottom-0   font-lato  flex w-full items-center justify-center gap-4 p-5 pb-6 md:pb-10 sm:pb-8 lg:pb-12 md:gap-20 lg:gap-32">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center animate-fade-in-up" 
            style={{animationDelay: `${index * 200}ms`}}
          >
            <div className="opacity-40">
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