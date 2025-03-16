import React from "react";
import { FaCheckCircle, FaHandshake, FaShieldAlt } from "react-icons/fa"; // Importing Icons
// import aboutImage from "../assets/irene-kredenets-AWMWcR3hQUg-unsplash.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-gray-200 font-lato ">
      {/* Main Content Wrapper */}
      <div className="container mx-auto px-6 p-10 pt-10 md:pt-20 lg:pt-20 md:px-6 lg:px-8 flex flex-col md:flex-row gap-14">
        {/* Left Side: Text Content */}
        <div className="w-full space-y-5">
          {/* Separate Title Section */}
          <div className="w-full flex justify-center pb-4">
            <h2 className="text-4xl md:text-6xl text-black tracking-wide font-Semibold opacity-60 lg:pt-9 pt-5">
              About Us
            </h2>
          </div>
          <div className="w-full text-center space-y-2">
            <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-700">GSGreen</span>, a Sri Lankan company, connects rural farmers’ produce to global markets while preserving traditional agriculture.
            </p>
            <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
              We ensure high-quality, sustainable exports by fostering trust with farmers and clients.
            </p>
            <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
              Sri Lanka’s diverse landscape enables year-round cultivation, giving us a competitive edge globally.
            </p>
            <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">
              At GSGreen, we prioritize quality, reliability, and integrity in every step.
            </p>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-6 mx-auto w-1/2" />

          {/* Icons Section */}
          <div className="flex justify-center md:justify-center gap-12 pt-10">
            {/* Quality Icon */}
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-600 opacity-60 text-4xl" />
              <span className="text-green-600 opacity-60 text-sm font-semibold pt-2">Quality</span>
            </div>

            {/* Reliability Icon */}
            <div className="flex flex-col items-center">
              <FaHandshake className="text-green-600 opacity-60 text-4xl" />
              <span className="text-green-600 opacity-60 text-sm font-semibold pt-2">Reliability</span>
            </div>

            {/* Integrity Icon */}
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-green-600 opacity-60 text-4xl " />
              <span className="text-green-600 opacity-60 text-sm font-semibold pt-2">Integrity</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image with 1:1 Aspect Ratio */}
        {/* <div className="w-full md:w-3/4 flex justify-center pt-10">
          <div className="w-full max-w-screen-md aspect-square overflow-hidden">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105 hover:contrast-110"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;