import Image from "next/image";
import { FC } from "react";

type ExpertPhotographyProps = {
  imageUrl: string;
};

const ExpertPhotography: React.FC<ExpertPhotographyProps> = ({ imageUrl }) => {
  return (
    <div className="container mx-auto px-4 pr-[8%] mt-[5%]">
      <section className="flex flex-col lg:flex-row items-end gap-10">
        <div className="flex flex-col items-end gap-10 lg:gap-28 w-full lg:w-2/5">
          <div className="relative w-[250px] h-[300px]">
            <Image
              src={imageUrl}
              alt="Mood Board Inspiration"
              fill
              className="shadow-md object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center gap-5 w-full lg:w-3/5 bg-gray-100 p-6 md:p-10 lg:p-20 rounded-md text-start">
          <h2 className="text-sm font-semibold mb-3">Expert Photography</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-6">
            Our seasoned photographers capture a dynamic range of images with a
            focus on creative lighting that brings depth and dimension to every
            shot. They offer comprehensive pose guidance to ensure you feel
            confident and natural, helping you achieve authentic and flattering
            poses that truly represent your vision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExpertPhotography;
