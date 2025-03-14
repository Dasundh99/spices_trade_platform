import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Animation - 1741614740822.json";

const ContactUs: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="contact" className="bg-white flex items-center py-10 lg:pt-35 pt-20">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-4">
        {/* Left Column: Lottie Animation Section */}
        <div className="flex-col flex justify-center items-center">
          <h1 className="ext-4xl md:text-6xl text-green-700 tracking-wide font-light opacity-40">
            Contact us
          </h1>
          <Lottie options={lottieOptions} height={300} width={300} />
        </div>

        {/* Right Column: Contact Form Section */}
        <div className="flex-1 bg-green-100 p-6">
          <form action="#" method="POST" className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full mt-1 p-1 bg-white text-black rounded-md focus:outline-none"
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
                  className="w-full mt-1 p-1 bg-white text-black rounded-md focus:outline-none"
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
                className="w-full mt-1 p-1 bg-white text-black rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full mt-1 p-1 bg-white text-black rounded-md focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300"
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