"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoginPromptModal from "@/components/LoginPromptModal"; // adjust path as needed

export default function HomeClientWrapper() {
  const router = useRouter();
  const { data: session } = useSession();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
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
    <LoginPromptModal
      isOpen={showLoginPrompt}
      onClose={() => setShowLoginPrompt(false)}
    />
  );
}
