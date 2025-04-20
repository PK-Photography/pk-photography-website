"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface StackingCardProps {
  imgUrl: string;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
  extraClasses?: string;
}

export default function StackingCard({
  imgUrl,
  index,
  total,
  containerRef,
  extraClasses = "",
}: StackingCardProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const start = index / total;
  const end = index === total - 1 ? 1 : (index + 1) / total;

  const y = useTransform(scrollYProgress, [start, end], [500, index * 30]);
  const baseScale = 0.55 + (index / (total - 1)) * 0.2;
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [baseScale, baseScale + 0.35]
  );

  return (
    <motion.img
      src={imgUrl}
      style={{ y, scale, zIndex: index + 1 }}
      className={`absolute left-0 top-0 w-full h-[500px] lg:h-full object-cover rounded-xl ${extraClasses}`}
      alt={`Stacking card ${index}`}
    />
  );
}
