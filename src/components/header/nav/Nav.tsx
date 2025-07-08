import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const { data: session } = useSession();

const navItems = [
  { label: "Home", href: "/" },
  { label: "Clients", href: "/client" },
  { label: "Services", href: "/services" },
  { label: "Bookings", href: "/booking" },
  { label: "Live Streaming", href: "/live-streaming" },
];

const rightLinks = [
  { label: "Talents", href: "/talents" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  ...(!session?.user ? [{ label: "Signup", href: "/signup" }] : []),
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/itspkphotography.in/",
  },
  { label: "Twitter", href: "https://x.com/pkphotographym" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pkphotography/",
  },
];

const Nav = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
    } else {
      router.push(href);
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0f1110] text-white font-[Work Sans] overflow-y-auto"
    >
      {/* Top Row */}
      <div className="relative w-full px-6 pt-6 h-20">
        <p className="text-white text-4xl font-semibold md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          PK
        </p>
        <button
          onClick={onClose}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 z-50"
          aria-label="Close"
        >
          <svg
            width="60"
            height="60"
            fill="none"
            stroke="white"
            strokeWidth="1"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-10 w-full flex-1">
        {/* Left Nav */}
        <motion.div
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="md:col-span-3 flex flex-col justify-end w-full pb-6 pt-8"
        >
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="group w-full cursor-pointer py-4"
              onClick={() => handleNavClick(item.href)}
            >
              <p className="text-5xl md:text-9xl xl:text-9xl font-light tracking-tight group-hover:text-gray-400 transition-colors duration-300">
                {item.label}
              </p>
              <div className="relative h-2 mt-2">
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#2c2c2c]" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gray-400 to-gray-700 group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Info */}
        <div className="md:col-span-1 pl md:pl-16 h-full pb-6">
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.7 },
              },
            }}
            className="flex flex-col justify-between h-full text-base sm:text-lg md:text-xl items-start md:items-end"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mb-10 w-full"
            >
              <div className="space-y-2 w-full">
                {rightLinks.map((link, i) => (
                  <p
                    key={i}
                    className="hover:text-gray-400 cursor-pointer text-left"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </p>
                ))}

                {session?.user && (
                  <p
                    className="hover:text-red-400 cursor-pointer text-left mt-4"
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      onClose(); // Close menu after logout
                    }}
                  >
                    Logout
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mb-10 w-full"
            >
              <p className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-widest mb-2 text-left">
                SAY HELLO
              </p>
              <p className="text-xl mb-1 text-left">+91 8889766739</p>
              <p className="text-xl text-gray-300 text-left">
                info@pkphotography.in
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mb-10 w-full"
            >
              <p className="text-xl text-gray-300 mb-1 text-left">
                <strong>500+</strong> Happy Clients
              </p>
              <p className="text-xl text-gray-300 mb-1 text-left">
                <strong>10+</strong> Years of Experience
              </p>
              <p className="text-xl text-gray-300 mb-1 text-left">
                <strong>1M+</strong> Photos Captured
              </p>
              <p className="text-xl text-gray-300 text-left">
                <strong>100+</strong> Artists Onboard
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-lg text-gray-500 space-x-6 text-left w-full"
            >
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
