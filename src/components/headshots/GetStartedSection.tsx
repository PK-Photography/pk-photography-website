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
            Our Portfolio Photography service is designed for Models, Actors, Professionals, 
            and Individuals who want to present themselves with impact. Whether you&apos;re building a 
            presence for modelling, acting, corporate branding, matrimony, maternity, or 
            personal expression, we craft visuals that truly represent you.
          </p>
          <br />
          <p>
            From concept development and styling guidance to professional retouching and delivery, 
            we walk you through every step of the process. Our goal is to highlight your unique strengths 
            and create a portfolio that opens doors—whether it&apos; landing auditions, impressing clients, 
            or simply capturing a moment in time with authenticity and style.
           
           Let us help you create a powerful first impression—one that speaks before you do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
