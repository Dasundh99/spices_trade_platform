import React, { useEffect } from "react";
import {
  FaEnvelope,
  // FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs: React.FC = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-green-600 text-lg" />, label: "Address", value: "38/18, Sri Bimbarama Road, Kolamunna, Piliyandala, Sri Lanka." },
    { icon: <FaEnvelope className="text-green-600 text-lg" />, label: "Email", value: "gsgreenlanka.com" },
  ];

  const formFields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: false },
    { id: "message", label: "Your Message", type: "textarea", required: true, rows: 3 }
  ];

  const inputStyles = "w-full mt-1 p-2 bg-green-50 text-gray-800 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200";
  const sectionStyles = "py-8 px-4 sm:px-6 lg:px-8 bg-green-100 font-lato ";

  return (
    <section id="contact" className={sectionStyles}>
      <div className="max-w-7xl mx-auto lg:pt-20 md:pt-15  sm:pt-10 pt-5">
        {/* Header */}
        {/* <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl text-black tracking-wide font-Semibold opacity-60">
           Contact us
          </h1>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Contact Information Section */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Contact Information
            </h2>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="block text-xs font-medium text-green-700 mb-1">{item.label}</p>
                    <p className="text-[10px] text-gray-600 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Our Location
              </h3>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7752716458463!2d79.92102677464689!3d6.797173993200171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24ff467a8727f%3A0x513c2390b30f19a6!2s38%2C%2018%20Sri%20Bimbarama%20Road%2C%20Piliyandala!5e0!3m2!1sen!2slk!4v1742161053883!5m2!1sen!2slk"
                  allowFullScreen
                  loading="lazy"
                  title="GS Green Lanka (Pvt) Ltd"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Send Us a Message
            </h2>
            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-medium text-green-700 mb-1"
                    >
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      className={inputStyles}
                    />
                  </div>
                ))}
              </div>

              {formFields.slice(2).map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-medium text-green-700 mb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={field.rows}
                      required={field.required}
                      className={inputStyles}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      className={inputStyles}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;