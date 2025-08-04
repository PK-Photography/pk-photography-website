import React from "react";
import Image from "next/image";

const FavouriteModal = ({
  showFavoritesModal,
  favorites,
  toggleFavorite,
  toggleFavoritesModal,
  handleDownloadFavorites,
}) => {
  if (!showFavoritesModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Your Favorite Images
          </h3>
        </div>

        <div className="p-6 overflow-y-auto max-h-[65vh]">
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center">No favorites added yet.</p>
          ) : (
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {favorites.map((image) => (
                <li key={image.id} className="relative group">
                  <Image
                    src={image.lowRes}
                    alt="Favorite"
                    width={300}
                    height={200}
                    className="rounded-md shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(image)}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow hover:bg-red-600 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Remove favorite"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          {favorites.length > 0 && (
            <button
              onClick={handleDownloadFavorites}
              className="w-full sm:w-auto bg-black text-white font-medium px-4 py-2 rounded-md shadow hover:bg-gray-800 transition"
            >
              Download All
            </button>
          )}
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