import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state || {};  // Get the selected image's data

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, []);

  if (!image) {
    return <div>No fruit data found.</div>;
  }

  return (
    <section className="bg-white min-h-screen h-[400px] pt-16 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 px-10">
          {/* Fruit Image */}
          <img
            src={image.src}
            alt={image.caption}
            className="w-3/4 sm:w-3/4 md:w-1/2 aspect-square object-cover rounded-lg mb-4 md:mb-0"
          />

          {/* Fruit Name and Description */}
          <div className="md:w-1/2 md:pl-8 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-black mb-2">{image.caption}</h2>
            <p className="text-lg text-gray-600 text-center md:text-left">{image.describe}</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}  // Go back to the previous page
        className="absolute bottom-8 right-8 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Back
      </button>
    </section>
  );
};

export default ProductDetails;
