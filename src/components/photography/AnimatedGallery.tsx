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

// Helper: Justified layout algorithm
function buildJustifiedRows(images: any[], rowHeight = 260, containerWidth = 1200, gap = 12) {
  let rows: any[] = [];
  let currentRow: any[] = [];
  let currentRowWidth = 0;

  for (const img of images) {
    const aspectRatio = img.width / img.height;
    const scaledWidth = rowHeight * aspectRatio;

    if (currentRowWidth + scaledWidth + gap * currentRow.length > containerWidth) {
      const scale = (containerWidth - gap * (currentRow.length - 1)) / currentRowWidth;
      rows.push(currentRow.map((item: any) => ({ ...item, displayWidth: item.width * scale, displayHeight: rowHeight * scale })));
      currentRow = [];
      currentRowWidth = 0;
    }

    currentRow.push({ ...img, width: scaledWidth, height: rowHeight });
    currentRowWidth += scaledWidth;
  }

  // last row (not stretched)
  if (currentRow.length) {
    rows.push(currentRow);
  }

  return rows;
}

export default function AnimatedGallery({ portfolio = [], category, serviceName }: AnimatedGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [remoteData, setRemoteData] = useState<any[] | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const images = useMemo(() => (remoteData && category ? remoteData : portfolio), [remoteData, portfolio, category]);

  // Fetch remote
  useEffect(() => {
    if (!category) return;

    const fetchData = async () => {
      setIsFetching(true);

      try {
        const res = await axiosInstance.get(`/gallery/all?category=${category}`);
        const payload = res.data?.data ?? [];

        const normalized = await Promise.all(
          payload.map(async (img: any) => {
            return {
              id: img._id || img.id,
              imageUrl: img.imageUrl,
              imageHint: img.imageHint || img.imageName || '',
              width: 800, // fallback width
              height: 600, // fallback height
            };
          })
        );

        setRemoteData(normalized);
      } catch (err) {
        console.error(err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [category]);

  const visibleImages = images.slice(0, visibleCount);

  // Build justified rows
  const rows = buildJustifiedRows(visibleImages, 280, typeof window !== "undefined" ? window.innerWidth - 80 : 1200);

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((v) => v + MORE_LOAD);
      setLoadingMore(false);
    }, 500);
  };

  return (
    <>
      {/* Gallery */}
      <div className="w-full flex flex-col gap-6 mt-10 px-4">

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-4 justify-center"
            style={{ width: "100%", overflow: "hidden" }}
          >
            {row.map((img: any, index: number) => (
              <motion.div
                key={`${img.id}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-sm"
                style={{
                  width: img.displayWidth,
                  height: img.displayHeight,
                }}
              >
                <img
                  src={img.imageUrl}
                  alt={img.imageHint}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            ))}
          </div>
        ))}

        {/* Load More */}
        {visibleCount < images.length && (
          <div className="text-center mt-6 mb-10">
            <Button size="lg" disabled={loadingMore} onClick={loadMore}>
              {loadingMore && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loadingMore ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}