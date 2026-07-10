import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Client Portal | PK Photography",
  },
  description:
    "Access your photos, download your gallery, and order prints through the PK Photography client portal.",
  alternates: {
    canonical: "/client",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
