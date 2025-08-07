"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "./nav/Nav";
import styles from "./style.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import ControlledLottie from "../logo/ControlledLottie";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="relative w-full">
      <div className=" px-8 py-5 flex items-center justify-between w-full">
        <div className="flex ">
          {/* Fixed wrapper */}
          <div className="fixed top-0 left-0 z-50  px-8 py-7 flex items-center  ">
            {/* Logo */}
            <Link href="/">
              <ControlledLottie />
            </Link>
          </div>
        </div>

        {/* Navigation (not fixed) */}
        <div className="hidden md:flex gap-8 text-[16px] font-medium text-gray-800 ml-[140px]">
          {/* You might need to tweak ml-[140px] to offset the fixed logo */}
          <Link href="/">Home</Link>
          <Link href="/client">Client</Link>
          <a href="/galleries" rel="noopener noreferrer">
            Gallery
          </a>
          <Link href="/booking">Booking</Link>
          <Link href="/live-streaming">Live Streaming</Link>
        </div>

        {/* CTAs + Burger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {!session?.user ? (
              <Link
                href="/login"
                className="bg-gray-500 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-600 transition"
              >
                Log in
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-gray-700">
                <FaUserCircle className="text-2xl" />
                <span className="text-sm">
                  Welcome, {session.user.name?.split(" ")[0] || "User"}
                </span>
              </div>
            )}
          </div>

          {/* Burger Toggle */}
          <div
            onClick={() => setIsActive(!isActive)}
            className={`ml-4 relative p-2 ${styles.button}`}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            >
              <div className={`${styles.dash} ${styles.top}`}></div>
              <div className={`${styles.dash} ${styles.middle}`}></div>
              <div className={`${styles.dash} ${styles.bottom}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <AnimatePresence mode="wait">
        {isActive && <Nav onClose={() => setIsActive(false)} />}
      </AnimatePresence>
    </div>
  );
}
