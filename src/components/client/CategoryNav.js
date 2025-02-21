// components/CategoryNav.js
import React from "react";

const CategoryNav = ({
  categories,
  activeCategory,
  fetchImagesFromDrive,
  toggleDropdown,
  dropdownVisible,
  setDropdownVisible,
}) => {

  return (
    <div className="mb-6">
      <ul className="flex flex-wrap gap-4 justify-center">
        {categories.slice(0, 4).map((category, index) => (
          <li
            key={index}
            className={`px-4 py-2 rounded-full cursor-pointer shadow-sm transition duration-300 ease-in-out text-sm font-semibold ${
              activeCategory === category.name
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => fetchImagesFromDrive(category.images, category.name)}
          >
            {category.name}
          </li>
        ))}


        {categories.length > 4 && (
          <li className="relative">
            <div
              className="px-4 py-2 rounded-full cursor-pointer shadow-sm bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out text-sm font-semibold"
              onClick={toggleDropdown}
            >
              More
            </div>

            {dropdownVisible && (
              <ul className="absolute mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                {categories.slice(4).map((category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-200 text-sm ${
                      activeCategory === category.name ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      fetchImagesFromDrive(category.images, category.name);
                      setDropdownVisible(false);
                    }}
                  >
                    {category.name || "-"}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoryNav;
