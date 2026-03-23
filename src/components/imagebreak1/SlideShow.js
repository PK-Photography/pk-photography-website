import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosInstance from "@/utils/axiosConfig";
import Image from "next/image";

const Slideshow = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get("/carousel/all");
        if (response.data?.data) {
          setImages(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
    draggable: true,
    lazyLoad: "ondemand",
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
    setCurrentSlide(index);
  };

  const filteredImages =
    images.filter((image) =>
      windowWidth < 600 ? image.imageType === "mobile" : image.imageType === "Desktop"
    ) || [];

  return (
    <div className="w-full overflow-hidden relative h-[500px]">
      {isLoading ? (
        <div className="w-full h-[500px] flex justify-center items-center bg-gray-300 animate-pulse"></div>
      ) : filteredImages.length > 0 ? (
        <>
          <Slider {...settings} ref={sliderRef}>
            {filteredImages.map((each, index) => (
              <div key={index} className="relative w-full flex justify-center items-center h-full">
                <Image
                  src={each.imageUrl}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="100vw"
                />
              </div>
            ))}
          </Slider>

          {/* Custom Indicators */}
          <div className="absolute bottom-4 w-full flex justify-center items-center">
            {filteredImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-[500px] flex justify-center items-center text-gray-600">
          No images available.
        </div>
      )}
    </div>
  );
};

export default Slideshow;
