import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-0 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Title Section */}
        <div className="text-left">
          <h2 className="text-9xl sm:text-10xl font-bold text-white uppercase tracking-wider opacity-20">
            CONTACT
          </h2>
          <p className="text-white text-lg sm:text-xl mt-4 opacity-30">
          Get in touch with us for any inquiries,
           support, or feedback. We're here to help!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-black p-8 rounded-lg shadow-lg">
          <form action="#" method="POST" className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
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
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-white rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-white rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full mt-1 p-3 border border-gray-700 bg-green-100 opacity-50 text-white rounded-lg focus:ring-2 focus:ring-green-500"
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
