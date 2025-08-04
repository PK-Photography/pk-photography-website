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
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-2xl w-full max-w-lg max-h-screen overflow-hidden sm:w-11/12 sm:rounded-md">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center sm:text-xl">
          Your Favorite Images
        </h3>
        {favorites.length === 0 ? (
          <p className="text-gray-500 text-center sm:text-sm">
            You have not added any favorites yet.
          </p>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-4 sm:gap-2 overflow-y-auto max-h-80 p-2 sm:max-h-64">
              {favorites.map((image) => (
                <li key={image.id} className="relative group">
                  <Image
                    src={image.lowRes}
                    alt="Favorite"
                    width={150}
                    height={100}
                    className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                  />
                  <button
                    onClick={() => toggleFavorite(image)}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:text-[10px] sm:px-1"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 shadow-md transition duration-300 sm:text-sm sm:py-1"
              onClick={handleDownloadFavorites}
            >
              Download All Favorites
            </button>
          </>
        )}
        <button
          className="mt-4 w-full py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 shadow-md transition duration-300 sm:text-sm sm:py-1"
          onClick={toggleFavoritesModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FavouriteModal;
