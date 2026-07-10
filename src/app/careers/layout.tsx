import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Careers at PK Photography Mumbai | Join Our Creative Team",
  },
  description:
    "Join one of Mumbai's leading photography and videography studios. PK Photography is always looking for talented photographers, videographers, and editors. Apply today.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at PK Photography Mumbai | Join Our Creative Team",
    description:
      "Join one of Mumbai's leading photography and videography studios. PK Photography is always looking for talented photographers, videographers, and editors. Apply today.",
    url: "https://pkphotography.in/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
