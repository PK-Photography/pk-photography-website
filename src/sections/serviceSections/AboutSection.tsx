// import React from "react";

// const AboutSection: React.FC = () => {
//   return (
//     <div className="bg-white py-16 px-4">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
//         {/* Image Section */}
//         <div className="w-full flex justify-center">
//           <img
//             src="/pricing/cover.jpg"
//             alt="Model"
//             className="rounded-lg shadow-lg w-80 h-auto object-cover"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2">
//           <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
//             What Makes Us Different?
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Experienced Team:
//               </h3>
//               <p className="text-gray-600">
//                 Our team comprises highly skilled photographers and creative
//                 directors with years of experience in the industry. We
//                 understand what it takes to create a portfolio that gets you
//                 noticed.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Customized Styling:
//               </h3>
//               <p className="text-gray-600">
//                 A well-styled portfolio can make all the difference. We'll help
//                 you create a look that is both professional and memorable,
//                 giving you a competitive edge in the industry.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Professional Editing:
//               </h3>
//               <p className="text-gray-600">
//                 High-quality editing is essential for a polished and
//                 professional portfolio. We'll ensure your images are flawless
//                 and ready to impress potential clients.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src="/pricing/PKP_2826.jpg"
            alt="Model"
            width={300}
            height={500} 
            className="rounded-lg shadow-lg object-cover"
          />
          {/* <Image
            src="/pricing/PKP_2826.jpg"
            alt="Model"
            fill
            className="object-cover w-full h-full"
          /> */}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            What Makes Us Different?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Experienced Team:
              </h3>
              <p className="text-gray-600 mt-5">
                Our team comprises highly skilled photographers and creative
                directors with years of experience in the industry. We
                understand what it takes to create a portfolio that gets you
                noticed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Customized Styling:
              </h3>
              <p className="text-gray-600 mt-5 ">
                A well-styled portfolio can make all the difference. We&apos;ll
                help you create a look that is both professional and memorable,
                giving you a competitive edge in the industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Professional Editing:
              </h3>
              <p className="text-gray-600 mt-5">
                High-quality editing is essential for a polished and
                professional portfolio. We&apos;ll ensure your images are
                flawless and ready to impress potential clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
