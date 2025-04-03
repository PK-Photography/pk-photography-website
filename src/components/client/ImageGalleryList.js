// New file: components/client/ImageGalleryList.js

import React from 'react';
import Image from 'next/image';
import { GoDownload } from 'react-icons/go';
import { FaHeart, FaShare } from 'react-icons/fa';

const ImageGalleryList = ({
  images = [],
  columns = 4,
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
  imageContainerRef = null,
}) => {
  return (
    <ul
      className="gamma-gallery masonry"
      style={{
        columnCount: columns,
        columnGap: '6px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      {images.map((image, index) => (
        <li
          key={index}
          onClick={() => {
            const idx = images.findIndex((img) => img.id === image.id);
            if (idx !== -1) {
              const preload = new window.Image();
              preload.src = images[idx].mediumRes;
              setCurrentImageIndex(idx);
              setSlideshowVisible(true);
              startAutoPlay();
            }
          }}
          className="relative overflow-hidden group"
          style={{ marginBottom: '6px', breakInside: 'avoid' }}
        >
          <div className="relative">
            {!loadingImages[image.id] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-6 h-6 animate-spin"></div>
              </div>
            )}

            <Image
              src={image.lowRes}
              alt="Blurry placeholder"
              width={200}
              height={200}
              style={{
                display: 'block',
                width: '100%',
                filter: canView ? 'none' : 'blur(10px)',
                transition: 'filter 1s ease-in-out',
              }}
              loading="eager"
              onLoad={() =>
                setTimeout(
                  () =>
                    (loadingImages[image.id] = true),
                  0
                )
              }
            />

            {canView && (
              <Image
                src={image.mediumRes}
                alt="High-resolution image"
                width={800}
                height={600}
                loading="eager"
                style={{
                  display: 'block',
                  width: '100%',
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'opacity 1s ease-in-out',
                }}
                onLoad={(e) => {
                  setTimeout(() => {
                    e.target.style.opacity = 1;
                  }, index * 500);
                }}
              />
            )}
          </div>

          <p className="text-sm text-gray-600 text-center mt-1 truncate">
            {image.name}
          </p>

          <div
            className={`shadow-lg absolute inset-0 flex justify-end items-end gap-2 p-2 transition duration-300 ease-in-out ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            onTouchStart={(e) => {
              e.stopPropagation();
              if (!isMobile) return;
              const target = e.currentTarget;
              target.classList.add('opacity-100');
              setTimeout(() => {
                target.classList.remove('opacity-100');
              }, 3000);
            }}
          >
            <button
              className={`p-2 ${favorites.find((fav) => fav.id === image.id)
                ? 'text-red-600'
                : 'text-white'
                } hover:text-red-600`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(image);
              }}
            >
              <FaHeart className="w-5 h-5" />
            </button>

            {canDownload && (
              <button
                className="text-white p-2 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDownloadModal(image);
                }}
              >
                <GoDownload className="w-5 h-5" />
              </button>
            )}

            <button
              className="text-white p-2 hover:text-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                handleShare(image.shareableLink);
              }}
            >
              <FaShare className="w-5 h-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGalleryList;
