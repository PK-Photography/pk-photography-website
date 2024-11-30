'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ImgBreak from "@/assets/imgbreak.jpg";

// Define Prop Types
interface TextParallaxContentProps {
  imgUrl: string;
  subheading?: string;
  heading?: string;
  children?: React.ReactNode;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading?: string;
  heading?: string;
}

export const TextParallaxContentExample = () => {
  return (
    <section className=" pt-10 pb-10 bg-[#fff]">
    {/* <h2 className="section-title">About US</h2> */}

    <div className="">
      <TextParallaxContent
        imgUrl= {ImgBreak.src}
        subheading=""
        heading=""
      >
        {/* <ExampleContent /> */}
      </TextParallaxContent>
      {/* <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent2 />
      </TextParallaxContent> */}
    </div>
    </section>
    
  );
};

const IMG_PADDING = 12;

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (

  
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      My Style
    </h2>
    <div className="col-span-1 md:col-span-8">
    <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
  At PK Photography, Mumbai&apos;s premier studio, we blend photojournalism&apos;s raw authenticity with fine-art elegance.
</p>
<p className="mb-4 text-xl text-neutral-600 md:text-2xl">
  Our unique style, infused with fashion and creative lighting, produces stunning, standout images.
</p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Mission
    </h2>
    <div className="col-span-1 md:col-span-8">
    <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
  Imagine a world without photography—devoid of the vibrant life that light and color bring.
</p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl"> Experience the blend of professionalism and artistic flair that makes PK Photography the top choice in Mumbai.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Vision
    </h2>
    <div className="col-span-1 md:col-span-8">
    <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
  At PK Photography, Mumbai&apos;s leading studio, we understand the power of these elements to ignite creativity and passion.
</p>
<p className="mb-8 text-xl text-neutral-600 md:text-2xl">
  Experience the blend of professionalism and artistic flair that makes PK Photography the top choice in Mumbai.
</p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
