"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ----------------------------------------
// HARDCODED GOOGLE REVIEW DATA
// ----------------------------------------
const HARDCODED_REVIEWS = [
  {
    author_name: "Nirmesh Raghav",
    profile_photo_url:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We recently hired PK Photography for our Game Changer program in Mumbai on 9th November and we are very much happy with the experience. The entire team was incredibly skilled, professional and attentive throughout the event. They captured every moment beautifully and delivered all the photos and videos right on time. Their promptness, coordination and high-quality work truly stood out. We are extremely satisfied with their service and would highly recommend them to anyone looking for a reliable and talented photography team. Thank you for making our event even more memorable....",
    rating: 5,
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Siddharth Tiwari",
    profile_photo_url:
      "https://randomuser.me/api/portraits/men/44.jpg",
    text: "I had a wonderful experience with Prabhakar Kumar (P K Photography). Despite it being a Sunday and on very short notice, he arranged everything quickly and handled the entire process smoothly. He was extremely patient throughout and delivered the edited photos within a day, which was truly impressive. I would definitely recommend P K Photography to anyone looking for professional and reliable photography services.",
    rating: 5,
    relative_time_description: "1 month ago",
  },
  {
    author_name: "Jessica Mahood",
    profile_photo_url:
      "https://randomuser.me/api/portraits/women/12.jpg",
    text: "The best experience! Super easy booking process, really enjoyable vibe in the studio, finished products are perfect. Would highly recommend for anyone looking to build their portfolio.",
    rating: 4,
    relative_time_description: "3 weeks ago",
  },
  {
    author_name: "Akanksha Madhwani",
    profile_photo_url:
      "https://randomuser.me/api/portraits/women/28.jpg",
    text: "I had my professional portfolio shoot at this studio. Team is cooperative and provided support in having it done. Prabhakar Ji (Photographer) was calm and tried the best possible postures for our shoot.",
    rating: 5,
    relative_time_description: "5 days ago",
  },
];

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
      className={`${arrowBase} ${
        isDisabled ? disabledArrow : activeArrow
      } z-10 sm:!right-[-25px] lg:!right-[-40px] !right-[-12px] `}
      disabled={isDisabled}
      style={{
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
      className={`${arrowBase} ${
        isDisabled ? disabledArrow : activeArrow
      } !z-10 sm:!left-[-25px] lg:!left-[-40px] !left-[-12px]`}
      disabled={isDisabled}
      style={{
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
    // direct injection of hardcoded reviews
    setReviews(HARDCODED_REVIEWS);
    setExpandedStates(Array(HARDCODED_REVIEWS.length).fill(false));
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
    <section className="bg-white py-20 px-4 sm:mx-4 lg:px-9 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0f1110] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Based on real experiences shared by our clients
        </p>

        {reviews.length > 0 ? (
          <Slider {...settings}>
            {reviews.map((review, index) => {
              const expanded = expandedStates[index];
              const showToggle = review.text.length > 200;
              const previewText = review.text.slice(0, 200);

              return (
                <div key={index} className="px-4 mb-6 ">
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

        {/* CTA */}
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