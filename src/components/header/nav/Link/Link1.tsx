import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

// Define the Data type for the data prop
interface Data {
  title: string;
  href: string;
  index: number;
}

// Define the props type for Link1
interface Link1Props {
  data: Data; // Expecting data to be of type Data
  isActive: boolean; // Expecting isActive to be a boolean
  setSelectedIndicator: (href: string) => void; // Expecting a function that takes a string and returns void
}

export default function Link1({ data, isActive, setSelectedIndicator }: Link1Props) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => { setSelectedIndicator(href); }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
