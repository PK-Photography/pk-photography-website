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
  username,
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
        <p className="text-sm text-gray-500 mb-2">{username}</p>
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
        <p className="text-gray-700 text-center">{text}</p>
      </div>
    </>
  );
};

export default ReviewCard;
