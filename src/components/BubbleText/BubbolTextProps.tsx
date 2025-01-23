// import React from "react";
// import styles from "./bubble.module.css";

// interface BubbleTextProps {
//   text: string;
//   id?: string; // Optional id prop
// }

// const BubbleText: React.FC<BubbleTextProps> = ({ text, id }) => {
//   return (
//     <h2
//       id={id} // Pass the id prop to the h2 element
//       className="text-center text-5xl font-thin text-black mt-10"
//     >
//       {text.split("").map((child, idx) => (
//         <span className={styles.hoverText} key={idx}>
//           {child}
//         </span>
//       ))}
//     </h2>
//   );
// };

// export { BubbleText };

import React from "react";
import styles from "./bubble.module.css";

interface BubbleTextProps {
  text: string;
  id?: string; // Optional id prop for the section
}

const BubbleText: React.FC<BubbleTextProps> = ({ text, id }) => {
  return (
    <h2
      id={id} // Set the id for the section
      className="text-center text-5xl font-thin text-black mt-10"
    >
      <a
        href={`#${id}`} // Create a clickable link to the section
        className="hover:underline cursor-pointer"
      >
        {text.split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </a>
    </h2>
  );
};

export { BubbleText };
