import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Photography Portfolio & Gallery | PK Photography Mumbai",
  },
  description:
    "Browse PK Photography's work — weddings, events, portraits, fashion shoots, corporate headshots, and real estate photography across Mumbai, Goa, and Delhi.",
  alternates: {
    canonical: "/galleries",
  },
  openGraph: {
    title: "Photography Portfolio & Gallery | PK Photography Mumbai",
    description:
      "Browse PK Photography's work — weddings, events, portraits, fashion shoots, corporate headshots, and real estate photography across Mumbai, Goa, and Delhi.",
    url: "https://pkphotography.in/galleries",
  },
};

export default function GalleriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
