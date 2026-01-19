'use client';

import { useState, useTransition, useMemo, useEffect } from 'react';
import { photographyCategories, allServices } from '@/lib/photography-data';
import type { Category } from '@/lib/types';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import HeroSection from '@/components/HeroSection';
import axiosInstance from '@/utils/axiosConfig';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const featuredServiceIds = [
  'weddings',
  'events',
  'portraits-headshots',
  'editorial-portfolio',
];

export default function ServicesPage() {
  const getCategoryFromUrl = (): string | null => {
    if (typeof window === 'undefined') return null;
    return new URLSearchParams(window.location.search).get('category');
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    getCategoryFromUrl()
  );
  const [isPending, startTransition] = useTransition();

  /* ---------------------------------------------------- */
  /* 🔹 Carousel fetched ONCE for whole page              */
  /* ---------------------------------------------------- */
  const [carouselItems, setCarouselItems] = useState<any[]>([]);
  const [carouselLoading, setCarouselLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchCarousel = async () => {
      setCarouselLoading(true);
      try {
        const res = await axiosInstance.get('/carousel/all');
        if (!mounted) return;
        setCarouselItems(res.data?.data ?? []);
      } catch (err) {
        console.error('Error fetching carousel:', err);
      } finally {
        if (mounted) setCarouselLoading(false);
      }
    };

    fetchCarousel();
    return () => {
      mounted = false;
    };
  }, []);

  // sync when user navigates via browser (back/forward)
  useEffect(() => {
    const onPop = () => setSelectedCategory(getCategoryFromUrl());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleCategorySelect = (categoryId: string | null) => {
    startTransition(() => {
      setSelectedCategory(categoryId);
      const params = new URLSearchParams(window.location.search);
      categoryId ? params.set('category', categoryId) : params.delete('category');
      const query = params.toString();
      window.history.pushState(
        null,
        '',
        `${window.location.pathname}${query ? `?${query}` : ''}`
      );
    });
  };

  const servicesToShow = useMemo(() => {
    const baseServices = selectedCategory
      ? photographyCategories.find((c) => c.id === selectedCategory)?.services || []
      : allServices;

    const featured = baseServices.filter((s) =>
      featuredServiceIds.includes(s.id)
    );
    const nonFeatured = baseServices.filter(
      (s) => !featuredServiceIds.includes(s.id)
    );

    return [...featured, ...nonFeatured];
  }, [selectedCategory]);

  return (
    <>
      <HeroSection />

      <section
        id="services"
        className="container mx-auto max-w-screen-xl py-12 px-4 sm:py-16 lg:py-20"
      >
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of professional photography services tailored to your needs.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <Button
            variant={!selectedCategory ? 'default' : 'outline'}
            onClick={() => handleCategorySelect(null)}
            className="rounded-full"
          >
            All Services
          </Button>

          {photographyCategories.map((category: Category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => handleCategorySelect(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div
          key={selectedCategory || 'all'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-300',
            isPending ? 'opacity-50' : 'opacity-100'
          )}
        >
          <AnimatePresence>
            {servicesToShow.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={cn(
                  featuredServiceIds.includes(service.id) && 'lg:z-10'
                )}
              >
                <ServiceCard
                  service={service}
                  carouselItems={carouselItems}
                  carouselLoading={carouselLoading}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}