"use client";
import { useEffect } from "react";

import { Hero } from "@/sections/Hero";
import Service from "@/components/services/Service";
import Reviews from "@/sections/Reviews";
import AboutStudio from "@/components/Home/AboutStudio";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import OurClients from "@/sections/OurClients";
import PricingCardIndex from "@/sections/PricingCardIndex";
import FAQSection from "@/components/live-streaming/FAQ";
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
    <div className="bg-[white]">
      <Hero />
      <div className="hidden md:block">
        <CardStack />
      </div>
      <AboutStudio />
      <BubbleText text="Our Services" id="Our-Services" />
      <Service />
      <FAQSection />
      <OurClients />
      <Reviews />
      <BubbleText text="Shoot Pricing" id="Shoot-Pricing" />
      <PricingCardIndex />
    </div>
  );
}
