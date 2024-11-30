import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
      <BubbleText />
  
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-black mt-10">
      {"Visual Stories".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;