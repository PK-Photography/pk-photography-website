import React from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SlideshowModal = ({
  images,
  currentImageIndex,
  closeSlideshow,
  handlePreviousImage,
  handleNextImage,
  setCurrentImageIndex,
}) => {
  const getVisibleThumbnails = () => {
    const total = images.length;
    const half = 5;
    let start = Math.max(currentImageIndex - half, 0);
    let end = Math.min(start + 10, total);

    if (end - start < 10) {
      start = Math.max(end - 10, 0);
    }

    return images.slice(start, end);
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white"
        onClick={closeSlideshow}
      >
        <FaTimes size={30} />
      </button>

      {/* Previous Image Button */}
      <button
        className="absolute left-4 text-white"
        onClick={handlePreviousImage}
      >
        <FaArrowLeft size={30} />
      </button>

      {/* Main Image */}
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center max-h-[80vh] mb-6"
      >
        <Image
          src={images[currentImageIndex]?.highRes || ''}
          alt="Slideshow Image"
          className="object-contain max-h-full max-w-full"
          width={800}
          height={600}
          priority
        />
      </motion.div>

      {/* Next Image Button */}
      <button
        className="absolute right-4 text-white"
        onClick={handleNextImage}
      >
        <FaArrowRight size={30} />
      </button>

      {/* Thumbnail Strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto px-4 py-2 bg-black bg-opacity-50 rounded">
        {visibleThumbnails.map((img, index) => {
          const globalIndex = images.findIndex((i) => i.id === img.id);
          const isActive = globalIndex === currentImageIndex;

          return (
            <div
              key={img.id}
              className={`cursor-pointer rounded overflow-hidden border-2 ${
                isActive ? 'border-white' : 'border-transparent'
              }`}
              onClick={() => setCurrentImageIndex(globalIndex)}
            >
              <Image
                src={img.lowRes}
                alt={`Thumbnail ${globalIndex + 1}`}
                width={80}
                height={60}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideshowModal;