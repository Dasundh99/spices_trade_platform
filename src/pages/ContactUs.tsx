import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Animation - 1741614740822.json";

const ContactUs: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true, // Autoplay the animation
    animationData: animationData, // The animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="contact" className="bg-white min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Lottie Animation Section */}
        <div className="flex-col flex justify-center items-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-green-600 opacity-20 uppercase tracking-wider">
            CONTACT
          </h1>

          <Lottie options={lottieOptions} height={400} width={400} />
        </div>

        {/* Right Column: Contact Form Section */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <form action="#" method="POST" className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-black rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-black rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-black rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-black rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default ContactUs;
