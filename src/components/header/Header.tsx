'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Nav';
import styles from './style.module.scss';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
            <div className={`${styles.dash} ${styles.top}`}></div>
            <div className={`${styles.dash} ${styles.middle}`}></div>
            <div className={`${styles.dash} ${styles.bottom}`}></div>
          </div>
        </div>
      </div>

      {/* Only show Nav when menu is active (on mobile) */}
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
