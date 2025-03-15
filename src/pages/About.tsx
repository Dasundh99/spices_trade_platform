import React from "react";
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
      <div className="w-full pt-30 pb-10 text-left">
        <div className="container mx-auto px-0 md:px-12 lg:px-0">
          <div className="text-center py-5">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold text-green-600 uppercase tracking-wider text-center opacity-20 pb-10">
              ABOUT
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Main Content */}
          <div className="w-full max-w-2xl md:w-1/2">
            <div className="space-y-6 text-gray-800">
              {/* Content */}
              <p className="text-lg text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-500">GSGreen</span>, a proudly Sri Lankan company, connects rural farmers’ hard-earned agricultural products to the international market.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed mt-4">
                Sourced from small-scale farms and select commercial projects, our products uphold traditional domestic agriculture practices.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed mt-4">
                We prioritize trust with our farming community and clients, ensuring high-quality, sustainable exports.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed mt-4">
                Sri Lanka’s diverse 65,000 km² landscape, enriched by varied soils and climatic conditions, enables year-round cultivation of a wide range of products.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed mt-4">
                This natural diversity gives us a competitive edge in global markets. At GSGreen, we emphasize quality, reliability, and integrity in every step.
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
          <hr className="w-full border-t-1 border-gray-300" />
        </div>

        {/* Icons Section - Centered Below Both Columns */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8 text-center pb-10">
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
