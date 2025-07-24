import React from "react";

const GetStartedSection: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] py-12 px-6 border-l-[6px] border-yellow-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section - Heading and Button (Stacks on Mobile) */}
        <div className="w-full md:w-1/3  md:text-left">
          <h2 className="text-2xl md:text-3xl font-light text-[#000000] leading-snug">
            Showcase Your <br className="hidden md:block" />
            Talent with a <br className="hidden md:block" />
            Stunning Portfolio
          </h2>

          <button className="lg:flex hidden mt-4 md:mt-6 px-6 py-2 text-sm font-semibold border border-gray-800 rounded-md transition duration-300 shadow-[-6px_6px_0px_#000] hover:shadow-[-4px_4px_0px_#000] active:shadow-[-2px_2px_0px_#000] active:scale-95">
            Get Started
          </button>
        </div>

        {/* Right Section - Description (Stacks Below on Mobile) */}
        <div className="w-full md:w-2/3 text-[#000000] text-base font-light leading-relaxed  md:text-left">
          <p>
            Our Portfolio Photography service is designed for professionals and
            creatives who want to present their work in the best light. With our
            expert guidance, every image is a statement of your style and
            vision.
          </p>
          <br />
          <p>
            We&apos;ll work closely with you to craft a collection of images
            that highlights your strengths and positions you for success in your
            chosen field. From concept development and styling to professional
            retouching and final delivery, we&apos;ll guide you through every
            step of the process, ensuring you have a portfolio that opens doors
            and sets you apart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
