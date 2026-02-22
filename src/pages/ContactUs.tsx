import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-spice-red text-lg" />, label: "Address", value: "38/18, Sri Bimbarama Road, Kolamunna, Piliyandala, Sri Lanka." },
    { icon: <FaEnvelope className="text-spice-red text-lg" />, label: "Email", value: "artigalaspices@gmail.com" },
  ];

  const formFields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: false },
    { id: "message", label: "Your Message", type: "textarea", required: true, rows: 3 }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_bz3s23t',
      'template_umgck76',
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      'alwbaoRi83apz2ktH'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setLoading(false);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setLoading(false);
      alert('Failed to send message. Please try again.');
    });
  };

  const inputStyles = "w-full mt-1 p-2 bg-spice-red-light text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-red focus:border-spice-red transition duration-200";
  const sectionStyles = "py-8 px-4 sm:px-6 lg:px-8 bg-cream font-lato pt-20 md:pt-24 lg:pt-28";

  return (
    <section id="contact" className={sectionStyles}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Contact Information Section */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-semibold text-black mb-4">
              Contact Information
            </h2>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-spice-red-light rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="block text-sm font-medium text-black mb-1">{item.label}</p>
                    <p className="text-[11.5px] text-black leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-black mb-4">
                Our Location
              </h2>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7752716458463!2d79.92102677464689!3d6.797173993200171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24ff467a8727f%3A0x513c2390b30f19a6!2s38%2C%2018%20Sri%20Bimbarama%20Road%2C%20Piliyandala!5e0!3m2!1sen!2slk!4v1742161053883!5m2!1sen!2slk"
                  allowFullScreen
                  title="GS Green Lanka (Pvt) Ltd"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-semibold text-black mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm text-black mb-1"
                    >
                      {field.label}
                      {field.required && <span className="text-spice-red">*</span>}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleChange}
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
                    className="block text-sm text-black mb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-spice-red">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={field.rows}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleChange}
                      required={field.required}
                      className={inputStyles}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof FormData]}
                      onChange={handleChange}
                      required={field.required}
                      className={inputStyles}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 bg-ceylon-green text-white rounded-lg hover:bg-ceylon-green-dark focus:outline-none focus:ring-2 focus:ring-ceylon-green-light focus:ring-offset-2 transition duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;