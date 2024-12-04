import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import FavouriteModal from "../client/FavouriteModal.js";
import ShareModal from "./shareModal.js";
import SlideshowModal from "../client/SlideshowModal.js";
import CategoryNav from "../client/CategoryNav.js";
import RightNav from "../client/RightNav.js";
import ImageModal from "../client/ImageModal.js";
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
          `https://client-ra9o.onrender.com/api/client/cards`
        );
        const selectedCard = response.data.find((card) => card._id === lastId);
        setSelectedCard(selectedCard);
        console.log("Selected card:", selectedCard);
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
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name)&key=AIzaSyCZv3XS3cicdPsznsJG7QxF1O_nQWSGoSM`
        );
        const driveImages = response.data.files.map((file, index) => ({
          id: `${categoryName}-${index}`, // Unique ID based on category and index
          lowRes: `https://drive.google.com/thumbnail?id=${file.id}&sz=w200-h200`,
          mediumRes: `https://drive.google.com/uc?export=view&id=${file.id}`,
          highRes: `https://drive.google.com/uc?export=download&id=${file.id}`,
          shareableLink: `https://drive.google.com/file/d/${file.id}/view?usp=sharing`,
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

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const loadImages = () => {
      document.querySelectorAll(".progressive-image").forEach((img) => {
        const mediumRes = img.dataset.medium;
        const highRes = img.dataset.high;

        const finalSrc =
          connection && connection.effectiveType.includes("4g")
            ? highRes
            : mediumRes;

        const preloader = new window.Image(); // Use native browser Image
        preloader.src = finalSrc;
        preloader.onload = () => {
          img.src = finalSrc;
        };
      });
    };

    // Load higher resolutions after initial render
    loadImages();
  }, [images]);

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

  const handleShare = (shareableLink) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this image!",
          url: shareableLink,
        })
        .catch(() => {
          // Error handling without console
        });
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
      console.log("Fetching from proxy URL:", proxyUrl);

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
        const fileExtension = image.highRes
          .split(".")
          .pop()
          .match(/^(jpg|jpeg|png|gif)$/i)
          ? image.highRes.split(".").pop()
          : defaultExtension;

        const fileName = `${activeCategory || "category"}_${
          index + 1
        }.${fileExtension}`;
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
      console.warn(
        `Failed to download ${failedImages.length} images.`,
        failedImages
      );
      alert(
        "Some images could not be downloaded. Check the console for details."
      );
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
      console.log("Fetching from proxy URL:", proxyUrl);

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
        const fileExtension = image.highRes
          .split(".")
          .pop()
          .match(/^(jpg|jpeg|png|gif)$/i)
          ? image.highRes.split(".").pop()
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
      console.warn(
        `Failed to download ${failedImages.length} images.`,
        failedImages
      );
      alert(
        "Some images could not be downloaded. Check the console for details."
      );
    }
  };

  return (
    <>
      <Head>
        <title>{selectedCard.name || "PK Photography"}</title>
        <meta
          name="description"
          content={`Explore stunning images and categories from ${
            selectedCard.name || "PK Photography"
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
          content={`View the best moments captured by ${
            selectedCard.name || "PK Photography"
          }.`}
        />
        <meta property="og:image" content="" />
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
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto">
          <CategoryNav
            categories={categories}
            activeCategory={activeCategory}
            fetchImagesFromDrive={fetchImagesFromDrive}
            toggleDropdown={toggleDropdown}
            dropdownVisible={dropdownVisible}
            setDropdownVisible={setDropdownVisible}
          />

          {/* Right-Side Actions */}
          <RightNav
            toggleFavoritesModal={toggleFavoritesModal}
            handleDownloadAll={handleDownloadAll}
            handleSlideshow={handleSlideshow}
            favorites={favorites}
            cartItems={cartItems}
          />
        </div>
      </nav>

      <FavouriteModal
        showFavoritesModal={showFavoritesModal}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        toggleFavoritesModal={toggleFavoritesModal}
        handleDownloadFavorites={handleDownloadFavorites}
      />

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
            <div className="relative">
              {/* Low-Resolution Blurry Image */}
              <Image
                src={image.lowRes}
                alt="Blurry placeholder"
                width={200}
                height={200}
                style={{
                  display: "block",
                  width: "100%",
                  filter: "blur(10px)",
                  transition: "filter 1s ease-in-out",
                }}
                onLoad={(e) => {
                  // Transition to clear once loaded
                  setTimeout(() => {
                    e.target.style.filter = "none"; // Remove blur
                  }, 1000);
                }}
              />
              {/* High-Resolution Progressive Image */}
              <Image
                src={image.highRes}
                alt="High-resolution image"
                width={800}
                height={600}
                style={{
                  display: "block",
                  width: "100%",
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 1s ease-in-out",
                }}
                onLoad={(e) => {
                  setTimeout(() => {
                    e.target.style.opacity = 1;
                  }, index * 500);
                }}
              />
            </div>
            <div className="absolute inset-0 flex justify-end items-end gap-2 p-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <button
                className={`p-2 ${
                  favorites.find((fav) => fav.id === image.id)
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

              <ShareModal
                showModal={showModal}
                currentImage={currentImage}
                setShowModal={setShowModal}
                handleCopyLink={handleCopyLink}
                handleSocialShare={handleSocialShare}
              />
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
                    className={`p-4 border rounded-lg cursor-pointer transition ${
                      selectedSize === size
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
        <ImageModal
          modalVisible={modalVisible}
          currentImage={currentImage}
          closeModal={closeModal}
          handleOpenDownloadModal={handleOpenDownloadModal}
          handleShare={handleShare}
          handleBuyPhoto={handleBuyPhoto}
          handlePreviousImage={handlePreviousImage}
          handleNextImage={handleNextImage}
          clicked={clicked}
        />
      )}

      {/* Slideshow Modal */}
      {slideshowVisible && (
        <SlideshowModal
          images={images}
          currentImageIndex={currentImageIndex}
          closeSlideshow={closeSlideshow}
          handlePreviousImage={handlePreviousImage}
          handleNextImage={handleNextImage}
        />
      )}
    </>
  );
};

export default ClientHome;
