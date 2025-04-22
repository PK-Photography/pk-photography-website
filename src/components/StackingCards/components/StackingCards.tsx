"use client";

import { useEffect, useRef, useState } from "react";
import StackingCard from "./StackingCard";

type CarouselImage = {
  _id: string;
  imageUrl: string;
  imageType: "mobile" | "Desktop";
};

const StackingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<CarouselImage[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/visual_stories");
      const data = await res.json();
      setImages(data.data);
    };
    fetchImages();
  }, []);

  const mobileImages = images.filter((img) => img.imageType === "mobile");
  const desktopImages = images.filter((img) => img.imageType === "Desktop");

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: `${
          isMobile ? mobileImages.length * 170 : desktopImages.length * 200
        }vh`,
      }}
    >
      <div className="sticky -top-[26px] lg:top-[20px] h-screen mb-20 flex items-center justify-center">
        <div className="relative w-[70%] max-w-[85%] h-[700px] lg:h-[620px]">
          {/* Desktop Images */}
          <div className="hidden lg:block">
            {desktopImages.map((img, idx) => (
              <StackingCard
                key={img._id}
                imgUrl={img.imageUrl}
                index={idx}
                total={desktopImages.length}
                containerRef={containerRef}
                extraClasses="lg:block hidden"
              />
            ))}
          </div>

          {/* Mobile Images */}
          <div className="block  lg:hidden">
            {mobileImages.map((img, idx) => (
              <StackingCard
                key={img._id}
                imgUrl={img.imageUrl}
                index={idx}
                total={mobileImages.length}
                containerRef={containerRef}
                extraClasses="block lg:hidden"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingCards;
