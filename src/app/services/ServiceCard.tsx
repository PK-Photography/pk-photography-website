'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
}

const featuredServiceIds = ['weddings', 'events', 'portraits-headshots', 'editorial-portfolio'];

export default function ServiceCard({ service }: ServiceCardProps) {
  const { thumbnailImage } = service;
  const isFeatured = featuredServiceIds.includes(service.id);

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card className="flex flex-col overflow-hidden h-full shadow-md relative">
        {isFeatured && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-[#517587] text-white text-center py-2 px-4 font-bold text-sm rounded-b-lg tracking-widest shadow-lg">
              FEATURED
            </div>
          </div>
        )}

        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {thumbnailImage && (
              <Image
                src={thumbnailImage.imageUrl}
                alt={service.name}
                data-ai-hint={thumbnailImage.imageHint}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-grow p-6">
          <CardTitle className="font-headline text-xl mb-2 text-center">{service.name}</CardTitle>
          <CardDescription className="text-base line-clamp-3 hidden md:block">{service.description}</CardDescription>
        </CardContent>

        <CardFooter className="p-6 pt-0 mt-auto">
          <Button asChild className="w-full bg-[#f8f8f8]" variant="outline">
            <Link href={`/services/${service.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}