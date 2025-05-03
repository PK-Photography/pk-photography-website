"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow Styles
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
      style={{ right: "-40px", position: "absolute", top: "50%", transform: "translateY(-50%)" }}
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
      style={{ left: "-40px", position: "absolute", top: "50%", transform: "translateY(-50%)" }}
      aria-label="Previous"
    >
      <FaChevronLeft />
    </button>
  );
};

const reviews = [
  {
    text: "Great photography and editing service.Mr Prabhakar was very Cooperative and obliging. The photographer (Aman T.) was very complaisant and patient. We are really happy with their services",
    name: "Akshata",
    username: "@jamietechguru00",
  },
  {
    text: "We had an amazing experience shooting with them. Prabhakar was very cooperative and made us feel comfortable throughout the shoot. Overall, I would definitely recommend PK photography!",
    
    name: "Vaidehi Sonavane",
    username: "@jamietechguru00",
  },
  {
    text: "Had an amazing shoot and absolutely love my photos! He made me feel super comfortable and even though it was our first time shooting together he knew exactly how to shoot me and which angles would work for me. I would highly recommend booking your next portfolio shoot with him. The photos are very well shot and I can’t wait to see the final edits.",
    
    name: "Ashish Gandecha",
    username: "@jjsmith",
  },
  {
    text: "Photos turned out really nice (corporate shots), make-up artist provided was great, a lot of flexibility. Studio is a makeshift one in an apartment But it works for the purpose. don’t expect a posh commercial studio though.",
    
    name: "Madhu Karnani",
    username: "@morganleewhiz",
  },
  {
    text: "I had a great experience with Prabhakar at PK Photography. I had professional headshots taken and I am not usually very comfortable in front of the camera. Prabhakar took time to make sure that I was comfortable and let me see the photos in real time on an iPad. He guided me to help make sure that the poses captured the photos I was looking for. It was a good experience and I am very pleased with the photos.",
    
    name: "April Yetsko",
    username: "@caseyj",
  }
];

const Reviews = () => {
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
        <h2 className="text-4xl font-bold text-[#0f1110] mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-10">
          Trusted by professionals, creatives, and businesses alike.
        </p>

        <Slider {...settings}>
          {reviews.map((review, index) => {
            const [expanded, setExpanded] = useState(false);
            const showToggle = review.text.length > 200;
            const previewText = review.text.slice(0, 200);

            return (
              <div key={index} className="px-4 mb-6">
                <div className="bg-white shadow-lg rounded-xl p-6 h-full min-h-[360px] flex flex-col justify-between text-left">
                  <div className="mb-4">
                    <p className="text-gray-800 text-base leading-relaxed">
                      {expanded || !showToggle ? review.text : `${previewText}...`}
                    </p>
                    {showToggle && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-sm mt-2 text-[#0f1110] font-medium underline hover:opacity-80 transition"
                      >
                        {expanded ? "See Less" : "See More"}
                      </button>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f1110]">{review.name}</p>
                    <p className="text-xs text-gray-500 mb-1">{review.username}</p>
                    <div className="flex space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;