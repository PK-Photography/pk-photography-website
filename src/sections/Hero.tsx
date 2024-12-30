"use client";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import Rotating from "@/components/RotatingText/Rotating";
import { Drop } from "@/components/Drop/Drop";
import Dropping from "@/components/droppingText/Dropping";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-[#eae8e4] overflow-hidden">
      <div className="relative w-full h-full flex flex-col justify-center items-center space-y-6">
        {/* Circular Video Container with responsive sizing */}
        <div className="relative z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg">
          <video
            src="/gif.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo positioned on top-left with fixed aspect ratio */}
        {/* <div className="absolute top-0 left-5 md:top-0 md:left-8">
          <Image
            src={Logo}
            alt="Saas Logo"
            width={120} // Set width to control aspect ratio
            height={120} // Set height to control aspect ratio
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain fixed"
          />
        </div> */}

        {/* Text content under the circular video */}
        <div className="w-full text-center px-4 md:px-10 pb-10 text-white">
          <div className="md:w-[800px] mx-auto">
            <h1 className="text-[10px] md:text-[14px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              We are a creative agency {`{we do}`}
              {/* <Rotating /> */}
              <Dropping />
            </h1>
            <div className="mt-3">
              <Drop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
