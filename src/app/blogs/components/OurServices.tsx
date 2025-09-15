import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  { label: "Portfolio", image: "/services/portfolio.png", url: "/portfolio" },
  { label: "Editorial", image: "/services/editorial.png", url: "/editorial" },
  { label: "Headshots", image: "/services/headshots.png", url: "/headshots" },
  { label: "Wedding", image: "/services/wedding.png", url: "/wedding" },
];

const OurServices: React.FC = () => {
  const router = useRouter();
  return (
    <div className="mb-10">
      <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative aspect-[16/9] rounded-xl overflow-hidden group"
            onClick={() => router.push(service.url)}
          >
            <Image
              src={service.image}
              alt={service.label}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                {/* {service.label} */}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p
        className="text-sm mt-4 text-black underline cursor-pointer hover:opacity-80"
        onClick={() => router.push("/services")}
      >
        See all
      </p>
    </div>
  );
};

export default OurServices;
