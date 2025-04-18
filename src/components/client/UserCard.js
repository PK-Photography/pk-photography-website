"use client";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import axiosInstance from "../../utils/axiosConfig";
import Head from "next/head";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import Modal from "@/components/ui/Modal";

const ITEMS_PER_PAGE = 12;

const debounceHandleClick = debounce((cardId, cards) => {
  const selectedCard = cards.find((card) => card._id === cardId);
  if (selectedCard) {
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
  }
}, 300);

const UserCards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [pinError, setPinError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axiosInstance.get("/cards");
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleClick = useCallback(
    (card) => {
      if (card.pin) {
        setSelectedCard(card);
        setShowPinModal(true);
        setEnteredPin("");
        setPinError("");
      } else {
        debounceHandleClick(card._id, cards);
        window.location.href = `/client/${card._id}`;
      }
    },
    [cards]
  );

  const handlePinSubmit = () => {
    if (enteredPin === selectedCard.pin) {
      localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
      window.location.href = `/client/${selectedCard._id}`;
    } else {
      setPinError("Incorrect PIN. Please try again.");
    }
  };

  const filteredCards = cards.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mb-6 w-full flex justify-center">
        <div className="relative w-[70%]">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5C899D] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <Head>
        <title>PK Photography</title>
        <meta name="description" content="Browse through a collection of client albums with beautiful thumbnails." />
      </Head>

      <div className="bg-[white] px-3 pt-6 pb-16 max-w-[90%] mx-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-10 h-10 border-4 border-[#5C899D] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {paginatedCards.map((card) => (
                <button
                  key={card._id}
                  onClick={() => handleClick(card)}
                  className="block text-left"
                >
                  <div className="relative h-80 w-full overflow-hidden bg-[white] group">
                    <Image
                      src={card.imageUrl}
                      alt={card.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition duration-300 group-hover:brightness-90"
                    />
                  </div>
                  <div className="flex flex-col items-center mt-3">
                    <p className="text-md font-semibold text-gray-900 flex items-center gap-2">
                      {card.pin && <FaLock className="text-sm" />} {card.name.toUpperCase()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(card.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-12 space-x-3 text-sm font-medium text-[#5C899D]">
                <button
                  className="px-2 py-1 hover:text-black"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lsaquo;
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = pageNum === currentPage;

                  return (
                    <button
                      key={pageNum}
                      className={`w-8 h-8 ${
                        isActive
                          ? "bg-[#5C899D] text-white font-semibold"
                          : "hover:bg-[#f0f4f7] text-[#5C899D]"
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  className="px-2 py-1 hover:text-black"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &rsaquo;
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {showPinModal && (
        <Modal
          title="Enter 4-digit PIN"
          open={showPinModal}
          onClose={() => setShowPinModal(false)}
        >
          <input
            type="password"
            placeholder="Enter PIN"
            value={enteredPin}
            onChange={(e) => setEnteredPin(e.target.value)}
            maxLength={4}
            className="w-full border p-2 rounded"
          />
          {pinError && <p className="text-red-500 mt-2 text-sm">{pinError}</p>}
          <div className="mt-4 flex justify-end gap-3">
            <button
              className="bg-gray-200 px-4 py-2 rounded"
              onClick={() => setShowPinModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-[#5C899D] text-white px-4 py-2 rounded"
              onClick={handlePinSubmit}
            >
              Submit
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserCards;