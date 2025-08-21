"use client";

import Image from "next/image";

export default function ConsultationMoodBoard() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            Our Process
          </h2>
          <h3 className="text-xl font-semibold text-[#2A2A2A]">
            Consultation & Mood Board
          </h3>
          <p className="text-gray-600 mt-5">
            Begin with a deep dive into your aspirations and personal brand,
            translating your vision into a creative mood board that sets the tone
            for the shoot.
          </p>
          <p className="text-gray-700 italic text-sm mt-4">
            "Every great photoshoot begins with understanding your unique story and vision."
          </p>
        </div>

        {/* Right Side - Image Card */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80 sm:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <Image
              src="/portfolioImages/consultation.jpg"
              alt="Consultation & Mood Board"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}