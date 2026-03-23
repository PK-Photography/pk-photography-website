import React from "react";
import Image from "next/image";

const OurClients: React.FC = () => {
  const logos = [
    "/clients/c1.webp",
    "/clients/c2.webp",
    "/clients/c3.webp",
    "/clients/c4.webp",
    "/clients/c5.webp",
    "/clients/c6.webp",
    "/clients/c8.webp",
    "/clients/c9.webp",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-60">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#0f1110] mb-2">Our Clients</h2>
        <p className="text-lg text-gray-600 mb-10">
          Trusted by leading brands and organizations worldwide
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[160px] h-[80px] flex items-center justify-center border border-gray-100 rounded-md bg-white"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;