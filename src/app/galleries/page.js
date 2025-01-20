// App.js
import React from "react";          
import PortraitCardUI from "@/components/gallaryCards/PortraitCardUI";


const data = [
  {
    id: 1,
    name: "AISHWARYA",
    tagline: "Urban Chic Charm",
    description:
      "Aishwarya's portrait highlights her urban chic style, blending modern sophistication with a confident, poised demeanor, making her a standout in any urban setting.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "ANOUSHKA",
    tagline: "Timeless Elegance",
    description:
      "Anoushka's portrait embodies timeless elegance, with a focus on her poised expression and refined style, creating a classic and sophisticated visual appeal.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "ARJUN",
    tagline: "Casual Confidence",
    description:
      "Arjun's portrait showcases his casual yet confident style, combining a relaxed, approachable demeanor with a warm expression, perfect for portraying effortless charm.",
    image: "https://via.placeholder.com/300",
  },
];

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Portrait Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((person) => (
<PortraitCardUI key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App