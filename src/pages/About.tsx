import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { GiFarmer } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";
import animationData from "../assets/Animation - 1741613422274.json";

const About: React.FC = () => {
  // Lottie animation settings
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-green-600 uppercase tracking-wider text-center opacity-20"
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
                <span className="font-semibold text-black">GSGreen</span>, a Sri Lankan company with farming roots, brings rural agricultural products to the world.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                We source from small farms and commercial projects, prioritizing quality and sustainability.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                With Sri Lanka’s diverse climate, we offer a wide range of fresh products year-round.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl text-left">
                Our commitment to reliability and integrity ensures the best for our farmers and customers.
              </p>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie options={lottieOptions} height={400} width={400} />
          </div>
        </div>

        {/* Horizontal Line Divider */}
        <div className="w-full flex justify-center my-20">
          <hr className="w-3/4 border-t-2 border-gray-300" />
        </div>

        {/* Icons Section - Centered Below Both Columns */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8 text-center">
          <div className="flex flex-col items-center">
            <GiFarmer className="text-green-600 text-5xl" />
            <p className="text-lg text-gray-700 mt-2">
              <span className="font-semibold">Sustainable Farming</span>
              <br />
              Empowering farmers with sustainable agricultural practices.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SiCodefresh className="text-green-600 text-5xl" />
            <p className="text-lg text-gray-700 mt-2">
              <span className="font-semibold">Innovative Processing</span>
              <br />
              Modern processes ensuring fresh, high-quality products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
