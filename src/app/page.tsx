// "use client";
// import { Header1 } from "@/sections/Header1";
// import { Hero } from "@/sections/Hero";
// import { LogoTicker } from "@/sections/LogoTicker";
// // import { ProductShowcase } from "@/sections/ProductShowcase";

// // import { Testimonials } from "@/sections/Testimonials";
// import { CallToAction } from "@/sections/CallToAction";
// import Preloader from "@/sections/Preloader";
// import { useEffect, useState } from "react";
// import Header from "@/components/header/Header";
// import Service from "@/components/services/Service";
// // import { DragCards } from "@/components/Drag/Drag";
// import { TextParallaxContentExample } from "@/components/WeAlsoDo/TextParallaxContent";
// import Featured from "@/components/Featured/Featured";
// import { ImageBreak } from "@/components/imagebreak1/ImageBreak";
// import { Do } from "@/components/WhatWeDo/Do";
// import Reviews from "@/sections/Reviews";
// import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
// import GoogleReviews from "@/sections/GoogleReviews";
// import FeaturedGallery from "@/components/featuredCard/FeaturedGallery";
// import Image from "next/image";
// import Logo from "@/assets/logo.webp";
// import OurClients from "@/sections/OurClients";
// import PricingCardIndex from "@/sections/PricingCardIndex";

// // import Project  from "@/sections/Project";

// export default function Home() {
//   const [showPreloader, setShowPreloader] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowPreloader(false);
//     }, 6000);
//   }, []);

//   return (
//     <>
//       {showPreloader ? (
//         <Preloader />
//       ) : (
//         <div className="bg-[#eae8e4]">
//           {/* <Header1/> */}
//           <Header />
//           <div className="top-0 left-10 md:top-0 md:left-8">
//             <Image
//               src={Logo}
//               alt="Saas Logo"
//               width={120} // Set width to control aspect ratio
//               height={120} // Set height to control aspect ratio
//               className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain  z-50"
//             />
//           </div>

//           <Hero />
//           <ImageBreak />
//           {/* <GoogleReviews /> */}
//           <BubbleText text="Featured Projects" id="Featured-Projects" />

//           <FeaturedGallery />
//           {/* <LogoTicker/> */}
//           <Service />
//           {/* <ProductShowcase/> */}
//           <TextParallaxContentExample />
//           {/* <Project/> */}
//           <Do />
//           {/* <Featured/> */}
//           {/* <Testimonials /> */}
//           {/* <CallToAction /> */}
//           <BubbleText text="Testimonial" id="#Testimonial" />
//           <Reviews />
//           <BubbleText text="Our Clients" id="#Our-Clients" />
//           <OurClients />
//           <BubbleText text="Shoot Pricing " id="#Shoot-Pricing" />
//           <PricingCardIndex />
//         </div>
//       )}
//     </>
//   );
// }
"use client";
import { useEffect } from "react";

import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
// import { ProductShowcase } from "@/sections/ProductShowcase";

// import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import Header from "@/components/header/Header";
import Service from "@/components/services/Service";
// import { DragCards } from "@/components/Drag/Drag";
import { TextParallaxContentExample } from "@/components/WeAlsoDo/TextParallaxContent";
import Featured from "@/components/Featured/Featured";
import { ImageBreak } from "@/components/imagebreak1/ImageBreak";
import { Do } from "@/components/WhatWeDo/Do";
import Reviews from "@/sections/Reviews";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import GoogleReviews from "@/sections/GoogleReviews";
import FeaturedGallery from "@/components/featuredCard/FeaturedGallery";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import OurClients from "@/sections/OurClients";
import PricingCardIndex from "@/sections/PricingCardIndex";

export default function Home() {
  useEffect(() => {
    // Check for hash in the URL and scroll to the corresponding section
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // Run only once on component mount

  return (
    <div className="bg-[#eae8e4]">
      {/* <Header1/> */}
      <Header />
      <div className="top-0 left-10 md:top-0 md:left-8">
        <Image
          src={Logo}
          alt="Saas Logo"
          width={120} // Set width to control aspect ratio
          height={120} // Set height to control aspect ratio
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain  z-50"
        />
      </div>

      <Hero />
      <ImageBreak />
      {/* <BubbleText text="Featured Projects" id="Featured-Projects" /> */}
      {/* <FeaturedGallery /> */}
      {/* <LogoTicker/> */}
      <BubbleText text="Our Services" id="Our-Services" />
      <Service />
      {/* <ProductShowcase/> */}
      <TextParallaxContentExample />
      {/* <Project/> */}
      <Do />
      {/* <Featured/> */}
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
      <BubbleText text="Testimonial" id="Testimonial" />
      <Reviews />
      <BubbleText text="Our Clients" id="Our-Clients" />
      <OurClients />
      <BubbleText text="Shoot Pricing" id="Shoot-Pricing" />
      <PricingCardIndex />
    </div>
  );
}
