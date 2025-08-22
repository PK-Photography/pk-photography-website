"use client";

import Gallery from "@/sections/serviceSections/GallarySection";
import GetStartedSection from "@/sections/serviceSections/GetStartedSection";
import HeroSection from "@/sections/serviceSections/HeroSection";
import PortfolioGrid from "@/sections/serviceSections/PortfolioCards";
import AboutSection from "@/sections/serviceSections/AboutSection";
import Image from "next/image";
import ProcessOverview from "@/sections/serviceSections/ProcessOverview";
import ConsultationMoodBoard from "@/components/ConsultationMoodBoard/ConsultationMoodBoard";
import WardrobePropSuggestions from "@/components/WardrobePropSuggestions/WardrobePropSuggestions";
import LocationStylingTips from "@/components/LocationStylingTips/LocationStylingTips";
import ExpertPhotography from "@/components/ExpertPhotography/ExpertPhotography";
import PricingSection from "@/sections/serviceSections/PricingSection";
import HighEndRetouching from "@/components/HighEndRetouching/HighEndRetouching";
import BeforeAfterSlider from "@/sections/serviceSections/BeforeAfterSlider";
import FinalDeliverySec from "@/sections/serviceSections/FinalDeliverySec";
import PortfolioFAQ from "@/components/Portfolio/PortfolioFAQ";

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
      <PortfolioGrid />
      <AboutSection imageUrl="/pricing/PKP_2826.jpg" />
      <ProcessOverview />

      {/* Consultation Process Components */}
      <ConsultationMoodBoard />
      <WardrobePropSuggestions />
      <LocationStylingTips />
      <ExpertPhotography />  
      <HighEndRetouching />

      <BeforeAfterSlider
        imageUrl1="/portfolioImages/edtBeforeAfter/0N3A9612_before.jpg"
        imageUrl2="/portfolioImages/edtBeforeAfter/0N3A9612_after.jpg"
      />

      {/* Final Delivery Text */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-base sm:text-lg font-bold mb-2">FINAL DELIVERY</h3>
        <p className="text-xs sm:text-sm mb-6">
          The refined, high-resolution images are delivered via your choice of methods:
          a Google Drive link, an online gallery, a downloadable PDF, a pendrive,
          or even as a high-quality printed Album — ensuring a delivery process
          that is both convenient and personalized to your needs.
        </p>
      </div>

      <FinalDeliverySec />
      <PricingSection />
      <PortfolioFAQ />

    </div>
  );
}


