

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
            <div className="flex justify-center items-center">
                <Image
                    src="/serviceGrid.png"
                    width={924}
                    height={582}
                    alt="Service Grid"
                    className="w-[924.03px] h-[581.78px] object-cover"
                />
            </div>
            
            
        </div>

    )
}
