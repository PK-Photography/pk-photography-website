"use client";

import Image from "next/image";

export default function ConsultationMoodBoard() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
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
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <Image
              src="/consultation/consultation_2.jpg"
              alt="Consultation & Mood Board"
              width={320}  
              height={400} 
              className="rounded-lg w-80 h-auto object-cover"
             />
          </div>
        </div>
        
      </div>
    </div>
  );
}