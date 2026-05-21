export interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  featured?: boolean;
}

// Original gallery (public/gallery/) — order unchanged
const originalImages: Omit<GalleryImage, 'id'>[] = [
  { src: '/gallery/1N4A0025.JPG', caption: '' },
  { src: '/gallery/1N4A0031.JPG', caption: '' },
  { src: '/gallery/1N4A0032.JPG', caption: '' },
  { src: '/gallery/1N4A0045.JPG', caption: '' },
  { src: '/gallery/1N4A0053.JPG', caption: '' },
  { src: '/gallery/1N4A0072.JPG', caption: '' },
  { src: '/gallery/1N4A0088.JPG', caption: '' },
  { src: '/gallery/1N4A0099.JPG', caption: '' },
  { src: '/gallery/1N4A0135.JPG', caption: '' },
  { src: '/gallery/1N4A0141.JPG', caption: '' },
  { src: '/gallery/1N4A0164.JPG', caption: '' },
  { src: '/gallery/1N4A0167.JPG', caption: '' },
  { src: '/gallery/1N4A0235.JPG', caption: '' },
  { src: '/gallery/1N4A0247.JPG', caption: '' },
  { src: '/gallery/1N4A0291.JPG', caption: '' },
  { src: '/gallery/1N4A0294.JPG', caption: '' },
  { src: '/gallery/1N4A0295.JPG', caption: '' },
  { src: '/gallery/1N4A0307.JPG', caption: '' },
  { src: '/gallery/1N4A0328.JPG', caption: '' },
  { src: '/gallery/1N4A0340.JPG', caption: '' },
  { src: '/gallery/1N4A0359.JPG', caption: '' },
  { src: '/gallery/1N4A0382.JPG', caption: '' },
  { src: '/gallery/1N4A0387.JPG', caption: '' },
  { src: '/gallery/1N4A0399.JPG', caption: '' },
  { src: '/gallery/1N4A0407.JPG', caption: '' },
  { src: '/gallery/1N4A0410.JPG', caption: '' },
  { src: '/gallery/1N4A0422.JPG', caption: '' },
  { src: '/gallery/1N4A0441.JPG', caption: '' },
  { src: '/gallery/1N4A0443.JPG', caption: '' },
  { src: '/gallery/1N4A0444.JPG', caption: '' },
  { src: '/gallery/1N4A0454.JPG', caption: '' },
  { src: '/gallery/1N4A0460.JPG', caption: '' },
  { src: '/gallery/1N4A0464.JPG', caption: '' },
  { src: '/gallery/1N4A0472.JPG', caption: '' },
  { src: '/gallery/1N4A0478.JPG', caption: '' },
  { src: '/gallery/1N4A0504.JPG', caption: '' },
  { src: '/gallery/1N4A0513.JPG', caption: '' },
  { src: '/gallery/1N4A0514.JPG', caption: '' },
  { src: '/gallery/1N4A0522.JPG', caption: '' },
  { src: '/gallery/1N4A0527.JPG', caption: '' },
  { src: '/gallery/1N4A0541.JPG', caption: '' },
  { src: '/gallery/1N4A0551.JPG', caption: '' },
  { src: '/gallery/1N4A0555.JPG', caption: '' },
  { src: '/gallery/1N4A0564.JPG', caption: '' },
  { src: '/gallery/1N4A0576.JPG', caption: '' },
  { src: '/gallery/1N4A0582.JPG', caption: '' },
  { src: '/gallery/1N4A0583.JPG', caption: '' },
  { src: '/gallery/1N4A0609.JPG', caption: '' },
  { src: '/gallery/1N4A0673.JPG', caption: '' },
  { src: '/gallery/1N4A0683.JPG', caption: '' },
  { src: '/gallery/1N4A0697.JPG', caption: '' },
  { src: '/gallery/1N4A0706.JPG', caption: '' },
  { src: '/gallery/1N4A0714.JPG', caption: '' },
  { src: '/gallery/1N4A0724.JPG', caption: '' },
];

// New batch (public/drive-download-20260521T094854Z-3-001/) — one entry per file, no duplicates
const newBatchDir = '/drive-download-20260521T094854Z-3-001';
const newImages: Omit<GalleryImage, 'id'>[] = [
  { src: `${newBatchDir}/1N4A0489.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0737.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0742.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0751.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0766.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0773.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0782.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0795.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0809.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0855.JPG`, caption: '' },
  { src: `${newBatchDir}/1N4A0876.JPG`, caption: '' },
];

const allImages = [...originalImages, ...newImages];

export const galleryImages: GalleryImage[] = allImages.map((img, i) => ({
  id: i + 1,
  ...img,
}));

export const heroImage: GalleryImage = {
  id: 0,
  src: '/gallery/wgoa-cover.png',
  caption: 'The Inner Circle at W Goa',
};

export const gridImages = galleryImages;
