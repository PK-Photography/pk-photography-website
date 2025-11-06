'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { EventTypeCategory } from '@/lib/types';
import { Briefcase, Clapperboard, GraduationCap, Landmark, PartyPopper, Star, Check, Palette, Smartphone, Film, Globe, Gift, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const iconMap: { [key: string]: React.ElementType } = {
  PartyPopper,
  Briefcase,
  Clapperboard,
  Landmark,
  GraduationCap,
  Star,
  Palette,
  Smartphone,
  Film,
  Globe,
  Gift,
};

const ListItem = ({ item }: { item: { title: string; description: string } }) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleInteractionStart = () => {
    if (isMobile) {
      setIsTapped((prev) => !prev);
    } else {
      setIsHovered(true);
    }
  };

  const handleInteractionEnd = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const shouldShowDescription = isMobile ? isTapped : isHovered;
  const isInteractive = !!item.description && item.description.length > 0;

  return (
    <motion.li
      className="flex flex-col gap-1 text-muted-foreground"
      onHoverStart={handleInteractionStart}
      onHoverEnd={handleInteractionEnd}
      onClick={isMobile ? handleInteractionStart : undefined}
    >
      <div className="flex items-start gap-3">
        <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
        <span className="font-medium text-foreground text-left flex-1">{item.title}</span>
        {isInteractive && isMobile && (shouldShowDescription ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />)}
      </div>

      <AnimatePresence>
        {shouldShowDescription && isInteractive && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-8"
          >
            <p className="text-sm text-muted-foreground text-left hidden md:block">{item.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

interface CategorizedListSectionProps {
  title: string;
  categories: EventTypeCategory[];
}

const CategorizedListSection = ({ title, categories }: CategorizedListSectionProps) => {
  const isMobile = useIsMobile();
  // typed as any to avoid strict plugin typing mismatch
  const autoplayPlugin = React.useRef<any>(Autoplay({ delay: 15000, stopOnInteraction: true }));

  // Use `any` for wrapper props to avoid TS mismatch between CarouselProps and div props
  const Wrapper: any = isMobile ? Carousel : 'div';

  const wrapperProps: any = isMobile
    ? {
        plugins: [autoplayPlugin.current],
        // center align + scroll one slide at a time. Cast as any to avoid type issues.
        opts: { align: 'center', loop: true, slidesToScroll: 1 } as any,
        className: 'w-full',
      }
    : {
        className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch',
      };

  const ItemWrapper: any = isMobile ? CarouselItem : 'div';
  // === IMPORTANT CHANGE: make mobile slides full-width and not flex-grow/shrink ===
  const itemWrapperProps: any = isMobile
    ? { className: 'basis-full flex-none w-full' } // ensures 100% width per slide on mobile
    : { className: 'basis-full' };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl mb-12 text-center text-foreground">{title}</h2>

        <Wrapper {...wrapperProps}>
          <AnimatePresence>
            <motion.div className={isMobile ? 'flex' : 'contents'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {isMobile ? (
                <CarouselContent>
                  {categories.map((category, index) => {
                    const Icon = iconMap[category.icon] || Star;
                    return (
                      <ItemWrapper key={category.categoryTitle} {...itemWrapperProps}>
                        <div className="p-1 h-full">
                          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-xl h-full bg-card">
                            {category.image && (
                              <CardHeader className="p-0">
                                <div className="relative aspect-video w-full">
                                  <Image
                                    src={category.image.imageUrl}
                                    alt={category.categoryTitle}
                                    data-ai-hint={category.image.imageHint}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  />
                                </div>
                              </CardHeader>
                            )}

                            <CardContent className="p-6 flex-grow flex flex-col">
                              <div className="flex flex-col items-center text-center gap-2 mb-6">
                                <div className="bg-primary/10 p-3 rounded-full">
                                  <Icon className="h-6 w-6 text-[#557C8A]" />
                                </div>
                                <CardTitle className="font-headline text-xl text-[#557C8A]">{category.categoryTitle}</CardTitle>
                              </div>

                              <ul className="space-y-4 flex-grow text-center">
                                {category.list.map((item, idx) => (
                                  <ListItem key={idx} item={item} />
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </ItemWrapper>
                    );
                  })}
                </CarouselContent>
              ) : (
                categories.map((category, index) => {
                  const Icon = iconMap[category.icon] || Star;
                  return (
                    <ItemWrapper key={category.categoryTitle} {...itemWrapperProps}>
                      <motion.div
                        key={category.categoryTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                        className="h-full"
                      >
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-xl h-full bg-card">
                          {category.image && (
                            <CardHeader className="p-0">
                              <div className="relative aspect-video w-full">
                                <Image
                                  src={category.image.imageUrl}
                                  alt={category.categoryTitle}
                                  data-ai-hint={category.image.imageHint}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              </div>
                            </CardHeader>
                          )}

                          <CardContent className="p-6 flex-grow flex flex-col">
                            <div className="flex flex-col items-center text-center gap-2 mb-6">
                              <div className="bg-primary/10 p-3 rounded-full">
                                <Icon className="h-6 w-6 text-[#557C8A]" />
                              </div>
                              <CardTitle className="font-headline text-xl text-[#557C8A]">{category.categoryTitle}</CardTitle>
                            </div>

                            <ul className="space-y-4 flex-grow text-center">
                              {category.list.map((item, idx) => (
                                <ListItem key={idx} item={item} />
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ItemWrapper>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>

          {isMobile && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Wrapper>
      </div>
    </section>
  );
};

export default CategorizedListSection;