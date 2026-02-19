'use client';

import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { useMemo } from 'react';

interface AnimatedGalleryProps {
  portfolio: ImagePlaceholder[];
  serviceName: string;
  /** When set to 'corporate-industrial', limits columns so images display larger (like weddings). */
  serviceId?: string;
}

/**
 * Masonry gallery using CSS columns.
 * - Images are fetched "as is" with <img> (natural dimensions preserved)
 * - Column-count changes responsively to fill available space
 * - Items avoid breaking across columns (break-inside: avoid) via CSS classes (not inline styles)
 * - All portfolio images shown (no load-more).
 */

export default function AnimatedGallery({ portfolio, serviceName, serviceId }: AnimatedGalleryProps) {
  const images = useMemo(() => portfolio || [], [portfolio]);

  return (
    <>
      {/* Masonry container: corporate-industrial uses fewer columns so images display larger */}
      <div className={`masonry-gallery ${serviceId === 'corporate-industrial' ? 'corporate-gallery' : ''}`}>
        {images.map((img, idx) => (
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
          /* Corporate page: keep 3 columns so images match wedding/other service size */
          .corporate-gallery.masonry-gallery {
            column-count: 3;
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