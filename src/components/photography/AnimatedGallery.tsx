// components/photography/AnimatedGallery.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import axiosInstance from '@/utils/axiosConfig';

interface AnimatedGalleryProps {
  portfolio?: any[];
  serviceName?: string;
  category?: string;
}

const INITIAL_LOAD = 12;
const MORE_LOAD = 12;

/**
 * Get natural image size in browser.
 * Returns { width, height } or fallback if failed.
 */
function getImageNaturalSize(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    if (!url) return resolve({ width: 800, height: 600 });
    const img = new window.Image();
    img.onload = () => resolve({ width: img.naturalWidth || 800, height: img.naturalHeight || 600 });
    img.onerror = () => resolve({ width: 800, height: 600 });
    img.src = url;
  });
}

/**
 * Build justified rows but preserve each image's aspect ratio (portrait vs landscape)
 * images: [{ imageUrl, width, height, ... }]
 * rowTargetHeight: desired row height (will be adjusted per row to fit container)
 */
function buildJustifiedRows(images: any[], rowTargetHeight: number, containerWidth: number, gap = 12) {
  const rows: any[] = [];
  let currentRow: any[] = [];
  let currentRowWidth = 0;

  for (const img of images) {
    const aspect = (img.width || 1) / (img.height || 1);
    const scaledWidth = rowTargetHeight * aspect;
    // Will adding this image overflow the container? consider gaps between currentRow items
    if (currentRow.length > 0 && currentRowWidth + scaledWidth + gap * currentRow.length > containerWidth) {
      // scale row to container (distribute extra width)
      const scale = (containerWidth - gap * (currentRow.length - 1)) / currentRowWidth;
      const rowHeight = Math.max(60, Math.round(rowTargetHeight * scale)); // don't allow extremely small rows
      rows.push(
        currentRow.map((it: any) => {
          const aspectInner = (it.width || 1) / (it.height || 1);
          const w = Math.round(rowHeight * aspectInner);
          return {
            ...it,
            displayWidth: w,
            displayHeight: rowHeight,
          };
        })
      );
      // reset
      currentRow = [];
      currentRowWidth = 0;
    }

    currentRow.push({ ...img, width: img.width ? (img.width / (img.height || 1)) * rowTargetHeight : scaledWidth, height: rowTargetHeight });
    currentRowWidth += scaledWidth;
  }

  // last row - keep target height but don't stretch to fit container (left aligned)
  if (currentRow.length > 0) {
    rows.push(
      currentRow.map((it: any) => {
        const aspectInner = (it.width || 1) / (it.height || 1);
        const w = Math.round(rowTargetHeight * ((it.width && it.height) ? (it.width / it.height) : 1));
        return {
          ...it,
          displayWidth: w,
          displayHeight: rowTargetHeight,
        };
      })
    );
  }

  return rows;
}

export default function AnimatedGallery({ portfolio = [], category, serviceName }: AnimatedGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [remoteData, setRemoteData] = useState<any[] | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // merged images source
  const images = useMemo(() => (remoteData && category ? remoteData : portfolio), [remoteData, portfolio, category]);

  // Fetch remote images and compute natural sizes when category is provided
  useEffect(() => {
    if (!category) return;

    let mounted = true;
    setIsFetching(true);

    (async () => {
      try {
        const res = await axiosInstance.get(`/gallery/all?category=${encodeURIComponent(category)}`);
        const payload = res.data?.data ?? [];

        // Normalize and measure images
        const measured = await Promise.all(
          payload.map(async (img: any) => {
            const url = img.imageUrl || img.url || img.image;
            const { width, height } = await getImageNaturalSize(url);
            return {
              id: img._id || img.id || url,
              imageUrl: url,
              imageHint: img.imageHint || img.subtitle || img.imageName || '',
              width,
              height,
            };
          })
        );

        if (mounted) {
          setRemoteData(measured);
          setVisibleCount(INITIAL_LOAD);
        }
      } catch (err) {
        console.error('AnimatedGallery fetch error', err);
        if (mounted) setRemoteData([]);
      } finally {
        if (mounted) setIsFetching(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [category]);

  // When using local `portfolio` fallback, ensure width/height exist — measure if not present
  useEffect(() => {
    if (category) return; // remote path handled above
    // measure only when portfolio provided and items missing width/height
    const needMeasure = (portfolio || []).some((p: any) => !p.width || !p.height);
    if (!needMeasure) return;

    let mounted = true;
    (async () => {
      const measured = await Promise.all(
        (portfolio || []).map(async (p: any) => {
          const url = p.imageUrl || p.src || p.url || p.image;
          const { width, height } = await getImageNaturalSize(url);
          return {
            ...p,
            id: p.id || p._id || url,
            imageUrl: url,
            imageHint: p.imageHint || p.alt || '',
            width,
            height,
          };
        })
      );
      if (mounted) setRemoteData(measured);
    })();

    return () => {
      mounted = false;
    };
  }, [portfolio, category]);

  const visibleImages = (images || []).slice(0, visibleCount);

  // container width: use window width minus page paddings if available
  const containerWidth = typeof window !== 'undefined' ? Math.max(680, window.innerWidth - 160) : 1200;
  // target row height: responsive
  const targetRowHeight = typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 280;

  const rows = buildJustifiedRows(visibleImages, targetRowHeight, containerWidth, 12);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((v) => v + MORE_LOAD);
      setLoadingMore(false);
    }, 450);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-6 mt-10 px-4">
        {isFetching && <div className="text-center text-sm text-muted-foreground">Loading gallery…</div>}
        {!isFetching && rows.length === 0 && <div className="text-center text-muted-foreground">No images found.</div>}

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center" style={{ width: '100%', overflow: 'hidden' }}>
            {row.map((img: any, index: number) => (
              <motion.div
                key={`${img.id ?? index}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-sm bg-gray-50"
                style={{
                  width: img.displayWidth ? `${img.displayWidth}px` : 'auto',
                  height: img.displayHeight ? `${img.displayHeight}px` : `${targetRowHeight}px`,
                  flex: '0 0 auto',
                }}
              >
                <img
                  src={img.imageUrl}
                  alt={img.imageHint || `${serviceName || 'Gallery'} image`}
                  className="w-full h-full object-cover object-top"
                  style={{ display: 'block' }}
                />
              </motion.div>
            ))}
          </div>
        ))}

        {visibleCount < (images || []).length && (
          <div className="text-center mt-6 mb-10">
            <Button size="lg" disabled={loadingMore} onClick={loadMore}>
              {loadingMore && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loadingMore ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        /* small polish */
        .rounded-xl img {
          transition: transform 220ms ease;
        }
        .rounded-xl:hover img {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}