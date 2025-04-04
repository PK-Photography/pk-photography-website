import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiHeart,
  FiInfo,
  FiDownload
} from 'react-icons/fi';

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
  const primaryColor = "#1b4b7a";
  const currentImage = images[currentImageIndex];

  const IOSShareIcon = () => (
    <svg
      className={`text-[${primaryColor}]`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 16V4" />
      <path d="M8 8l4-4 4 4" />
      <rect x="4" y="16" width="16" height="4" rx="2" />
    </svg>
  );

  const handleShare = async () => {
    const shareLink = currentImage?.shareableLink || currentImage?.highRes;

    if (!shareLink) return alert("No link available to share.");

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Check out this image!',
          url: shareLink,
        });
      } else {
        // fallback: copy to clipboard
        await navigator.clipboard.writeText(shareLink);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Sharing failed", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
      {/* Back Button */}
      <button
        className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full z-50"
        onClick={closeSlideshow}
        title="Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={primaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        onClick={handlePreviousImage}
      >
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
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
          src={currentImage?.mediumRes || ''}
          alt="Slideshow Image"
          className="object-contain max-h-full max-w-full"
          width={800}
          height={600}
          priority
        />
      </motion.div>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        onClick={handleNextImage}
      >
        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Thumbnails */}
      <div className="mt-6 mb-4 flex gap-2 overflow-x-auto px-4 py-2 bg-black bg-opacity-40 rounded max-w-full">
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
                loading="eager"
              />
            </div>
          );
        })}
      </div>

      {/* iOS-style Controls */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center z-50">
        <div className="flex gap-6 bg-black bg-opacity-60 px-6 py-3 rounded-full backdrop-blur">
          <button
            className="text-[#1b4b7a] hover:bg-white/10 p-2 rounded-full transition"
            onClick={handleShare}
          >
            <IOSShareIcon />
          </button>
          <button className="text-[#1b4b7a] hover:bg-white/10 p-2 rounded-full transition">
            <FiHeart size={24} />
          </button>
          <button className="text-[#1b4b7a] hover:bg-white/10 p-2 rounded-full transition">
            <FiInfo size={24} />
          </button>
          <button className="text-[#1b4b7a] hover:bg-white/10 p-2 rounded-full transition">
            <FiDownload size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideshowModal;