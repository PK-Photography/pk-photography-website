import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Card {
  title: string;
  description: string;
  src: string;
}

const cardData: Card[] = [
  {
    title: "Aspiring Models",
    description:
      "Build a professional modeling portfolio that gets you noticed. Whether you're starting out or updating your book, we create stunning images that showcase your versatility and confidence.",
    src: "/pricing/PKP_7172.jpg",
  },
  {
    title: "Actors & Actresses",
    description:
      "Your portfolio is your first impression in the industry. Get high-quality headshots and cinematic portraits that capture your range, expressions, and personality for casting directors.",
    src: "/pricing/PKP_2826.jpg",
  },
  {
    title: "Creative Professionals",
    description:
      "Zipline warehouses offer end-to-end fulfillment services for advanced storage and supply chain management.",
    src: "/pricing/cover.jpg",
  },
  {
    title: "Personal Portfolio",
    description:
      "Whether for social media, matrimonial purposes, maternity shoots, or personal branding, get professionally captured portraits that highlight your personality and story.",
    src: "/pricing/PKP_7172.jpg",
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex items-center justify-center px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-4xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden transition-transform hover:scale-105 p-4"
          >
            <h3 className="text-base font-semibold text-gray-800">
              {card.title}
            </h3>
            <div className="overflow-hidden mt-2">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-[#A3A3A3] text-xs font-semibold mt-2">
                {card.description}
              </p>
            </div>
            <div className="flex gap-2 px-4 pb-4">
              <button className="text-black hover:text-gray-800 bg-[#f5f5f5] p-2">
                <MdArrowBack size={15} />
              </button>
              <button className="text-black hover:text-gray-800 bg-[#f5f5f5] p-2">
                <MdArrowForward size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
