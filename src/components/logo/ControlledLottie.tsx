import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/assets/logo.json";

const ControlledLottie = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    animRef.current = anim;

    anim.goToAndStop(secondsToFrame(5), true);

    return () => {
      anim.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const anim = animRef.current;
      if (!anim) return;

      const scrollingDown = currentY > lastScrollY;
      const scrollingUp = currentY < lastScrollY;
      const nearTop = currentY < 10;

      if (scrollingDown && isAtTop) {
        playFromTo(anim, 0, secondsToFrame(8));
        setIsAtTop(false);
      } else if (scrollingUp && nearTop && !isAtTop) {
        // Play from 0 to 5 seconds directly on scroll up to top
        playFromTo(anim, 0, secondsToFrame(5));
        setIsAtTop(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isAtTop]);

  return (
    <div
      ref={containerRef}
      style={{
        width: isMobile ? "250px" : "300px",
        height: "300px",
        marginTop: "-140px",
        marginLeft: isMobile ? "-65px" : "-50px",
      }}
    />
  );
};

const secondsToFrame = (seconds: number, fps = 60) => seconds * fps;

const playFromTo = (anim: AnimationItem, from: number, to: number) => {
  anim.playSegments([from, to], true);
};

export default ControlledLottie;
