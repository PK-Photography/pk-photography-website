"use client";

import Gallery from "@/sections/serviceSections/GallarySection";
import GetStartedSection from "@/sections/serviceSections/GetStartedSection";
import HeroSection from "@/sections/serviceSections/HeroSection";
import PortfolioGrid from "@/sections/serviceSections/PortfolioCards";
import AboutSection from "@/sections/serviceSections/AboutSection";
import Image from "next/image";
import ProcessOverview from "@/sections/serviceSections/ProcessOverview";
// import MoodBoardSection from "@/sections/serviceSections/MoodBoardSection";
// import LocationStylingTipsSec from "@/sections/serviceSections/LocationStylingTipsSec";
import ExpertPhotography from "@/sections/serviceSections/ExpertPhotography";
import PricingSection from "@/sections/serviceSections/PricingSection";
// import WardrobePropSuggestionsSec from "@/sections/serviceSections/WardrobePropSuggestionsSec";
import BeforeAfterSlider from "@/sections/serviceSections/BeforeAfterSlider";
import FinalDeliverySec from "@/sections/serviceSections/FinalDeliverySec";
import FAQSection from "@/components/live-streaming/FAQ";
import Pricing from "@/components/live-streaming/Pricing";

export default function page() {
  return (
    <div>
      <HeroSection />
      <GetStartedSection
        text1="Showcase Your"
        text2="Talent with a"
        text3="Stunning Portfolio"
      />
      <Gallery />
      {/* <ImageBreak /> */}
      <PortfolioGrid />
      <AboutSection imageUrl="/pricing/PKP_2826.jpg" />
      <ProcessOverview />

      {/* Wardrobe & Prop Suggestions Section removed */}
      {/* <WardrobePropSuggestionsSec /> */}

      {/* Service Grid image removed */}
      {/* 
      <div className="flex justify-center items-center mt-20 mb-20 px-4">
        <Image
          src="/serviceGrid.png"
          width={924}
          height={582}
          alt="Service Grid"
          className="w-full max-w-[924px] h-auto object-cover"
        />
      </div>
      */}

      {/* Mood Board Inspiration Section removed */}
      {/* <MoodBoardSection /> */}

      {/* Location & Styling Tips Section removed */}
      {/* <LocationStylingTipsSec /> */}

      <ExpertPhotography imageUrl="/pricing/PKP_2826.jpg" />
      <Pricing serviceName="portfolio" />

      {/* Before / After Section */}
      <BeforeAfterSlider
        imageUrl1="/portfolioImages/edtBeforeAfter/0N3A9612_before.jpg"
        imageUrl2="/portfolioImages/edtBeforeAfter/0N3A9612_after.jpg"
      />

      {/* Final Delivery Text moved here */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-base sm:text-lg font-bold mb-2">FINAL DELIVERY</h3>
        <p className="text-xs sm:text-sm mb-6">
          The refined, high-resolution images are delivered via your choice of
          methods: a Google Drive link, an online gallery, a downloadable PDF, a
          pendrive, or even as a high-quality printed Album — ensuring a
          delivery process that is both convenient and personalized to your
          needs.
        </p>
      </div>

      <FinalDeliverySec />
      <FAQSection />
    </div>
  );
}
