"use client";
import { Header1 } from "@/sections/Header1";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
// import { ProductShowcase } from "@/sections/ProductShowcase";

// import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import Preloader from "@/sections/Preloader";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Service from "@/components/services/Service";
// import { DragCards } from "@/components/Drag/Drag";
import { TextParallaxContentExample } from "@/components/WeAlsoDo/TextParallaxContent";
import Featured from "@/components/Featured/Featured";
import { ImageBreak } from "@/components/imagebreak1/ImageBreak";
import { Do } from "@/components/WhatWeDo/Do";
import Reviews from "@/sections/Reviews";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";

// import Project  from "@/sections/Project";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 6000);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <div className="bg-[#eae8e4]">
          {/* <Header1/> */}
          <Header />
          <Hero />
          <ImageBreak />
          {/* <LogoTicker/> */}
          <Service />
          {/* <ProductShowcase/> */}
          <TextParallaxContentExample />
          {/* <Project/> */}
          <Do />
          {/* <Featured/> */}

          {/* <Testimonials /> */}
          <CallToAction />
          <BubbleText text="Testimonial" />
          <Reviews />
        </div>
      )}
    </>
  );
}
