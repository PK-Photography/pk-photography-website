// pages/index.tsx

import React from "react";
import PricingCards from "@/components/pricingCard/PricingCards";

const packages = [
  {
    title: "PREMIUM PACKAGE",
    price: "PRICE: 20,000 INR",
    images: [
      "/carouselLandscape/img1.jpg",
      "/carouselLandscape/img2.jpg",
      "/carouselLandscape/img3.jpg",
      "/carouselLandscape/img4.jpg",
      
    ],
    shootType: "FULL PORTFOLIO SHOOT",
    duration: "Duration: 5 To 6 Hours",
    looks: "Looks: 5 Different Looks",
    inclusions: "Inclusions: Studio, Shooting, Editing, And Hair & Makeup Artist Costs",
    deliverables: "Deliverables: 20 Edited Photographs, All Raw Photos Via Drive Link",
    note: "(Note: Dresses Not Included)",
  },
  {
    title: "STANDARD PACKAGE",
    price: "PRICE: 15,000 INR",
    images: [
        "/carouselLandscape/img6.jpg",
        "/carouselLandscape/img7.jpg",
        "/carouselLandscape/img5.jpg",
    ],
    shootType: "MINI PORTFOLIO SHOOT",
    duration: "Duration: 3 To 4 Hours",
    looks: "Looks: 3 Different Looks",
    inclusions: "Inclusions: Studio, Shooting, Editing, And Hair & Makeup Artist Costs",
    deliverables: "Deliverables: 15 Edited Photographs, All Raw Photos Via Drive Link",
    note: "(Note: Dresses Not Included)",
  },
  {
    title: "STARTER PACKAGE",
    price: "PRICE: 5,000 INR",
    images: [
        "/carouselLandscape/img5.jpg",
        "/carouselLandscape/img4.jpg",
        "/carouselLandscape/img3.jpg",
    ],
    shootType: "ONE-HOUR PORTRAIT SESSION",
    duration: "Duration: 1 Hour",
    details: "Details: Unlimited Dress Changes Within The Time Frame",
    inclusions: "Inclusions: Shooting And Editing Costs (Hair & Makeup Artist Not Included)",
    deliverables: "Deliverables: 5 Edited Photographs, All Raw Photos Via Drive Link",
    note: "(Note: Dresses Not Included)",
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <PricingCards packages={packages} />
    </div>
  );
};

export default HomePage;
