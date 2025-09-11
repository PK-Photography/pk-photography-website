import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/assets/logo.json";

const ControlledLottie = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(true);

  // Handle responsive width
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Initialize Lottie animation
  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    animRef.current = anim;

    return () => {
      anim.destroy();
    };
  }, []);

  // Scroll listener to toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollTop < 50); // Hide if scrolled down even slightly
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: isMobile ? "250px" : "300px",
        height: "300px",
        marginTop: "-140px",
        marginLeft: isMobile ? "-65px" : "-50px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: visible ? "auto" : "none", // Prevent interaction when hidden
      }}
    />
  );
};

export default ControlledLottie;
