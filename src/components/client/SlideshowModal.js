// components/SlideshowModal.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiInfo } from "react-icons/fi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiHeart } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { MdKeyboardBackspace } from "react-icons/md";

const SlideshowModal = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  closeSlideshow,
}) => {
  const currentImage = images[currentImageIndex];

  const handleShare = async () => {
    const link = currentImage?.shareableLink || currentImage?.highRes;
    if (!link) return alert("No link available.");
    try {
      const shortUrl = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(link)}`
      ).then((r) => r.text());
      if (navigator.share) {
        await navigator.share({ title: "Check this out!", url: shortUrl });
      } else {
        await navigator.clipboard.writeText(shortUrl);
        alert("Copied to clipboard!");
      }
    } catch (err) {
      console.error("Sharing failed", err);
    }
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50 && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (info.offset.x > 50 && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-between z-50 px-4 pt-4 pb-6">
      {/* Top Bar */}
      <div className="flex justify-between w-full items-center px-2">
        <button onClick={closeSlideshow} aria-label="Back">
          <MdKeyboardBackspace  size={28} color="#5C899D" />
        </button>

        <div className="flex gap-4 items-center">
          <FiInfo size={24} color="#5C899D" />
          <button onClick={handleShare} aria-label="Share">
            <PiShareFatLight  size={24} color="#5C899D" />
          </button>
          <PiHeart size={24} color="#5C899D" />
          <LiaDownloadSolid size={24} color="#5C899D" />
        </div>
      </div>

      {/* Image with swipe */}
      <motion.div
        key={currentImageIndex}
        drag="x"
        onDragEnd={handleDragEnd}
        className="w-full flex justify-center items-center h-[75vh] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={currentImage?.lowRes || currentImage?.mediumRes}
          alt="Main"
          width={1000}
          height={700}
          unoptimized
          className="object-contain max-h-[70vh] w-auto"
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="w-full overflow-x-auto mt-6">
        <div className="flex gap-3 justify-center px-2">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`cursor-pointer border-2 rounded-md flex-shrink-0 ${
                idx === currentImageIndex
                  ? "border-[#5C899D]"
                  : "border-transparent"
              }`}
              onClick={() => setCurrentImageIndex(idx)}
              style={{ width: 100, height: 75 }} // Fixed size
            >
              <Image
                src={img.lowRes}
                alt={`Thumbnail ${idx + 1}`}
                width={100}
                height={75}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideshowModal;