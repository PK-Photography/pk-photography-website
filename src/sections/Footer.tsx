'use client';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState, useRef } from "react";

// Scrambling effect component for the links
const FooterLink = ({ text, href, className }: { text: string, href: string, className: string }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [linkText, setLinkText] = useState(text);

  const scramble = () => {
    let pos = 0;
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const CHARS = "!@#$%^&*():{};|,.<>/?";

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("").map((char, index) => {
        if (pos / CYCLES_PER_LETTER > index) {
          return char;
        }
        const randomCharIndex = Math.floor(Math.random() * CHARS.length);
        const randomChar = CHARS[randomCharIndex];
        return randomChar;
      }).join("");

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
    <li
      className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer"
    >
      <a
        href={href}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        style={{ textDecoration: 'none', fontSize: '1.6rem' }} // Applying link styles
        className={className}
      >
        {linkText}
      </a>
    </li>
  );
};

export const Footer = () => {
  const Year = new Date().getFullYear();

  const linkStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textDecoration: 'none',
    fontSize: '1.6rem',
  };

  const iconStyle = {
    fontSize: '24px', 
  };

  return (
    <footer className="relative">
      <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-[#eae8e4]">
        <div className="grid lg:grid-cols-5 gap-5 sm:grid-cols-1 p-20 bg-[#eae8e4] text-black">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl text-black font-semibold">PK Photography</h2>
            <p className="text-xl">Capturing Life’s Moments with Passion and Precision</p>
          </div>

          <div>
            <li className="text-4xl list-none font-semibold text-black py-2 uppercase text-center">
              Services
            </li>
            <FooterLink
              text="Headshots"
              href="https://pkphotography.in/corporate-headshots/"
              className="text-black"
            />
            <FooterLink
              text="Portrait"
              href="https://pkphotography.in/portrait-gallery/"
              className="text-black"
            />
            <FooterLink
              text="Wedding & Events"
              href="https://pkphotography.in/gallery/"
              className="text-black"
            />
            <FooterLink
              text="Portfolio"
              href="https://pkphotography.in/portfolio-gallery/"
              className="text-black"
            />
            <FooterLink
              text="Interior"
              href="https://pkphotography.in/interior-design/"
              className="text-black"
            />
          </div>

          <div>
            <li className="text-4xl list-none font-semibold text-black py-2 uppercase text-center">
              Videography
            </li>
            <FooterLink
              text="Wedding & Events"
              href="https://pkphotography.in/wedding/"
              className="text-black"
            />
            <FooterLink
              text="Live Streaming"
              href="#"
              className="text-black"
            />
            <FooterLink
              text="Corporate Ads"
              href="#"
              className="text-black"
            />
            <FooterLink
              text="Product Ads"
              href="#"
              className="text-black"
            />
            <FooterLink
              text="Influencer Videos"
              href="#"
              className="text-black"
            />
          </div>

          <div>
            <li className="text-4xl list-none font-semibold text-black py-2 uppercase text-center">
              Useful Links
            </li>
            <FooterLink
              text="Sign-Up"
              href="/sign-up"
              className="text-black"
            />
            <FooterLink
              text="Careers"
              href="https://pkphotography.in/career/"
              className="text-black"
            />
            <FooterLink
              text="FAQs"
              href="https://pkphotography.in/faqs/"
              className="text-black"
            />
            <FooterLink
              text="Pricing"
              href="#"
              className="text-black"
            />
            <FooterLink
              text="Booking"
              href="https://pkphotography.in/book-session/"
              className="text-black"
            />
            <FooterLink
              text="Privacy Policy"
              href="https://pkphotography.in/privacy-policy/"
              className="text-black"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-4xl font-semibold text-black py-2 uppercase text-center">
              Contact
            </h2>
            <p className="text-[16px] my-4">
              <p style={linkStyle}>Email:</p> <p className="text-2xl">prabhakar@photography.com</p>
            </p>
            <p className="text-[16px] my-4">
              <p style={linkStyle}>Phone:</p>
              <p className="text-2xl">+91 8888766739</p>
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/pkfashionphotography"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                style={iconStyle}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/itspkphotography.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                style={iconStyle}
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/pkphotographym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                style={iconStyle}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/pkphotography/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out"
                style={iconStyle}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <h6 className="text-center text-black text-lg">
          Copyright &copy; {Year} PKPhotography. All rights reserved.
        </h6>
      </div>
    </footer>
  );
};
