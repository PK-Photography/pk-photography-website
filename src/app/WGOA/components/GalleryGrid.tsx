'use client';

import { useState, useEffect, useRef } from 'react';
import type { GalleryImage } from '@/lib/gallery-images';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll reveal for .reveal elements inside the grid
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const items = gridRef.current?.querySelectorAll('.reveal') ?? [];
    items.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex(prev => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const goNext = () =>
    setLightboxIndex(prev => (prev === null ? null : (prev + 1) % images.length));

  return (
    <>
      <div ref={gridRef} className="masonry-grid">
        {images.map((img, i) => (
          <GalleryItem
            key={img.id}
            image={img}
            index={i}
            onView={() => openLightbox(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
