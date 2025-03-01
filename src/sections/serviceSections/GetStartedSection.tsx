// import React from "react";
// import { BubbleText } from "@/components/BubbleText/BubbolTextProps";

// const GetStartedSection: React.FC = () => {
//   return (
//     <div className="bg-[#f7f7f7] py-16 px-8 border-l-[6px] border-yellow-500">
//       <div className="container mx-auto flex justify-between items-start space-x-12">
//         {/* Left Section - Heading and Button */}
//         <div className="w-1/3">
//           <h2 className="text-3xl font-light text-[#000000] leading-snug">
//             Showcase Your <br />
//             Talent with a <br />
//             Stunning Portfolio
//           </h2>

//           <button className="mt-6 px-6 py-2 text-sm font-semibold border border-gray-800 rounded-md transition duration-300 shadow-[-6px_6px_0px_#000] hover:shadow-[-4px_4px_0px_#000] active:shadow-[-2px_2px_0px_#000] active:scale-95">
//             Get Started
//           </button>
//         </div>

//         {/* Right Section - Description */}
//         <div className="w-2/3 text-[#000000] text-base font-light leading-relaxed">
//           <p>
//             Our Portfolio Photography service is designed for professionals and
//             creatives who want to present their work in the best light. With our
//             expert guidance, every image is a statement of your style and
//             vision.
//           </p>
//           <br />
//           <p>
//             We'll work closely with you to craft a collection of images that
//             highlights your strengths and positions you for success in your
//             chosen field. From concept development and styling to professional
//             retouching and final delivery, we'll guide you through every step of
//             the process, ensuring you have a portfolio that opens doors and sets
//             you apart.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStartedSection;

import React from "react";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";

const GetStartedSection: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] py-16 px-8 border-l-[6px] border-yellow-500">
      <div className="container mx-auto flex justify-between items-start space-x-12">
        {/* Left Section - Heading and Button */}
        <div className="w-1/3">
          <h2 className="text-3xl font-light text-[#000000] leading-snug">
            Showcase Your <br />
            Talent with a <br />
            Stunning Portfolio
          </h2>

          <button className="mt-6 px-6 py-2 text-sm font-semibold border border-gray-800 rounded-md transition duration-300 shadow-[-6px_6px_0px_#000] hover:shadow-[-4px_4px_0px_#000] active:shadow-[-2px_2px_0px_#000] active:scale-95">
            Get Started
          </button>
        </div>

        {/* Right Section - Description */}
        <div className="w-2/3 text-[#000000] text-base font-light leading-relaxed">
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
