import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    src: "featuredVdo/Nitakshi Goe (1).MP4",
    title: "Nitakshi Goe - Having a great experience.",
    tags: ["Experiences", "Photography"],
    gridSpan: { row: 2, col: 1 }, // Custom spans
  },
  {
    src: "featuredVdo/Rohit Rashmi (1).MP4",
    title: "Rohit Rashmi - Amazing photgraphy.",
    tags: ["Platform", "Experiences", "PhotoShoot"],
    gridSpan: { row: 1, col: 2 },
  },
  {
    src: "featuredVdo/Kashish (1).MP4",
    title: "Kashish - Happy to see his Photography.",
    tags: ["Great Shoot"],
    gridSpan: { row: 2, col: 1 }, // Custom spans
  },
  {
    src: "featuredVdo/Aspen (1).MP4",
    title: "Aspen - PK Photography is simply mouth-watering.",
    tags: ["Love Photography"],
    gridSpan: { row: 1, col: 2 },
  },
  {
    src: "featuredVdo/Kajal agarwal.MP4",
    title: "Kajal agarwal - Great shoot, as I expected.",
    tags: ["Platform", "Products", "Experiences"],
    gridSpan: { row: 2, col: 2 },
  },
  {
    src: "featuredVdo/FAMILY PHOTO.MP4",
    title: "FAMILY PHOTO - Best For family photo shoot. ",
    tags: ["Family", "Photos"],
    gridSpan: { row: 2, col: 2 },
  },
  {
    src: "featuredVdo/Amd.MP4",
    title: "AMD - Having amazing experience with PK Photography.",
    tags: ["Photography", "Experiences"],
    gridSpan: { row: 3, col: 3 },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FeaturedGallery: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 sm:px-6 lg:px-8 pt-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center max-w-[1200px] mx-auto"
        style={{
          justifyContent: "center",
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer relative overflow-hidden rounded-lg flex flex-col"
            style={{
              gridColumn: `span ${video.gridSpan.col}`,
              gridRow: `span ${video.gridSpan.row}`,
            }}
            // Framer Motion Props
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the card is visible
            transition={{
              duration: 0.5,
              delay: index * 0.2, // Stagger animations
            }}
          >
            {/* Video */}
            <div className="relative w-full h-full overflow-hidden">
              <video
                src={video.src}
                muted
                loop
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              ></video>
            </div>

            {/* Title and Tags */}
            <div className="mt-4 text-center">
              <h3 className="text-sm sm:text-base font-semibold text-black leading-snug">
                {video.title}
              </h3>
              <div className="flex gap-2 justify-center mt-2">
                {video.tags.map((tag, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-xs sm:text-sm font-medium text-gray-500 hover:underline"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGallery;
