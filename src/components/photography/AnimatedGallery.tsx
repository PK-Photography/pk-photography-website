
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface AnimatedGalleryProps {
  portfolio: ImagePlaceholder[];
  serviceName: string;
}

const aspectRatios = [
    'aspect-[3/4]', // portrait
    'aspect-[3/4]', // portrait
    'aspect-[3/4]', // portrait
];

const INITIAL_LOAD = 6;
const MORE_LOAD = 9;

export default function AnimatedGallery({ portfolio, serviceName }: AnimatedGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate network delay for a better UX
    setTimeout(() => {
      setVisibleCount(prevCount => prevCount + MORE_LOAD);
      setIsLoading(false);
    }, 500);
  };

  const imagesToShow = portfolio.slice(0, visibleCount);
  const canLoadMore = visibleCount < portfolio.length;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {imagesToShow.map((image, index) => {
          const aspect = aspectRatios[index % aspectRatios.length];
          return (
              <motion.div
              key={`${image.id}-${index}`}
              className={cn("relative w-full overflow-hidden rounded-xl shadow-lg", aspect)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              >
              <Image
                  src={image.imageUrl}
                  alt={`${serviceName} portfolio image for ${image.id}`}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
              />
              </motion.div>
          )
          })}
      </div>
      {canLoadMore && (
        <div className="mt-12 text-center">
            <Button onClick={handleLoadMore} disabled={isLoading} size="lg">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Loading...' : 'Load More'}
            </Button>
        </div>
      )}
    </>
  );
}
