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
      {"join us and start your visual journey".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;