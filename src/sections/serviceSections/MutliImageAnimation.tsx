import Image from "next/image";
import img8 from "@/assets/headshot/img8.png";
import img9 from "@/assets/headshot/img9.png";
import img10 from "@/assets/headshot/img10.png";
import img11 from "@/assets/headshot/img11.png";
import img12 from "@/assets/headshot/img12.png";

const images = [img8, img9, img10, img11, img12];

const MultiImageAnimation = () => {
  return (
    <div className="flex  justify-center items-center mt-10">
      {images.map((src, index) => {
        const total = images.length;
        // Calculate distance from center
        const center = Math.floor(total / 2); // 2 for 5 images
        const offset = Math.abs(index - center);

        return (
          <div
            key={index}
            className="relative transition-transform duration-300 hover:scale-105 hover:z-50"
            style={{
              zIndex: 50 - offset,
              marginLeft: index === 0 ? 0 : "-60px",
              borderRadius: "1rem",
              overflow: "hidden",
              width: "300px",
              height: "300px",
            }}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MultiImageAnimation;
