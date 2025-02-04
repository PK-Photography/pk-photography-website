import React from "react";
import { FaHeart, FaPlay, FaCartArrowDown } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Link from "next/link";

const RightNav = ({
  toggleFavoritesModal,
  handleDownloadAll,
  handleSlideshow,
  favorites,
  cartItems,
}) => {
  return (
    <div className="flex justify-center gap-6 text-sm font-semibold text-gray-700">
      <div
        className="flex items-center space-x-2 cursor-pointer hover:text-black"
        onClick={toggleFavoritesModal}
      >
        <FaHeart className="text-lg" />
        <span className="hidden sm:inline">Favourite ({favorites.length})</span>
      </div>

      <div
        className="flex items-center space-x-2 cursor-pointer hover:text-black"
        onClick={handleDownloadAll}
      >
        <GoDownload className="text-lg" />
        <span className="hidden sm:inline">Download All</span>
      </div>

      <div
        className="flex items-center space-x-2 cursor-pointer hover:text-black"
        onClick={handleSlideshow}
      >
        <FaPlay className="text-lg" />
        <span className="hidden sm:inline">Slideshow</span>
      </div>

      {/* <Link
        href="/Cart"
        className="flex items-center space-x-2 cursor-pointer hover:text-black"
      >
        <FaCartArrowDown className="text-lg" />
        <span className="hidden sm:inline">Cart ({cartItems.length})</span>
      </Link> */}
    </div>
  );
};

export default RightNav;
