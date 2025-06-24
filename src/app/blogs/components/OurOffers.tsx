import React from "react";
import Image from "next/image";

const OurOffers: React.FC = () => {
  return (
    <div className="mb-10">
      <h4 className="font-semibold mb-4 text-lg">Our Offers</h4>
      <div className="relative w-[2/3] aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src="/services/offer.png"
          alt="Explore Gallery"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default OurOffers;