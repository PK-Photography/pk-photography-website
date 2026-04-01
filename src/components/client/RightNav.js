import { FaHeart, FaImages, FaShareAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const RightNav = ({
  toggleFavoritesModal,
  handleDownloadAll,
  handleSlideshow,
  handleShareAlbum, // New prop
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
    {
      icon: <FaShareAlt className="text-lg" />,
      label: "Share Album",
      total: null,
      onClick: handleShareAlbum,
      show: true,
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
            className="flex items-center space-x-2 cursor-pointer"
          >
            {/* Icon + label + total badge */}
            <div className="flex items-center space-x-1 whitespace-nowrap bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors font-semibold">
              {item.icon}
              {/* Desktop label */}
              <span className="hidden sm:inline text-sm ml-1">
                {item.label}
              </span>
              {item.total !== null && (
                <span className="bg-[#5A3E36] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1 min-w-[20px] text-center">
                   {item.total}
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RightNav;
