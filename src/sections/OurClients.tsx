import React from "react";

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
    "/clients/c10.webp",
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium mb-8">Trusted by the best</h2>

        {/* Logo Grid */}
        <div className="bg-white rounded-2xl py-8 px-4 flex flex-wrap justify-center gap-x-10 gap-y-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-10 md:h-12 max-w-[120px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;