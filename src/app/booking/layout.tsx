import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Book a Photography Session in Mumbai | PK Photography",
  },
  description:
    "Book your photography or videography session with PK Photography in Mumbai. Fill in your details and we'll get back within 24 hours to confirm your shoot.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book a Photography Session in Mumbai | PK Photography",
    description:
      "Book your photography or videography session with PK Photography in Mumbai. Fill in your details and we'll get back within 24 hours to confirm your shoot.",
    url: "https://pkphotography.in/booking",
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
