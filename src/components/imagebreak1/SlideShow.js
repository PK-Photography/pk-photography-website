

// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slideshow: React.FC = () => {
//   const images = [
//     "carouselLandscape/img1.jpg",
//     "carouselLandscape/img2.jpg",
//     "carouselLandscape/img3.jpg",
//     "carouselLandscape/img4.jpg",
//     "carouselLandscape/img5.jpg",
//     "carouselLandscape/img6.jpg",
//     "carouselLandscape/img7.jpg",
//   ];

//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const sliderRef = useRef<Slider>(null); // Correctly typed ref for Slider

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (current: number, next: number) => setCurrentSlide(next),
//     draggable: true,
//   };

//   const goToSlide = (index: number) => {
//     sliderRef.current?.slickGoTo(index); // Use the ref directly to call slickGoTo
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="w-full max-h-[500px] overflow-hidden relative">
//       {/* Slider */}
//       <Slider {...settings} ref={sliderRef}>
//         {images.map((each, index) => (
//           <div
//             key={index}
//             className="w-full h-[500px] flex justify-center items-center"
//           >
//             <img
//               className="w-full h-full object-cover"
//               src={each}
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </Slider>

//       {/* Custom Circle Indicators */}
//       <div className="absolute bottom-4 w-full flex justify-center items-center">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
//               index === currentSlide ? "bg-white" : "bg-gray-400"
//             }`}
//             onClick={() => goToSlide(index)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  const images = [
    "carouselLandscape/img1.jpg",
    "carouselLandscape/img2.jpg",
    "carouselLandscape/img3.jpg",
    "carouselLandscape/img4.jpg",
    "carouselLandscape/img5.jpg",
    "carouselLandscape/img6.jpg",
    "carouselLandscape/img7.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null); // Ref for Slider

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
      sliderRef.current.slickGoTo(index); // Navigate to the desired slide
    }
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-h-[500px] overflow-hidden relative">
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {images.map((each, index) => (
          <div
            key={index}
            className="w-full h-[500px] flex justify-center items-center"
          >
            <img
              className="w-full h-full object-cover"
              src={each}
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
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
