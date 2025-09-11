import Image from "next/image";
import { FC } from "react";

type HighEndResolutionProps = {
  imageUrl: string;
};

const HighEndResolution: React.FC<HighEndResolutionProps> = ({ imageUrl }) => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center mt-[8%]">
      <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center text-center md:text-left w-full max-w-5xl gap-10 md:gap-20">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-[40%] text-start">
          <h2 className="text-sm mb-3">High-End Retouching</h2>
          <p className="text-gray-700 text-base md:text-lg leading-6 mt-6 md:mt-10">
            Our editors perform high-end <br /> retouching on these selected{" "}
            <br /> images, applying advanced <br /> techniques such as skin{" "}
            <br /> smoothing, blemish removal, <br /> and color correction while{" "}
            <br /> preserving a natural yet <br /> polished look.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[60%]">
          <Image
            src={imageUrl}
            alt="Mood Board Inspiration"
            height={400}
            width={300}
            className="shadow-md w-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HighEndResolution;