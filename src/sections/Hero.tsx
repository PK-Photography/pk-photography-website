"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  _id: string;
  imageUrl: string;
  imageType: "mobile" | "Desktop" | "homepage";
};

export const Hero = () => {
  const [homepageImage, setHomepageImage] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchHomepageImage = async () => {
      try {
        const res = await fetch("/api/visual_stories");
        const data = await res.json();
        const homepage = data.data.find(
          (img: CarouselImage) => img.imageType === "homepage"
        );
        if (homepage?.imageUrl) {
          setHomepageImage(homepage.imageUrl);
        }
      } catch (error) {
        console.error("Error fetching homepage image:", error);
      }
    };

    fetchHomepageImage();
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Fallback: local image visible until dynamic one loads */}
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

      {/* Loaded Image from API */}
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
    </section>
  );
};