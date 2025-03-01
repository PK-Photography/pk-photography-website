

"use client"

import Gallery from '@/sections/serviceSections/GallarySection'
import GetStartedSection from '@/sections/serviceSections/GetStartedSection'
import HeroSection from '@/sections/serviceSections/HeroSection'
// import { ImageBreak } from "@/components/imagebreak1/ImageBreak";
import Header from "@/components/header/Header";
import Carousel from './../../sections/serviceSections/Carousel';
import PortfolioGrid from '@/sections/serviceSections/PortfolioCards';
import AboutSection from '@/sections/serviceSections/AboutSection';


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
        </div>

    )
}
