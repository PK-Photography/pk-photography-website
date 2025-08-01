"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoginPromptModal from "@/components/LoginPromptModal"; // adjust path as needed

import { Hero } from "@/sections/Hero";
import Service from "@/components/services/Service";
import Reviews from "@/sections/Reviews";
import AboutStudio from "@/components/Home/AboutStudio";
import { BubbleText } from "@/components/BubbleText/BubbolTextProps";
import OurClients from "@/sections/OurClients";
import PricingCardIndex from "@/sections/PricingCardIndex";
import CardStack from "@/components/StackingCards/CardStack";
import FAQ from "@/components/live-streaming/FAQ";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const alreadyRedirected = sessionStorage.getItem("redirectedToServices");

    if (isMobile && !alreadyRedirected) {
      sessionStorage.setItem("redirectedToServices", "true");
      router.push("/services");
      return;
    }
    // Scroll to hash if present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Show login prompt only if user not logged in and not dismissed in last 3 hours
    const isLoggedIn = !!session?.user;
    const lastDismissed = parseInt(
      localStorage.getItem("loginPromptDismissedAt") || "0",
      10
    );
    const threeHoursAgo = Date.now() - 3 * 60 * 60 * 1000;

    if (!isLoggedIn && (!lastDismissed || lastDismissed < threeHoursAgo)) {
      setShowLoginPrompt(true);
    }
  }, [session, router]);

  return (
    <div className="bg-white">
      <Hero />
      <div className="hidden md:block">
        <CardStack />
      </div>
      <AboutStudio />
      <BubbleText text="Our Services" id="Our-Services" />
      <Service />
      <FAQ />
      <OurClients />
      <BubbleText text="Shoot Pricing" id="Shoot-Pricing" />
      <PricingCardIndex />

      <LoginPromptModal
        isOpen={showLoginPrompt}
        onClose={() => setShowLoginPrompt(false)}
      />
    </div>
  );
}
