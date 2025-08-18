"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery: React.FC = () => {
  const images = [
    { src: "/portfolioImages/cover/left.jpg", name: "Anushka Sharma" },
    { src: "/portfolioImages/cover/middle.jpg", name: "Priya Mehta" },
    { src: "/portfolioImages/cover/right_side.jpg", name: "Kriti Rao" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-sm font-light mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.name}
                width={500}
                height={750}
                className="w-full h-[485px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Name below image */}
            <p className="mt-3 text-lg font-medium">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


