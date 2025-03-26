import React from "react";
import { FaHeart, FaPlay, FaCartArrowDown, FaImages } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const RightNav = ({
  toggleFavoritesModal,
  handleDownloadAll,
  handleSlideshow,
  favorites,
  cartItems,
  canDownload,
  canView,
  totalImages,
}) => {
  const navItems = [
    {
      icon: <FaImages className="text-lg" />,
      label: `Total Images (${totalImages || 0})`,
      show: true,
    },
    {
      icon: <FaHeart className="text-lg" />,
      label: `Favourite (${favorites.length})`,
      onClick: toggleFavoritesModal,
      show: true,
    },
    {
      icon: <GoDownload className="text-lg" />,
      label: "Download All",
      onClick: handleDownloadAll,
      show: canDownload,
    },
    {
      icon: <FaPlay className="text-lg" />,
      label: "Slideshow",
      onClick: handleSlideshow,
      show: canView,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-700">
      {navItems
        .filter((item) => item.show)
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:text-black sm:flex-row sm:space-x-2"
            onClick={item.onClick}
          >
            {item.icon}
            <span className="text-xs sm:text-sm sm:inline hidden">{item.label}</span>
          </div>
        ))}
    </div>
  );
};

export default RightNav;