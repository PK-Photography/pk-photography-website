import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/galleries" },
  { label: "Clients", href: "/client" },
  { label: "Services", href: "/services" },
  { label: "Bookings", href: "/booking" },
  { label: "Live Streaming", href: "/live-streaming" },
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
  const { data: session } = useSession();
  const router = useRouter();

  const rightLinks = [
    { label: "Talents", href: "/talents" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    ...(!session?.user ? [{ label: "Signup", href: "/signup" }] : []),
  ];

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
      className="fixed inset-0 z-[100] bg-[#0f1110] text-white font-[Work Sans] overflow-y-auto md:overflow-hidden"
    >
      {/* Top Bar */}
      <div className="relative w-full px-6 pt-6 h-20 flex items-center justify-between">
        <div className="flex-1 flex justify-center items-center">
          <button
            onClick={() => {
              router.push("/");
              onClose();
            }}
            className="focus:outline-none"
            aria-label="Go to Home"
          >
            <p className="text-white text-4xl font-semibold mx-auto">PK</p>
          </button>
        </div>
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

      {/* Main Layout Container */}
      <div className="flex flex-col h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1 gap-8 px-4 md:px-10 w-full">
          {/* Left Section - Vertically Centered Nav */}
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
            className="md:col-span-3 flex flex-col justify-center w-full overflow-hidden"
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
                className="group w-full cursor-pointer py-2"
                onClick={() => handleNavClick(item.href)}
              >
                <p className="text-5xl md:text-7xl xl:text-8xl font-light tracking-tight group-hover:text-gray-400 transition-colors duration-300">
                  {item.label}
                </p>
                <div className="relative h-2 mt-1">
                  <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[#2c2c2c]" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gray-400 to-gray-700 group-hover:w-full transition-all duration-500 ease-in-out" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section - Clean Vertical Stack */}
          <div className="md:col-span-1 md:pl-10 flex h-full">
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
              className="flex flex-col items-start justify-start md:justify-between h-full w-full text-left md:text-right"
            >
              {/* Top Links */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="space-y-2"
              >
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
                    className="hover:text-red-400 cursor-pointer mt-4"
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                      onClose();
                    }}
                  >
                    Logout
                  </p>
                )}
              </motion.div>

              {/* Contact */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8 text-left"
              >
                <p className="text-base font-semibold uppercase tracking-widest mb-1">
                  SAY HELLO
                </p>
                <a
                  href="tel:+918889766739"
                  className="text-lg hover:text-gray-400 block"
                >
                  +91 8889766739
                </a>
                <a
                  href="mailto:info@pkphotography.in"
                  className="text-lg text-gray-300 hover:text-gray-400 block break-all"
                  style={{ wordBreak: "break-all" }}
                >
                  info@pkphotography.in
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8 text-left"
              >
                <p className="text-lg text-gray-300 mb-1">
                  <strong>500+</strong> Happy Clients
                </p>
                <p className="text-lg text-gray-300 mb-1">
                  <strong>10+</strong> Years of Experience
                </p>
                <p className="text-lg text-gray-300 mb-1">
                  <strong>1M+</strong> Photos Captured
                </p>
                <p className="text-lg text-gray-300">
                  <strong>100+</strong> Artists Onboard
                </p>
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="pb-12 mt-8 text-lg text-gray-500 flex flex-wrap gap-4 md:justify-start text-left"
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
      </div>
    </motion.div>
  );
};

export default Nav;
