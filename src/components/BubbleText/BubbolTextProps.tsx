import React from "react";
import styles from "./bubble.module.css";

interface BubbleTextProps {
  text: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text }) => {
  return (
    <h2 className="text-center text-5xl font-thin text-black mt-10">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export { BubbleText };
