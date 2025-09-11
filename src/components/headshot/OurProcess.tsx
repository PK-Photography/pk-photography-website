// components/OurProcess.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaPalette,
  FaCamera,
  FaEdit,
  FaHeart,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck className="text-pink-500 text-3xl" />,
    title: "Consultation & Booking",
    description: "We understand your story & rituals.",
  },
  {
    icon: <FaPalette className="text-rose-500 text-3xl" />,
    title: "Moodboard & Shot Planning",
    description: "We curate styling & key moments.",
  },
  {
    icon: <FaCamera className="text-blue-500 text-3xl" />,
    title: "Shoot Days",
    description: "Relax & enjoy. We’ll capture everything.",
  },
  {
    icon: <FaEdit className="text-purple-500 text-3xl" />,
    title: "Editing & Delivery",
    description: "All photos & videos via drive + printed album.",
  },
  {
    icon: <FaHeart className="text-red-500 text-3xl" />,
    title: "Forever Memories",
    description: "Relive your big day whenever you want.",
  },
];

const OurProcess: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          <span className="text-pink-500">Our Process</span>
        </h2>

        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-pink-200  md:block"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* Icon bubble */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-pink-300 rounded-full shadow-md shrink-0">
                  {step.icon}
                </div>

                {/* Step content */}
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
