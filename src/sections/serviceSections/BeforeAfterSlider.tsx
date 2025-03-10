import React from "react";
import { Compare } from "../../thirdParty/components/compare";

const BeforeAfterSlider = () => {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2  lg:text-left">
        <h2 className="text-sm mb-3 font-normal">High-End Retouching</h2>
        <p className="text-gray-700 text-lg leading-6 font-normal mt-10">
          Our editors perform high-end retouching on these selected images, applying advanced techniques such as skin smoothing,<br /> blemish removal, and color correction while preserving a natural yet polished look.
        </p>
      </div>

      {/* Right Side - Compare Component */}
      <div className="w-full lg:w-1/2">
        <div className="p-4 rounded-xl ">
          <Compare
            firstImage="/pricing/PKP_2826.jpg"
            secondImage="/pricing/PKP_7172.jpg"
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            className="h-[250px] md:h-[500px] w-full"
            slideMode="drag"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;