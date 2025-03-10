// "use client";
// import React from "react";

// import Image from "next/image";
// import { motion } from "motion/react";

// const FinalDeliverySec = () =>{
//   const images = [
// "/pricing/PKP_2826.jpg",
//            "/pricing/PKP_7172.jpg",
//            "/pricing/PKP_2826.jpg",
//            "/pricing/PKP_7172.jpg",
//            "/pricing/PKP_2826.jpg",
//            "/pricing/PKP_7172.jpg"
//   ];
//   return (
//     <div className="container mx-auto px-4 py-10 flex flex-wrap items-center justify-center gap-10">
   
        
//             <div className="flex justify-center items-center">
//               {images.map((image, idx) => (
//                 <motion.div
//                   key={"images" + idx}
//                   style={{
//                     rotate: Math.random() * 20 - 10,
//                   }}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   whileTap={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
//                 >
//                   <Image
//                     src={image}
//                     alt="bali images"
//                     width="800"
//                     height="800"
//                     className="rounded-lg h-60 w-40  object-cover shrink-0"
//                   />
//                 </motion.div>
//               ))}
//             </div>
         
//             <div className="flex flex-col items-center">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8  mb-8">
//                     <div>
//                         <h3 className="font-medium mb-2">High-Quality Printed Album</h3>
//                         <p className="text-sm text-gray-600">The refined, high-resolution images are delivered via your choice of methods</p>
//                     </div>
//                     <div>
//                         <h3 className="font-medium mb-2">Google Drive Link</h3>
//                         <p className="text-sm text-gray-600">A pendrive, or even as high-quality printed Album—</p>
//                     </div>
//                     <div>
//                         <h3 className="font-medium mb-2">Online Gallery</h3>
//                         <p className="text-sm text-gray-600">An Online Personalised Gallery</p>
//                     </div>
//                     <div>
//                         <h3 className="font-medium mb-2">Pendrive</h3>
//                         <p className="text-sm text-gray-600">Ensuring a delivery process that is both convenient and personalized to your needs.</p>
//                     </div>
//                 </div>

//                 <button className="bg-black text-white text-sm py-2 px-6 rounded-full transition-transform transform hover:scale-105">
//                     DOWNLOAD YOUR PORTFOLIO PREP CHECKLIST
//                 </button>
//             </div>
//     </div>
//   );
// }
// export default FinalDeliverySec


"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const FinalDeliverySec = () => {
  const images = [
    "/pricing/PKP_2826.jpg",
    "/pricing/PKP_7172.jpg",
    "/pricing/PKP_2826.jpg",
    "/pricing/PKP_7172.jpg",
    "/pricing/PKP_2826.jpg",
    "/pricing/PKP_7172.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center justify-center gap-10">
      <div className="flex justify-center items-center overflow-x-auto md:overflow-x-visible">
        {images.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
            whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="800"
              height="800"
              className="rounded-lg h-60 w-32 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8  md:text-left">
          <div>
            <h3 className="font-medium mb-2">High-Quality Printed Album</h3>
            <p className="text-sm text-gray-600">The refined, high-resolution images are delivered via your choice of methods</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Google Drive Link</h3>
            <p className="text-sm text-gray-600">A pendrive, or even as high-quality printed Album—</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Online Gallery</h3>
            <p className="text-sm text-gray-600">An Online Personalised Gallery</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Pendrive</h3>
            <p className="text-sm text-gray-600">Ensuring a delivery process that is both convenient and personalized to your needs.</p>
          </div>
        </div>

        <button className="bg-black text-white text-sm py-2 px-6 rounded-full transition-transform transform hover:scale-105">
          DOWNLOAD YOUR PORTFOLIO PREP CHECKLIST
        </button>
      </div>
    </div>
  );
};

export default FinalDeliverySec;
