"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "./nav/Nav";
import styles from "./style.module.scss";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={`bg-white px-8 py-5 flex items-center justify-between w-full`}>
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-wide text-black">
          PK
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-[16px] font-medium text-gray-800">
          <Link href="/">home</Link>
          <Link href="/client">client</Link>
          <a href="/galleries" target="_blank" rel="noopener noreferrer">gallery</a>
          <Link href="/booking">booking</Link>
        </div>

        {/* CTAs + Burger */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-gray-500 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-600 transition"
          >
            log in
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
          >
            sign up
          </Link>

          {/* Burger Toggle */}
          <div
            onClick={() => setIsActive(!isActive)}
            className={`ml-4 z-[100] relative bg-white p-2 rounded-full ${styles.button}`}
          >
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
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
    </>
  );
}