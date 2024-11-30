import React from "react";
import BubbleText from "@/components/BubbleText/BubbleText";
// import Carousel from "./Carousel";
import Slideshow from "./SlideShow";

export const ImageBreak = () => {
  return (
    <div className="container mx-auto p-4 md:p-10 bg-[#eae8e4] flex flex-col items-center">
      <BubbleText />
      <div className="w-full max-w-5xl mt-5 overflow-hidden">
        {/* <Carousel /> */}
        <Slideshow />
      </div>
    </div>
  );
};
