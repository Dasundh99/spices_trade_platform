import React, { useEffect } from "react";
import { FaCheckCircle, FaHandshake, FaShieldAlt } from "react-icons/fa"; // Importing Icons
// import aboutImage from "../assets/irene-kredenets-AWMWcR3hQUg-unsplash.jpg";

const About: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <section id="about" className="w-full bg-green-100 font-lato">
      {/* Main Content Wrapper */}
      <div className="container mx-auto px-6 p-10 pt-15 md:pt-20 lg:pt-20 md:px-6 lg:px-8 flex flex-col items-center gap-14">
        {/* Left Side: Text Content */}
        <div className="w-full max-w-3xl space-y-5 flex flex-col items-center">
          {/* Separate Title Section */}
          <div className="w-full text-center pb-4">
            <h2 className="text-4xl md:text-6xl text-black tracking-wide font-Semibold lg:pt-9 pt-5">
              About Us
            </h2>
          </div>
          <div className="w-full text-center space-y-2">
            <p className="text-md sm:text-md text-black leading-relaxed">
              <span className="font-semibold text-green-600">GSGreen</span>, a Sri Lankan company, connects rural farmers’ produce to global markets while preserving traditional agriculture.
            </p>
            <p className="text-md sm:text-md text-black leading-relaxed">
              Generations of farming roots have transformed into the organized cultivation of tropical fruits, vegetables, and spices over the past few years, further expanding into the processing and exporting of Ceylon-origin fruits, vegetables, spices, tea, and coconut products. We ensure high-quality, sustainable exports by fostering trust with farmers and clients.
            </p>
            <p className="text-md sm:text-md text-black leading-relaxed">
              Sri Lanka’s diverse landscape enables year-round cultivation, giving us a competitive edge globally. Our hearts are always with the sweat and tears of the small-scale farmer community across the country, generating high value for their products.
            </p>
            <p className="text-md sm:text-md text-black leading-relaxed">
              At GSGreen, we prioritize quality, reliability, and integrity in every step, ensuring trust in all that we do.
            </p>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-6 w-1/2" />

          {/* Icons Section */}
          <div className="flex justify-center gap-12 pt-10">
            {/* Quality Icon */}
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-600 text-3xl" />
              <span className="text-green-600 text-xs pt-2">Quality</span>
            </div>

            {/* Reliability Icon */}
            <div className="flex flex-col items-center">
              <FaHandshake className="text-green-600 text-3xl" />
              <span className="text-green-600 text-xs pt-2">Reliability</span>
            </div>

            {/* Integrity Icon */}
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-green-600 text-3xl" />
              <span className="text-green-600 text-xs pt-2">Integrity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 