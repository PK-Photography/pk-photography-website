'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import siteConfig from '@/lib/site-config.json';
import Image from 'next/image';
import ContactButton from './photography/ContactButton';
import { useEffect, useState } from 'react';

const getYouTubeEmbedUrl = (url: string): string | null => {
  let videoId: string | null = null;
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    videoId = match[1];
  } else {
    const idMatch = url.match(/^[a-zA-Z0-9_-]{11}$/);
    if (idMatch) {
      videoId = idMatch[0];
    }
  }

  if (videoId) {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: videoId,
      controls: '0',
      modestbranding: '1',
      playsinline: '1',
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }
  return null;
};

const convertGoogleDriveLink = (url: string): string => {
  if (url && url.includes('drive.google.com')) {
    const regex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  return url;
};

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const { hero } = siteConfig;
  const youtubeUrl = hero?.type === 'video' ? getYouTubeEmbedUrl(hero.src) : null;

  return (
    <section className="relative h-[80vh] w-full text-white flex items-center justify-center overflow-hidden">
      {isClient && hero?.type === 'video' && youtubeUrl ? (
        <iframe
          className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
          }}
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : hero?.type === 'image' && hero?.src ? (
        <Image
          src={convertGoogleDriveLink(hero.src)}
          alt="Hero background image"
          fill
          className="object-cover object-top"
          priority
        />
      ) : null}

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <motion.h1 initial="hidden" animate="visible" variants={headlineVariants} className="font-headline text-3xl sm:text-6xl lg:text-7xl drop-shadow-lg">
          {hero?.headline}
        </motion.h1>

        <motion.p initial="hidden" animate="visible" variants={paragraphVariants} className="mt-4 max-w-2xl text-base md:text-xl text-slate-200 drop-shadow-md font-body">
          {hero?.subheadline}
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={buttonsVariants} className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg" className='bg-[#517587]'>
            <Link href="#services">Explore Services</Link>
          </Button>

          <ContactButton size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
            Contact Us
          </ContactButton>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}