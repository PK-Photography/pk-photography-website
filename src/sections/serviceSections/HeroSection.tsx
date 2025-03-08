// import Image from "next/image";
// import PKLogo from "@/assets/logo.webp";
// import React from "react";

// const Portfolio: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
//       {/* Logo Placement */}
//       <div className="absolute top-4 left-4 z-20">
//         <Image
//           src={PKLogo}
//           alt="Saas Logo"
//           height={120}
//           width={160}
//           className="p-2"
//         />
//       </div>

//       {/* Three Column Layout with Hover Animation */}
//       <div className="flex w-full h-[80vh] group">
//         {/* Left Section (Wider Image by Default) */}
//         <div className="relative w-1/2 h-full transition-all duration-700 ease-in-out group-hover:w-1/3 hover:w-1/2">
//           <Image
//             src="/pricing/PKP_2826.jpg"
//             alt="Model"
//             fill
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute bottom-10 left-10 text-white z-20">
//             <h1 className="text-7xl font-bold">Portfolio</h1>
//             <p className="text-lg">
//               Build a portfolio that opens doors in the creative industry.
//             </p>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="relative w-1/4 h-full transition-all duration-700 ease-in-out group-hover:w-1/3 hover:w-1/2">
//           <Image
//             src="/pricing/PKP_7172.jpg"
//             alt="Model"
//             fill
//             className="object-cover w-full h-full"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="relative w-1/4 h-full transition-all duration-700 ease-in-out group-hover:w-1/3 hover:w-1/2">
//           <Image
//             src="/pricing/cover.jpg"
//             alt="Model"
//             fill
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Bottom Information Section */}
//       <div className="flex justify-between items-start py-4 px-12 text-sm text-gray-500">
//         {/* Explore Model Link with Bullet */}
//         <div className="flex items-start space-x-2">
//           <span className="text-xl leading-none pt-1">•</span>
//           <a href="#" className="underline hover:text-gray-700">
//             Explore Model
//           </a>
//         </div>

//         {/* Type Section */}
//         <div className="text-left">
//           <span className="block font-semibold text-gray-700">Type:</span>
//           <span className="block">
//             Portfolio &<br />
//             Creative Branding
//           </span>
//         </div>

//         {/* Build for Section */}
//         <div className="text-left">
//           <span className="block font-semibold text-gray-700">Build for</span>
//           <span className="block">
//             Models, Actors,
//             <br />
//             Personal Portfolio
//           </span>
//         </div>

//         {/* Deliverables Section */}
//         <div className="text-center">
//           <span className="block font-semibold text-gray-700 text-left">
//             Deliverables
//           </span>
//           <span className="block text-left">
//             Professional Shoot,
//             <br />
//             Makeup and Hair Artist Service,
//             <br />
//             Online Gallery,
//             <br />
//             High-Resolution Edited Images
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import Image from "next/image";
import PKLogo from "@/assets/logo.webp";
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Logo Placement */}
      <div className="absolute top-4 left-4 z-20">
        <Image
          src={PKLogo}
          alt="Saas Logo"
          height={80}
          width={120}
          className="p-2"
        />
      </div>

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

      {/* Bottom Information Section (Wrap Text but Keep Layout) */}
      <div className="flex flex-wrap justify-between items-start py-6 px-6 md:px-12 text-sm text-gray-500">
        {/* Explore Model Link */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-lg md:text-xl leading-none">•</span>
          <a href="#" className="underline hover:text-gray-700">
            Explore Model
          </a>
        </div>

        {/* Type Section */}
        <div className="w-full sm:w-auto">
          <span className="block font-semibold text-gray-700">Type:</span>
          <span className="block">Portfolio & Creative Branding</span>
        </div>

        {/* Build for Section */}
        <div className="w-full sm:w-auto">
          <span className="block font-semibold text-gray-700">Build for</span>
          <span className="block">
            Models, Actors, <br />
            Personal Portfolio
          </span>
        </div>

        {/* Deliverables Section */}
        <div className="w-full sm:w-auto">
          <span className="block font-semibold text-gray-700">Deliverables</span>
          <span className="block">
            Professional Shoot, <br />
            Makeup & Hair Artist, <br />
            Online Gallery, <br />
            High-Res Edited Images
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
