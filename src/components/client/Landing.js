import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="bg-[white] text-center px-4 pt-10 pb-14">
      <Head>
        <title>PK Photography | Client Portal</title>
        <meta name="description" content="Client portal for viewing, downloading, and sharing PK Photography albums." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
        {`Welcome to the client portal. Here is where you can view, download, and share your photos. OH! you can also order prints if you'd like :). Please contact me for your password or any other assistance needed!`}
      </p>
    </section>
  );
}