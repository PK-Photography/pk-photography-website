import Head from "next/head";
import FavouriteModal from "../client/FavouriteModal.js";
import SlideshowModal from "../client/SlideshowModal.js";
import CategoryNav from "../client/CategoryNav.js";
import RightNav from "../client/RightNav.js";
import ImageModal from "../client/ImageModal.js";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { FaTimes } from "react-icons/fa";
import axiosInstance from "../../utils/axiosConfig.jsx";
import ImageGalleryList from "../client/ImageGalleryList";
import BannerSection from "../client/BannerSection";
import Lottie from "lottie-react";
import animationData from "@/assets/Picture.json";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const [canView, setCanView] = useState(true); // State for canView
  const [canDownload, setCanDownload] = useState(true); // State for canDownload
  const [loadingImages, setLoadingImages] = useState({});
  const [nasAllImages, setNasAllImages] = useState([]); // All images from NAS
  const [nasPage, setNasPage] = useState(1);
  const [nasPageSize] = useState(50);
  const [nasLoading, setNasLoading] = useState(true);
  const [hasMoreNasImages, setHasMoreNasImages] = useState(true);
  const [nasTotalCount, setNasTotalCount] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();

  const isMobile =
    typeof window !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const dropdownRef = useRef(null);
  const imageContainerRef = useRef(null);

  const fetchImagesFromDrive = useCallback(
    async (driveLink, categoryName, cardId) => {
      const cacheKey = `drive-${cardId}-${categoryName}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setImages(JSON.parse(cached));
        setActiveCategory(categoryName);
        return;
      }

      const extractFolderId = (link) => link.match(/[-\w]{25,}/)?.[0] || null;
      const folderId = extractFolderId(driveLink);
      if (!folderId) return;

      let allImages = [];
      let pageToken = null;

      try {
        do {
          const response = await axios.get(
            `https://www.googleapis.com/drive/v3/files`,
            {
              params: {
                q: `'${folderId}' in parents`,
                fields: "nextPageToken, files(id, name)",
                key: "AIzaSyCZv3XS3cicdPsznsJG7QxF1O_nQWSGoSM",
                pageSize: 1000,
                pageToken,
              },
            }
          );

          const files = response.data.files.map((file, index) => ({
            id: `${categoryName}-${allImages.length + index}`,
            lowRes: `https://drive.google.com/thumbnail?id=${file.id}&sz=w200-h200`,
            mediumRes: `https://drive.google.com/uc?export=download&id=${file.id}`,
            highRes: `https://drive.google.com/uc?export=view&id=${file.id}`,
            shareableLink: `https://drive.google.com/file/d/${file.id}/view?usp=sharing`,
          }));

          allImages = [...allImages, ...files];
          pageToken = response.data.nextPageToken;
        } while (pageToken);

        sessionStorage.setItem(cacheKey, JSON.stringify(allImages));
        setImages(allImages);
        setActiveCategory(categoryName);
      } catch (error) {
        console.error("Drive fetch error:", error);
      }
    },
    []
  );

  const fetchImagesFromNAS = useCallback(
    async (nasFolderUrl, categoryName, cardId, page = 1) => {
      const cacheKey = `nas-${cardId}-${categoryName}`;
      setNasLoading(true);

      try {
        const response = await axiosInstance.get(`/nas-images`, {
          params: {
            nasUrl: nasFolderUrl,
            offset: (page - 1) * nasPageSize,
            limit: nasPageSize,
          },
        });

        const baseURL = "https://pk-photography-backend.onrender.com/api/v1";
        // const baseURL = "http://localhost:8081/api/v1";

        const newImages = response.data.images.map((img, index) => ({
          id: `${categoryName}-${(page - 1) * nasPageSize + index}`,
          name: img.name,
          mediumRes: `${baseURL}${img.mediumRes}`,
          lowRes: `${baseURL}${img.lowRes}`,
          shareableLink: `${baseURL}${img.mediumRes}`,
          path: img.path,
        }));

        if (page === 1) {
          setNasAllImages(newImages);
        } else {
          setNasAllImages((prev) => [...prev, ...newImages]);
        }

        setActiveCategory(categoryName);
        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));

        if (newImages.length < nasPageSize) {
          setHasMoreNasImages(false);
        } else {
          setHasMoreNasImages(true);
        }
        setNasTotalCount(response.data.total || 0);
      } catch (error) {
        console.error("NAS fetch error:", error);
        setHasMoreNasImages(false);
      } finally {
        setNasLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

      if (
        nearBottom &&
        !nasLoading &&
        hasMoreNasImages &&
        selectedCard &&
        activeCategory &&
        categories
          .find((c) => c.name === activeCategory)
          ?.images.includes("quickconnect.to")
      ) {
        setNasPage((prev) => {
          return prev + 1;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => handleScroll(), 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [nasLoading, hasMoreNasImages, selectedCard, activeCategory, categories]);

  useEffect(() => {
    if (!selectedCard || categories.length === 0) return;

    const activeCat = categories.find((c) => c.name === activeCategory);
    if (!activeCat || !activeCat.images.includes("quickconnect.to")) return;

    setNasPage(1);
    setHasMoreNasImages(true); // reset "load more" flag
    window.scrollTo(0, 0);
  }, [activeCategory, selectedCard, categories]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = window.location.pathname;
    const parts = url.split("/");
    const lastId = parts[parts.length - 1];
    const cacheKey = `card-${lastId}`;
    const cachedCard = sessionStorage.getItem(cacheKey);

    if (cachedCard) {
      const foundCard = JSON.parse(cachedCard);
      setSelectedCard(foundCard);
      setCategories(foundCard.category || []);
      setCanView(foundCard.canView || false);
      setCanDownload(foundCard.canDownload || false);

      const firstCategory = foundCard.category?.[0];
      if (firstCategory) {
        setActiveCategory(firstCategory.name);

        const isDrive = firstCategory.images.includes("drive.google.com");
        const imageCacheKey = isDrive
          ? `drive-${foundCard._id}-${firstCategory.name}`
          : `nas-${foundCard._id}-${firstCategory.name}`;

        const cachedImages = sessionStorage.getItem(imageCacheKey);

        if (cachedImages) {
          setImages(JSON.parse(cachedImages));
        } else {
          isDrive
            ? fetchImagesFromDrive(
                firstCategory.images,
                firstCategory.name,
                foundCard._id
              )
            : fetchImagesFromNAS(
                firstCategory.images,
                firstCategory.name,
                foundCard._id
              );
        }
      }
    } else {
      const fetchSelectedCard = async () => {
        try {
          const response = await axiosInstance.get(`/client/cards`);
          const decodedLastId = decodeURIComponent(lastId);
          const foundCard = response.data.find(
            (card) => card.name.trim() === decodedLastId.trim()
          );
          if (!foundCard) return;

          sessionStorage.setItem(cacheKey, JSON.stringify(foundCard));
          setSelectedCard(foundCard);
          setCategories(foundCard.category || []);
          setCanView(foundCard.canView || false);
          setCanDownload(foundCard.canDownload || false);

          const firstCategory = foundCard.category?.[0];
          if (firstCategory) {
            setActiveCategory(firstCategory.name);

            firstCategory.images.includes("drive.google.com")
              ? fetchImagesFromDrive(
                  firstCategory.images,
                  firstCategory.name,
                  foundCard._id
                )
              : fetchImagesFromNAS(
                  firstCategory.images,
                  firstCategory.name,
                  foundCard._id
                );
          }
        } catch (error) {
          console.error("Error fetching selected card:", error);
        }
      };

      fetchSelectedCard();
    }
  }, []);

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

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const loadImages = () => {
      document.querySelectorAll(".progressive-image").forEach((img) => {
        const mediumRes = img.dataset.medium;
        const highRes = img.dataset.medium;

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

  const handleSlideshow = () => {
    if (images.length > 0) {
      setSlideshowVisible(true);
      setCurrentImageIndex(0); // Start from the first image
      // startAutoPlay(); // Start automatic slideshow
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
    }, 5000);
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

  const handleMultiShare = (shareableLinks) => {
    if (!shareableLinks || shareableLinks.length === 0) return;

    if (navigator.share) {
      navigator
        .share({
          title: "Check out my favorite images!",
          text: "Here are my favorite images:\n" + shareableLinks.join("\n\n"),
        })
        .catch(() => {
          // silently handle cancel/error
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
    setSelectedSize("High Resolution");
  };

  const handleDownloadPhoto = async () => {
    try {
      let downloadUrl;

      if (currentImage.mediumRes.includes("drive.google.com")) {
        downloadUrl =
          selectedSize === "High Resolution"
            ? currentImage.mediumRes
            : currentImage.mediumRes;
      } else {
        const encodedPath = encodeURIComponent(currentImage.path);
        downloadUrl = `${axiosInstance.defaults.baseURL}/nas-download?path=${currentImage.path}`;
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `image_${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      handleCloseDownloadModal();
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const handleDownloadAll = async () => {
    if (!images || images.length === 0) {
      alert("No images available to download.");
      return;
    }

    let downloadUrl;

    if (images[0].mediumRes.includes("drive.google.com")) {
      const zip = new JSZip();
      const failedImages = [];

      const fetchPromises = images.map(async (image, index) => {
        const fileId = extractFileIdFromUrl(image.mediumRes);
        if (!fileId) {
          console.warn(`Failed to extract fileId from URL: ${image.mediumRes}`);
          failedImages.push(image.mediumRes);
          return;
        }

        // Use baseURL from axiosInstance to construct the proxy URL
        const proxyUrl = `${axiosInstance.defaults.baseURL}/download/${fileId}`;

        try {
          const response = await fetch(proxyUrl);
          if (!response.ok) {
            console.error(`Failed to fetch ${proxyUrl}:`, response.status);
            failedImages.push(image.mediumRes);
            return;
          }

          const blob = await response.blob();
          const arrayBuffer = await blob.arrayBuffer();

          // Determine a valid file extension
          const defaultExtension = "jpg";
          const fileExtension = image.mediumRes
            .split(".")
            .pop()
            .match(/^(jpg|jpeg|png|gif)$/i)
            ? image.mediumRes.split(".").pop()
            : defaultExtension;

          const fileName = `${activeCategory || "category"}_${
            index + 1
          }.${fileExtension}`;
          zip.file(fileName, arrayBuffer); // Add file directly to the zip
        } catch (error) {
          console.error(`Error downloading file: ${image.mediumRes}`, error);
          failedImages.push(image.mediumRes);
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
    } else {
      const encodedPath = encodeURIComponent(
        images[0].path.split("/").slice(0, -1).join("/")
      ); // Extract parent folder path
      downloadUrl = `${axiosInstance.defaults.baseURL}/nas-download?path=${encodedPath}`;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${activeCategory || "all-images"}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    const getFavourites = async () => {
      try {
        if (!session?.user?.id) return;
        const res = await axiosInstance.get(
          `/user/getFavourites/${session.user.id}`
        );
        setFavorites(res.data || []);
      } catch (err) {
        console.error("Error fetching favourites:", err);
      }
    };

    getFavourites();
  }, [session?.user?.id]);

  const toggleFavorite = async (image) => {
    if (!session?.user?.id) {
      router.push("/login");
      return;
    }

    const isFavorited = favorites.find((fav) => fav.id === image.id);

    try {
      if (isFavorited) {
        // Remove from server + local
        await removeFromFavorites(image.id);
        setFavorites((prev) => prev.filter((fav) => fav.id !== image.id));
      } else {
        // Add to server + local
        await addToFavorites(image);
        setFavorites((prev) => [...prev, image]);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const toggleFavoritesModal = () => {
    setShowFavoritesModal((prev) => !prev);
  };

  const extractFileIdFromUrl = (url) => {
    const regex = /[?&]id=([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const addToFavorites = async (image) => {
    try {
      await axiosInstance.put("/user/addFavourite", {
        userId: session?.user?.id,
        id: image.id,
        name: image.name,
        mediumRes: image.mediumRes,
        lowRes: image.lowRes,
        shareableLink: image.shareableLink,
        path: image.path,
      });
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFavorites = async (imageId) => {
    try {
      await axiosInstance.put("/user/removeFavourite", {
        userId: session?.user?.id,
        id: imageId,
      });
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  const handleDownloadFavorites = async () => {
    if (!favorites || favorites.length === 0) {
      alert("No favorite images available to download.");
      return;
    }

    const zip = new JSZip();
    const failedImages = [];

    const fetchPromises = images.map(async (image, index) => {
      const fileId = extractFileIdFromUrl(image.mediumRes);
      if (!fileId) {
        console.warn(`Failed to extract fileId from URL: ${image.mediumRes}`);
        failedImages.push(image.mediumRes);
        return;
      }

      const proxyUrl = `${axiosInstance.defaults.baseURL}/download/${fileId}`;

      try {
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          console.error(`Failed to fetch ${proxyUrl}:`, response.status);
          failedImages.push(image.mediumRes);
          return;
        }

        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();

        // Determine a valid file extension
        const defaultExtension = "jpg";
        const fileExtension = image.mediumRes
          .split(".")
          .pop()
          .match(/^(jpg|jpeg|png|gif)$/i)
          ? image.mediumRes.split(".").pop()
          : defaultExtension;

        const fileName = `${activeCategory || "category"}_${
          index + 1
        }.${fileExtension}`;
        zip.file(fileName, arrayBuffer); // Add file directly to the zip
      } catch (error) {
        console.error(`Error downloading file: ${image.mediumRes}`, error);
        failedImages.push(image.mediumRes);
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
        <meta property="og:image" content="/path-to-default-image.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <BannerSection selectedCard={selectedCard} />

      {/* Categories Navbar */}
      <nav className="bg-[#eae8e4] shadow-md py-4 px-6">
        <div className="container mx-auto">
          <CategoryNav
            categories={categories}
            activeCategory={activeCategory}
            fetchImagesFromDrive={fetchImagesFromDrive}
            fetchImagesFromNAS={fetchImagesFromNAS}
            toggleDropdown={toggleDropdown}
            dropdownVisible={dropdownVisible}
            setDropdownVisible={setDropdownVisible}
            selectedCard={selectedCard}
          />
          <RightNav
            toggleFavoritesModal={toggleFavoritesModal}
            handleDownloadAll={handleDownloadAll}
            handleSlideshow={handleSlideshow}
            favorites={favorites}
            cartItems={cartItems}
            canDownload={canDownload}
            canView={canView}
            totalImages={nasTotalCount || images.length}
          />
        </div>
      </nav>

      <FavouriteModal
        showFavoritesModal={showFavoritesModal}
        favorites={favorites}
        handleShare={handleShare}
        handleMultiShare={handleMultiShare}
        toggleFavorite={toggleFavorite}
        toggleFavoritesModal={toggleFavoritesModal}
        handleDownloadFavorites={handleDownloadFavorites}
      />

      {/* here we are fetching the drive images and Display Images */}
      <ImageGalleryList
        images={images}
        columns={columns}
        canView={canView}
        canDownload={canDownload}
        isMobile={isMobile}
        favorites={favorites}
        loadingImages={loadingImages}
        toggleFavorite={toggleFavorite}
        handleOpenDownloadModal={handleOpenDownloadModal}
        handleShare={handleShare}
        setCurrentImageIndex={setCurrentImageIndex}
        setSlideshowVisible={setSlideshowVisible}
        imageContainerRef={imageContainerRef}
        nasLoading={nasLoading}
      />

      {/* We we click on download Icon, this page opens...Download Modal */}
      {downloadModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-1000">
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

      {hasMoreNasImages && !nasLoading && (
        <div className="text-center my-6 pb-10">
          <button
            onClick={() => {
              const nextPage = nasPage + 1;
              setNasPage(nextPage);
              const activeCat = categories.find(
                (c) => c.name === activeCategory
              );

              if (
                activeCat &&
                activeCat.images.includes("/photo/") &&
                selectedCard &&
                activeCategory
              ) {
                fetchImagesFromNAS(
                  activeCat.images,
                  activeCategory,
                  selectedCard._id,
                  nextPage
                );
              }
            }}
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black transition duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {nasLoading && (
        <div className="flex justify-center items-center min-h-[300px]">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-24 h-24 "
          />
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
          setCurrentImageIndex={setCurrentImageIndex}
          selectedCard={selectedCard}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          canDownload={canDownload} // <-- Pass here
          handleOpenDownloadModal={handleOpenDownloadModal}
        />
      )}
    </>
  );
};

export default ClientHome;
