'use client';

import Image from 'next/image';
import { useEffect, useCallback } from 'react';
import type { GalleryImage } from '@/lib/gallery-images';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const img = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   onPrev();
      if (e.key === 'ArrowRight')  onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${img.caption}`}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button className="lb-close" onClick={onClose} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      <button className="lb-nav prev" onClick={onPrev} aria-label="Previous image">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next */}
      <button className="lb-nav next" onClick={onNext} aria-label="Next image">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Panel */}
      <div className="lightbox-panel">
        <Image
          className="lightbox-image"
          src={img.src}
          alt={img.caption}
          width={1400}
          height={950}
          quality={95}
          style={{ objectFit: 'contain' }}
          priority
        />

        <div className="lightbox-footer">
          <span className="lb-caption">{img.caption}</span>
          <span className="lb-counter">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(images.length).padStart(2, '0')}
          </span>
        </div>

        {/* Download */}
        <a
          className="lb-download"
          href={img.src}
          download={`${img.caption.replace(/\s+/g, '_')}_PK_Photography.jpg`}
          aria-label={`Download ${img.caption}`}
        >
          <svg viewBox="0 0 24 24" width="13" height="13">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Full Resolution
        </a>
      </div>
    </div>
  );
}
