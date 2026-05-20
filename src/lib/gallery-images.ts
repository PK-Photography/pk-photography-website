export interface GalleryImage {
  id: number;
  src: string;          // path relative to /public, e.g. "/gallery/img-01.jpg"
  caption: string;      // short poetic label shown on hover & in lightbox
  featured?: boolean;   // set true on the one image used as the hero
}

// ─── EDIT THIS LIST ────────────────────────────────────────────────────────────
// Place your images in:  public/gallery/
// Then update src + caption for each entry.
// The first image with featured: true becomes the full-bleed hero.
// ──────────────────────────────────────────────────────────────────────────────

export const galleryImages: GalleryImage[] = [
  { id: 1,  src: "/gallery/img-01.jpeg", caption: "Golden Hour",    featured: true },
  { id: 2,  src: "/gallery/img-02.jpg", caption: "First Glance" },
  { id: 3,  src: "/gallery/img-03.jpg", caption: "Ceremony" },
  { id: 4,  src: "/gallery/img-04.jpg", caption: "The Vows" },
  { id: 5,  src: "/gallery/img-05.jpg", caption: "First Dance" },
  { id: 6,  src: "/gallery/img-06.jpg", caption: "Joy" },
  { id: 7,  src: "/gallery/img-07.jpg", caption: "Together" },
  { id: 8,  src: "/gallery/img-08.jpg", caption: "Details" },
  { id: 9,  src: "/gallery/img-09.jpg", caption: "Reception" },
  { id: 10, src: "/gallery/img-10.jpg", caption: "Celebration" },
  { id: 11, src: "/gallery/img-11.jpg", caption: "In Bloom" },
  { id: 12, src: "/gallery/img-12.jpg", caption: "Timeless" },
];

export const heroImage = galleryImages.find(img => img.featured) ?? galleryImages[0];
export const gridImages = galleryImages.filter(img => !img.featured);
