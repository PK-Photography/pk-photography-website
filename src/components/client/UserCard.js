"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import axiosInstance from "../../utils/axiosConfig";
import Head from "next/head";
import Image from "next/image";
import { FaLock } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

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
    (cardId) => debounceHandleClick(cardId, cards),
    [cards]
  );

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const paginatedCards = cards.slice(
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
                <Link
                  key={card._id}
                  href={`/client/${card._id}`}
                  onClick={() => handleClick(card._id)}
                  className="block"
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
                      <FaLock className="text-sm" /> {card.name.toUpperCase()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(card.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
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
    </>
  );
};

export default UserCards;