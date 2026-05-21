import type { Metadata } from 'next';
import './gallery.css';

import { heroImage, gridImages } from '@/lib/gallery-images';
import HeroSection from './components/HeroSection';
import GalleryGrid from './components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Your Gallery — PK Photography',
  description: 'A private, curated gallery by PK Photography.',
};

export default function GalleryPage() {
  return (
    <div className="gallery-page">

      {/* Hero */}
      <HeroSection
        image={heroImage}
        clientName="The Inner Circle"    // ← e.g. "Priya & Arjun"
        eventLabel="Location: W Goa · Date: 20th May 2026"      // ← e.g. "Wedding · December 2024, Mumbai"
      />

      {/* Section break */}
      <div className="section-divider reveal">
        <div className="div-line" />
        <div className="div-dot" />
        <span className="div-label">Your Private Gallery</span>
        <div className="div-dot" />
        <div className="div-line" />
      </div>

      {/* Gallery */}
      <section className="gallery-grid-section" aria-label="Photo gallery">
        <GalleryGrid images={gridImages} />
      </section>

      <p className="gallery-upload-notice">
        Remaining photos will be uploaded in 2 days
      </p>

    </div>
  );
}
