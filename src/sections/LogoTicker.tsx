'use client';
import styles from './page.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef, useCallback } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const LogoTicker = () => {

  const firstText=useRef(null);
  const secondText=useRef(null);
  const slider=useRef(null);
  const xPercentRef = useRef(0);
  const directionRef = useRef<number>(-1);

  const animation = useCallback(() => {
    if (xPercentRef.current <= -100) {
      xPercentRef.current = 0;
    }
    if (xPercentRef.current > 0) {
      xPercentRef.current = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercentRef.current });
    gsap.set(secondText.current, { xPercent: xPercentRef.current });

    xPercentRef.current += 0.05 * directionRef.current;
    requestAnimationFrame(animation);
  }, []);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          directionRef.current = e.direction * -1;
        },
      },
      x: "-500px",
    })
    requestAnimationFrame(animation);
  },[animation]);


  return (
    // <div className="py-8 md:py-12 bg-white">
    //   <div className="container px-0">
    //     <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
         
      <div className="py-8 md:py-12 bg-white">
        <main className={styles.main}>
        <div className={styles.sliderContainer}>
     <div ref={slider} className={styles.slider}>
      <p ref={firstText}>Photography Videography Content</p>
      <p ref={secondText}>Photography Videography Content</p>
     </div>
     </div>
     </main>
</div>

    //     </div>
    //   </div>
    // </div>
  );
};
