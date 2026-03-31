import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ShareModal = ({
  showModal,
  currentImage,
  link, // New prop for generic link
  title = "Share This Image", // Custom title
  setShowModal,
  handleSocialShare,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const shareLink = link || currentImage?.shareableLink;

  if (!showModal || !shareLink) return null;

  const handleCopyClick = (silent = false) => {
    navigator.clipboard.writeText(shareLink);
    setIsCopied(true);
    if (!silent) toast.success("Link copied to clipboard!");

    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSocialClick = (platform) => {
    // Copy link first as requested
    handleCopyClick(true);
    
    if (handleSocialShare) {
      handleSocialShare(platform, shareLink);
    } else {
      // Inline social share logic as fallback
      switch (platform) {
        case "whatsapp":
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`, "_blank");
          break;
        case "facebook":
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`, "_blank");
          break;
        case "instagram":
          toast.success("Link copied! Opening Instagram...");
          setTimeout(() => {
            window.open("https://www.instagram.com/", "_blank");
          }, 800);
          break;
        case "email":
          window.open(`mailto:?subject=Check this out!&body=${encodeURIComponent(shareLink)}`, "_self");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[1000] backdrop-blur-sm transition-all duration-300 ease-in-out"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 hover:scale-[1.02]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {title}
        </h3>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleCopyClick()}
            className={`flex items-center gap-3 ${
              isCopied ? "bg-green-500" : "bg-blue-600"
            } text-white rounded-full px-10 py-4 hover:brightness-110 active:scale-95 transition-all duration-200 font-semibold shadow-lg hover:shadow-blue-200`}
          >
            <FaLink size={18} />
            {isCopied ? "Link Copied!" : "Copy Share Link"}
          </button>
        </div>
        <div className="flex justify-between items-center px-6">
          <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => handleSocialClick("whatsapp")}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <FaWhatsapp size={24} />
            </div>
            <span className="text-xs font-medium text-gray-500">WhatsApp</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => handleSocialClick("facebook")}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <FaFacebook size={24} />
            </div>
            <span className="text-xs font-medium text-gray-500">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => handleSocialClick("instagram")}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
              <FaInstagram size={24} />
            </div>
            <span className="text-xs font-medium text-gray-500">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ShareModal;
