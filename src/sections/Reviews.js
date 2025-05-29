"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow styles
const arrowBase = "text-2xl transition duration-200 ease-in-out";
const activeArrow = "text-[#0f1110] hover:text-[#1a1a1a]";
const disabledArrow = "text-gray-300 cursor-not-allowed";

// Custom Arrows
const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  const isDisabled = currentSlide >= slideCount - 1;
  return (
    <button
      onClick={onClick}
      className={`${arrowBase} ${isDisabled ? disabledArrow : activeArrow}`}
      disabled={isDisabled}
      style={{
        right: "-40px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      aria-label="Next"
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;
  return (
    <button
      onClick={onClick}
      className={`${arrowBase} ${isDisabled ? disabledArrow : activeArrow}`}
      disabled={isDisabled}
      style={{
        left: "-40px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      aria-label="Previous"
    >
      <FaChevronLeft />
    </button>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedStates, setExpandedStates] = useState([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data || []);
        setExpandedStates(Array(data.length || 0).fill(false));
      })
      .catch((err) => console.error("Failed to fetch reviews", err));
  }, []);

  const toggleExpand = (index) => {
    const updated = [...expandedStates];
    updated[index] = !updated[index];
    setExpandedStates(updated);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-20 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0f1110] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Based on real reviews from our Google profile
        </p>

        {reviews.length > 0 ? (
          <Slider {...settings}>
            {reviews.map((review, index) => {
              const expanded = expandedStates[index];
              const showToggle = review.text.length > 200;
              const previewText = review.text.slice(0, 200);

              return (
                <div key={index} className="px-4 mb-6">
                  <div className="bg-white shadow-lg rounded-xl p-6 h-full min-h-[360px] flex flex-col justify-between text-left">
                    <div className="mb-4">
                      <p className="text-gray-800 text-base leading-relaxed">
                        {expanded || !showToggle
                          ? review.text
                          : `${previewText}...`}
                      </p>
                      {showToggle && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-sm mt-2 text-[#0f1110] font-medium underline hover:opacity-80 transition"
                        >
                          {expanded ? "See Less" : "See More"}
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#0f1110]">
                          {review.author_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {review.relative_time_description}
                        </p>
                        <div className="flex space-x-1 text-yellow-500 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} size={14} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <p className="text-gray-400">Loading reviews...</p>
        )}

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://g.page/r/CVhvUcwRhP2GEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0f1110] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition"
          >
            Leave us a review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
