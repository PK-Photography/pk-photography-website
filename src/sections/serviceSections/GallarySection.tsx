"use client";

import { motion } from "framer-motion";

interface ImageData {
  src: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const images: ImageData[] = [
    {
      src: "/pricing/PKP_2826.jpg",
      title: "Chloe - Portfolio Hit",
      description: "Branding, E-commerce Platform",
    },
    {
      src: "/pricing/PKP_7172.jpg",
      title: "Irina Bullatochka - Forward",
      description: "Fashion Editorial",
    },
    {
      src: "/pricing/cover.jpg",
      title: "Anjita - Design Brand",
      description: "Platform Photoshoot",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-sm font-light mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden "
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="mt-4">
              <h3 className="font-light text-2xl">{img.title}</h3>
              <p className="text-gray-600">{img.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
