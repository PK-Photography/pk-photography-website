// import Image from "next/image";
// import React from "react";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";

// interface Card {
//   title: string;
//   description: string;
//   src: string;
// }

// const cardData: Card[] = [
//   {
//     title: "Aspiring Models",
//     description:
//       "Build a professional modeling portfolio that gets you noticed. Whether you're starting out or updating your book, we create stunning images that showcase your versatility and confidence.",
//     src: "/pricing/PKP_7172.jpg",
//   },
//   {
//     title: "Actors & Actresses",
//     description:
//       "Your portfolio is your first impression in the industry. Get high-quality headshots and cinematic portraits that capture your range, expressions, and personality for casting directors.",
//     src: "/pricing/PKP_2826.jpg",
//   },
//   {
//     title: "Creative Professionals",
//     description:
//       "Zipline warehouses offer end-to-end fulfillment services for advanced storage and supply chain management.",
//     src: "/pricing/cover.jpg",
//   },
//   {
//     title: "Personal Portfolio",
//     description:
//       "Whether for social media, matrimonial purposes, maternity shoots, or personal branding, get professionally captured portraits that highlight your personality and story.",
//     src: "/pricing/PKP_7172.jpg",
//   },
// ];

// const PortfolioGrid: React.FC = () => {
//   return (
//     <div className="bg-[#f5f5f5] min-h-screen flex items-center justify-center px-10 py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-4xl">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md overflow-hidden transition-transform hover:scale-105 p-4"
//           >
//             <h3 className="text-base font-semibold text-gray-800">
//               {card.title}
//             </h3>
//             <div className="overflow-hidden mt-2">
//               <Image
//                 src={card.src}
//                 alt={card.title}
//                 width={500} // Set appropriate width
//                 height={500} // Set appropriate height
//                 className="w-full h-60 object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <p className="text-[#A3A3A3] text-xs font-semibold mt-2">
//                 {card.description}
//               </p>
//             </div>
//             <div className="flex gap-2 px-4 pb-4">
//               <button className="text-black hover:text-gray-800 bg-[#f5f5f5] p-2">
//                 <MdArrowBack size={15} />
//               </button>
//               <button className="text-black hover:text-gray-800 bg-[#f5f5f5] p-2">
//                 <MdArrowForward size={15} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PortfolioGrid;



import Image from "next/image";
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
      "Step into the spotlight with confidence. We help you build a stunning modeling portfolio that reflects your style and versatility. Whether you're just starting out or refreshing your book, our shoots are designed to help you stand out to agencies and brands.",
    src: "/photos/ForModelsthumbnail.jpg",
  },
  {
    title: "Actors & Actresses",
    description:
      "Your portfolio is your first audition. Get cinematic headshots and expressive portraits that showcase your personality, emotional range, and presence—perfect for casting directors, production houses, or talent scouts.",
    src: "/photos/ActorAndActressThumbnail.jpg",
  },
  {
    title: "Creative Professionals",
    description:
      "Build a brand that speaks without words. Ideal for entrepreneurs, artists, designers, and freelancers—this session focuses on strong, clean visuals that help you tell your story, enhance your personal branding, and stand out on LinkedIn or your website.",
    src: "/photos/ForcreativeProfessionalthumbnail.jpg",
  },
  {
    title: "Personal Portfolio",
    description:
      "Portraits that reflect who you are. Whether it's for social media, matrimonial profiles, maternity memories, or personal branding, we create expressive and refined portraits that celebrate your individuality, milestones, and personal style.",
    src: "/photos/Forpersonalusethumbnail.jpg",
  },
];


const PortfolioGrid: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex items-center justify-center px-4 md:px-10 py-10">
      <div className="grid grid-cols-2 gap-6 md:gap-16 max-w-5xl w-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden transition-transform hover:scale-105 p-4 w-full"
          >
            <h3 className="text-base font-semibold text-gray-800">{card.title}</h3>
            <div className="overflow-hidden mt-2">
              <Image
                src={card.src}
                alt={card.title}
                width={500} // Auto scales
                height={500}
                className="w-full h-48 md:h-60 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-[#A3A3A3] text-xs font-semibold mt-2">{card.description}</p>
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
