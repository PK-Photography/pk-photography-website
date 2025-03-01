// "use client";
// import React, { useState } from "react";
// import styles from "./style.module.scss";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { menuSlide } from "../anim";
// import Link1 from "./Link/Link1";
// import Curve from "./Curve/Curve";
// import Footer from "./Footer/Footer";

// const navItems = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "Client",
//     href: "/client",
//   },
//   {
//     title: "Gallery",
//     href: "/galleries",
//   },
//   {
//     title: "Bookings",
//     href: "/booking",
//   },
//   {
//     title: "Blogs",
//     href: "https://pkblogs-dev.onrender.com/",
//   },
//   {
//     title: "Sign-Up",
//     href: "/signup",
//   },

// ];

// export default function Nav() {
//   const pathname = usePathname();
//   const [selectedIndicator, setSelectedIndicator] = useState(pathname);

//   return (
//     <motion.div
//       variants={menuSlide}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       className={styles.menu}
//     >
//       <div className={styles.body}>
//         <div
//           onMouseLeave={() => {
//             setSelectedIndicator(pathname);
//           }}
//           className={styles.nav}
//         >
//           <div className={styles.header}>
//             <p>PKPhotography</p>
//           </div>
//           {navItems.map((data, index) => {
//             const isExternal = data.href.startsWith("http");
//             return (
//               <Link1
//                 key={index}
//                 data={{ ...data, index }}
//                 isActive={selectedIndicator == data.href}
//                 setSelectedIndicator={setSelectedIndicator}
//                 target={isExternal ? "_blank" : "_self"} // Add target attribute
//               />
//             );
//           })}
//         </div>
//         <Footer />
//       </div>
//       <Curve />
//     </motion.div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { menuSlide } from "../anim";
import Link1 from "./Link/Link1";
import Curve from "./Curve/Curve";
import Footer from "./Footer/Footer";
import axiosInstance from "@/utils/axiosConfig";
import { toast } from "react-hot-toast";

interface User {
  fullName: string;
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Client",
    href: "/client",
  },
  {
    title: "Service",
    href: "/services",
  },
  {
    title: "Gallery",
    href: "/galleries",
  },
  {
    title: "Bookings",
    href: "/booking",
  },
  {
    title: "Blogs",
    href: "https://pkblogs-dev.onrender.com/",
  },
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
    toast.success("Logout Sucessfull!");
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
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>PKPhotography</p>
          </div>
          {navItems.map((data, index) => {
            const isExternal = data.href.startsWith("http");
            return (
              <Link1
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                target={isExternal ? "_blank" : "_self"}
              />
            );
          })}
          {user ? (
            <div className={styles.profileSection}>
              <p className={styles.username}>
                Welcome Back {user.fullName || "User"}!
              </p>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </div>
          ) : (
            <Link1
              data={{
                title: "Sign-Up",
                href: "/signup",
                index: navItems.length,
              }}
              isActive={selectedIndicator === "/signup"}
              setSelectedIndicator={setSelectedIndicator}
            />
          )}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
