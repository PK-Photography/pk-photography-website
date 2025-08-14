"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery: React.FC = () => {
  const images: string[] = [
    "/portfolioImages/cover/left.jpg",
    "/portfolioImages/cover/middle.jpg",
    "/portfolioImages/cover/right_side.jpg",
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-sm font-light mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={750}
              className="w-full h-[485px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

