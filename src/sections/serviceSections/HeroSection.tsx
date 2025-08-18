import Image from "next/image";
import PKLogo from "@/assets/logo.webp";
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      
      {/* Three Column Layout (Images Stay Side by Side) */}
      <div className="flex w-full h-[80vh] md:h-screen group">
        {/* Left Section */}
        <div className="relative w-1/2 h-full transition-all duration-700 ease-in-out group-hover:w-1/3 hover:w-1/2">
          <Image
            src="/pricing/PKP_2826.jpg"
            alt="Model"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-20">
            <h1 className="text-4xl md:text-7xl font-bold">Portfolio</h1>
            <p className="text-sm md:text-lg">
              Build a portfolio that opens doors in the creative industry.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="relative w-1/4 h-full transition-all duration-700 ease-in-out group-hover:w-1/3 hover:w-1/2">
          <Image
            src="/pricing/PKP_7172.jpg"
            alt="Model"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section */}
        <div className="relative w-1/4 h-full transition-all duration-700 ease-in-out group-hover:w-1/3 hover:w-1/2">
          <Image
            src="/pricing/cover.jpg"
            alt="Model"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    <div className="flex flex-col lg:flex-row justify-between items-start py-6 px-6 md:px-12 text-sm text-gray-500">
      {/* Mobile View */}
      <div className="lg:hidden  p-4 rounded-xl shadow-sm w-full mb-6">
        <div className="text-gray-500 text-xs mb-2">Type: Portfolio &, Creative Branding</div>
        <div className="text-gray-700 text-sm mb-2"><span className="text-gray-400 ">
          Build for:</span> Models, Actors</div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-700 text-sm"><span className="text-gray-400 ">Deliverables:</span><br />Professional Shoot<br />Makeup and Hair Artist<br />Service</div>
          <button className="ml-4 text-[#1E1E1E] px-6 py-2 text-sm font-semibold border border-black rounded-md transition duration-300 shadow-[-4px_4px_0px_#000] hover:shadow-[-3px_3px_0px_#000] active:shadow-[-2px_2px_0px_#000] active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-row justify-between w-full">
        {/* Explore Gallery Link */}
        <div className="flex items-center space-x-2 mb-4 lg:mb-0">
          <span className="text-lg md:text-xl leading-none">•</span>
          <a href="#" className="underline text- hover:text-gray-700">
            Explore Gallery
          </a>
        </div>

        {/* Type Section */}
        <div className="mb-4 lg:mb-0">
          <span className="block font-semibold text-gray-700">Type:</span>
          <span className="block">Portfolio & Creative Branding</span>
        </div>

        {/* Build for Section */}
        <div className="mb-4 lg:mb-0">
          <span className="block font-semibold text-gray-700">Build for:</span>
          <span className="block">Models, Actors, Professional and <br /> Personal Portfolio</span>
        </div>

        {/* Deliverables Section */}
        <div className="mb-4 lg:mb-0">
          <span className="block font-semibold text-gray-700">Deliverables:</span>
          <span className="block">
            Professional Shoot, <br /> Makeup & Hair Artist, <br /> Online Gallery, <br /> High-Res Edited Images
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
