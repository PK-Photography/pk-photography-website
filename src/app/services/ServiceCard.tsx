"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  carouselItems: any[];
  carouselLoading: boolean;
}

const featuredServiceIds = [
  "weddings",
  "events",
  "portraits-headshots",
  "editorial-portfolio",
];

export default function ServiceCard({
  service,
  carouselItems,
  carouselLoading,
}: ServiceCardProps) {
  const isFeatured = featuredServiceIds.includes(service.id);

  /* ---------------------------------------------------- */
  /* 🔹 Match thumbnail from carousel (no API here)       */
  /* ---------------------------------------------------- */
  const match = carouselItems.find(
    (it) =>
      String(it.imageType) ===
      String(service.thumbnailCategory ?? service.id)
  );

  const imageUrl = match?.imageUrl ?? null;

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/services/${service.id}`} className="block h-full">
        <Card className="flex flex-col overflow-hidden h-full shadow-md relative cursor-pointer">
          {isFeatured && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-[#517587] text-white py-2 px-4 font-bold text-sm rounded-b-lg tracking-widest shadow-lg">
                FEATURED
              </div>
            </div>
          )}

          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              {carouselLoading ? (
                <div className="absolute inset-0 animate-pulse bg-gray-200" />
              ) : imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <Image
                  src="/placeholder.jpg"
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-grow p-6">
            <CardTitle className="font-headline text-xl mb-2 text-center">
              {service.name}
            </CardTitle>
            <CardDescription className="text-base line-clamp-3 hidden md:block">
              {service.description}
            </CardDescription>
          </CardContent>

          <CardFooter className="p-6 pt-0 mt-auto">
            <Button className="w-full bg-[#f8f8f8]" variant="outline">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}