"use client";

import React from "react";
import { Compare } from "../../thirdParty/components/compare";

interface BeforeAfterSliderProps {
  imageUrl1: string;
  imageUrl2: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  imageUrl1,
  imageUrl2,
}) => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 bg-white px-4">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 lg:text-left">
        <h2 className="text-sm mb-3 font-normal uppercase tracking-wide">
          High-End Retouching
        </h2>
        <p className="text-gray-700 text-lg leading-6 font-normal mt-10">
          Our editors perform high-end retouching on these selected images,
          applying advanced techniques such as skin smoothing,
          blemish removal, and color correction while preserving a
          natural yet polished look.
        </p>
      </div>

      {/* Right Side - Compare Component */}
      <div className="w-full lg:w-1/2 h-full">
        <div className="p-4 rounded-xl h-full">
          <Compare
            firstImage={imageUrl1}
            secondImage={imageUrl2}
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            className="w-full h-[80vh]" // large height for full-page effect
            slideMode="drag"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

