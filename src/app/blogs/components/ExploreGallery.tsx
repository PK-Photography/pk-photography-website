import React from "react";
import Image from "next/image";

const ExploreGallery: React.FC = () => {
  return (
    <div className="mb-10">
      <h4 className="font-semibold mb-4 text-lg">Explore Gallery</h4>
      <div className="w-full rounded-lg overflow-hidden">
        <Image
          src="/services/explore-gallery.png"
          alt="Explore Gallery"
          width={1200} // replace with your image's actual width
          height={300} // replace with your image's actual height
          className="rounded-lg w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default ExploreGallery;