import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaEnvelope } from "react-icons/fa";

const ShareModal = ({
  showModal,
  currentImage,
  setShowModal,
  handleCopyLink,
  handleSocialShare,
}) => {
  if (!showModal || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm transform transition-transform duration-300 ease-in-out scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Share This Image
        </h3>
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={currentImage?.shareableLink}
            readOnly
            className="border border-gray-300 rounded-l p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentImage?.shareableLink);
              alert("Link copied to clipboard!");
            }}
            className="bg-gray-400 text-white rounded-r px-4 py-2 hover:bg-gray-600 transition-all"
          >
            Copy
          </button>
        </div>
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
  );
};

export default ShareModal;
