import React, { useState } from 'react';

// Import sample images - you can change these later
import Avocado from '../assets/Fruits/Avocado.png';
import Banana from '../assets/Fruits/Banana.png';
import Mango from '../assets/Fruits/Mango.png';
import Papaya from '../assets/Fruits/Papaya.png';
import Pineapple from '../assets/Fruits/Pineapple.png';
import Rambutan from '../assets/Fruits/Rambutan.png';
import Cinnamon from '../assets/Spices/Cinnamon.png';
import BlackPepper from '../assets/Spices/BlackPepper.png';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: Avocado, alt: 'Fresh Avocado', category: 'Fruits' },
  { src: Cinnamon, alt: 'Ceylon Cinnamon', category: 'Spices' },
  { src: Banana, alt: 'Tropical Banana', category: 'Fruits' },
  { src: BlackPepper, alt: 'Black Pepper', category: 'Spices' },
  { src: Mango, alt: 'Sweet Mango', category: 'Fruits' },
  { src: Papaya, alt: 'Ripe Papaya', category: 'Fruits' },
  { src: Pineapple, alt: 'Golden Pineapple', category: 'Fruits' },
  { src: Rambutan, alt: 'Exotic Rambutan', category: 'Fruits' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Our Gallery
          </h2>
          <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
            A glimpse of our premium quality products from Ceylon
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-charcoal/60 transition-all duration-300 flex items-end">
                <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                  <span className="text-spice-red-light text-xs">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-spice-red transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-xl font-medium">{selectedImage.alt}</p>
              <span className="text-spice-red">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
