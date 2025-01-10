// "use client";

// import React from "react";
// import Image from "next/image";
// import wpLogo from "@/assets/whatsApp-logo.png";

// const customLoader = ({ src }: { src: string }) => {
//   return src; // Return the path as-is
// };

// const WhatsAppIcon: React.FC = () => {
//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <a
//         href="https://wa.me/+918888766739"
//         target="_blank"
//         rel="noopener noreferrer"
//         className=" rounded-full flex justify-center items-center p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300"
//       >
//         <Image
//           loader={customLoader}
//           src={wpLogo}
//           alt="WhatsApp Logo"
//           height={50}
//           width={50}
//           className="p-1"
//         />
//       </a>
//     </div>
//   );
// };

// export default WhatsAppIcon;

"use client";

import React from "react";
import Image from "next/image";
import wpLogo from "@/assets/whatsApp-logo.png";

const customLoader = ({ src }: { src: string }) => {
  return src; // Return the path as-is
};

const WhatsAppIcon: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/+918888766739"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full flex justify-center items-center p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-bounce"
      >
        <Image
          loader={customLoader}
          src={wpLogo}
          alt="WhatsApp Logo"
          height={50}
          width={50}
          className="p-1"
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
