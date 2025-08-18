

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const ProcessOverview = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = (event) => {
//       setScrollY(event.target.scrollTop);
//     };

//     document
//       .getElementById("scrollable-content")
//       .addEventListener("scroll", handleScroll);

//     return () => {
//       document
//         .getElementById("scrollable-content")
//         .removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="relative bg-blue-600 text-white rounded-xl  h-[530px] w-full flex flex-col p-6">
//         {/* Large Background Text */}
//         <h1 className="absolute text-[3rem] sm:text-[5rem] lg:text-[8rem] font-bold text-blue-400 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           PROCESS
//         </h1>

//         {/* Scrollable Text Section */}
//         <div
//           id="scrollable-content"
//           className="relative w-full lg:w-3/5 max-h-60 overflow-y-auto pr-6 pl-0 mx-2 sm:mx-10 mt-10 scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-500 z-10"
//           style={{ direction: "rtl" }} // Scrollbar on left
//         >
//           <div style={{ direction: "ltr" }} className="ml-2 sm:ml-10 lg:mb-20 mb-10">
//             <h2 className="text-xs sm:text-sm uppercase mb-2">Process Overview</h2>
//             <h3 className="text-base sm:text-lg font-bold mb-2">CONSULTATION & MOOD BOARD</h3>
//             <p className="text-xs sm:text-sm mb-4 transition-opacity duration-300">
//               Begin with a deep dive into your aspirations and personal brand, translating your vision into a creative mood board that sets the tone for the shoot.
//             </p>
//             <h3 className="text-base sm:text-lg font-bold mb-2">WARDROBE & PROPS</h3>
//             <p className="text-xs sm:text-sm mb-4 transition-opacity duration-300" style={{ opacity: scrollY > 50 ? 1 : 0.3 }}>
//               Receive expert advice on selecting wardrobe pieces and props that capture your unique personality and professional edge.
//             </p>
//             <h3 className="text-base sm:text-lg font-bold mb-2">LOCATION & STYLE</h3>
//             <p className="text-xs sm:text-sm mb-4 transition-opacity duration-300" style={{ opacity: scrollY > 100 ? 1 : 0.3 }}>
//               Benefit from guidance on choosing the perfect setting for your shoot, whether an urban backdrop, a natural landscape, or a studio environment.
//             </p>
//           </div>
//         </div>

//         {/* Image Overlaying Background Text - Hidden on Small Screens */}
//         <div className="absolute top-30 left-1/4 z-20 mt-28 hidden lg:flex flex-col">
//           <Image
//             src="/pricing/PKP_2826.jpg"
//             alt="The Shoot"
//             width={200}
//             height={350}
//             className="shadow-lg"
//           />
//           <p className="text-center bg-white text-black text-xs py-1">The Shoot</p>
//         </div>

//         {/* Green Card - Centered on Mobile, Right-Aligned on Desktop */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-28 bg-green-900 p-3 text-white rounded-lg w-11/12 sm:w-72 z-20">
//           <p className="text-xs text-[#6F9986]">A personalized session at a chosen location or studio.</p>
//           <div className="flex justify-between items-center mt-2 gap-5">
//             <div>
//               <p className="text-xs text-[#6F9986]">Professional Retouching</p>
//               <p className="text-lg sm:text-xl font-semibold">Color</p>
//             </div>
//             <div>
//               <p className="text-xs text-[#6F9986]">Creative edits</p>
//               <p className="text-lg sm:text-xl font-semibold">Grading</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessOverview;


import { useState, useEffect, useRef } from "react";

const ProcessOverview = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollableContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY(event.target.scrollTop);
    };

    const element = scrollableContentRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Scrollable Text Section */}
      <div
        ref={scrollableContentRef}
        className="w-full max-h-60 overflow-y-auto pr-4 pl-0 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500"
      >
        <div className="ml-2 sm:ml-6 mb-16">
          {/* <h2 className="text-xs sm:text-sm uppercase mb-4 font-semibold">
            Process Overview
          </h2>

          <h3 className="text-base sm:text-lg font-bold mb-2">
            CONSULTATION & MOOD BOARD
          </h3>
          <p className="text-xs sm:text-sm mb-6">
            Begin with a deep dive into your aspirations and personal brand,
            translating your vision into a creative mood board that sets the tone
            for the shoot.
          </p>

          <h3 className="text-base sm:text-lg font-bold mb-2">
            WARDROBE & PROP SUGGESTIONS
          </h3>
          <p
            className="text-xs sm:text-sm mb-6 transition-opacity duration-300"
            style={{ opacity: scrollY > 50 ? 1 : 0.3 }}
          >
            Receive expert advice on styling and props to ensure every image
            captures your unique personality and professional edge.
          </p>

          <h3 className="text-base sm:text-lg font-bold mb-2">
            LOCATION & STYLING TIPS
          </h3>
          <p
            className="text-xs sm:text-sm mb-6 transition-opacity duration-300"
            style={{ opacity: scrollY > 100 ? 1 : 0.3 }}
          >
            Benefit from guidance on choosing settings that enhance the overall
            mood, whether it’s an urban backdrop, a natural landscape, or a
            styled studio session.
          </p>

          <h3 className="text-base sm:text-lg font-bold mb-2">
            EXPERT PHOTOGRAPHY
          </h3>
          <p
            className="text-xs sm:text-sm mb-6 transition-opacity duration-300"
            style={{ opacity: scrollY > 150 ? 1 : 0.3 }}
          >
            Our seasoned photographers capture a dynamic range of images with a
            focus on creative lighting that brings depth and dimension to every
            shot. They offer comprehensive pose guidance to ensure you feel
            confident and natural, helping you achieve authentic and flattering
            poses that truly represent your vision.
          </p>

          <h3 className="text-base sm:text-lg font-bold mb-2">
            HIGH-END RETOUCHING
          </h3>
          <p
            className="text-xs sm:text-sm mb-6 transition-opacity duration-300"
            style={{ opacity: scrollY > 200 ? 1 : 0.3 }}
          >
            Our editors perform high-end retouching on these selected images,
            applying advanced techniques such as skin smoothing, blemish
            removal, and color correction while preserving a natural yet
            polished look.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProcessOverview;
