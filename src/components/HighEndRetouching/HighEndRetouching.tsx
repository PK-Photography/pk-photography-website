"use client";

export default function HighEndRetouching() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-lg">
      {/* Center Aligned Text */}
      <div className="text-center w-full">
        <h3 className="text-xl font-semibold mb-4">High-End Retouching</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Our editors perform high-end retouching on these selected images,
          applying advanced techniques such as skin smoothing, blemish removal,
          and color correction while preserving a natural yet polished look.
        </p>
      </div>
    </div>
  );
}
