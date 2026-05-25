import dynamic from "next/dynamic";
import { Hero } from "@/sections/Hero";
import Service from "@/components/services/Service";
import AboutStudio from "@/components/Home/AboutStudio";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import OurClients from "@/sections/OurClients";
import HomeClientWrapper from "@/components/Home/HomeClientWrapper";

const Reviews = dynamic(() => import("@/sections/Reviews"), { ssr: true });
const FAQ = dynamic(() => import("@/components/live-streaming/FAQ"), { ssr: true });
const PricingCardIndex = dynamic(() => import("@/sections/PricingCardIndex"), { ssr: false });
const CardStack = dynamic(() => import("@/components/StackingCards/CardStack"), { ssr: false }); // often stacking cards use browser-only APIs

export default function Home() {
  return (
    <div className="bg-white">
      <Hero /> 
      <AboutStudio />
      <BubbleText text="Our Services" id="Our-Services" /> 
      <Service /> 
      <OurClients /> 
      <div className="hidden md:block">
        <CardStack /> 
      </div>
      <Reviews /> 
      <FAQ /> 
      <BubbleText text="Shoot Pricing" id="Shoot-Pricing" />
      <PricingCardIndex />       
      
      {/* Client-side logic and modals */}
      <HomeClientWrapper />
    </div>
  );
}