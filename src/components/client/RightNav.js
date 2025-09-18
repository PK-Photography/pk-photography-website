import React from "react";
import { FaHeart, FaImages } from "react-icons/fa";
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
      label: "Total Images",
      total: totalImages,
      onClick: null,
      show: true,
    },
    {
      icon: <FaHeart className="text-lg" />,
      label: "Favourite",
      total: favorites?.length || 0,
      onClick: toggleFavoritesModal,
      show: true,
    },
    {
      icon: <GoDownload className="text-lg" />,
      label: "Download All",
      total: null,
      onClick: handleDownloadAll,
      show: canDownload,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-700">
      {navItems
        .filter((item) => item.show)
        .map((item, index) => (
          <div
            key={index}
            onClick={item.onClick}
            className="flex items-center space-x-2 cursor-pointer hover:text-black"
          >
            {/* Icon + (total) together */}
            <div className="flex items-center space-x-1 whitespace-nowrap">
              {item.icon}
              {/* Desktop label */}
              <span className="hidden sm:inline text-sm whitespace-nowrap">
                {item.label}
              </span>
              {item.total > 0 && (
                <span className="text-xs">({item.total})</span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RightNav;
