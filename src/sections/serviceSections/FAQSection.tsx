'use client';

import Image from 'next/image';
import { FC } from 'react';

const FAQSection: FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 min-h-screen overflow-hidden">
        {/* Illustration */}
        <div className="w-full flex justify-center">
          <Image
            src="/faqs.png"
            alt="FAQ Illustration"
            width={250}
            height={400}
            priority
          />
        </div>

        {/* FAQ Content */}
        <div
          className="w-full md:w-1/2 space-y-6 overflow-y-auto max-h-[500px] p-4"
          id="scrollable-content"
        >
          <h2 className="text-lg font-bold text-gray-700">FAQ’s</h2>

          <div>
            <h3 className="text-lg font-semibold text-red-500">
              What makes PK Photography unique in Andheri, Mumbai?
            </h3>
            <p className="text-gray-600 mt-2">
              At PK Photography, we combine technical expertise with a personalized touch to
              capture your true essence. Our Andheri studio offers a relaxed yet professional
              environment that reflects the vibrant energy of Mumbai.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold bg-yellow-200 p-2 rounded">
              What portfolio photography services do you offer at PK Photography?
            </h3>
            <p className="text-gray-600 mt-2">
              We provide a comprehensive portfolio photography service that includes a
              personalized consultation, expert photoshoot with creative lighting and pose
              guidance, and high-end retouching to ensure your images truly represent your brand.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold bg-yellow-200 p-2 rounded">
              How does the portfolio photography process work at PK Photography?
            </h3>
            <p className="text-gray-600 mt-2">
              Our process starts with a one-on-one consultation and custom mood board creation.
              Then, we conduct your photoshoot at our state-of-the-art Andheri studio using
              creative lighting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
