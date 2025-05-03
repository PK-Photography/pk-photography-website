"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  selectedCard,
  toggleFavorite,
  favorites,
}) => {
  const currentImage = images[currentImageIndex];
  const isFavorited = favorites.find((fav) => fav.id === currentImage?.id);

  const handleDirectBrowserDownload = async () => {
    const url = currentImage?.highRes || currentImage?.mediumRes;
    if (!url) return alert("No download URL found.");

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${currentImage?.name || "image"}_${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image.");
    }
  };

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
      <div className="flex flex-col w-full items-center gap-1">
        <div className="flex justify-between items-center w-full px-2">
          <button onClick={closeSlideshow} aria-label="Back">
            <MdKeyboardBackspace size={28} color="#5C899D" />
          </button>
          <div className="flex gap-4 items-center">
            <button onClick={handleShare} aria-label="Share">
              <PiShareFatLight size={24} color="#5C899D" />
            </button>
            <button
              onClick={() => toggleFavorite(currentImage)}
              aria-label="Favorite"
            >
              <PiHeart
                size={24}
                color={isFavorited ? "#DC2626" : "#5C899D"}
              />
            </button>
            <button onClick={handleDirectBrowserDownload} aria-label="Download">
              <LiaDownloadSolid size={24} color="#5C899D" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image with Swipe */}
      <motion.div
        key={currentImageIndex}
        drag="x"
        onDragEnd={handleDragEnd}
        className="w-full flex flex-col justify-center items-center h-[85vh] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={currentImage?.lowRes || currentImage?.mediumRes}
          alt="Main"
          className="max-h-[80vh] w-auto object-contain"
          style={{ touchAction: "manipulation" }}
        />
        {currentImage?.name && (
          <p className="mt-4 text-sm text-[#0f1110] font-medium text-center">
            {currentImage.name}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SlideshowModal;