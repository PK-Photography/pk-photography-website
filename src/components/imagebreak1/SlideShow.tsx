import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

const Slideshow = () => {
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
    "imgbrk1/imgbrk14.png"
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full h-1/2 overflow-hidden">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-full relative"
          >
            <Image
              className="w-full h-full object-contain"
              src={each}
              alt={`Slide ${index + 1}`}
            />
            <h1 className="absolute top-1/4 inset-x-1/4 text-center z-10 md:text-6xl text-4xl font-bold text-white"></h1>
            <p className="absolute top-1/2 inset-x-1/4 text-center z-10 md:text-2xl text-xl font-bold text-white"></p>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
