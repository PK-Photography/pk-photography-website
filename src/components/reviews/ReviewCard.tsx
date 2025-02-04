import React from "react";

interface ReviewCardProps {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  imageSrc,
  name,
  // username,
}) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg max-w-sm bg-white">
        {/* <img
          src={imageSrc}
          alt={name}
          className="w-16 h-16 rounded-full mb-4"
        /> */}
        <h3 className="text-lg font-semibold">{name}</h3>
        {/* <p className="text-sm text-gray-500 mb-2">{username}</p> */}
        <div className="flex mb-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFC107"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.425 8.2 1.192-5.934 5.787 1.401 8.181L12 18.897l-7.335 3.875 1.401-8.181-5.934-5.787 8.2-1.192z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 text-center">
          {/* {text} */}
          {text.substring(0, 200)}
          {text.length > 200 && "..."}
        </p>
      </div>
    </>
  );
};

export default ReviewCard;

// import React, { useState } from "react";

// interface ReviewCardProps {
//   text: string;
//   imageSrc: string;
//   name: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ text, imageSrc, name }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const maxWords = 20; // Adjust the word limit as needed

//   const handleReadMore = () => {
//     window.open("https://g.co/kgs/PAiYZ7A", "_blank");
//   };

//   const truncatedText = text.split(" ").slice(0, maxWords).join(" ") + "...";

//   return (
//     <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white w-72 h-80">
//       {/* Image */}
//       {/* <img
//         src={imageSrc}
//         alt={name}
//         className="w-20 h-20 rounded-full mb-4 object-cover"
//       /> */}
//       {/* Name */}
//       <h3 className="text-lg font-semibold">{name}</h3>
//       {/* Star Rating */}
//       <div className="flex mb-2">
//         {[...Array(5)].map((_, index) => (
//           <svg
//             key={index}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#FFC107"
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 .587l3.668 7.425 8.2 1.192-5.934 5.787 1.401 8.181L12 18.897l-7.335 3.875 1.401-8.181-5.934-5.787 8.2-1.192z" />
//           </svg>
//         ))}
//       </div>
//       {/* Review Text */}
//       <p className="text-gray-700 text-center mb-2">
//         {isExpanded ? text : truncatedText}
//       </p>
//       {/* Read More Button */}
//       {!isExpanded && text.split(" ").length > maxWords && (
//         <button
//           onClick={handleReadMore}
//           className="text-blue-500 hover:underline text-sm"
//         >
//           Read More
//         </button>
//       )}
//     </div>
//   );
// };

// export default ReviewCard;
