"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type CarouselImage = {
  _id: string;
  imageUrl: string;
  imageType: "mobile" | "Desktop" | "homepage_web" | "homepage_mobile";
};

export const Hero = () => {
  const [homepageImage, setHomepageImage] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // --- NEW STATES for rotating images ---
  const bannerImages = ["/hero1.jpg", "/homepage/bridalPortrait.jpg", "/homepage/Hed_1.jpg"]; // your 3 images
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const fetchHomepageImage = async () => {
      try {
        const res = await fetch("/api/visual_stories");
        const data = await res.json();
        const homepage = data.data.find((img: CarouselImage) =>
          isMobile
            ? img.imageType === "homepage_mobile"
            : img.imageType === "homepage_web"
        );
        if (homepage?.imageUrl) {
          setHomepageImage(homepage.imageUrl);
        }
      } catch (error) {
        console.error("Error fetching homepage image:", error);
      }
    };

    fetchHomepageImage();
  }, [isMobile]);

  // --- Rotate between 3 images every 6s ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {/* Background Fallback */}
      {isMobile !== null && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={isMobile ? "/hero-img-mobile.jpg" : "/hero-img.jpg"}
            alt="Fallback Hero"
            fill
            className={`object-cover transition-opacity duration-700 ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </div>
      )}

      {/* Homepage Media */}
      {homepageImage && (
        <div className="absolute inset-0 w-full h-full">
          {/\.(mp4|webm|ogg)$/i.test(homepageImage) ? (
            <video
              src={homepageImage}
              autoPlay
              loop
              muted
              playsInline
              className={`transition-opacity duration-700 object-cover w-full h-full absolute inset-0 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadedData={() => setLoaded(true)}
            />
          ) : (
            <Image
              src={homepageImage}
              alt="Hero"
              fill
              className={`object-cover transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
              priority
            />
          )}
        </div>
      )}

      {/* --- NEW Rotating Banner Images --- */}
      {bannerImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-snug text-center"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            Photography & Videography for Every Story
          </h1>
          <p className="text-white text-lg md:text-xl font-light text-center lg:text-center max-w-3xl mx-auto">
            Portfolios, weddings, products, events, corporates, real estate & more— 
            captured with passion, delivered with perfection.
          </p>
          <div className="mt-4">
            <Link href="/booking">
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium text-sm md:text-base">
                Book Your Session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
