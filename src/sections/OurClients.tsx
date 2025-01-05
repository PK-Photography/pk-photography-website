// import React from "react";

// const OurClients: React.FC = () => {
//   const logos = [
//     "/clients/yt.png",
//     "/clients/tiktok.png",
//     "/clients/google.png",
//     "/clients/netflx.png",

//   ];

//   return (

//     <div className="overflow-hidden bg-transparent py-10 p-10">
//       <div
//         className="flex items-center animate-marquee whitespace-nowrap hover:pause-marquee"
//         style={{ animation: "marquee 20s linear infinite" }}
//       >
//         {logos.map((logo, index) => (
//           <img
//             key={index}
//             src={logo}
//             alt={`Client Logo ${index + 1}`}
//             className="h-16 mx-4 object-contain"
//           />
//         ))}
//       </div>
//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(100%);
//           }
//           to {
//             transform: translateX(-100%);
//           }
//         }
//         .pause-marquee {
//           animation-play-state: paused !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default OurClients;

import React from "react";

const OurClients: React.FC = () => {
  const logos = [
    "/clients/c1.webp",
    "/clients/c2.webp",
    "/clients/c3.webp",
    "/clients/c4.webp",
    "/clients/c5.webp",
    "/clients/c6.webp",
    // "/clients/c7.webp",
    "/clients/c8.webp",
    "/clients/c9.webp",
    "/clients/c10.webp",
    "/clients/c11.webp",
    "/clients/c12.webp",
    "/clients/c13.webp",
    "/clients/c14.webp",
  ];

  return (
    <div className="overflow-hidden bg-transparent py-10 p-10">
      <div
        className="flex items-center animate-marquee whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="h-16 mx-4 object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default OurClients;
