import React, { useState } from 'react';
import { GoDownload } from 'react-icons/go';
import { FaHeart, FaShare } from 'react-icons/fa';
import ImageSkeleton from '../imageSkeleton/ImageSkeleton'; 

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
}) => {
  const primaryColor = '#1b4b7a';
  const [loadedImages, setLoadedImages] = useState({});

  const handleLoad = (id, src) => {
    setLoadedImages(prev => ({ ...prev, [id]: src }));
  };

  return (
    <div className="px-2 pt-4 bg-[#eae8e4]">
      <ul
        className="masonry gap-[1px] [column-fill:_balance]"
        style={{
          columnCount: isMobile ? 2 : 4,
          columnGap: '6px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
       {
         nasLoading && images.length === 0 ?
    Array.from({ length: 20 }).map((_, index) => (
      <li key={`skeleton-${index}`} className="break-inside-avoid mb-[6px]">
        <ImageSkeleton />
      </li>
    )):
        images.map((image, index) => {
          const isFavorited = favorites.find((fav) => fav.id === image.id);
          const hasName = Boolean(image.name?.trim());

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
                
                <img
                  src={loadedImages[image.id] || image.lowRes}
                  alt={image.name || 'photo'}
                  className={`w-full transition duration-500 ${canView ? '' : 'blur-md'}`}
                  onLoad={() => {
                    if (!loadedImages[image.id]) {
                      const bgImg = new window.Image();
                      bgImg.src = image.highRes;
                      bgImg.onload = () => handleLoad(image.id, image.highRes);
                    }
                  }}
                />

                 {nasLoading &&
    Array.from({ length: 20 }).map((_, index) => (
      <li key={`skeleton-${index}`} className="break-inside-avoid mb-[6px]">
        <ImageSkeleton />
      </li>
    ))}

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
                        handleShare(image.shareableLink);
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
    </div>
  );
};

export default ImageGalleryList;
