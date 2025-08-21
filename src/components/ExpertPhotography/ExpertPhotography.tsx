"use client";

import Image from "next/image";

export default function ExpertPhotography() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            Our Process
          </h2>
          <h3 className="text-xl font-semibold text-[#2A2A2A]">
            Expert Photography
          </h3>
          <p className="text-gray-600 mt-5">
            Our seasoned photographers capture a dynamic range of images with a
            focus on creative lighting that brings depth and dimension to every
            shot. They offer comprehensive pose guidance to ensure you feel
            confident and natural, helping you achieve authentic and flattering
            poses that truly represent your vision.
          </p>
          <p className="text-gray-700 italic text-sm font-semibold text-gray-900 mt-4">
            "Great photography is about depth of feeling, not depth of field."
          </p>
        </div>

        {/* Right Side - Image Card */}
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <Image
              src="/ep/expert_Photography.JPG"
              alt="Expert Photography"
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