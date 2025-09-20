import React, { useState } from "react";
import Image from "next/image";
import { FaShare } from "react-icons/fa";

const FavouriteModal = ({
  showFavoritesModal,
  favorites,
  toggleFavorite,
  toggleFavoritesModal,
  handleShare,
  handleMultiShare,
}) => {
  const [isDownloading, setIsDownloading] = useState(false); // <-- loading state

  if (!showFavoritesModal) return null;

  const handleDownloadFavorites = async () => {
    setIsDownloading(true); // disable button when starting

    for (const image of favorites) {
      const imageUrl = image.highRes || image.lowRes;
      const filename = image.filename || `${image.name}`;

      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url);
      } catch (err) {
        console.error(`Failed to download ${filename}`, err);
      }
    }

    setIsDownloading(false); // enable button again after downloads complete
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Your Favorite Images
          </h3>
          <span className="text-sm text-gray-500">
            {favorites.length} item{favorites.length !== 1 && "s"}
          </span>
        </div>

        {/* Favorites List */}
        <div className="p-6 overflow-y-auto max-h-[65vh]">
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center">No favorites added yet.</p>
          ) : (
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {favorites.map((image, index) => (
                <li
                  key={image.id}
                  className="relative group rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition"
                >
                  {/* Number Badge */}
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-black/70 to-black/40 text-white text-xs font-medium px-2 py-1 rounded-full shadow-md backdrop-blur-sm">
                    #{index + 1}
                  </span>

                  {/* Image */}
                  <Image
                    src={image.lowRes}
                    alt={`Favorite ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(image.shareableLink)}
                    className="absolute top-2 right-10 bg-blue-500/90 hover:bg-blue-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Share favorite"
                  >
                    <FaShare className="w-3 h-3" />
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => toggleFavorite(image)}
                    className="absolute top-2 right-2 bg-red-500/90 hover:bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Remove favorite"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex gap-3 w-full sm:w-auto">
            {favorites.length > 0 && (
              <>
                {/* Download All */}
                <button
                  onClick={handleDownloadFavorites}
                  disabled={isDownloading}
                  className={`w-full sm:w-auto font-medium px-4 py-2 rounded-md shadow transition 
            ${
              isDownloading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
                >
                  {isDownloading ? "Downloading..." : "Download All"}
                </button>

                {/* Share All */}
                <button
                  onClick={() =>
                    handleMultiShare(favorites.map((img) => img.shareableLink))
                  }
                  className="flex items-center gap-2 w-full sm:w-auto bg-blue-500 text-white font-medium px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
                >
                  <FaShare />
                  Share All
                </button>
              </>
            )}
          </div>

          {/* Close */}
          <button
            onClick={toggleFavoritesModal}
            className="w-full sm:w-auto bg-gray-400 text-white font-medium px-4 py-2 rounded-md shadow hover:bg-gray-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteModal;
