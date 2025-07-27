"use client";

import Card from "@/components/ServicesCard/Card";
import { useState } from "react";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const services = [
  {
    title: "PORTFOLIO",
    description: "Crafting your visual stories",
    image: "/servicesPage/portfolio.jpg",
  },
  {
    title: "PORTRAIT",
    description: "Timeless portraits that reflect you",
    image: "/servicesPage/portrait.jpg",
  },
  {
    title: "HEADSHOTS",
    description: "Prodessional headshots that speak success",
    image: "/servicesPage/headshots.jpg",
  },
  {
    title: "EDITORIAL",
    description: "Magazine-Worthy Shots for Every Story Headshots",
    image: "/servicesPage/editorial.jpg",
  },
  {
    title: "CELEBRITY",
    description: "Reflect your stardom with every shot",
    image: "/servicesPage/celebrity.jpg",
  },
  {
    title: "ADS",
    description: "Highlights your products with flawless imagery",
    image: "/servicesPage/ads.jpg",
  },
  {
    title: "WEDDING",
    description: "Your Big Day, perfectly captured",
    image: "/servicesPage/wedding.jpg",
  },
  {
    title: "BOUDOIR",
    description: "MEmpower your cofidence",
    image: "/servicesPage/boudoir.jpg",
  },
  {
    title: "ECOMMERCE",
    description: "Boost your sales: crisp, e-commerce photos",
    image: "/servicesPage/ecommerce.jpg",
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
  const [homeVideo, setHomeVideo] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );

  return (
    <>
      <video
        src={homeVideo}
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        autoPlay
        loop
        muted
        controls={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
        {services.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>

      <Marquee speed={50} gradient={false} className="py-4">
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
    </>
  );
}
