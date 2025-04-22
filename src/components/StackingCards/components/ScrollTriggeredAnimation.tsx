"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollTriggeredAnimation = () => {
  // Create a ref for the container
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger animation when the container's top aligns with the viewport top.
  // The margin option can be tweaked if needed.
  const inView = useInView(containerRef, { margin: "0px 0px -100% 0px" });

  return (
    <div
      id="container"
      ref={containerRef}
      className="relative bg-black  text-white min-h-[150vh] lg:min-h-screen  overflow-hidden flex  justify-center "
    >
      {/* First Text Block - "Cherish Your Moments..." */}
      <motion.div
        initial={{ y: "-150%" }} // completely offscreen above
        animate={{ y: inView ? 16 : "-150%" }} // animates to 16px from top when in view
        transition={{ duration: 1 }}
        className="absolute text-center transform  -translate-x-1/2 top-2 w-full text-sm lg:text-base uppercase font-bold text-[#ABABAB]  "
      >
        Cherish Your Moments in Stunning Detail. Beautiful Portrait Photography
        for Every Occasion.
      </motion.div>

      {/* Second Text Block - "STORIES VISUAL" */}
      <motion.div
        initial={{ y: "-150%" }} // also starting offscreen above
        animate={{
          y: inView
            ? "calc(40% )" // centered vertically (half of container height minus half of 164px)
            : "-150%",
        }}
        transition={{ duration: 1 }}
        className="absolute     text-[4rem] lg:text-[10.2rem] text-[#F2F1EF] uppercase font-semibold text-center leading-[52px] mt-12 lg:mt-0 lg:leading-[120px]"
      >
        VISUAL
        <br />
        STORIES
      </motion.div>
    </div>
  );
};

export default ScrollTriggeredAnimation;
