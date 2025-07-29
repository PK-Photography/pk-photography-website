"use client";

import Card from "@/components/ServicesCard/Card";
import { useState } from "react";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Banner from "@/components/live-streaming/Banner";

const services = [
  {
    title: "PORTFOLIO",
    description: "Crafting your visual stories",
    image: "/servicesPage/portfolio.jpg",
    link: "/portfolio",
  },
  {
    title: "PORTRAIT",
    description: "Timeless portraits that reflect you",
    image: "/servicesPage/portrait.jpg",
    link: "/galleries?category=Portrait",
  },
  {
    title: "HEADSHOTS",
    description: "Prodessional headshots that speak success",
    image: "/servicesPage/headshots.jpg",
    link: "/galleries?category=Headshots",
  },
  {
    title: "EDITORIAL",
    description: "Magazine-Worthy Shots for Every Story Headshots",
    image: "/servicesPage/editorial.jpg",
    link: "/galleries?category=Editorial",
  },
  {
    title: "CELEBRITY",
    description: "Reflect your stardom with every shot",
    image: "/servicesPage/celebrity.jpg",
    link: "/galleries?category=Celebrity",
  },
  {
    title: "ADS",
    description: "Highlights your products with flawless imagery",
    image: "/servicesPage/ads.jpg",
    link: "/galleries?category=Ads",
  },
  {
    title: "WEDDING",
    description: "Your Big Day, perfectly captured",
    image: "/servicesPage/wedding.jpg",
    link: "/galleries?category=Wedding",
  },
  {
    title: "BOUDOIR",
    description: "Empower your cofidence",
    image: "/servicesPage/boudoir.jpg",
    link: "/galleries?category=Boudoir",
  },
  {
    title: "ECOMMERCE",
    description: "Boost your sales: crisp, e-commerce photos",
    image: "/servicesPage/ecommerce.jpg",
    link: "/galleries?category=E-Commerce",
  },
  {
    title: "LIVE STREAMING",
    description: "Bringing your events to life",
    image: "/live-streaming/sports_events.jpg",
    link: "/live-streaming",
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
  return (
    <>
      <Banner />

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

      <div className=" max-w-3xl mx-auto text-center my-[7%]">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Book Your Photo Session
        </h2>
        <p className="text-lg md:text-xl mb-8">
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
