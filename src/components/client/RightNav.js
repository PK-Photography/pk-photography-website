import React from "react";
import { FaHeart, FaPlay, FaCartArrowDown, FaImages } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Link from "next/link";

const RightNav = ({
  toggleFavoritesModal,
  handleDownloadAll,
  handleSlideshow,
  favorites,
  cartItems,
  canDownload,
  canView,
  totalImages, // ✅ Added prop
}) => {
  return (
    <div className="flex justify-center gap-6 text-sm font-semibold text-gray-700">
      {/* Total Images */}
      <div className="flex items-center space-x-2 text-gray-600">
        <FaImages className="text-lg" />
        <span className="hidden sm:inline">Total Images ({totalImages || 0})</span>
      </div>

      {/* Favourites */}
      <div
        className="flex items-center space-x-2 cursor-pointer hover:text-black"
        onClick={toggleFavoritesModal}
      >
        <FaHeart className="text-lg" />
        <span className="hidden sm:inline">Favourite ({favorites.length})</span>
      </div>

      {/* Download All */}
      {canDownload && (
        <div
          className="flex items-center space-x-2 cursor-pointer hover:text-black"
          onClick={handleDownloadAll}
        >
          <GoDownload className="text-lg" />
          <span className="hidden sm:inline">Download All</span>
        </div>
      )}

      {/* Slideshow */}
      {canView && (
        <div
          className="flex items-center space-x-2 cursor-pointer hover:text-black"
          onClick={handleSlideshow}
        >
          <FaPlay className="text-lg" />
          <span className="hidden sm:inline">Slideshow</span>
        </div>
      )}
    </div>
  );
};

export default RightNav;