"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { menuSlide, fadeInUp } from "../anim";
import Link1 from "./Link/Link1";
import Curve from "./Curve/Curve";
import Footer from "./Footer/Footer";
import axiosInstance from "@/utils/axiosConfig";
import { toast } from "react-hot-toast";

interface User {
  fullName: string;
}

const navItems = [
  { title: "Home", href: "/" },
  { title: "Clients", href: "/client" },

  { title: "Gallery", href: "/galleries" },
  { title: "Services", href: "/services" },
  { title: "Bookings", href: "/booking" },
];

const extraLinks = [
  { title: "Talents", href: "/talents" },
  { title: "Blogs", href: "https://pkblogs-dev.onrender.com" },
  { title: "Careers", href: "/careers" },
  { title: "Signup", href: "/signup" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axiosInstance
        .get<{ success: boolean; data: User }>("/user/profile")
        .then((res) => {
          if (res.data.success) {
            setUser(res.data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/login");
    toast.success("Logout Successful!");
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.navSection}>
          <div className={styles.navLeft}>
            <p className={styles.logo}>PK</p>
            <div className={styles.navLinks}>
              {navItems.map((data, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" animate="visible">
                  <Link1
                    key={index}
                    data={{ ...data, index }} // ✅ Fixed TypeScript error by passing index
                    isActive={selectedIndicator === data.href}
                    setSelectedIndicator={setSelectedIndicator}
                  />
                </motion.div>
              ))}
            </div>
            <div className={styles.speciality}>
              <p className={styles.specialityTitle}>OUR SPECIALITY</p>
              <p className={styles.specialityText}>
                Fashion | Events | Corporates | Live Streaming | Talent Agency
              </p>
            </div>
          </div>
          <div className={styles.navRight}>
            <p className={styles.workWithUs}>WORK WITH US</p>
            <div className={styles.extraLinks}>
              {extraLinks.map((link, index) => (
                <motion.div key={index} variants={fadeInUp} initial="hidden" animate="visible">
                  <Link1
                    key={index}
                    data={{ ...link, index }} // ✅ Fixed TypeScript error by passing index
                    isActive={selectedIndicator === link.href}
                    setSelectedIndicator={setSelectedIndicator}
                  />
                </motion.div>
              ))}
            </div>

            {/* ✅ Smooth Bottom-to-Up Animation */}
            <motion.div
              className={styles.contact}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className={styles.sayHello}>SAY HELLO</p>
              <p className={styles.contactInfo}>+91 8889766739</p>
              <p className={styles.contactInfo}>info@pkphotography.in</p>
            </motion.div>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <p><strong>500+</strong> Happy Clients</p>
              <p><strong>10+</strong> Years of Experience</p>
              <p><strong>1M+</strong> Photos Captured</p>
              <p><strong>100+</strong> Artists Onboard</p>
            </motion.div>

            <div className={styles.socialLinks}>
              <p>Instagram &nbsp;&nbsp; Linkedin &nbsp;&nbsp; Facebook</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
