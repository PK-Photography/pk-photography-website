

"use client"

import Gallery from '@/sections/serviceSections/GallarySection'
import GetStartedSection from '@/sections/serviceSections/GetStartedSection'
import HeroSection from '@/sections/serviceSections/HeroSection'
// import { ImageBreak } from "@/components/imagebreak1/ImageBreak";
import Header from "@/components/header/Header";
import Carousel from './../../sections/serviceSections/Carousel';
import PortfolioGrid from '@/sections/serviceSections/PortfolioCards';
import AboutSection from '@/sections/serviceSections/AboutSection';
import Image from 'next/image';
import ProcessOverview from '@/sections/serviceSections/ProcessOverview';
import MoodBoardSection from '@/sections/serviceSections/MoodBoardSection';
import LocationStylingTipsSec from '@/sections/serviceSections/LocationStylingTipsSec';
import ExpertPhotography from '@/sections/serviceSections/ExpertPhotography';
import PricingSection from '@/sections/serviceSections/PricingSection';
import FAQSection from '@/sections/serviceSections/FAQSection';
import WardrobePropSuggestionsSec from '@/sections/serviceSections/WardrobePropSuggestionsSec';


export default function page() {
    return (


        <div>
            <Header />
            <HeroSection />

            <GetStartedSection />
            <Gallery />
            {/* <ImageBreak /> */}
            <Carousel />
            <PortfolioGrid />
            <AboutSection />
            <ProcessOverview />
                <WardrobePropSuggestionsSec/>
            <div className="flex justify-center items-center mt-20 mb-20 px-4">
                <Image
                    src="/serviceGrid.png"
                    width={924}
                    height={582}
                    alt="Service Grid"
                    className="w-full max-w-[924px] h-auto object-cover"
                />
            </div>
            <MoodBoardSection />
            <LocationStylingTipsSec />
            <ExpertPhotography />
            <PricingSection />
            <FAQSection />
      

        </div>

    )
}
