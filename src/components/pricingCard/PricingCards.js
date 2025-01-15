import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const PricingCards = ({ packages }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Scrolling container only for mobile */}
        <div className="overflow-x-auto md:overflow-hidden scrollbar-hide">
          <div className="flex md:justify-center gap-6 md:gap-10 ">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex-shrink-0 bg-gray-100 rounded-lg shadow-lg p-6  transform transition-transform duration-200 hover:scale-105 "
                  }`}
                style={{
                  minWidth: "300px",
                  maxWidth: "350px",
                  backgroundColor: index === 1 ? "white" : "",
                  marginTop: index === 1 ? "0" : "0",
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {pkg.title}
                </h3>
                <p className="text-[#2874A6] font-bold text-2xl mt-2 text-center">
                  {pkg.price}
                </p>
                <div className="mt-4">
                  <Slider {...settings}>
                    {pkg.images.map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt={`${pkg.title} Image ${i + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </Slider>
                </div>
                <h4 className="text-lg font-semibold mt-6">{pkg.shootType}</h4>
                <p className="text-gray-600 mt-2">{pkg.duration}</p>
                {pkg.looks && <p className="text-gray-600">{pkg.looks}</p>}
                {pkg.details && (
                  <p className="text-gray-600 mt-2">{pkg.details}</p>
                )}
                <p className="text-gray-600 mt-2">{pkg.inclusions}</p>
                <p className="text-gray-600 mt-2">{pkg.deliverables}</p>
                <p className="text-sm text-gray-500 mt-1">{pkg.note}</p>
                <Link href="/booking">
                  <button className="mt-6 w-full bg-[#2874A6] text-white py-2 rounded-lg hover:bg-[#1b4b7a] transform transition-transform duration-200 hover:scale-105">
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;





// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";

// const PricingCards = ({ packages }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     <section className="py-24">
//       <div className="max-w-6xl mx-auto px-">
//         {/* <h2 className="text-3xl font-bold text-center mb-8">Shoot Pricing</h2> */}
//         <div className="flex justify-center space-x- gap-10">
//           {packages.map((pkg, index) => (
//             <div
//               key={index}
//               className={`bg-gray-100 rounded-lg shadow-lg p-6 transform transition-all duration-300 ${
//                 index === 1 ? "scale-105 z-10 -mt-6" : "scale-100"
//               }`}
//               style={{
//                 minWidth: "300px",
//                 maxWidth: "350px",
//                 backgroundColor: index === 1 ? "white" : "",
//                 marginTop: index === 1 ? "-20px" : "0",
//               }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 text-center">
//                 {pkg.title}
//               </h3>
//               <p className="text-[#2874A6] font-bold text-2xl mt-2 text-center">
//                 {pkg.price}
//               </p>
//               <div className="mt-4">
//                 <Slider {...settings}>
//                   {pkg.images.map((image, i) => (
//                     <img
//                       key={i}
//                       src={image}
//                       alt={`${pkg.title} Image ${i + 1}`}
//                       className="w-full h-48 object-cover rounded-lg"
//                     />
//                   ))}
//                 </Slider>
//               </div>
//               <h4 className="text-lg font-semibold mt-6">{pkg.shootType}</h4>
//               <p className="text-gray-600 mt-2">{pkg.duration}</p>
//               {pkg.looks && <p className="text-gray-600">{pkg.looks}</p>}
//               {pkg.details && <p className="text-gray-600 mt-2">{pkg.details}</p>}
//               <p className="text-gray-600 mt-2">{pkg.inclusions}</p>
//               <p className="text-gray-600 mt-2">{pkg.deliverables}</p>
//               <p className="text-sm text-gray-500 mt-1">{pkg.note}</p>
//               <Link href="/booking">
//                 <button className="mt-6 w-full bg-[#2874A6] text-white py-2 rounded-lg hover:bg-[#1b4b7a] transform transition-transform duration-200 hover:scale-105">
//                   Book Now
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingCards;
