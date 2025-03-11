"use client";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { useState, useRef } from "react";
import PKLogo from "@/assets/logo.webp";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
// Scrambling effect component for the links
const FooterLink = ({
  text,
  href,
}: // className,
{
  text: string;
  href: string;
  // className: string;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [linkText, setLinkText] = useState(text);

  const scramble = () => {
    let pos = 0;
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const CHARS = "!@#$%^&*():{};|,.<>/?";

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setLinkText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setLinkText(text); // Reset to the original text after scrambling
  };

  return (
    <li className="text-[#666666] text-sm my-4 list-none transform hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer">
      <a
        href={href}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        style={{ textDecoration: "none", fontSize: "1.2rem" }} // Applying link styles
        // className={className}
      >
        {linkText}
      </a>
    </li>
  );
};

export const Footer = () => {
  const Year = new Date().getFullYear();

  const linkStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textDecoration: "none",
    fontSize: "1.6rem",
  };

  const iconStyle = {
    fontSize: "24px",
  };

  return (
    <footer className="relative bg-[#eae8e4]">
      <div className=" w-full overflow-hidden  container mx-auto px-4 py-8">
        <div className="flex  justify-between  w-full gap-20">
          
            <div className="flex flex-col gap-5">
              <Image
                src={PKLogo}
                alt="PK Photography Logo"
                height={100}
                width={180}
              />
              <p className="text-lg text-gray-800">
                Capturing Life’s Moments with Passion and Precision
              </p>
             <a href="/booking">
              <button className="border border-black px-6 py-2 rounded-3xl text-lg w-44 hover:bg-black hover:text-white transition">
                BOOK NOW
              </button>
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/itspkphotography.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaInstagram className="text-2xl text-white hover:text-gray-600" />
                </a>

                <a
                  href="https://www.youtube.com/@itspkphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaYoutube className="text-2xl text-white hover:text-gray-600" />
                </a>

                <a
                  href="https://www.facebook.com/pkfashionphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaFacebook className="text-2xl text-white hover:text-gray-600" />
                </a>

                <a
                  href="https://www.linkedin.com/company/pkphotography/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-2 rounded-full"
                >
                  <FaLinkedinIn className="text-2xl text-white hover:text-gray-600" />
                </a>

                {/* <a
                href="mailto:prabhakar@pkphotography.in"
                className="bg-black p-2 rounded-full"
              >
                <FaEnvelope className="text-2xl text-white hover:text-gray-600" />
              </a> */}
              </div>
            </div>
         
            <div className="w-full space-y-5">
      {/* First Row */}
      <div className="flex justify-between w-full">
        <div>
          <li className="text-lg list-none font-semibold text-[#2C2D2E] py-2 uppercase">Services</li>
          <FooterLink text="Headshots" href="https://pkphotography.in/corporate-headshots/" />
          <FooterLink text="Portrait" href="https://pkphotography.in/portrait-gallery/" />
          <FooterLink text="Wedding & Events" href="https://pkphotography.in/gallery/" />
          <FooterLink text="Portfolio" href="https://pkphotography.in/portfolio-gallery/" />
          <FooterLink text="Interior" href="https://pkphotography.in/interior-design/" />
        </div>

        <div>
          <li className="text-lg list-none font-semibold text-[#2C2D2E] py-2 uppercase">Videography</li>
          <FooterLink text="Wedding & Events" href="https://pkphotography.in/wedding/" />
          <FooterLink text="Live Streaming" href="#" />
          <FooterLink text="Corporate Ads" href="#" />
          <FooterLink text="Product Ads" href="#" />
          <FooterLink text="Influencer Videos" href="#" />
        </div>

        <div>
          <li className="text-lg list-none font-semibold text-[#2C2D2E] py-2 uppercase">Navigate</li>
          <FooterLink text="Client" href="https://pkphotography.io/client" />
          <FooterLink text="Studio" href="#" />
          <FooterLink text="Latest Work" href="#" />
          <FooterLink text="Careers" href="https://pkphotography.in/career/" />
          <FooterLink text="Pricing" href="#" />
          <FooterLink text="Booking" href="https://pkphotography.io/booking" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-5" />

      {/* Second Row */}
      <div className="flex justify-between w-full">
        <div>
          <span className="text-sx list-none  text-[#666666] py-2 ">Want to book with us?</span>
         <h3 className="text-sx text-[#2C2D2E] mt-5">General inquiries</h3>
         <h2 className="text-xl mt-1">prabhakar@pkphotography.in</h2>
        </div>

        <div>
        <div>
          <span className="text-sx list-none  text-[#666666] py-2 ">Want to be a member of our talent team?</span>
         <h3 className="text-sx text-[#2C2D2E] mt-5">Become a Model</h3>
         <h2 className="text-xl mt-1">Join here</h2>
        </div>
        </div>
      </div>
       <hr className="border-t border-gray-300 my-5" />

       {/*=================== third row  */}
       <div className="flex justify-between w-full">
        <div>
          <span className="text-sx list-none  text-[#666666] py-2 ">View on maps</span>
         <h2 className="text-xl mt-5">Our Studio</h2>
         <h3 className="text-sx text-[#666666] mt-1">C 1302 EVERSHINE COSMIC <br />
Opp. Infiniti Mall, Veera Desai Industrial Estate <br />
Andheri West, Mumbai, Maharashtra 400053 <br />
Tel: +91 8888766739</h3>
        </div>
        <div>
          <span className="text-sx list-none  text-[#666666] py-2 ">-</span>
         <h2 className="text-xl mt-5">We are active in</h2>
         <h3 className="text-sx text-[#666666] mt-1">Mumbai <br />
Dubai <br />
Delhi</h3>
        </div>

       
      </div>
    </div>
        </div>

        <h6 className="text-start text-[#666666] mt-10 text-base">
          Copyright &copy; {Year} PKPhotography. All rights reserved. 
        </h6>
      </div>
    </footer>
  );
};

// "use client";
// import {
//   FaEnvelope,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import Image from "next/image";
// import PKLogo from "@/assets/logo.webp";

// export const Footer = () => {
//   return (
//     <footer className="bg-[#F6F4F2] text-black">
//       <div className=" py-12 px-6 container mx-auto w-full  ">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
//         {/* Left Section */}
//         <div className="flex flex-col gap-4">
//           <Image src={PKLogo} alt="PK Photography Logo" height={50} width={180} />
//           <p className="text-lg text-gray-800">Capturing Life’s Moments with Passion and Precision</p>
//           <button className="border border-black px-6 py-2 rounded-md text-lg w-44 hover:bg-black hover:text-white transition">
//             BOOK NOW
//           </button>
//           <div className="flex gap-4 mt-4">
//             <FaInstagram className="text-2xl hover:text-gray-600" />
//             <FaYoutube className="text-2xl hover:text-gray-600" />
//             <FaFacebook className="text-2xl hover:text-gray-600" />
//             <FaLinkedinIn className="text-2xl hover:text-gray-600" />
//             <FaEnvelope className="text-2xl hover:text-gray-600" />
//           </div>
//         </div>

// <div >
//         {/* Services & Videography Section */}
//         <div className="flex w-full justify-between gap-20">
//           <div>
//             <h4 className="font-semibold mb-2">Services</h4>
//             {['Portfolio', 'Portrait', 'Headshot', 'Celebrity', 'Interior'].map(item => (
//               <p key={item} className="text-gray-700 hover:underline cursor-pointer">{item}</p>
//             ))}
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2">Videography</h4>
//             {['Wedding & Events', 'Live Streaming', 'Corporate Ads', 'Product Ads', 'Influencer Videos'].map(item => (
//               <p key={item} className="text-gray-700 hover:underline cursor-pointer">{item}</p>
//             ))}
//           </div>
//           <div>
//           <h4 className="font-semibold mb-2">Navigate</h4>
//           {['Clients', 'Bookings', 'Gallery', 'Blogs', 'Careers', 'Talent'].map(item => (
//             <p key={item} className="text-gray-700 hover:underline cursor-pointer">{item}</p>
//           ))}
//         </div>
//         </div>

//         {/* Studio Information Section */}
//         <div className="space-y-4">
//           <div>
//             <p className="font-semibold">General inquiries</p>
//             <p>prabhakar@pkphotography.in</p>
//           </div>

//           <div>
//             <p className="font-semibold">Our Studio</p>
//             <p>C 1302 EVERSHINE COSMIC, Opp. Infiniti Mall</p>
//             <p>Veera Desai Industrial Estate, Andheri West, Mumbai</p>
//             <p>Maharashtra 400053</p>
//             <p>Tel: +91 8888766739</p>
//           </div>

//           <div>
//             <p className="font-semibold">We are active in</p>
//             <p>Mumbai, Dubai, Delhi</p>
//           </div>
//         </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-10 flex justify-between items-center text-gray-700 text-sm">
//         <p>© 2025 PK Photography. All rights reserved.</p>
//       </div>
//       </div>
//     </footer>
//   );
// };
