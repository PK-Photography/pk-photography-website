import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import PKLogo from "@/assets/logo.webp";

export default function Landing() {
  return (
    <section className="bg-[white] text-center px-4 pt-10 pb-14">
      <Head>
        <title>PK Photography | Client Portal</title>
        <meta name="description" content="Client portal for viewing, downloading, and sharing PK Photography albums." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Social icons */}
      <div className="flex justify-center gap-4 mb-4 text-gray-600">
        <Link href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="w-5 h-5 hover:text-black transition" />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="w-5 h-5 hover:text-black transition" />
        </Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src={PKLogo} alt="PK Photography Logo" width={160} height={120} />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-4">
        PK PHOTOGRAPHY
      </h1>

      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
        {`Welcome to the client portal. Here is where you can view, download, and share your photos. OH! you can also order prints if you'd like :). Please contact me for your password or any other assistance needed!`}
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-2 text-gray-800 text-sm">
        <div className="flex items-center gap-2">
          <AiOutlineGlobal size={18} />
          <span>pkphotography.com</span>
        </div>
        <div className="flex items-center gap-2">
          <CgMail size={18} />
          <span>pkphotography@gmail.com</span>
        </div>
      </div>
    </section>
  );
}