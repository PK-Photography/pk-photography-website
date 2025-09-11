import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Btn from "../EncrptButton/Btn";
import "@fontsource/montserrat";
import Link from "next/link";

import service1 from "@/assets/service1.webp";
import service2 from "@/assets/service2.webp";
import service3 from "@/assets/service3.webp";
import service4 from "@/assets/service4.webp";
import service5 from "@/assets/service5.webp";
import service6 from "@/assets/service6.webp";
import service7 from "@/assets/service7.webp";
import service8 from "@/assets/service8.webp";
import service9 from "@/assets/service9.webp";
import service10 from "@/assets/service10.webp";
import service11 from "@/assets/service11.webp";
import service12 from "@/assets/service12.webp";
import service13 from "@/assets/service13.png";

interface CardProps {
  id: number;
  url: string;
  link: string;
  title: string;
  subtitle: string;
  isLightBackground?: boolean;
}

const cards: CardProps[] = [
  {
    url: service1.src,
    title: "Portfolio",
    subtitle: "Crafting your visual stories",
    id: 1,
    link: "/portfolio",
  },
  {
    url: service2.src,
    title: "Portrait",
    subtitle: "Timeless portraits that reflect you",
    id: 2,
    isLightBackground: true,
    link: "/portrait",
  },
  {
    url: service3.src,
    title: "Headshots",
    subtitle: "Professional headshots that speak success",
    id: 3,
    link: "/headshots",
  },
  {
    url: service4.src,
    title: "Editorial",
    subtitle: "Magazine-Worthy Shots for Every Story Headshots",
    id: 4,
    link: "/editorial",
  },
  {
    url: service5.src,
    title: "Celebrity",
    subtitle: "Reflect your stardom with every shot",
    id: 5,
    link: "/celebrity",
  },
  {
    url: service6.src,
    title: "Ads",
    subtitle: "Highlights your products with flawless imagery",
    id: 6,
    link: "/ads",
  },
  {
    url: service7.src,
    title: "Wedding",
    subtitle: "Your Big Day, perfectly captured",
    id: 7,
    link: "/wedding",
  },
  {
    url: service8.src,
    title: "Boudoir",
    subtitle: "Empower your confidence",
    id: 8,
    link: "/boudoir",
  },
  {
    url: service9.src,
    title: "Food",
    subtitle: "Mouth watering images for culinary Delights",
    id: 9,
    isLightBackground: true,
    link: "/food",
  },
  {
    url: service10.src,
    title: "E-Commerce",
    subtitle: "Boost your sales: crisp, e-commerce photos",
    id: 10,
    isLightBackground: true,
    link: "/ecommerce",
  },
  {
    url: service11.src,
    title: "Real Estate",
    subtitle: "Highlighting the beauty of every property",
    id: 11,
    link: "/realestate",
  },
  {
    url: service12.src,
    title: "Design",
    subtitle: "Your vision, our expertise in design",
    id: 12,
    link: "/design",
  },
  {
    url: service13.src,
    title: "Live Streaming",
    subtitle: "Experience Live Streaming Like Never Before",
    id: 13,
    link: "/live-streaming",
  },
];

const Card: React.FC<{ card: CardProps; index: number }> = ({
  card,
  index,
}) => {
  const isLastThree = index >= cards.length - 3;

  return (
    <Link href={card.link} key={card.id}>
      <div
        className={`group relative h-[620px] md:w-[468px] md:h-[650px] sm:w-[404px] overflow-hidden bg-neutral-200 rounded-3xl cursor-pointer ${
          card.isLightBackground ? "text-black" : "text-white"
        }`}
      >
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-lg"
        ></div>

        {/* Blue Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-[#2874a6]"></div>

        {/* Text + Button */}
        <div className="absolute top-0 z-10 w-full text-center pt-8">
          <p
            className={`px-6 py-2 text-4xl font-extrabold uppercase rounded-t-lg ${
              isLastThree ? "text-white" : "text-[#2874a6]"
            }`}
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
          >
            {card.title}
          </p>
          <p className="px-4 py-1 mt-2 text-lg font-medium">{card.subtitle}</p>
          <div className="mt-1 flex justify-center">
            <Btn
              className={card.isLightBackground ? "text-black" : "text-white"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

const HorizontalScrollCarousel: React.FC<{ cards: CardProps[] }> = ({
  cards,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current) {
        const totalScrollWidth = scrollContainerRef.current.scrollWidth;
        const visibleWidth = window.innerWidth;
        const diff = totalScrollWidth - visibleWidth + 30;
        setScrollWidth(-diff);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `${scrollWidth}px`]);

  return (
    <section ref={targetRef} className="relative h-[500vh] lg:ml-3 ml-3">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={scrollContainerRef}
          style={{ x }}
          className="flex gap-4"
        >
          {cards.map((card, index) => (
            <Card card={card} index={index} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Service: React.FC = () => {
  return (
    <div className="mt-[60px]">
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};

export default Service;
