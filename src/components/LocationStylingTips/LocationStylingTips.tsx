"use client";

import Image from "next/image";

export default function LocationStylingTips() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            Our Process
          </h2>
          <h3 className="text-xl font-semibold text-[#2A2A2A]">
            Location & Styling Tips
          </h3>
          <p className="text-gray-600 mt-5">
            Benefit from guidance on choosing settings that enhance the overall
            mood, whether it's an urban backdrop, a natural landscape, or a styled
            studio session.
          </p>
          <p className="text-gray-700 italic text-sm font-semibold text-gray-900 mt-4">
            "The perfect location can tell a story before a single word is spoken."
          </p>
        </div>

        {/* Right Side - Image Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <Image
              src="/portfolioImages/location.jpg"
              alt="Location & Styling Tips"
              width={400}
              height={350}
              className="rounded-lg w-full h-80 md:h-80 object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}