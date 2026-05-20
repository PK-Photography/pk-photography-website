'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const cx = useRef(0);
  const cy = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      cx.current = e.clientX;
      cy.current = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
    };

    const onEnterHoverable = () => {
      dot.classList.add('expanded');
      ring.classList.add('expanded');
    };
    const onLeaveHoverable = () => {
      dot.classList.remove('expanded');
      ring.classList.remove('expanded');
    };

    const animateRing = () => {
      rx.current += (cx.current - rx.current) * 0.13;
      ry.current += (cy.current - ry.current) * 0.13;
      ring.style.left = `${rx.current}px`;
      ring.style.top  = `${ry.current}px`;
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    document.addEventListener('mousemove', onMove);

    const hoverables = document.querySelectorAll('a, button, .gallery-item, .icon-btn');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onEnterHoverable);
      el.addEventListener('mouseleave', onLeaveHoverable);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onEnterHoverable);
        el.removeEventListener('mouseleave', onLeaveHoverable);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
