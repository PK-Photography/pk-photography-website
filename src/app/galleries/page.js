"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import { useSearchParams, useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosConfig";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdNavigateNext } from "react-icons/md";

const categories = [
  "All",
  "Portfolio",
  "Portrait",
  "Headshots",
  "Editorial",
  "Celebrity",
  // "Ads",
  "Wedding",
  // "Boudoir",
  // "E-Commerce",
  "Food",
  // "Real Estate",
  // "Design",
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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
        setError(err.response?.data?.message || err.message || "Failed to fetch data.");
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

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % filteredData.length);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {visibleCategories.map((category) => (
          <span
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer pb-2 ${
              selectedCategory === category
                ? "border-b-2 border-black text-black font-medium"
                : "text-gray-500"
            }`}
          >
            {category}
          </span>
        ))}
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

      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {filteredData.map((item, index) => (
              <div
                key={item._id}
                onClick={() => openModal(index)}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.imageName}
                  width={90}
                  height={90}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-sm sm:text-lg font-bold truncate max-w-full">
                    {item.imageName}
                  </h3>
                  <p className="text-white text-xs sm:text-sm truncate max-w-full">
                    {item.subtitle}
                  </p>
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

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key={modalIndex}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 left-4 text-white text-2xl"
              onClick={() => setModalOpen(false)}
            >
              <MdClose />
            </button>

            <motion.img
              src={filteredData[modalIndex]?.imageUrl}
              alt={filteredData[modalIndex]?.imageName}
              className="max-h-[80vh] w-auto object-contain"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            <div className="text-center text-white mt-4">
              <h3 className="text-lg font-semibold">
                {filteredData[modalIndex]?.imageName}
              </h3>
              <p className="text-sm text-gray-300">
                {filteredData[modalIndex]?.subtitle}
              </p>
            </div>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
              onClick={nextImage}
            >
              <MdNavigateNext />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <div className="px-4 py-4 sm:px-8 sm:py-6">
      <BubbleText text="Gallery" />
      <Suspense fallback={<p>Loading...</p>}>
        <GalleryContent />
      </Suspense>
    </div>
  );
}

export default App;