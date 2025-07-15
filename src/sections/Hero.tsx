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
  const [isMobile, setIsMobile] = useState(false);

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
          isMobile ? img.imageType === "homepage_mobile" : img.imageType === "homepage_web"
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

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-img.jpg"
          alt="Fallback Hero"
          layout="fill"
          objectFit="cover"
          quality={80}
          className={`${loaded ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}
        />
      </div>

      {homepageImage && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={homepageImage}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
            onLoad={() => setLoaded(true)}
            className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          {/* Headline */}
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-snug text-center"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            Portfolio Shoots that Speak for You
          </h1>
          
          {/* Tagline Top Left (on large screens) */}
          <p className="text-white text-lg md:text-xl font-light text-center lg:text-center">
            
            Fashion-forward. Fiercely lit. Designed to impress.
          </p>

          <div className="mt-4">
            <Link href="/booking">
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium text-sm md:text-base">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};