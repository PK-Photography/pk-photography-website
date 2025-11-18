'use client';

import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface AnimatedGalleryProps {
  portfolio: ImagePlaceholder[];
  serviceName: string;
}

/**
 * Masonry gallery using CSS columns.
 * - Images are fetched "as is" with <img> (natural dimensions preserved)
 * - Column-count changes responsively to fill available space
 * - Items avoid breaking across columns (break-inside: avoid) via CSS classes (not inline styles)
 * - Controlled load-more behavior
 */

const INITIAL_LOAD = 10;
const MORE_LOAD = 10;

export default function AnimatedGallery({ portfolio, serviceName }: AnimatedGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  // Ensure stable array reference if portfolio is large
  const images = useMemo(() => portfolio || [], [portfolio]);

  const imagesToShow = images.slice(0, visibleCount);
  const canLoadMore = visibleCount < images.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((v) => v + MORE_LOAD);
      setIsLoading(false);
    }, 450);
  };

  return (
    <>
      {/* Masonry container */}
      <div className="masonry-gallery">
        {imagesToShow.map((img, idx) => (
          <motion.div
            key={`${img.id}-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.02 }}
            whileHover={{ scale: 1.02 }}
            // keep only valid style props here — avoid vendor-prefixed CSS in MotionStyle
            style={{
              marginBottom: 8,
            }}
            className="masonry-item"
          >
            <div className="masonry-image-wrap" style={{ borderRadius: 12, overflow: 'hidden' }}>
              <img
                src={img.imageUrl}
                alt={img.imageHint || `${serviceName} portfolio ${img.id}`}
                loading={idx < 6 ? 'eager' : 'lazy'}
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {canLoadMore && (
        <div className="mt-8 text-center">
          <Button onClick={handleLoadMore} disabled={isLoading} size="lg">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}

      {/* Inline styles for masonry responsive behaviour */}
      <style jsx>{`
        .masonry-gallery {
          /* small gaps + tight packing */
          column-gap: 8px;
          /* fallback single column */
          column-count: 1;
          width: 100%;
        }

        .masonry-item {
          /* allow motion transform without overflow issues */
          display: inline-block;
          width: 100%;
          /* Prevent breaking inside columns (moved from inline styles) */
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          -moz-column-break-inside: avoid;
        }

        /* medium screens: 2 columns */
        @media (min-width: 640px) {
          .masonry-gallery {
            column-count: 2;
            column-gap: 10px;
          }
        }

        /* large: 3 columns */
        @media (min-width: 1024px) {
          .masonry-gallery {
            column-count: 3;
            column-gap: 12px;
          }
        }

        /* xl: 4 columns to make it denser */
        @media (min-width: 1280px) {
          .masonry-gallery {
            column-count: 4;
            column-gap: 12px;
          }
        }

        /* polish each image wrapper */
        .masonry-image-wrap {
          background: rgba(255, 255, 255, 0.02);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .masonry-image-wrap img {
          transition: transform 220ms ease;
        }

        .masonry-image-wrap:hover img {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}