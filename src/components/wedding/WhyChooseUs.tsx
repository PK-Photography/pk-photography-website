// components/WhyChooseUs.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Mumbai-based Team with 10+ Years Experience",
  "All-Inclusive Packages",
  "Delivery: Edited Photos, Albums & Videos",
  "Fast Turnaround & Drive Delivery",
  "Creative, Candid & Friendly Team",
];

const WhyChooseUs: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Choose <span className="text-pink-500">PK Photography?</span>
        </h2>

        <div className="relative">
          {/* Vertical line on the right side */}
          <div className="absolute right-6 top-6 bottom-6 w-1 bg-green-200  md:block"></div>

          <div className="space-y-12">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative flex items-start justify-between gap-6 md:gap-8"
              >
                {/* Text on left */}
                <div className="flex-1 text-right">
                  <p className="text-lg font-medium text-gray-700">{point}</p>
                </div>

                {/* Icon bubble on right */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-green-300 rounded-full shadow-md shrink-0">
                  <FaCheckCircle className="text-green-500 text-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
