import React from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

// Load ALL images dynamically from folder (Vite)
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

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Our Gallery
          </h2>
          <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
            Explore our collection
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;