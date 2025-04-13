"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  "/Pic1.svg",
  "/Pic3.svg",
  "/Pic2.svg",
  "/Pic1.svg",
  "/Pic3.svg",
  ,
];

const StackingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] ">
      <div className="sticky -top-[26px] lg:top-[79px] h-screen mb-20 flex items-center justify-center">
        <div className="relative w-full max-w-[85%] h-[500px] ">
          {cards.map((src, index) => {
            const start = index / cards.length;
            const end = (index + 1) / cards.length;

            const y = useTransform(
              scrollYProgress,
              [start, end],
              [500, index * 30]
            );

            // Calculate base scale (e.g., 0.92 -> 0.96 -> 1)
            const baseScale = 0.55 + (index / (cards.length - 1)) * 0.2;

            // On scroll, push it slightly back (baseScale -> baseScale - 0.04)
            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [baseScale, baseScale + 0.35]
            );

            return (
              <motion.img
                key={index}
                src={src}
                style={{ y, scale, zIndex: index + 1 }}
                className="absolute left-0 top-0 w-full  h-full object-cover rounded-xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StackingCards;
