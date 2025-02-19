import React, { useState } from "react";
import {
  FaTimes,
  FaDownload,
  FaShareAlt,
  FaCartPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";
import ShareModal from "../client/shareModal.js";

const ImageModal = ({
  modalVisible,
  currentImage,
  closeModal,
  handleOpenDownloadModal,
  handleBuyPhoto,
  handlePreviousImage,
  handleNextImage,
  clicked,
}) => {
  const [shareModalVisible, setShareModalVisible] = useState(false); // State for ShareModal visibility

  const handleSocialShare = (platform) => {
    const url = currentImage?.shareableLink;
    if (!url) return;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
        break;
      case "pinterest":
        window.open(`https://pinterest.com/pin/create/button/?url=${url}`, "_blank");
        break;
      case "email":
        window.open(`mailto:?subject=Check this out!&body=${url}`, "_self");
        break;
      default:
        break;
    }
  };

  if (!modalVisible || !currentImage) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        modalVisible ? "modal-enter" : "modal-exit"
      } ${clicked ? "z-0" : "z-50"}`}
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="relative bg-[#ffffff] w-full h-full flex flex-col justify-center items-center shadow-lg">
        {/* Modal Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            className="text-[#5a4b3b] hover:text-[#3c2e21] focus:outline-none text-sm"
            onClick={closeModal}
          >
            <FaTimes size={20} />
          </button>
          <div className="flex items-center gap-4">
            <button
              className={`group flex items-center gap-1 text-[#88745d] hover:text-[#3c2e21] focus:outline-none text-sm ${
                clicked ? "z-0" : "z-50"
              }`}
              onClick={() => handleOpenDownloadModal(currentImage)}
            >
              <FaDownload className="group-hover:text-[#3c2e21]" />
              <span>Download</span>
            </button>
            <button
              className="group flex items-center gap-1 text-[#88745d] hover:text-[#3c2e21] focus:outline-none text-sm"
              onClick={() => setShareModalVisible(true)} // Toggle ShareModal
            >
              <FaShareAlt className="group-hover:text-[#3c2e21]" />
              <span>Share</span>
            </button>

            {/* <button
              className="flex items-center gap-1 px-4 py-2 bg-[#a67c52] text-white shadow-md hover:bg-[#8b6a45] focus:outline-none text-sm"
              onClick={handleBuyPhoto}
            >
              <FaCartPlus />
              Buy Photo
            </button> */}
          </div>
        </div>

        {/* Image and Navigation */}
        <div
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

      {/* ShareModal Component */}
      <ShareModal
        showModal={shareModalVisible}
        currentImage={currentImage}
        setShowModal={setShareModalVisible}
        handleCopyLink={() =>
          navigator.clipboard.writeText(currentImage?.shareableLink)
        }
        handleSocialShare={handleSocialShare}
      />
    </div>
  );
};

export default ImageModal;
