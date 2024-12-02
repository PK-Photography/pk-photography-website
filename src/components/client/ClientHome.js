import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { GoDownload } from "react-icons/go";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  FaCartPlus,
  FaHeart,
  FaDownload,
  FaShareAlt,
  FaPlay,
  FaArrowLeft,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaEnvelope,
  FaCopy,
  FaArrowRight,
  FaShare,
  FaCartArrowDown,
  FaTimes,
} from "react-icons/fa";

const ClientHome = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [slideshowVisible, setSlideshowVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("High Resolution");
  const [columns, setColumns] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  const dropdownRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const url = window.location.pathname;
    const parts = url.split("/");
    const lastId = parts[parts.length - 1];
    console.log("Last ID:", lastId);

    const fetchSelectedCard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/client/cards`
        );
        const selectedCard = response.data.find((card) => card._id === lastId);
        setSelectedCard(selectedCard);
        // console.log("Selected card:", selectedCard);
        setCategories(selectedCard.category || []);

        // Set the first category as the default active category
        if (selectedCard.category && selectedCard.category.length > 0) {
          const firstCategory = selectedCard.category[0];
          setActiveCategory(firstCategory.name); // Set the first category as active
          fetchImagesFromDrive(firstCategory.images, firstCategory.name); // Fetch images for the first category
        }
      } catch (error) {
        console.error("Error fetching selected card:", error);
      }
    };

    fetchSelectedCard();
  }, []);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
        console.log(handleClickOutside);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchImagesFromDrive = useCallback(async (driveLink, categoryName) => {
    if (!driveLink) {
      console.error("No drive link provided.");
      return;
    }

    const folderId = extractFolderId(driveLink);
    if (folderId) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=AIzaSyCZv3XS3cicdPsznsJG7QxF1O_nQWSGoSM`
        );
        const driveImages = response.data.files.map((file, index) => ({
          id: `${categoryName}-${index}`, // Unique ID based on category and index
          highRes: `https://drive.google.com/uc?export=download&id=${file.id}`,
          webSize: `https://drive.google.com/uc?export=download&id=${file.id}&webp=true`,
        }));
        setImages(driveImages);
        setActiveCategory(categoryName);
      } catch (error) {
        console.error("Error fetching images from Google Drive:", error);
      }
    } else {
      console.error("Invalid drive link:", driveLink);
    }
  });

  const extractFolderId = (driveLink) => {
    const match = driveLink.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth <= 480) {
        setColumns(2);
      } else if (window.innerWidth <= 768) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleSlideshow = () => {
    if (images.length > 0) {
      setSlideshowVisible(true);
      setCurrentImageIndex(0); // Start from the first image
      startAutoPlay(); // Start automatic slideshow
    } else {
      alert("No images available for the slideshow.");
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeSlideshow = () => {
    setSlideshowVisible(false);
    stopAutoPlay(); // Stop automatic slideshow
  };

  const startAutoPlay = () => {
    if (autoPlayInterval) return; // Prevent multiple intervals
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    setAutoPlayInterval(interval);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const openModal = (image) => {
    setModalVisible(true);
    setCurrentImage(image);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentImage(null);
  };

  const handleShare = (imageUrl) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this image",
          url: imageUrl,
        })
        .then(() => console.log("Image shared successfully"))
        .catch((error) => console.error("Error sharing image:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  const handleBuyPhoto = (image) => {
    handleAddToCart(image);
    // Optionally redirect to the Cart page
    window.location.href = "/Cart";
  };

  const handleAddToCart = (image) => {
    setCartItems((prevItems) => [...prevItems, image]);
    alert("Photo added to cart!");
  };

  const handleOpenDownloadModal = (image) => {
    setClicked(true);
    setCurrentImage(image);
    setDownloadModalVisible(true);
  };

  const handleCloseDownloadModal = () => {
    setClicked(true);
    setDownloadModalVisible(false);
    // setCurrentImage(null);
    setSelectedSize("High Resolution");
  };

  const handleDownloadPhoto = async () => {
    try {
      // Use the correct download URL based on the selected size
      const downloadUrl =
        selectedSize === "High Resolution"
          ? currentImage.highRes // This should already point to the original size file on Google Drive
          : currentImage.webSize;

      // Create a link element and trigger the download
      const link = document.createElement("a");
      link.href = downloadUrl;
      // link.target = "_blank";
      link.download = `image_${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      handleCloseDownloadModal();
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const handleCopyLink = () => {
    if (currentImage?.id) {
      const websiteLink = `${window.location.origin}/image/${currentImage.id}`;
      navigator.clipboard.writeText(websiteLink);
      alert("Website link copied to clipboard!");
    } else {
      console.error("No image data to copy.");
      alert("Unable to copy. No image selected.");
    }
  };

  const handleSocialShare = (platform) => {
    if (!currentImage?.id) {
      console.error("No image data to share.");
      alert("Unable to share. No image selected.");
      return;
    }

    const websiteLink = `${window.location.origin}/image/${currentImage.id}`;
    const encodedUrl = encodeURIComponent(websiteLink);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/share?url=${encodedUrl}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=Check this out&body=${websiteLink}`;
        break;
      default:
        console.error("Invalid platform for sharing.");
        return;
    }

    window.open(shareUrl, "_blank");
  };

  const handleDownloadAll = async () => {
    if (!images || images.length === 0) {
      alert("No images available to download.");
      return;
    }

    const zip = new JSZip();
    const failedImages = [];

    // Process all images in the selected category
    const fetchPromises = images.map(async (image, index) => {
      const fileId = extractFileIdFromUrl(image.highRes);
      if (!fileId) {
        console.warn(`Failed to extract fileId from URL: ${image.highRes}`);
        failedImages.push(image.highRes);
        return;
      }

      const proxyUrl = `https://client-ra9o.onrender.com/api/download/${fileId}`;
      // console.log('Fetching from proxy URL:', proxyUrl);

      try {
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          console.error(`Failed to fetch ${proxyUrl}:`, response.status);
          failedImages.push(image.highRes);
          return;
        }

        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();

        // Determine a valid file extension
        const defaultExtension = "jpg";
        const fileExtension = image.highRes.split('.').pop().match(/^(jpg|jpeg|png|gif)$/i)
          ? image.highRes.split('.').pop()
          : defaultExtension;

        const fileName = `${activeCategory || "category"}_${index + 1}.${fileExtension}`;
        zip.file(fileName, arrayBuffer); // Add file directly to the zip
      } catch (error) {
        console.error(`Error downloading file: ${image.highRes}`, error);
        failedImages.push(image.highRes);
      }
    });

    // Wait for all fetches to complete
    await Promise.all(fetchPromises);

    // Check if any files were successfully added
    if (Object.keys(zip.files).length === 0) {
      alert("No images were successfully added to the ZIP file.");
      return;
    }

    // Generate and download the ZIP file
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `${activeCategory || "all-images"}.zip`);

    // Log and alert about failed downloads, if any
    if (failedImages.length > 0) {
      console.warn(`Failed to download ${failedImages.length} images.`, failedImages);
      alert("Some images could not be downloaded. Check the console for details.");
    }
  };

  useEffect(() => {
    // Load favorites from localStorage on page load
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (image) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.find((fav) => fav.id === image.id);
      let updatedFavorites;

      if (isFavorited) {
        // Remove the image from favorites
        updatedFavorites = prevFavorites.filter((fav) => fav.id !== image.id);
      } else {
        // Add the image to favorites
        updatedFavorites = [...prevFavorites, image];
      }

      // Save to localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  const toggleFavoritesModal = () => {
    setShowFavoritesModal((prev) => !prev);
  };

  const extractFileIdFromUrl = (url) => {
    const regex = /[?&]id=([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleDownloadFavorites = async () => {
    if (!favorites || favorites.length === 0) {
      alert("No favorite images available to download.");
      return;
    }

    const zip = new JSZip();
    const failedImages = [];

    // Use fetchPromises to download all files
    const fetchPromises = favorites.map(async (image, index) => {
      const fileId = extractFileIdFromUrl(image.highRes);
      if (!fileId) {
        console.warn(`Failed to extract fileId from URL: ${image.highRes}`);
        failedImages.push(image.highRes);
        return;
      }

      const proxyUrl = `https://client-ra9o.onrender.com/api/download/${fileId}`;
      // console.log('Fetching from proxy URL:', proxyUrl);

      try {
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          console.error(`Failed to fetch ${proxyUrl}:`, response.status);
          failedImages.push(image.highRes);
          return;
        }

        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();

        // Ensure a valid file extension
        const defaultExtension = "jpg";
        const fileExtension = image.highRes.split('.').pop().match(/^(jpg|jpeg|png|gif)$/i)
          ? image.highRes.split('.').pop()
          : defaultExtension;

        const fileName = `favorite_${index + 1}.${fileExtension}`;
        zip.file(fileName, arrayBuffer); // Add file directly to the zip
      } catch (error) {
        console.error(`Error downloading file: ${image.highRes}`, error);
        failedImages.push(image.highRes);
      }
    });

    await Promise.all(fetchPromises);

    // If no files were added, show an alert
    if (Object.keys(zip.files).length === 0) {
      alert("No images were successfully added to the ZIP file.");
      return;
    }

    // Generate and download the ZIP file
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "favorite-images.zip");

    // Log failed downloads
    if (failedImages.length > 0) {
      console.warn(`Failed to download ${failedImages.length} images.`, failedImages);
      alert("Some images could not be downloaded. Check the console for details.");
    }
  };



  return (
    <>
      <Head>
        <title>{selectedCard.name || "PK Photography"}</title>
        <meta
          name="description"
          content={`Explore stunning images and categories from ${selectedCard.name || "PK Photography"
            }. Find high-quality pictures organized by categories like ${categories
              .map((category) => category.name)
              .join(", ")}.`}
        />
        <meta
          name="keywords"
          content="PK Photography, Wedding Photos, Slideshow, Image Gallery, Photography Categories"
        />
        <meta name="author" content="PK Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={selectedCard.name || "PK Photography"}
        />
        <meta
          property="og:description"
          content={`View the best moments captured by ${selectedCard.name || "PK Photography"
            }.`}
        />
        <meta property="og:image" content="/path-to-default-image.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-50 shadow-sm">
        <div className="flex items-center">
          <Image src="" alt="Logo" width={40} height={40} className="h-10" />
          <span className="ml-4 text-lg font-bold">
            {selectedCard.name || "PK PHOTOGRAPHY"}
          </span>
        </div>
      </header>

      {/* Title Section */}
      <section className="text-center py-12 bg-pink-50">
        <h1 className="text-4xl font-serif font-light">{selectedCard.name}</h1>
        <p className="text-gray-500 text-sm mt-2">
          {new Date(selectedCard.date).toLocaleDateString()}
        </p>
      </section>

      {/* Categories Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
        <ul className="flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
          {/* Display the first 4 categories */}
          {categories.slice(0, 4).map((category, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-lg cursor-pointer shadow-sm transition duration-300 ease-in-out ${activeCategory === category.name
                  ? "bg-yellow-300 text-black"
                  : "bg-gray-100 hover:bg-gray-300"
                }`}
              onClick={() =>
                fetchImagesFromDrive(category.images, category.name)
              }
            >
              <span className="hover:font-bold transition duration-200">
                {category.name}
              </span>
            </li>
          ))}

          {/* "More" Dropdown for remaining categories */}
          {categories.length > 4 && (
            <li className="relative">
              <div
                className="px-4 py-2 rounded-lg cursor-pointer shadow-sm bg-gray-100 hover:bg-gray-300 transition duration-300 ease-in-out"
                onClick={toggleDropdown}
              >
                More
              </div>
              {dropdownVisible && (
                <ul className="absolute mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  {categories.slice(4).map((category, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-200 ${activeCategory === category.name ? "font-bold" : ""
                        }`}
                      onClick={() => {
                        fetchImagesFromDrive(category.images, category.name);
                        setDropdownVisible(false);
                      }}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>

        {/* Client Page Right-aligned Icons */}
        <ul className="flex space-x-6 text-sm font-semibold text-gray-600 items-center">
          <li
            className="flex items-center space-x-1 hover:text-black cursor-pointer"
            onClick={toggleFavoritesModal}
          >
            <FaHeart />
            <span>Favourite ({favorites.length})</span>
          </li>

          <li
            className="flex items-center space-x-1 hover:text-black cursor-pointer"
            onClick={handleDownloadAll}
          >
            <GoDownload />
            <span>Download All</span>
          </li>
          <li
            className="flex items-center space-x-1 hover:text-black cursor-pointer"
            onClick={handleSlideshow}
          >
            <FaPlay />
            <span>Slideshow</span>
          </li>
          <li className="flex items-center space-x-1 hover:text-black cursor-pointer">
            <Link href="/Cart" className="flex items-center space-x-1">
              <FaCartArrowDown />
              <span>Cart ({cartItems.length})</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* favourite model/page */}
      {showFavoritesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-2xl w-full max-w-lg max-h-screen overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Your Favorite Images
            </h3>
            {favorites.length === 0 ? (
              <p className="text-gray-500 text-center">
                You haven&apos;t added any favorites yet.
              </p>
            ) : (
              <>
                <ul className="grid grid-cols-2 gap-6 overflow-y-auto max-h-80 p-2">
                  {favorites.map((image) => (
                    <li key={image.id} className="relative group">
                      <Image
                        src={image.highRes}
                        alt="Favorite"
                        width={150}
                        height={100}
                        className="rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                      />
                      <button
                        onClick={() => toggleFavorite(image)}
                        className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 w-full py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-green-600 shadow-md transition duration-300"
                  onClick={handleDownloadFavorites}
                >
                  Download All Favorites
                </button>
              </>
            )}
            <button
              className="mt-4 w-full py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-green-600 shadow-md transition duration-300"
              onClick={toggleFavoritesModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* here we are fetching the drive images and Display Images */}
      <ul
        className="gamma-gallery masonry"
        style={{
          columnCount: columns,
          columnGap: "6px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {images.map((image, index) => (
          <li
            key={index}
            onClick={() => openModal(image)}
            className="relative overflow-hidden group"
            style={{
              marginBottom: "6px",
              breakInside: "avoid",
            }}
          >
            <Image
              src={image.highRes}
              layout="intrinsic"
              width={800}
              height={500}
              style={{ display: "block", width: "100%" }}
            />
            <div className="absolute inset-0 flex justify-end items-end gap-2 p-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <button
                className={`p-2 ${favorites.find((fav) => fav.id === image.id)
                    ? "text-red-600"
                    : "text-white"
                  } hover:text-red-600`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(image);
                }}
              >
                <FaHeart className="w-5 h-5" />
              </button>

              <button
                className="text-white p-2 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDownloadModal(image);
                }}
              >
                <GoDownload className="w-5 h-5" />
              </button>

              <button
                className="text-white p-2 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(image); // Set the selected image
                  setShowModal(true); // Then show the modal
                }}
              >
                <FaShare className="w-5 h-5" />
              </button>

              {showModal && currentImage && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
                  onClick={() => setShowModal(false)} // Close modal when clicking outside
                >
                  <div
                    className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm transform transition-transform duration-300 ease-in-out scale-100"
                    onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      onClick={() => setShowModal(false)}
                    >
                      ✕
                    </button>

                    {/* Modal Header */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Share This Image
                    </h3>

                    {/* Input Field */}
                    <div className="flex items-center mb-6">
                      <input
                        type="text"
                        value={currentImage?.highRes || "Image Link Here"} // Dynamic placeholder
                        readOnly
                        className="border border-gray-300 rounded-l p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <button
                        onClick={handleCopyLink}
                        className="bg-gray-400 text-white rounded-r px-4 py-2 hover:bg-gray-600 transition-all"
                      >
                        Copy
                      </button>
                    </div>

                    {/* Social Sharing Icons */}
                    <div className="flex justify-around items-center mb-6">
                      <FaFacebook
                        onClick={() => handleSocialShare("facebook")}
                        className="cursor-pointer text-blue-600 hover:scale-110 transition-transform duration-200"
                        size={28}
                      />
                      <FaTwitter
                        onClick={() => handleSocialShare("twitter")}
                        className="cursor-pointer text-blue-400 hover:scale-110 transition-transform duration-200"
                        size={28}
                      />
                      <FaPinterest
                        onClick={() => handleSocialShare("pinterest")}
                        className="cursor-pointer text-red-600 hover:scale-110 transition-transform duration-200"
                        size={28}
                      />
                      <FaEnvelope
                        onClick={() => handleSocialShare("email")}
                        className="cursor-pointer text-gray-600 hover:scale-110 transition-transform duration-200"
                        size={28}
                      />
                    </div>

                    {/* Footer */}
                    <div className="text-center">
                      <button
                        className="text-blue-500 font-medium hover:underline"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* We we click on download Icon, this page opens...Download Modal */}
      {downloadModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="bg-[#FDF5E6] rounded-2xl p-8 w-full max-w-lg shadow-xl transform transition-all duration-300 scale-95"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              onClick={handleCloseDownloadModal}
            >
              <FaTimes size={24} />
            </button>

            <h2 className="text-3xl font-bold text-[#5A3E36] text-center mb-6">
              Download Photo
            </h2>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-[#7A5C52] font-medium text-lg mb-3">
                Select Photo Size
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["High Resolution", "Web Size"].map((size) => (
                  <div
                    key={size}
                    className={`p-4 border rounded-lg cursor-pointer transition ${selectedSize === size
                        ? "bg-gradient-to-r from-[#8B5E3C] to-[#D2A679] text-white border-[#8B5E3C]"
                        : "bg-[#FAE6D3] text-[#7A5C52] border-[#D7BCA6]"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              className="w-full py-3 bg-gradient-to-r from-[#8B5E3C] to-[#D2A679] text-white font-medium rounded-lg"
              onClick={handleDownloadPhoto}
            >
              Download Photo
            </button>
          </div>
        </div>
      )}

      {/* When we click on any image this page opens and there are download, share and but photo options */}
      {modalVisible && currentImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${modalVisible ? "modal-enter" : "modal-exit"
            } ${clicked ? "z-0" : "z-50"}`}
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <div className="relative bg-[#ffffff] w-full h-full flex flex-col justify-center items-center shadow-lg">
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <button
                className="text-[#5a4b3b] hover:text-[#3c2e21] focus:outline-none text-sm"
                onClick={closeModal}
              >
                <FaTimes size={20} />
              </button>
              <div className="flex items-center gap-4">
                <button
                  className={`group flex items-center gap-1 text-[#88745d] hover:text-[#3c2e21] focus:outline-none text-sm ${clicked ? "z-0" : "z-50"
                    }`}
                  onClick={() => handleOpenDownloadModal(currentImage)}
                >
                  <FaDownload className="group-hover:text-[#3c2e21]" />
                  <span>Download</span>
                </button>
                <button
                  className="group flex items-center gap-1 text-[#88745d] hover:text-[#3c2e21] focus:outline-none text-sm"
                  onClick={() => handleShare(currentImage)}
                >
                  <FaShareAlt className="group-hover:text-[#3c2e21]" />
                  <span>Share</span>
                </button>
                <button
                  className="flex items-center gap-1 px-4 py-2 bg-[#a67c52] text-white shadow-md hover:bg-[#8b6a45] focus:outline-none text-sm"
                  onClick={handleBuyPhoto}
                >
                  <FaCartPlus />
                  Buy Photo
                </button>
              </div>
            </div>

            {/* Image and Navigation */}
            <div
              ref={imageContainerRef}
              id="image-container"
              className="flex justify-center h-2/3 w-full mt-16 relative"
            >
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-gray-800"
                onClick={handlePreviousImage}
              >
                <FaArrowLeft size={30} />
              </button>
              <Image
                src={currentImage.highRes}
                alt="Current"
                className="rounded-md object-contain"
                style={{ maxWidth: "100%", height: "auto" }}
                width={1200}
                height={800}
              />
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-gray-800"
                onClick={handleNextImage}
              >
                <FaArrowRight size={30} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slideshow Modal */}
      {slideshowVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeSlideshow}
          >
            <FaTimes size={30} />
          </button>
          <button
            className="absolute left-4 text-white"
            onClick={handlePreviousImage}
          >
            <FaArrowLeft size={30} />
          </button>
          <motion.div
            key={currentImageIndex} // Key changes to trigger animation
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentImageIndex].highRes}
              alt="Slideshow Image"
              className="object-contain max-h-full max-w-full"
              width={800}
              height={600}
            />
          </motion.div>
          ;
          <button
            className="absolute right-4 text-white"
            onClick={handleNextImage}
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ClientHome;
