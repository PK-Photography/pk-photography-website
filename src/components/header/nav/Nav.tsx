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
//     title: "Book Now",
//     href: "/booking",
//   },
//   {
//     title: "Blogs",
//     href: "https://pkblogs-dev.onrender.com/",
//   },
//   {
//     title: "Admin",
//     href: "/Admin",
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
//             return (
//               <Link1
//                 key={index}
//                 data={{ ...data, index }}
//                 isActive={selectedIndicator == data.href}
//                 setSelectedIndicator={setSelectedIndicator}
//               ></Link1>
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
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link1 from "./Link/Link1";
import Curve from "./Curve/Curve";
import Footer from "./Footer/Footer";

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
  // {
  //   title: "Admin",
  //   href: "/Admin",
  // },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

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
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                target={isExternal ? "_blank" : "_self"} // Add target attribute
              />
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
