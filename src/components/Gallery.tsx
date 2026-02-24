import React, { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

const images = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const galleryImages: GalleryImage[] = Object.entries(images).map(([path, src]) => {
  const fileName = path.split('/').pop()?.split('.')[0] || 'Image';

  return {
    src,
    alt: fileName.replace(/[-_]/g, ' ')
  };
});

const INITIAL_COUNT = 8;

const Gallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Gallery
          </h2>
          <p className="mt-3 text-gray-500">
            A collection of our recent work
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        {galleryImages.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-7 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-medium transition"
            >
              {showAll ? 'Show Less' : 'View All Photos'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;