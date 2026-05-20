'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { GalleryImage } from '@/lib/gallery-images';

interface HeroSectionProps {
  image: GalleryImage;
  clientName?: string;
  eventLabel?: string;
}

export default function HeroSection({
  image,
  clientName = 'Private Collection',
  eventLabel = 'Exclusively curated for you',
}: HeroSectionProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onScroll = () => {
      wrap.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Split "Name & Name" into two lines
  const parts = clientName.includes('&')
    ? clientName.split('&').map(s => s.trim())
    : null;

  return (
    <section className="gallery-hero" aria-label="Hero">
      <div ref={wrapRef} className="hero-image-wrap">
        <Image
          src={image.src}
          alt={image.caption}
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <div className="hero-gradient" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">PK Photography</p>

        <h1 className="hero-title">
          {parts ? (
            <>{parts[0]} <em>&amp;</em><br />{parts[1]}</>
          ) : (
            clientName
          )}
        </h1>

        <p className="hero-sub">{eventLabel}</p>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
