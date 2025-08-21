"use client";

import Image from "next/image";

export default function WardrobePropSuggestions() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            Our Process
          </h2>
          <h3 className="text-xl font-semibold text-[#2A2A2A]">
            Wardrobe & Prop Suggestions
          </h3>
          <p className="text-gray-600 mt-5">
            Receive expert advice on styling and props to ensure every image
            captures your unique personality and professional edge.
          </p>
          <p className="text-gray-700 italic text-sm font-semibold text-gray-900 mt-4">
            "The right wardrobe and props can transform a good photo into an extraordinary one."
          </p>
        </div>

        {/* Right Side - Image Card */}
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <Image
              src="/wardrobe/wardrobe.jpg"
              alt="Wardrobe & Prop Suggestions"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}