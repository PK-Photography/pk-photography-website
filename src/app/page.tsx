"use client";
import { useEffect } from "react";

import { Hero } from "@/sections/Hero";
import Header from "@/components/header/Header";
import Service from "@/components/services/Service";
import { TextParallaxContentExample } from "@/components/WeAlsoDo/TextParallaxContent";
import { ImageBreak } from "@/components/imagebreak1/ImageBreak";
import { Do } from "@/components/WhatWeDo/Do";
import Reviews from "@/sections/Reviews";
import AboutStudio from "@/components/Home/AboutStudio";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import OurClients from "@/sections/OurClients";
import PricingCardIndex from "@/sections/PricingCardIndex";
import CardStack from "@/components/StackingCards/CardStack";

export default function Home() {
  useEffect(() => {
    // Check for hash in the URL and scroll to the corresponding section
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // Run only once on component mount

  return (
    <div className="bg-[#eae8e4]">
      <Header />
      <Hero />
      {/* <ImageBreak /> */}
      <CardStack />
      <BubbleText text="Our Services" id="Our-Services" />
      <Service />

      <Do />
      <BubbleText text="Our Clients" id="Our-Clients" />
      <OurClients />
      <BubbleText text="Testimonial" id="Testimonial" />
      <Reviews />
      <AboutStudio />
      <BubbleText text="Shoot Pricing" id="Shoot-Pricing" />
      <PricingCardIndex />
    </div>
  );
}
