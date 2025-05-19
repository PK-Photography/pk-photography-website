"use client";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState, useRef } from "react";
import PKLogo from "@/assets/logo.webp";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const FooterLink = ({
  text,
  href,
}:
{
  text: string;
  href: string;
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
        style={{}} // Applying link styles
        className="lg:text-xl text-base "
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
        <div className="flex  justify-between lg:flex-nowrap flex-wrap w-full gap-10 lg:gap-10">
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
            </div>
          </div>

          <div className="w-full space-y-5">
            {/* First Row */}
            <div className="flex justify-between w-full gap-10">
              <div>
                <li className="lg:text-lg text-sm list-none font-semibold text-[#2C2D2E] py-2 uppercase">
                  Services
                </li>
                <FooterLink
                  text="Portfolio"
                  href="/galleries"
                />
                <FooterLink
                  text="Portrait"
                  href="/galleries"
                />
                <FooterLink
                  text="Headshot"
                  href="/galleries"
                />
                <FooterLink
                  text="Celebrity"
                  href="/galleries"
                />
                <FooterLink
                  text="Interior"
                  href="/galleries"
                />
                <FooterLink
                  text="E-Commerce"
                  href="/galleries"
                />
              </div>

              <div>
                <li className="lg:text-lg text-sm list-none font-semibold text-[#2C2D2E] py-2 uppercase">
                  Videography
                </li>
                <FooterLink
                  text="Wedding & Events"
                  href="/galleries"
                />
                <FooterLink text="Live Streaming" href="/live-streaming" />
                <FooterLink text="Corporate Ads" href="/galleries" />
                <FooterLink text="Product Ads" href="/galleries" />
                <FooterLink text="Influencer Videos" href="/galleries" />
                <FooterLink text="Design" href="/galleries" />
              </div>

              <div>
                <li className="lg:text-lg text-sm list-none font-semibold text-[#2C2D2E] py-2 uppercase">
                  Navigate
                </li>
                <FooterLink
                  text="Clients"
                  href="/client"
                />
                 <FooterLink
                  text="Booking"
                  href="/booking"
                />
                 <FooterLink
                  text="Gallery"
                  href="/galleries"
                />
                <FooterLink text="Blogs" href="/blogs" />
                <FooterLink
                  text="Careers"
                  href=""
                />
                <FooterLink text="Talent" href="" />
              </div>
            </div>

            <hr className="border-t border-gray-300 my-5" />

            {/* Second Row */}
            <div className="flex justify-between w-full lg:flex-nowrap flex-wrap">
              <div>
                <span className="text-sx list-none  text-[#666666] py-2 ">
                  Want to book with us?
                </span>
                <h3 className="text-sx text-[#2C2D2E] mt-5">
                  General inquiries
                </h3>
                <h2 className="text-xl mt-1 text-[#2C2D2E]">prabhakar@pkphotography.in</h2>
              </div>

              <div>
                <div>
                  <span className="text-sx list-none  text-[#666666] py-2 ">
                    Want to be a member of our talent team?
                  </span>
                  <h3 className="text-sx text-[#2C2D2E] mt-5">
                    Become a Model
                  </h3>
                  <h2 className="text-xl mt-1 text-[#2C2D2E]">Join here</h2>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-5" />

            <div className="flex justify-between w-full lg:flex-nowrap flex-wrap">
              <div>
                <span className="text-sx list-none  text-[#666666] py-2 ">
                  View on maps
                </span>
                <h2 className="text-xl  mt-5">Our Studio</h2>
                <h3 className="text-sx text-[#666666] mt-1">
                  C 1302 EVERSHINE COSMIC <br />
                  Opp. Infiniti Mall, Veera Desai Industrial Estate <br />
                  Andheri West, Mumbai, Maharashtra 400053 <br />
                  Tel: +91 8888766739
                </h3>
              </div>
              <div className="text-start mr-40 ">
                <span className="text-sx list-none  text-[#666666] py-2 ">
                  -
                </span>
                <h2 className="text-xl mt-5">We are active in</h2>
                <h3 className="text-sx text-[#666666] mt-1">
                  Mumbai <br />
                  Dubai <br />
                  Delhi
                </h3>
              </div>
            </div>

            <hr className="border-t border-gray-300 my-5" />
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-6">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </a>
              <span className="text-gray-400">|</span>
              <a href="/refund-policy" className="hover:underline">
                Refund Policy
              </a>
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
