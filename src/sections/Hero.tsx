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
  const [direction, setDirection] = useState<"horizontal" | "vertical">("horizontal");

  // Detect device type
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Fetch only homepage_web/homepage_mobile
  useEffect(() => {
  const fetchHomepageImages = async () => {
    try {
      const res = await fetch("/api/visual_stories");
      const data = await res.json();

      // ✅ filter only homepage_web + homepage_mobile (case-insensitive)
      const homepageImages = data.data
        .filter((img: CarouselImage) => {
          const type = img.imageType?.toLowerCase();
          return type === "homepage_web" || type === "homepage_mobile";
        })
        .map((img: CarouselImage) => img.imageUrl);

      if (homepageImages.length > 0) {
        setImages(homepageImages);
      } else {
        console.warn("⚠️ No homepage_web/homepage_mobile images found in API");
      }
    } catch (error) {
      console.error("Error fetching homepage images:", error);
    }
  };

  fetchHomepageImages();
}, []);


  // Auto-change index + alternate transition direction
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setDirection((prev) => (prev === "horizontal" ? "vertical" : "horizontal"));
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  // Transition variants
  const variants = {
    enter: (dir: "horizontal" | "vertical") => ({
      x: dir === "horizontal" ? "100%" : 0,
      y: dir === "vertical" ? "100%" : 0,
      opacity: 0,
    }),
    center: { x: 0, y: 0, opacity: 1 },
    exit: (dir: "horizontal" | "vertical") => ({
      x: dir === "horizontal" ? "-100%" : 0,
      y: dir === "vertical" ? "-100%" : 0,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background rotating images */}
      <AnimatePresence custom={direction}>
        {images.length > 0 && (
          <motion.div
            key={images[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
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
