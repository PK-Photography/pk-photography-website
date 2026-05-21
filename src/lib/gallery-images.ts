export interface GalleryImage {
  id: number;
  src: string;         // path relative to /public
  caption: string;     // shown on hover & in lightbox
  featured?: boolean;  // first featured image = hero
}

// ─── PUT YOUR IMAGES IN: public/gallery/ ──────────────────────────────────────
// Hero cover: public/gallery/wgoa-cover.png (see heroImage export below).
// Optional: featured: true excludes an image from the grid (legacy).
// Captions are optional — leave "" or add poetic labels.
// ─────────────────────────────────────────────────────────────────────────────

export const galleryImages: GalleryImage[] = [
  { id:  1, src: "/gallery/1N4A0025.JPG", caption: "" },
  { id:  2, src: "/gallery/1N4A0031.JPG", caption: "" },
  { id:  3, src: "/gallery/1N4A0032.JPG", caption: "" },
  { id:  4, src: "/gallery/1N4A0045.JPG", caption: "" },
  { id:  5, src: "/gallery/1N4A0053.JPG", caption: "" },
  { id:  6, src: "/gallery/1N4A0072.JPG", caption: "" },
  { id:  7, src: "/gallery/1N4A0088.JPG", caption: "" },
  { id:  8, src: "/gallery/1N4A0099.JPG", caption: "" },
  { id:  9, src: "/gallery/1N4A0135.JPG", caption: "" },
  { id: 10, src: "/gallery/1N4A0141.JPG", caption: "" },
  { id: 11, src: "/gallery/1N4A0164.JPG", caption: "" },
  { id: 12, src: "/gallery/1N4A0167.JPG", caption: "" },
  { id: 13, src: "/gallery/1N4A0235.JPG", caption: "" },
  { id: 14, src: "/gallery/1N4A0247.JPG", caption: "" },
  { id: 15, src: "/gallery/1N4A0291.JPG", caption: "" },
  { id: 16, src: "/gallery/1N4A0294.JPG", caption: "" },
  { id: 17, src: "/gallery/1N4A0295.JPG", caption: "" },
  { id: 18, src: "/gallery/1N4A0307.JPG", caption: "" },
  { id: 19, src: "/gallery/1N4A0328.JPG", caption: "" },
  { id: 20, src: "/gallery/1N4A0340.JPG", caption: "" },
  { id: 21, src: "/gallery/1N4A0359.JPG", caption: "" },
  { id: 22, src: "/gallery/1N4A0382.JPG", caption: "" },
  { id: 23, src: "/gallery/1N4A0387.JPG", caption: "" },
  { id: 24, src: "/gallery/1N4A0399.JPG", caption: "" },
  { id: 25, src: "/gallery/1N4A0407.JPG", caption: "" },
  { id: 26, src: "/gallery/1N4A0410.JPG", caption: "" },
  { id: 27, src: "/gallery/1N4A0422.JPG", caption: "" },
  { id: 28, src: "/gallery/1N4A0441.JPG", caption: "" },
  { id: 29, src: "/gallery/1N4A0443.JPG", caption: "" },
  { id: 30, src: "/gallery/1N4A0444.JPG", caption: "" },
  { id: 31, src: "/gallery/1N4A0454.JPG", caption: "" },
  { id: 32, src: "/gallery/1N4A0460.JPG", caption: "" },
  { id: 33, src: "/gallery/1N4A0464.JPG", caption: "" },
  { id: 34, src: "/gallery/1N4A0472.JPG", caption: "" },
  { id: 35, src: "/gallery/1N4A0478.JPG", caption: "" },
  { id: 36, src: "/gallery/1N4A0504.JPG", caption: "" },
  { id: 37, src: "/gallery/1N4A0513.JPG", caption: "" },
  { id: 38, src: "/gallery/1N4A0514.JPG", caption: "" },
  { id: 39, src: "/gallery/1N4A0522.JPG", caption: "" },
  { id: 40, src: "/gallery/1N4A0527.JPG", caption: "" },
  { id: 41, src: "/gallery/1N4A0541.JPG", caption: "" },
  { id: 42, src: "/gallery/1N4A0551.JPG", caption: "" },
  { id: 43, src: "/gallery/1N4A0555.JPG", caption: "" },
  { id: 44, src: "/gallery/1N4A0564.JPG", caption: "" },
  { id: 45, src: "/gallery/1N4A0576.JPG", caption: "" },
  { id: 46, src: "/gallery/1N4A0582.JPG", caption: "" },
  { id: 47, src: "/gallery/1N4A0583.JPG", caption: "" },
  { id: 48, src: "/gallery/1N4A0609.JPG", caption: "" },
  { id: 49, src: "/gallery/1N4A0673.JPG", caption: "" },
  { id: 50, src: "/gallery/1N4A0683.JPG", caption: "" },
  { id: 51, src: "/gallery/1N4A0697.JPG", caption: "" },
  { id: 52, src: "/gallery/1N4A0706.JPG", caption: "" },
  { id: 53, src: "/gallery/1N4A0714.JPG", caption: "" },
  { id: 54, src: "/gallery/1N4A0724.JPG", caption: "" },
  { id: 55, src: "/drive-download-20260521T070728Z-3-001/1N4A0737.JPG", caption: "" },
  { id: 56, src: "/drive-download-20260521T070728Z-3-001/1N4A0742.JPG", caption: "" },
  { id: 57, src: "/drive-download-20260521T070728Z-3-001/1N4A0751.JPG", caption: "" },
  { id: 58, src: "/drive-download-20260521T070728Z-3-001/1N4A0766.JPG", caption: "" },
  { id: 59, src: "/drive-download-20260521T070728Z-3-001/1N4A0773.JPG", caption: "" },
  { id: 60, src: "/drive-download-20260521T070728Z-3-001/1N4A0782.JPG", caption: "" },
  { id: 61, src: "/drive-download-20260521T070728Z-3-001/1N4A0795.JPG", caption: "" },
  { id: 62, src: "/drive-download-20260521T070728Z-3-001/1N4A0809.JPG", caption: "" },
  { id: 63, src: "/drive-download-20260521T070728Z-3-001/1N4A0855.JPG", caption: "" },
  { id: 64, src: "/drive-download-20260521T070728Z-3-001/1N4A0876.JPG", caption: "" },
];

export const heroImage: GalleryImage = {
  id: 0,
  src: '/gallery/wgoa-cover.png',
  caption: 'The Inner Circle at W Goa',
};

export const gridImages = galleryImages;