// "use client";
// import Link from "next/link";
// import { useEffect, useState, useCallback } from "react";
// import debounce from "lodash.debounce";
// import axios from "axios";
// import Head from "next/head";
// import Image from "next/image";
// import axiosInstance from "../../utils/axiosConfig";

// // Create the debounced function outside the component
// const debounceHandleClick = debounce((cardId, cards) => {
//   const selectedCard = cards.find((card) => card._id === cardId);
//   if (selectedCard) {
//     localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
//   }
// }, 300);

// const UserCards = () => {
//   const [cards, setCards] = useState([]);

//   // Fetch all cards when the component mounts
//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const { data } = await axiosInstance.get("/cards");
//         setCards(data);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchCards();
//   }, []);

//   const handleClick = useCallback(
//     (cardId) => debounceHandleClick(cardId, cards),
//     [cards] // cards is still a dependency, but the debounce function is stable
//   );

//   return (
//     <>
//       <Head>
//         <title>PK Photography</title>
//         <meta
//           name="description"
//           content="Browse through a collection of dynamic user cards with details including names, images, and dates. Click to view more information."
//         />
//         <meta
//           name="keywords"
//           content="user cards, dynamic gallery, card details, view cards, image cards"
//         />
//         <meta name="author" content="Mohit Kumar" />
//         <meta
//           property="og:title"
//           content="Explore User Cards - Dynamic Content Gallery"
//         />
//         <meta
//           property="og:description"
//           content="Discover a range of dynamic user cards, including names, dates, and images. Click to explore detailed views."
//         />
//         <meta
//           property="og:image"
//           content={cards[0]?.imageUrl || "/default-image.jpg"}
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="http://localhost:3000/" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta charSet="UTF-8" />
//       </Head>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {cards.map((card) => (
//           <div
//             key={card._id}
//             className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
//           >
//             <div className="relative h-48 w-full">
//               <Image
//                 src={card.imageUrl}
//                 alt={card.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-lg"
//               />
//             </div>

//             <div className="p-4 flex flex-col h-full">
//               <h2 className="text-lg font-semibold text-gray-800 text-center">
//                 {card.name}
//               </h2>
//               <p className="text-sm text-gray-600 text-center mt-2">
//                 {new Date(card.date).toLocaleDateString()}
//               </p>
//               <div className="mt-4 text-center">
//                 <Link href={`/client/${card._id}`}>
//                   <button
//                     className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
//                     onClick={() => handleClick(card._id)}
//                   >
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default UserCards;




"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import axiosInstance from "../../utils/axiosConfig";
import Head from "next/head";
import Image from "next/image";

// Create the debounced function outside the component
const debounceHandleClick = debounce((cardId, cards) => {
  const selectedCard = cards.find((card) => card._id === cardId);
  if (selectedCard) {
    localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
  }
}, 300);

const UserCards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all cards when the component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axiosInstance.get("/cards");
        setCards(data);
      } catch (error) {
        // Handle error
        console.error("Failed to fetch cards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleClick = useCallback(
    (cardId) => debounceHandleClick(cardId, cards),
    [cards] // cards is still a dependency, but the debounce function is stable
  );

  return (
    <>
      <Head>
        <title>PK Photography</title>
        <meta
          name="description"
          content="Browse through a collection of dynamic user cards with details including names, images, and dates. Click to view more information."
        />
        <meta
          name="keywords"
          content="user cards, dynamic gallery, card details, view cards, image cards"
        />
        <meta name="author" content="Mohit Kumar" />
        <meta
          property="og:title"
          content="Explore User Cards - Dynamic Content Gallery"
        />
        <meta
          property="og:description"
          content="Discover a range of dynamic user cards, including names, dates, and images. Click to explore detailed views."
        />
        <meta
          property="og:image"
          content={cards[0]?.imageUrl || "/default-image.jpg"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="p-4">
        {isLoading ? (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">
              Cards are loading, Please wait...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg shadow-lg animate-pulse h-64"
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card._id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.imageUrl}
                    alt={card.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                <div className="p-4 flex flex-col h-full">
                  <h2 className="text-lg font-semibold text-gray-800 text-center">
                    {card.name}
                  </h2>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    {new Date(card.date).toLocaleDateString()}
                  </p>
                  <div className="mt-4 text-center">
                    <Link href={`/client/${card._id}`}>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
                        onClick={() => handleClick(card._id)}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCards;
