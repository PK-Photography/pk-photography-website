// "use client";

// import React, { useEffect, useState, Suspense } from "react";
// import Header from "@/components/header/Header";
// import Image from "next/image";
// import PKLogo from "@/assets/logo.webp";
// import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
// import { useSearchParams, useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axiosConfig";

// const categories = [
//   "All",
//   "Portfolio",
//   "Portrait",
//   "Headshots",
//   "Editorial",
//   "Celebrity",
//   "Ads",
//   "Wedding",
//   "Boudoir",
//   "E-Commerce",
//   "Food",
//   "Real Estate",
//   "Design",
// ];

// function GalleryContent() {
//   const searchParams = useSearchParams(); // Access query parameters
//   const router = useRouter();
//   const [filteredData, setFilteredData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Get the current category from query parameters
//   const selectedCategory = searchParams.get("category") || "All";

//   // Fetch data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const categoryQuery = selectedCategory === "All" ? "" : `?category=${selectedCategory}`;
//         const response = await axiosInstance.get(`/gallery/all${categoryQuery}`);
//         const { data } = response.data;

//         setFilteredData(data || []);
//       } catch (err) {
//         setError(err.response?.data?.message || err.message || "Failed to fetch data.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedCategory]);

//   // Handle category selection and update the URL
//   const handleCategoryClick = (category) => {
//     const categoryQuery = category === "All" ? "" : `?category=${category}`;
//     router.push(`/galleries${categoryQuery}`);
//   };

//   return (
//     <>
//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => handleCategoryClick(category)}
//             className={`px-4 py-2 rounded-full text-sm sm:text-base ${selectedCategory === category
//               ? "bg-[#292929] text-white"
//               : "bg-gray-200 text-gray-700"
//               }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Gallery */}
//       <div className="container mx-auto px-4 py-8">
//         {isLoading ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
//             {Array.from({ length: 6 }).map((_, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-200 animate-pulse h-40 sm:h-64 rounded-lg"
//               />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">{error}</p>
//         ) : filteredData.length > 0 ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
//             {filteredData.map((item) => (
//               <div
//                 key={item._id}
//                 className="relative group overflow-hidden rounded-lg shadow-lg"
//               >
//                 {/* Image */}
//                 <img
//                   src={item.imageUrl}
//                   alt={item.imageName}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
//                 />

//                 {/* Hover Effect */}
//                 <div
//                   className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300"
//                 >
//                   <h3 className="text-white text-sm sm:text-lg font-bold">
//                     {item.imageName}
//                   </h3>
//                   <p className="text-white text-xs sm:text-sm">{item.subtitle}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No data found for the selected category.</p>
//         )}
//       </div>
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="px-4 py-4 sm:px-8 sm:py-6">
//       <Image
//         src={PKLogo}
//         alt="Saas Logo"
//         height={80}
//         width={120}
//         className="mx-auto mb-4 sm:mb-6"
//       />

//       <Header />
//       <BubbleText text="Gallery" />

//       <Suspense fallback={<p>Loading...</p>}>
//         <GalleryContent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;




"use client";

import React, { useEffect, useState, Suspense } from "react";
import Header from "@/components/header/Header";
import Image from "next/image";
import PKLogo from "@/assets/logo.webp";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import { useSearchParams, useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosConfig";

const categories = [
  "All",
  "Portfolio",
  "Portrait",
  "Headshots",
  "Editorial",
  "Celebrity",
  "Ads",
  "Wedding",
  "Boudoir",
  "E-Commerce",
  "Food",
  "Real Estate",
  "Design",
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [visibleCategories, setVisibleCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedCategory = searchParams.get("category") || "All";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const categoryQuery =
          selectedCategory === "All" ? "" : `?category=${selectedCategory}`;
        const response = await axiosInstance.get(`/gallery/all${categoryQuery}`);
        const { data } = response.data;

        setFilteredData(data || []);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Failed to fetch data."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    const categoryQuery = category === "All" ? "" : `?category=${category}`;
    router.push(`/galleries${categoryQuery}`);
    setIsDropdownOpen(false);
  };

  const updateVisibleCategories = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setVisibleCategories(categories.slice(0, 5));
    } else if (screenWidth >= 640) {
      setVisibleCategories(categories.slice(0, 3));
    } else {
      setVisibleCategories(categories.slice(0, 2));
    }
  };

  useEffect(() => {
    updateVisibleCategories();
    window.addEventListener("resize", updateVisibleCategories);
    return () => window.removeEventListener("resize", updateVisibleCategories);
  }, []);

  const dropdownCategories = categories.filter(
    (category) => !visibleCategories.includes(category)
  );

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {visibleCategories.map((category) => (
          <span
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer pb-2 ${selectedCategory === category
              ? "border-b-2 border-black text-black font-medium"
              : "text-gray-500"
              }`}
          >
            {category}
          </span>
        ))}

        {/* Dropdown for remaining categories */}
        {dropdownCategories.length > 0 && (
          <div className="relative">
            <span
              className="cursor-pointer pb-2 text-gray-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              More..
            </span>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg border rounded-md mt-2 z-10">
                {dropdownCategories.map((category) => (
                  <span
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className="block px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-200 animate-pulse h-40 sm:h-64 rounded-lg"
              />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : filteredData.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {filteredData.map((item) => (
              <div
                key={item._id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.imageName}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-sm sm:text-lg font-bold">
                    {item.imageName}
                  </h3>
                  <p className="text-white text-xs sm:text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No data found for the selected category.
          </p>
        )}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="px-4 py-4 sm:px-8 sm:py-6">
      <Image
        src={PKLogo}
        alt="Saas Logo"
        height={80}
        width={120}
        className="mx-auto mb-4 sm:mb-6"
      />
      <Header />
      <BubbleText text="Gallery" />
      <Suspense fallback={<p>Loading...</p>}>
        <GalleryContent />
      </Suspense>
    </div>
  );
}

export default App;
