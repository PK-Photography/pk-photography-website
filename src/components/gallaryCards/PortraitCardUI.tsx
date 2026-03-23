import React from "react";
import Image from "next/image";

type PortraitCardProps = {
  person: {
    id: number;
    name: string;
    tagline: string;
    description: string;
    image: string;
  };
};

function PortraitCardUI({ person }: PortraitCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-60">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{person.name}</h2>
        <h3 className="text-lg text-gray-600 mb-4">{person.tagline}</h3>
        <p className="text-gray-700 mb-4">{person.description}</p>
        <div className="flex justify-around">
          <button className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-whatsapp"></i>
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-facebook"></i>
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortraitCardUI;