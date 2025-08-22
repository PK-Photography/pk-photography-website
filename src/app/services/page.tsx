"use client";

import Card from "@/components/ServicesCard/Card";
import { useEffect, useState } from "react";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Banner from "@/components/servicesPage/Banner";
const backgroundVideo1 = "/servicesPage/corporate.mp4";
const backgroundVideo2 = "/servicesPage/danceVideo.mp4";
const fallbackImage = "/servicesPage/event.jpg";

const services = [
  {
    title: "Brand Shoot",
    description: "Elevate your brand with stunning visuals",
    image: "/servicesPage/brandShoot.jpg",
  },
  {
    title: "Headshots",
    description: "Professional. Polished. You.",
    image: "/servicesPage/corporate.jpg",
    link: "/headshots",
  },

  {
    title: "Weddings",
    description: "Real moments. Lasting memories",
    image: "/servicesPage/wedding.jpg",
    link: "/wedding",
  },
  {
    title: "Real Estate",
    description: "Highlight every detail beautifully",
    image: "/servicesPage/realEstate.jpg",
  },
  {
    title: "Celebrity",
    description: "Star quality. On demand",
    image: "/servicesPage/celebrity.jpg",
    link: "/celebrity",
  },

  {
    title: "Portrait",
    description: "Timeless portraits that reflect you",
    image: "/servicesPage/portrait.jpg",
    link: "/galleries?category=Portrait",
  },

  {
    title: "Portfolio",
    description: "Prodessional headshots that speak success",
    image: "/servicesPage/portfolio.jpg",
    link: "/portfolio"
  },
  {
    title: "E‑Commerce",
    description: "Sell more with crisp visuals",
    image: "/servicesPage/ecommerce.jpg",
  },
  {
    title: "Products",
    description: "Make your product stand out",
    image: "/servicesPage/product.jpg",
  },

  {
    title: "Editorials",
    description: "Magazine‑worthy visuals",
    image: "/servicesPage/editorial.jpg",
    link: "/editorial",
  },

  {
    title: "Boudoir",
    description: "Elegant. Empowering. Intimate",
    image: "/servicesPage/boudoir2.jpg",
  },
  {
    title: "Baby",
    description: "Capture the joy of your little one",
    image: "/servicesPage/baby-photoshoot.jpg",
  },
  {
    title: "Outdoor",
    description: "Capture the beauty of nature",
    image: "/servicesPage/outdoor.jpg",
  },
  {
    title: "Festival",
    description: "Celebrate with vibrant festival photography",
    image: "/servicesPage/festival.jpg",
  },
];

const marqueeData = [
  { src: "/corousal/img1.jpg", width: 350, height: 450 },
  { src: "/corousal/img2.jpg", width: 700, height: 450 },
  { src: "/corousal/img3.jpg", width: 350, height: 450 },
  { src: "/corousal/img4.jpg", width: 700, height: 450 },
  { src: "/corousal/img5.jpg", width: 350, height: 450 },
  { src: "/corousal/img6.jpg", width: 350, height: 450 },
  { src: "/corousal/img7.jpg", width: 350, height: 450 },
  { src: "/corousal/img8.jpg", width: 350, height: 450 },
  { src: "/corousal/img9.jpg", width: 350, height: 450 },
  { src: "/corousal/img10.jpg", width: 700, height: 450 },
  { src: "/corousal/img11.jpg", width: 350, height: 450 },
];

export default function Service() {
  const title = "Events That Impress";
  const description = "Heartfelt moments, beautifully preserved";

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
    <>
      <Banner
        fallbackImage={fallbackImage}
        backgroundVideo1={backgroundVideo1}
        backgroundVideo2={backgroundVideo2}
        title={title}
        description={description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
        {services.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>

      <h2 className="max-w-3xl mx-auto text-center my-[7%] text-4xl md:text-5xl font-bold mb-4">
        Capturing Life&apos;s Moments with Passion and Precision
      </h2>

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

      <div className=" max-w-3xl mx-auto text-center my-[7%]">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Book Your Photo Session
        </h2>
        <p className="text-lg mx-4 md:mx-0 md:text-xl mb-8 ">
          From portraits to product shots, we capture your vision with
          professional quality and care.
        </p>
        <a
          href="/booking"
          className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Book With Us
        </a>
      </div>
    </>
  );
}
