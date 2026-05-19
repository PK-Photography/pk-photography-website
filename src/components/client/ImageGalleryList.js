import React, { useState } from 'react';
import { GoDownload } from 'react-icons/go';
import { FaHeart, FaShare } from 'react-icons/fa';
import ImageSkeleton from '../imageSkeleton/ImageSkeleton'; 
import Image from "next/image";

const ImageGalleryList = ({
  images = [],
  canView = true,
  canDownload = true,
  isMobile = false,
  favorites = [],
  loadingImages = {},
  toggleFavorite = () => {},
  handleOpenDownloadModal = () => {},
  handleShare = () => {},
  setCurrentImageIndex = () => {},
  setSlideshowVisible = () => {},
  startAutoPlay = () => {},
  nasLoading,
  showLoadMore = false,
  onLoadMore = () => {},
  isLoadingMore = false,
}) => {
  const primaryColor = '#1b4b7a';
  const [loadedImages, setLoadedImages] = useState({});
  const [initialLoad, setInitialLoad] = useState({});

  const handleLoad = (id, src) => {
    setLoadedImages(prev => ({ ...prev, [id]: src }));
  };

  const getDimsFromUrl = (url) => {
    if (!url || typeof url !== "string") return { width: 1200, height: 1600 };
    const match = url.match(/w(\d+)-h(\d+)/i);
    if (!match) return { width: 1200, height: 1600 };
    return { width: Number(match[1]), height: Number(match[2]) };
  };

  return (
    <div className="px-2 pt-4 bg-[#eae8e4]">
      <ul
        className="block md:masonry gap-[6px] [column-fill:_balance]"
        style={{
          columnCount: 1, // Default for mobile
          columnGap: '6px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            ul {
              column-count: 4 !important;
            }
          }
        `}</style>
        {images.map((image, index) => {
          const isFavorited = favorites.find((fav) => fav.id === image.id);
          const isLoaded = Boolean(initialLoad[image.id]);

          return (
            <li
              key={index}
              className="break-inside-avoid mb-[6px] cursor-pointer group relative"
              onClick={() => {
                const idx = images.findIndex((img) => img.id === image.id);
                if (idx !== -1) {
                  const preload = new window.Image();
                  preload.src = images[idx].highRes;
                  setCurrentImageIndex(idx);
                  setSlideshowVisible(true);
                  startAutoPlay();
                }
              }}
            >
              <div className="relative w-full">
                {!isLoaded && (
                  <div className="w-full">
                     <ImageSkeleton />
                  </div>
                )}
                <Image
                  src={loadedImages[image.id] || image.lowRes}
                  alt={image.name || 'photo'}
                  width={getDimsFromUrl(loadedImages[image.id] || image.lowRes).width}
                  height={getDimsFromUrl(loadedImages[image.id] || image.lowRes).height}
                  sizes="(max-width: 767px) 100vw, 25vw"
                  className={`w-full h-auto transition duration-500 ${!isLoaded ? 'opacity-0 h-0' : 'opacity-100'} ${canView ? '' : 'blur-md'}`}
                  onLoadingComplete={() => {
                    setInitialLoad((prev) => ({ ...prev, [image.id]: true }));
                    if (!loadedImages[image.id]) {
                      const bgImg = new window.Image();
                      bgImg.src = image.highRes;
                      bgImg.onload = () => handleLoad(image.id, image.highRes);
                    }
                  }}
                />

                {!isMobile && (
                  <div
                    className={`absolute inset-0 flex items-end justify-end gap-1 p-1 opacity-0 group-hover:opacity-100 transition`}
                  >
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur hover:text-red-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(image);
                      }}
                    >
                      <FaHeart
                        size={16}
                        className={isFavorited ? 'text-red-600' : `text-[${primaryColor}]`}
                      />
                    </button>

                    {canDownload && (
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur hover:text-black"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenDownloadModal(image);
                        }}
                      >
                        <GoDownload size={16} />
                      </button>
                    )}

                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur hover:text-black"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(image);
                      }}
                    >
                      <FaShare size={14} />
                    </button>
                  </div>
                )}
              </div>
            </li>
            
          );
        })}
      </ul>

      {showLoadMore && (
        <div className="flex justify-center py-8 pb-12">
          <button
            type="button"
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="px-8 py-3 bg-[#5C899D] text-white font-medium rounded-full shadow-sm transition hover:bg-[#4a7080] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryList;
