import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosInstance from "@/utils/axiosConfig";

const Slideshow = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null); // Ref for Slider
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Media query to update window width dynamically
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get("/carousel/all");

        if (response.data && response.data.data) {
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

  // Filter images based on window width and imageType
  const filteredImages = images.filter((image) =>
    windowWidth < 600 ? image.imageType === "mobile" : image.imageType === "Desktop"
  );

  return (
    <div className="w-full overflow-hidden relative ">
      {isLoading ? (
        // Shadow loading effect
        <div className="w-full h-[500px] flex justify-center items-center">
          <div className="w-full h-full bg-gray-400 animate-pulse">
            {/* Add your shimmer background */}
          </div>
        </div>
      ) : filteredImages.length > 0 ? (
        <>
          {/* Slider */}
          <Slider {...settings} ref={sliderRef}>
            {filteredImages.map((each, index) => (
              <div
                key={index}
                className="w-full  flex justify-center items-center "
              >
                <img
                  className="w-full h-full object-cover  rounded-lg"
                  src={each.imageUrl}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>

          {/* Custom Circle Indicators */}
          <div className="absolute bottom-4 w-full flex justify-center items-center">
            {filteredImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentSlide ? "bg-white" : "bg-gray-400"
                  }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-[500px] flex justify-center items-center">
          <p>No images available for this screen size.</p>
        </div>
      )}
    </div>
  );
};

export default Slideshow;









// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axiosInstance from "@/utils/axiosConfig";

// const Slideshow = () => {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const sliderRef = useRef(null); // Ref for Slider

//   useEffect(() => {
//     // Fetch images from the API
//     const fetchImages = async () => {
//       try {
//         const response = await axiosInstance.get("/carousel/all");
//         if (response.data && response.data.data) {
//           setImages(response.data.data.map((item) => item.imageUrl));
//         }
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (_, next) => setCurrentSlide(next),
//     draggable: true,
//   };

//   const goToSlide = (index) => {
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="w-full max-h-[500px] overflow-hidden relative">
//       {isLoading ? (
//         // Shadow loading effect
//         <div className="w-full h-[500px] flex justify-center items-center">
//           <div className="w-full h-full bg-gray-400 animate-pulse">
//             {/* Add your shimmer background */}
//           </div>
//         </div>
//       ) : images.length > 0 ? (
//         <>
//           {/* Slider */}
//           <Slider {...settings} ref={sliderRef}>
//             {images.map((each, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[500px] flex justify-center items-center"
//               >
//                 <img
//                   className="w-full h-full object-cover"
//                   src={each}
//                   alt={`Slide ${index + 1}`}
//                 />
//               </div>
//             ))}
//           </Slider>

//           {/* Custom Circle Indicators */}
//           <div className="absolute bottom-4 w-full flex justify-center items-center">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentSlide ? "bg-white" : "bg-gray-400"
//                   }`}
//                 onClick={() => goToSlide(index)}
//               ></div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="w-full h-[500px] flex justify-center items-center">
//           <p>No images available.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Slideshow;
