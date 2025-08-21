"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import heart from "@/assets/headshot/heart.png";
import { ChevronRight } from "lucide-react";

// Import sections
import LocationStylingTipsSec from "@/sections/serviceSections/LocationStylingTipsSec";
import ExpertPhotography from "@/sections/serviceSections/ExpertPhotography";
import HighEndResolution from "@/sections/serviceSections/HighEndResolution";
import MoodBoardSectionV2 from "@/sections/serviceSections/MoodBoardSectionV2";
import WardrobeAndProp from "@/sections/serviceSections/WardrobeAndProp";
import AboutSection from "@/sections/serviceSections/AboutSection";
import GetStartedSection from "@/sections/serviceSections/GetStartedSection";
import MultiImageAnimation from "@/sections/serviceSections/MutliImageAnimation";
import DeliveryOptions from "@/sections/serviceSections/DeliveryOptions";
import MultiCard from "@/sections/MutiCard";

// Dynamic imports
const Pricing = dynamic(() => import("@/components/live-streaming/Pricing"), { ssr: true });
const FAQ2 = dynamic(() => import("@/components/live-streaming/FAQ2"), { ssr: true });
const CallToAction = dynamic(() => import("@/components/live-streaming/CallToAction"), { ssr: true });

export default function Design() {
  return (
    <div className="pl-6 pr-6 ">
      <div className="flex sm:flex-col md:flex-row justify-between pb-9 border-b-2 border-[#747478]">
        <div className="text-6xl font-semibold">
          <p className="pb-2.5 pt-3">Design</p>
          <p>Photography</p>
        </div>
        <div className="flex flex-col text-right gap-4 sm:mt-[10%] md:mt-0">
          <a href="/galleries?category=Design">
            <div className="flex justify-between items-center text-[#747478] text-[13px] font-bold border-b-2 border-[#747478] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full mr-1 bg-gray-300 overflow-hidden flex items-center justify-center">
                  <Image src={heart} alt="icon" className="w-2.5 h-2.5" />
                </div>
                <span>GALLERY</span>
              </div>
              <ChevronRight className="ml-11 w-4 h-4" />
            </div>
          </a>

          <a href="/portfolio">
            <div className="flex justify-between items-center text-[#747478] text-[13px] font-bold border-b-2 border-[#747478] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full mr-1 bg-gray-300 overflow-hidden flex items-center justify-center">
                  <Image src={heart} alt="icon" className="w-2.5 h-2.5" />
                </div>
                <span>PORTFOLIO</span>
              </div>
              <ChevronRight className="ml-11 w-4 h-4" />
            </div>
          </a>

          <a href="/profile">
            <div className="flex justify-between items-center text-[#747478] text-[13px] font-bold pb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full mr-1 bg-gray-300 overflow-hidden flex items-center justify-center">
                  <Image src={heart} alt="icon" className="w-2.5 h-2.5" />
                </div>
                <span>PROFILE</span>
              </div>
              <ChevronRight className="ml-11 w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      <div className="pt-6 flex flex-col md:flex-row mb-[10%]">
        <div className="flex flex-col justify-start items-start border-r-2 border-[#747478] pr-12">
          <p className="pt-8">
            Creative design photography that brings your vision to life.
          </p>
          <p className="pt-1">
            Capture innovative concepts and artistic compositions that{" "}
          </p>
          <p className="pt-1">
            showcase your design expertise. Your journey to exceptional design photography starts here.
          </p>

          <a href="/booking?service=design">
            <button className="mt-8 py-3 px-8 bg-black text-white rounded-full">
              BOOK NOW
            </button>
          </a>
        </div>

        {/* Design image 1 */}
        <div className="sm:w-[80%] md:w-[40%] md:h-[40%] pl-5 mt-4">
          <Image
            src="/design/1.jpeg"
            alt="Design Image 1"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Design image 2 */}
        <div className="sm:w-[70%] md:w-[30%] md:h-[40%] pl-5 mt-4">
          <Image
            src="/design/2.jpeg"
            alt="Design Image 2"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      
      <GetStartedSection
        text1="Bring Your Vision to Life"
        text2=" with Creative"
        text3="Design Photography"
      />
      
      <AboutSection />
      <WardrobeAndProp />
      
      <div className="mt-[10%] flex flex-row justify-center items-center">
        {/* Still placeholder for design image 4 */}
        <div className="w-[65%] h-[50%] hidden md:block object-cover mt-10 pl-5 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Design Image 4</span>
        </div>
      </div>
      
      <MoodBoardSectionV2 imageUrl={""} />
      <LocationStylingTipsSec />
      <ExpertPhotography imageUrl={""} />
      <HighEndResolution imageUrl={""} />
      
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-[25px]">Final Delivery</p>
        <p className="text-[15px] text-[#5C5C5C] mt-4 max-w-3xl text-center">
          The moment of final delivery marks the culmination of our dedicated
          efforts to create innovative design images. It&apos;s
          more than just a transaction - it&apos;s delivering images that showcase your creative vision.
        </p>
      </div>
      
      <MultiImageAnimation />
      
      <div className="mx-[20%] my-[5%]">
        <DeliveryOptions />
      </div>

      <Pricing />
      <MultiCard />
      <FAQ2 />
      
      <div className="mb-[5%]">
        <CallToAction />
      </div>
    </div>
  );
}
