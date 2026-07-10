import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Photography & Videography Services in Mumbai | PK Photography",
  },
  description:
    "Explore PK Photography's full range of services in Mumbai — weddings, portraits, events, fashion, corporate, food, real estate, drone and more. View packages and book online.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Photography & Videography Services in Mumbai | PK Photography",
    description:
      "Explore PK Photography's full range of services in Mumbai — weddings, portraits, events, fashion, corporate, food, real estate, drone and more. View packages and book online.",
    url: "https://pkphotography.in/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
