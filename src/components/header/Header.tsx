"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "./nav/Nav";
import styles from "./style.module.scss";
import { FaUserCircle } from "react-icons/fa";

type User = {
  fullName: string;
  email: string;
  // Add more fields if needed, like image, id, etc.
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <div className="bg-white px-8 py-5 flex items-center justify-between w-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-wide text-black"
        >
          PK
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-[16px] font-medium text-gray-800">
          <Link href="/">Home</Link>
          <Link href="/client">Client</Link>
          <a href="/galleries" rel="noopener noreferrer">
            Gallery
          </a>
          <Link href="/booking">Booking</Link>
        </div>

        {/* CTAs + Burger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <Link
                href="/login"
                className="bg-gray-500 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-600 transition"
              >
                Log in
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-gray-700">
                <FaUserCircle className="text-2xl" />
                <span className="text-sm">Welcome, {user.fullName?.split(" ")[0]}</span>
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
    </>
  );
}