import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../assets/Animation - 1741613422274.json";

const About: React.FC = () => {
  // Lottie animation settings
  const lottieOptions = {
    loop: true, // Enable loop
    autoplay: true, // Enable autoplay
    animationData: animationData, // Your Lottie JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="about" className="relative min-h-screen w-full bg-white">
      {/* Title Section */}
      <div className="w-full pt-5 pb-10 text-left">
        <div className="container mx-auto px-0 md:px-12 lg:px-0 opacity-40">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-black uppercase tracking-wider text-center opacity-30"
            style={{ lineHeight: "1", marginTop: "0rem", marginLeft: "0rem" }}
          >
            ABOUT
          </motion.h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Main Content */}
          <div className="w-full max-w-2xl md:w-1/2">
            <div className="space-y-6 text-gray-800">
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                <span className="font-semibold text-black">GSGreen</span>, a proudly Sri Lankan company rooted in a farmer family, brings rural agricultural products to the world.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                Our goods come from small farmer lands practicing domestic agriculture, plus a few commercial projects.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                We cherish the trust of our farmers and clients, focusing on quality and sustainability.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                Sri Lanka, spanning <span className="font-semibold text-black">65,000 km²</span>, offers diverse soils and climates, enabling a broad range of products year-round.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                This diversity fuels our competitive edge in global markets. At <span className="font-semibold text-black">GSGreen</span>, we maintain reliability and integrity in everything we do, ensuring the best for our partners and customers.
              </p>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie options={lottieOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
