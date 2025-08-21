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

// Celebrity images
import celeb1 from "@/../public/celebrity/1.jpeg";
import celeb2 from "@/../public/celebrity/2.jpeg";

// Dynamic imports
const Pricing = dynamic(() => import("@/components/live-streaming/Pricing"), { ssr: true });
const FAQ2 = dynamic(() => import("@/components/live-streaming/FAQ2"), { ssr: true });
const CallToAction = dynamic(() => import("@/components/live-streaming/CallToAction"), { ssr: true });

export default function Celebrity() {
  return (
    <div className="pl-6 pr-6 ">
      <div className="flex sm:flex-col md:flex-row justify-between pb-9 border-b-2 border-[#747478]">
        <div className="text-6xl font-semibold">
          <p className="pb-2.5 pt-3">Celebrity</p>
          <p>Photography</p>
        </div>
        <div className="flex flex-col text-right gap-4 sm:mt-[10%] md:mt-0">
          <a href="/galleries?category=Celebrity">
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
            Professional photography for celebrities and public figures.
          </p>
          <p className="pt-1">
            Capture your star quality with images that enhance your brand{" "}
          </p>
          <p className="pt-1">
            and presence. Your journey to exceptional celebrity photography starts here.
          </p>

          <a href="/booking?service=celebrity">
            <button className="mt-8 py-3 px-8 bg-black text-white rounded-full">
              BOOK NOW
            </button>
          </a>
        </div>

        {/* Celebrity Image 1 */}
        <div className="sm:w-[80%] md:w-[40%] md:h-[40%] rounded-lg pl-5 mt-4 flex items-center justify-center">
          <Image
            src={celeb1}
            alt="Celebrity 1"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Celebrity Image 2 */}
        <div className="sm:w-[70%] md:w-[30%] md:h-[40%] rounded-lg pl-5 mt-4 flex items-center justify-center">
          <Image
            src={celeb2}
            alt="Celebrity 2"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      
      <GetStartedSection
        text1="Elevate Your Star Power"
        text2=" with Professional"
        text3="Celebrity Photography"
      />
      
      <AboutSection />
      
      <WardrobeAndProp />
      
      <div className="mt-[10%] flex flex-row justify-center items-center">
        {/* Celebrity Image 4 (still placeholder, add later if available) */}
        <div className="w-[65%] h-[50%] hidden md:block object-cover mt-10 pl-5 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Celebrity Image 4</span>
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
          efforts to capture your star quality. It&apos;s
          more than just a transaction - it&apos;s delivering images that enhance your brand.
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
