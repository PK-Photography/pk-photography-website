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
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 bg-white px-4">
      
      {/* Section Header */}
      <h2 className="text-3xl font-bold mb-6 text-center">Before & After</h2>

      {/* Compare Component */}
      <div className="w-full max-w-6xl">
        <div className="p-4 rounded-xl">
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


