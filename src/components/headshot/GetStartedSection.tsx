"use client";

import React from "react";
import { useRouter } from "next/navigation";

type GetStartedSectionProps = {
  text1: string;
  text2: string;
  text3: string;
};

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  text1,
  text2,
  text3,
}) => {
  const router = useRouter();
  return (
    <div className="bg-[#f7f7f7] py-12 px-6 border-l-[6px] border-yellow-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section - Heading and Button (Stacks on Mobile) */}
        <div className="w-full md:w-1/3  md:text-left">
          <h2 className="text-2xl md:text-3xl font-light text-[#000000] leading-snug">
            {text1} <br className="hidden md:block" />
            {text2} <br className="hidden md:block" />
            {text3}
          </h2>

          <button
            onClick={() => router.push("/booking")}
            className="lg:flex hidden mt-4 md:mt-6 px-6 py-2 text-sm font-semibold border border-gray-800 rounded-md transition duration-300 shadow-[-6px_6px_0px_#000] hover:shadow-[-4px_4px_0px_#000] active:shadow-[-2px_2px_0px_#000] active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Right Section - Description (Stacks Below on Mobile) */}
        <div className="w-full md:w-2/3 text-[#000000] text-base font-light leading-relaxed  md:text-left">
          <p>
            Our Headshot Photography in Mumbai is tailored for CEOs, business leaders, corporate teams, 
            lawyers, doctors, and artists who want to enhance their professional image. 
            Perfect for LinkedIn, corporate websites, social profiles, and print, PK Photography 
            delivers high-quality, business and creative headshots that make a strong first impression.
          </p>
          <br />
          <p>
            With expert guidance, premium lighting, and authentic expression, we showcase your 
            unique brand and personality. Trust us to provide standout portraits for all your 
            professional and creative needs.
           
           Let us help you create a powerful first impression—one that speaks before you do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
