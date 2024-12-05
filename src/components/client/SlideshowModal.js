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
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
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

      {/* Image with Animation */}
     
        <motion.div
          key={currentImageIndex} // Triggers re-render and animation when index changes
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Image
            src={images[currentImageIndex]?.highRes || ""}
            alt="Slideshow Image"
            className="object-contain max-h-full max-w-full"
            width={600}
            height={400}
          />
        </motion.div>
   

      {/* Next Image Button */}
      <button
        className="absolute right-4 text-white"
        onClick={handleNextImage}
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

export default SlideshowModal;
