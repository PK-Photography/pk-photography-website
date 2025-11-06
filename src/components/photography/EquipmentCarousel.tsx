'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Check } from 'lucide-react';
import type { EquipmentItem } from '@/lib/types';

interface EquipmentCarouselProps {
  title: string;
  subtitle: string;
  items: EquipmentItem[];
}

export default function EquipmentCarousel({ title, subtitle, items }: EquipmentCarouselProps) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={item.image.imageUrl}
                        alt={item.title}
                        data-ai-hint={item.image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-headline text-2xl mb-4">{item.title}</h3>
                      <p className="text-muted-foreground mb-6">{item.description}</p>
                      <ul className="space-y-3">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-1 shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </section>
  );
}
