// import React from "react";

// const videos = [
//   { src: "featuredVdo/L1.MP4", title: "Google Gemini - Generative AI Apps", tags: ["Experiences"] },
//   { src: "featuredVdo/L2.MP4", title: "The best delivery experience not on earth.", tags: ["Platform", "Experiences"] },
//   { src: "featuredVdo/L3.MP4", title: "Bang & Olufsen - See yourself in Sound", tags: ["Experiences"] },
//   { src: "featuredVdo/L5.MP4", title: "Strava - Year In Sport 2023", tags: ["Platform", "Products", "Experiences"] },
// ];

// const FeaturedGallery: React.FC = () => {
//   return (
//     <div className="p-6 flex flex-wrap justify-center gap-10">
//       {videos.map((video, index) => (
//         <div
//           key={index}
//           className="group cursor-pointer flex flex-col items-start max-w-[280px] w-full"
//         >
//           {/* Video Container */}
//           <div className="relative overflow-hidden rounded-lg w-full h-[200px]">
//             <video
//               src={video.src}
//               muted
//               loop
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               onMouseEnter={(e) => e.currentTarget.play()}
//               onMouseLeave={(e) => {
//                 e.currentTarget.pause();
//                 e.currentTarget.currentTime = 0;
//               }}
//             ></video>
//           </div>

//           {/* Title and Tags */}
//           <div className="mt-4">
//             <h3 className="text-lg  font-semibold text-black leading-snug">
//               {video.title}
//             </h3>
//             <div className="flex gap-4 mt-2">
//               {video.tags.map((tag, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="text-sm font-medium text-gray-500 hover:underline"
//                 >
//                   {tag}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeaturedGallery;



import React from "react";
import { motion } from "framer-motion";

const videos = [
  { src: "featuredVdo/L1.MP4", title: "Google Gemini - Generative AI Apps", tags: ["Experiences"] },
  { src: "featuredVdo/L2.MP4", title: "The best delivery experience not on earth.", tags: ["Platform", "Experiences"] },
  { src: "featuredVdo/L3.MP4", title: "Bang & Olufsen - See yourself in Sound", tags: ["Experiences"] },
  { src: "featuredVdo/L5.MP4", title: "Strava - Year In Sport 2023", tags: ["Platform", "Products", "Experiences"] },
];

const FeaturedGallery: React.FC = () => {
  return (
    <div className="p-6 flex flex-wrap justify-center gap-10">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          className="group cursor-pointer flex flex-col items-start max-w-[280px] w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-md w-full h-[200px]">
            <motion.video
              src={video.src}
              muted
              loop
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              whileHover={{ scale: 1.1 }}
            ></motion.video>
          </div>

          {/* Title and Tags */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-black leading-snug">
              {video.title}
            </h3>
            <div className="flex gap-4 mt-2">
              {video.tags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:underline"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedGallery;
