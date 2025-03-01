import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const images = [
        { src: "/pricing/PKP_7172.jpg" },
        { src: "/pricing/PKP_2826.jpg" },
        { src: "/pricing/cover.jpg" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (_, next) => setCurrentSlide(next),
        draggable: true,
    };

    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
        setCurrentSlide(index);
    };

    return (
        <div className="container mx-auto px-6 py-12 overflow-hidden relative">
            <Slider {...settings} ref={sliderRef}>
                {images.map((each, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <img
                            className="w-full h-[519.55px] object-cover rounded-lg"
                            src={each.src}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>

            {/* Custom Circle Indicators */}
            <div className="absolute bottom-4 w-full flex justify-center items-center">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentSlide
                            ? "bg-[#7B61FF]"
                            : "bg-gray-300"
                            }`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
