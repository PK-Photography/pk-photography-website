"use client";
import Banner from "@/components/live-streaming/Banner";
import Services from "@/components/wedding/Services";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";
import OurServices from "@/components/wedding/OurServices";
import WhyChooseUs from "@/components/wedding/WhyChooseUs";
import OurProcess from "@/components/wedding/OurProcess";
const cover = "/wedding/cover.jpg";
const backgroundVideo = "/wedding/wedding.mp4";

const marqueeData = [
  { src: "/wedding/corousal/img1.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img2.jpg", width: 700, height: 450 },
  { src: "/wedding/corousal/img3.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img4.jpg", width: 700, height: 450 },
  { src: "/wedding/corousal/img5.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img6.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img7.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img8.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img9.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img10.jpg", width: 700, height: 450 },
  { src: "/wedding/corousal/img11.jpg", width: 350, height: 450 },
  { src: "/wedding/corousal/img12.jpg", width: 350, height: 450 },
];

const WeddingPage = () => {
  const title =
    "Weddings by PK Photography – Capturing Love Across Cultures | Mumbai";
  const description =
    "Mumbai-based Wedding Photography & Cinematography — From Pre-Bridal to Post-Wedding, We Document Every Ritual, Every Emotion";
  const [speed, setSpeed] = useState(50); // default speed

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth <= 768) {
        setSpeed(80);
      } else {
        setSpeed(50);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    return () => window.removeEventListener("resize", updateSpeed);
  }, []);
  return (
    <div>
      <Banner
        fallbackImage={cover}
        backgroundVideo={backgroundVideo}
        title={title}
        description={description}
      />
      <Services />
      <OurServices />

      <h2 className="max-w-3xl mx-auto text-center my-[7%] text-4xl md:text-5xl font-bold mb-6">
        Every Culture, Every Wedding
      </h2>
      <p className="text-lg mx-4 md:mx-12 md:text-xl mb-8  text-center  ">
        We are proud to document Hindu, Christian, Muslim, Sikh, Jain, and
        interfaith weddings across Mumbai and beyond. Our team respects and
        understands the beauty of every tradition.
      </p>
      <Marquee speed={speed} gradient={false} className="py-4">
        {marqueeData.map((image, idx) => (
          <div
            key={idx}
            className="relative mx-4 flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-md bg-black"
            style={{
              width: image.width,
              height: image.height,
              maxWidth: image.width,
              maxHeight: image.height,
            }}
          >
            <Image
              src={image.src}
              alt={`marquee-${idx}`}
              width={image.width}
              height={image.height}
              className="rounded-2xl object-cover w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </Marquee>
      <WhyChooseUs />
      <OurProcess />
      <div className=" max-w-3xl mx-auto text-center my-[7%]">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Begin Your Wedding Story
        </h2>
        <p className="text-lg mx-4 md:mx-0 md:text-xl mb-8 ">
          Planning your big day in Mumbai or elsewhere? Let’s make it
          unforgettable with visuals that last a lifetime.
        </p>
        <a
          href="/booking"
          className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Book With Us
        </a>
      </div>
    </div>
  );
};

export default WeddingPage;
