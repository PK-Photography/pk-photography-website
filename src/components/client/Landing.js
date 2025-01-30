import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import Header from "@/components/header/Header";
import PKLogo from "@/assets/logo.webp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>

        <title>PK Photography | Client Portal</title>
        <meta
          name="description"
          content="Welcome to the client portal for PK Photography. View, download, and share your photos or order prints. Contact us for access!"
        />
        <meta name="keywords" content="PK Photography, Client Portal, Photos, Prints, Share Photos, Order Prints" />
        <meta name="author" content="PK Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        <meta property="og:title" content="PK Photography | Client Portal" />
        <meta
          property="og:description"
          content="Explore your photos, share them, and order prints through the PK Photography client portal. Contact us for your password!"
        />
        <meta property="og:image" content="/path-to-default-image.jpg" />
        <meta property="og:url" content="https://pkphotography.com" />
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PK Photography | Client Portal" />
        <meta
          name="twitter:description"
          content="Discover and share your photos with PK Photography. View your gallery, download, or order prints now!"
        />
        <meta name="twitter:image" content="/path-to-default-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={PKLogo} alt="Saas Logo" height={120} width={160} className="pt-5" />


      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center mt-20">
        <div className="flex space-x-4 mt-4">
          <Link href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook alt="Facebook" className="w-6 h-6" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram alt="Instagram" className="w-6 h-6" />
          </Link>
        </div>

        <h1 className="mt-10 text-xl font-bold text-black md:text-3xl">
          PK PHOTOGRAPHY
        </h1>

        <p>
          Welcome to the client portal. Here is where you can view, download, and share your photos.
          OH! You can also order prints if you&apos;d like :). Please contact me for your password
          or any other assistance needed!
        </p>

        <div className="mt-10 space-y-4 text-sm text-gray-500 md:text-base">
          <div className="flex items-center justify-center space-x-2">
            <AiOutlineGlobal className="w-5 h-5" />
            <Link href="" target="_blank" rel="noreferrer" className="hover:underline">
              pkphotography.com
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CgMail className="w-5 h-5" />
            <Link href="mailto:pkphotography@gmail.com" className="hover:underline">
              pkphotography@gmail.com
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
