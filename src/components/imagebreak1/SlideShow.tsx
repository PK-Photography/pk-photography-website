
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow: React.FC = () => {
  const images = [
    "imgbrk1/imgbrk1.png",
    "imgbrk1/imgbrk2.jpg",
    "imgbrk1/imgbrk3.jpg",
    "imgbrk1/imgbrk4.jpg",
    "imgbrk1/imgbrk5.jpg",
    "imgbrk1/imgbrk6.jpg",
    "imgbrk1/imgbrk7.jpg",
    "imgbrk1/imgbrk8.jpg",
    "imgbrk1/imgbrk9.jpg",
    "imgbrk1/imgbrk10.png",
    "imgbrk1/imgbrk11.jpg",
    "imgbrk1/imgbrk12.jpg",
    "imgbrk1/imgbrk13.jpg",
    "imgbrk1/imgbrk14.png",
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    draggable: true, // Enable dragging
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Slider */}
      <Slider {...settings}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            <img
              className="w-full h-[500px] md:h-[700px] lg:h-[900px] object-contain" // Fixed height for responsiveness, adjust as needed
              src={each}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      {/* Circle Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center items-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)} // Allow clicking on an indicator to navigate
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
