import React from "react";
// import Carousel from "./Carousel";
import Slideshow from "./SlideShow";
import { BubbleText } from "../BubbleText/BubbolTextProps";

export const ImageBreak = () => {
  return (
    <div className="container mx-auto p-4 md:p-10 bg-[#eae8e4] flex flex-col items-center">
      <BubbleText text="Visual Stories" id="Visual-Stories" />
      <div className="w-full max-w-5xl mt-5 overflow-hidden">
        {/* <Carousel /> */}
        <Slideshow />
      </div>
    </div>
  );
};
