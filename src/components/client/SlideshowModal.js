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
  const currentImage = images[currentImageIndex];

  const IOSShareIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#5C899D"
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
    const originalLink = currentImage?.shareableLink || currentImage?.highRes;
    if (!originalLink) return alert("No link available to share.");
    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalLink)}`);
      const shortUrl = await response.text();
      if (navigator.share) {
        await navigator.share({ title: 'Check out this image!', url: shortUrl });
      } else {
        await navigator.clipboard.writeText(shortUrl);
        alert("Short link copied to clipboard!");
      }
    } catch (error) {
      console.error("Sharing failed", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
      {/* Top Back Button */}
      <button
        className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-[#FFFCEF] bg-opacity-60 hover:bg-opacity-80 rounded-full z-50"
        onClick={closeSlideshow}
        title="Back"
      >
        <svg width="22" height="22" fill="none" stroke="#5C899D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Desktop layout */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-4 mb-10 mt-16 max-h-[90vh]">
        {/* Left Arrow */}
        <button
          className="absolute md:static left-2 top-1/2 -translate-y-1/2 md:translate-y-0 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition z-40"
          onClick={handlePreviousImage}
          title="Previous"
        >
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
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
          className="flex-grow flex items-start justify-center max-h-[85vh] px-4"
        >
          <Image
            src={currentImage?.lowRes || currentImage?.mediumRes}
            alt="Slideshow Image"
            width={1400}
            height={1000}
            unoptimized={true}
            className="object-contain max-h-[75vh] w-auto"
            loading="eager"
          />
        </motion.div>

        {/* Thumbnails and Right Arrow (desktop only) */}
        <div className="hidden md:flex flex-col items-center justify-center relative gap-4 pl-4">
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[75vh]">
            {visibleThumbnails.map((img, index) => {
              const globalIndex = images.findIndex((i) => i.id === img.id);
              const isActive = globalIndex === currentImageIndex;
              return (
                <div
                  key={img.id}
                  className={`cursor-pointer rounded overflow-hidden border-2 ${isActive ? 'border-white' : 'border-transparent'}`}
                  onClick={() => setCurrentImageIndex(globalIndex)}
                >
                  <Image
                    src={img.lowRes}
                    alt={`Thumbnail ${globalIndex + 1}`}
                    width={70}
                    height={50}
                    className="object-cover"
                    loading="eager"
                  />
                </div>
              );
            })}
          </div>

          {/* Right Arrow beside thumbnails */}
          <button
            className="absolute right-[-45px] top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition z-40"
            onClick={handleNextImage}
            title="Next"
          >
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile thumbnails under image */}
      <div className="md:hidden w-full overflow-x-auto px-4 mb-4">
        <div className="flex gap-2 justify-center">
          {visibleThumbnails.map((img, index) => {
            const globalIndex = images.findIndex((i) => i.id === img.id);
            const isActive = globalIndex === currentImageIndex;
            return (
              <div
                key={img.id}
                className={`cursor-pointer rounded overflow-hidden border-2 ${isActive ? 'border-white' : 'border-transparent'}`}
                onClick={() => setCurrentImageIndex(globalIndex)}
              >
                <Image
                  src={img.lowRes}
                  alt={`Thumbnail ${globalIndex + 1}`}
                  width={60}
                  height={40}
                  className="object-cover"
                  loading="eager"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* iOS-style Controls */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center z-50">
        <div className="flex gap-6 bg-[#FFFCEF] bg-opacity-60 px-6 py-3 rounded-full backdrop-blur">
          <button className="text-[#5C899D] hover:bg-white/10 p-2 rounded-full transition" onClick={handleShare}>
            <IOSShareIcon />
          </button>
          <button className="text-[#5C899D] hover:bg-white/10 p-2 rounded-full transition">
            <FiHeart size={24} />
          </button>
          <button className="text-[#5C899D] hover:bg-white/10 p-2 rounded-full transition">
            <FiInfo size={24} />
          </button>
          <button className="text-[#5C899D] hover:bg-white/10 p-2 rounded-full transition">
            <FiDownload size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideshowModal;