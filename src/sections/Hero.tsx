"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type CarouselImage = {
  _id: string;
  imageUrl: string;
  imageType: "mobile" | "Desktop" | "homepage_web" | "homepage_mobile";
};

export const Hero = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // detect device type
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // fetch multiple homepage images
useEffect(() => {
  const fetchHomepageImages = async () => {
    try {
      const res = await fetch("/api/visual_stories");
      const data = await res.json();

      // homepage images
      let homepageImages = data.data
        .filter((img: CarouselImage) =>
          isMobile
            ? img.imageType === "homepage_mobile"
            : img.imageType === "homepage_web"
        )
        .map((img: CarouselImage) => img.imageUrl);

      // if less than 3, also pull from Desktop/Mobile as fallback
      if (homepageImages.length < 3) {
        const fallbackImages = data.data
          .filter((img: CarouselImage) =>
            isMobile ? img.imageType === "mobile" : img.imageType === "Desktop"
          )
          .map((img: CarouselImage) => img.imageUrl);

        homepageImages = [...homepageImages, ...fallbackImages].slice(0, 3);
      }

      if (homepageImages.length > 0) {
        setImages(homepageImages);
      }
    } catch (error) {
      console.error("Error fetching homepage images:", error);
    }
  };
  if (isMobile !== null) fetchHomepageImages();
}, [isMobile]);


  // auto-change index like video
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000); // 4s per image
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background rotating images */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            Photography & Videography for Every Story
          </h1>
          <p className="text-white text-lg md:text-xl font-light max-w-3xl mx-auto">
            Portfolios, weddings, products, events, corporates, real estate & more—
            captured with passion, delivered with perfection.
          </p>
          <div className="mt-4">
            <Link href="/booking">
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium">
                Book Your Session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
