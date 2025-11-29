// components/photography/AnimatedGallery.tsx
'use client';

import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import axiosInstance from '@/utils/axiosConfig';

interface AnimatedGalleryProps {
  portfolio?: ImagePlaceholder[]; // existing local fallback
  serviceName?: string;
  category?: string; // when provided, gallery will be loaded from API using this category (use service.id)
}

/**
 * Masonry gallery using CSS columns.
 * - If `category` prop provided -> fetches `/gallery/all?category={category}` and uses that data
 * - Otherwise uses `portfolio` prop unchanged (backwards compatible)
 * - Column-count changes responsively to fill available space
 * - Items avoid breaking across columns via break-inside: avoid
 * - Controlled load-more behavior
 */

const INITIAL_LOAD = 10;
const MORE_LOAD = 10;

type GalleryItem = {
  id?: string;
  _id?: string;
  imageUrl: string;
  imageHint?: string;
};

export default function AnimatedGallery({
  portfolio = [],
  serviceName = '',
  category,
}: AnimatedGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // remote data state
  const [remoteData, setRemoteData] = useState<GalleryItem[] | null>(null);
  const [isFetchingRemote, setIsFetchingRemote] = useState(false);
  const [remoteError, setRemoteError] = useState<string | null>(null);

  // Decide images source:
  // - if `category` provided -> prefer remoteData (fetch)
  // - else fallback to `portfolio` prop
  const images = useMemo<GalleryItem[]>(
    () => (remoteData && category ? remoteData : (portfolio as GalleryItem[])),
    [remoteData, portfolio, category]
  );

  // Fetch remote images when category is provided
  useEffect(() => {
    let mounted = true;
    if (!category) {
      // clear remote state if category removed
      setRemoteData(null);
      setRemoteError(null);
      setIsFetchingRemote(false);
      return;
    }

    const fetchGallery = async () => {
      setIsFetchingRemote(true);
      setRemoteError(null);
      try {
        const q = `?category=${encodeURIComponent(category)}`;
        const res = await axiosInstance.get(`/gallery/all${q}`);
        // Expecting response shape: { success: true, data: [...] }
        const payload = res.data?.data ?? res.data ?? [];
        if (mounted) {
          // normalize items to { id/_id, imageUrl, imageHint }
          const normalized = payload.map((it: any) => ({
            id: it.id || it._id || it.imageName || Math.random().toString(36).slice(2, 9),
            _id: it._id,
            imageUrl: it.imageUrl || it.url || it.image,
            imageHint: it.imageHint || it.subtitle || it.imageName || '',
          })).filter(Boolean);
          setRemoteData(normalized);
          setVisibleCount(INITIAL_LOAD);
        }
      } catch (err: any) {
        console.error('AnimatedGallery fetch error', err);
        if (mounted) setRemoteError(err?.response?.data?.message || err.message || 'Failed to fetch gallery.');
      } finally {
        if (mounted) setIsFetchingRemote(false);
      }
    };

    fetchGallery();

    return () => {
      mounted = false;
    };
  }, [category]);

  // derived
  const imagesToShow = images ? images.slice(0, visibleCount) : [];
  const canLoadMore = images ? visibleCount < images.length : false;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // small artificial delay for UI smoothing
    setTimeout(() => {
      setVisibleCount((v) => v + MORE_LOAD);
      setIsLoadingMore(false);
    }, 450);
  };

  return (
    <>
      {/* Remote fetch / error UI */}
      {category && (
        <div className="mb-4 container mx-auto px-4">
          {isFetchingRemote && (
            <div className="text-center text-sm text-muted-foreground">Loading gallery for <strong>{category}</strong>…</div>
          )}
          {remoteError && (
            <div className="text-center text-sm text-red-500">Failed to load gallery: {remoteError}</div>
          )}
          {!isFetchingRemote && !remoteError && remoteData && remoteData.length === 0 && (
            <div className="text-center text-sm text-muted-foreground">No images found for <strong>{category}</strong>.</div>
          )}
        </div>
      )}

      {/* Masonry container */}
      <div className="masonry-gallery container mx-auto px-4">
        {imagesToShow.map((img, idx) => (
          <motion.div
            key={`${img.id ?? img._id ?? idx}-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.02 }}
            whileHover={{ scale: 1.02 }}
            style={{
              marginBottom: 8,
            }}
            className="masonry-item"
          >
            <div className="masonry-image-wrap" style={{ borderRadius: 12, overflow: 'hidden' }}>
              {/* Use <img> instead of next/image to preserve natural sizes and avoid next/image domain config issues.
                  Your existing component used <img> semantics (natural dimensions). This keeps consistency and
                  ensures top-of-image cropping control through CSS if you decide to add it. */}
              <img
                src={img.imageUrl}
                alt={img.imageHint || `${serviceName || 'Gallery'} portfolio ${img.id ?? img._id}`}
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
          <Button onClick={handleLoadMore} disabled={isLoadingMore} size="lg">
            {isLoadingMore && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoadingMore ? 'Loading...' : 'Load More'}
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
          /* Prevent breaking inside columns */
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
          /* show top region first when cropping occurs in future - change object-position if switching to object-fit */
          object-fit: cover;
          object-position: top;
        }

        .masonry-image-wrap:hover img {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}