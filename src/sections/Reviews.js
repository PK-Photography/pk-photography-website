"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Optional: Replace this with your ReviewCard component
const ReviewCard = ({ author_name, rating, text }) => (
  <div className="p-4 bg-white text-black rounded-lg shadow-md h-full flex flex-col justify-between">
    <p className="text-lg font-semibold mb-2">{author_name}</p>
    <p className="text-sm text-gray-600 mb-4">Rating: ⭐️ {rating}</p>
    <p className="text-base leading-relaxed">{text}</p>
  </div>
);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error("Failed to fetch Google Reviews", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-6 bg-[#0f1110] text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h2>
      {reviews.length > 0 ? (
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-400">Loading reviews...</p>
      )}
    </div>
  );
};

export default Reviews;