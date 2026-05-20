'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/lib/gallery-images';

interface GalleryItemProps {
  image: GalleryImage;
  index: number;          // 0-based index in the *grid* (not full list)
  onView: () => void;     // open lightbox
}

const EyeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function GalleryItem({ image, index, onView }: GalleryItemProps) {
  const displayNum = String(index + 1).padStart(2, '0');

  return (
    <div
      className="gallery-item reveal"
      style={{ transitionDelay: `${(index % 6) * 0.065}s` }}
    >
      {/* Image */}
      <Image
        src={image.src}
        alt={image.caption}
        width={800}
        height={1000}
        quality={80}
        sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        onClick={onView}
      />

      {/* Hover overlay */}
      <div className="item-overlay" aria-hidden="true">
        <div className="item-meta">
          <span className="item-number">{displayNum}</span>
          <span className="item-caption">{image.caption}</span>
        </div>

        <div className="item-actions">
          {/* View in lightbox */}
          <button
            className="icon-btn"
            onClick={onView}
            aria-label={`View ${image.caption}`}
          >
            <EyeIcon />
          </button>

          {/* Direct download */}
          <a
            className="icon-btn"
            href={image.src}
            download={`${image.caption.replace(/\s+/g, '_')}_PK_Photography.jpg`}
            aria-label={`Download ${image.caption}`}
            onClick={e => e.stopPropagation()}
          >
            <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
