"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import img1 from "@/assets/headshot/img1.png";
import img2 from "@/assets/headshot/img2.png";
import img3 from "@/assets/headshot/img3.png";
import img4 from "@/assets/headshot/img4.png";
import img5 from "@/assets/headshot/img5.png";
import img6 from "@/assets/headshot/img6.png";
import img7 from "@/assets/headshot/img7.png";
import heart from "@/assets/headshot/heart.png";

import LocationStylingTipsSec from "@/sections/serviceSections/LocationStylingTipsSec";
import ExpertPhotography from "@/sections/serviceSections/ExpertPhotography";
import HighEndResolution from "@/sections/serviceSections/HighEndResolution";
import MoodBoardSectionV2 from "@/sections/serviceSections/MoodBoardSectionV2";
import WardrobeAndProp from "@/sections/serviceSections/WardrobeAndProp";
import AboutSection from "@/sections/serviceSections/AboutSection";
import GetStartedSection from "@/sections/serviceSections/GetStartedSection";
import MultiImageAnimation from "@/sections/serviceSections/MutliImageAnimation";
import DeliveryOptions from "@/sections/serviceSections/DeliveryOptions";
import FAQ2 from "@/components/live-streaming/FAQ2";
import CallToAction from "@/components/live-streaming/CallToAction";
import MultiCard from "@/sections/MutiCard";
import { ChevronRight } from "lucide-react";

const Pricing = dynamic(() => import("@/components/live-streaming/Pricing"), {
  ssr: true,
});

export default function Headshots() {
  return (
    <div className="pl-6 pr-6 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-9 border-b-2 border-[#747478]">
        <div className="text-4xl font-semibold">
          <p className="pb-2.5 pt-3">Headshot</p>
          <p>Photography</p>
        </div>
        <div className="flex flex-col text-right gap-4 sm:mt-[10%] md:mt-0">
          <a href="/galleries">
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
            Let us help you create the perfect professional image.
          </p>
          <p className="pt-1">
            Personalized headshot photography to showcase your{" "}
          </p>
          <p className="pt-1">
            personality. Your journey to a confident headshot starts here.
          </p>

          <a href="/booking">
            <button className="mt-8 py-3 px-8 bg-black text-white rounded-full">
              BOOK NOW
            </button>
          </a>
        </div>
        <Image
          src={img1}
          alt="Headshot 1"
          className=" sm:w-[80%] md:w-[40%] md:h-[40%] rounded-lg pl-5 mt-4"
        />
        <Image
          src={img2}
          alt="Headshot 2"
          className="sm:w-[70%] md:w-[30%] md:h-[40%] rounded-lg  pl-5 mt-4"
        />
      </div>
      <GetStartedSection
        text1="Elevate Your Presence"
        text2=" with Professional"
        text3="Headshots"
      />
      <AboutSection imageUrl={img3} />
      <WardrobeAndProp />
      <div className="mt-[10%] flex flex-row justify-center items-center">
        <Image
          src={img4}
          alt="Headshot 4"
          className="w-[65%] h-[50%] hidden md:block  object-cover mt-10 pl-5 "
        />
      </div>
      <MoodBoardSectionV2 imageUrl={img5} />
      <LocationStylingTipsSec />
      <ExpertPhotography imageUrl={img6} />
      <HighEndResolution imageUrl={img7} />
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-[25px]">Final Delivery</p>
        <p className="text-[15px] text-[#5C5C5C] mt-4 max-w-3xl text-center">
          The moment of final delivery marks the culmination of our dedicated
          efforts and your envisioned <br /> outcome brought to life. It&apos;s
          more than just a transaction.
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
