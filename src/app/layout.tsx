import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/header/Header";
import { SiteFooter } from "@/components/SiteFooter";
import WhatsAppIcon from "@/components/globalIcons/WhatAppIcon";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/SessionProvider";
import StyledComponentsRegistry from "@/lib/registry";

const dmSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pkphotography.in"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "PK Photography - Best Photography and Videography in Mumbai",
    template: "%s | PK Photography",
  },
  description:
    "Premium photography and videography services in Mumbai. We specialize in Weddings, Portraits, Events, Corporate Headshots, Commercial, and Real Estate shoots.",
  keywords: [
    "Photography in Mumbai",
    "Best Videography",
    "Wedding Photographer Mumbai",
    "Portrait Photography",
    "Corporate Headshots",
    "Real Estate Photography",
    "Event Photography",
    "PK Photography"
  ],
  authors: [{ name: "PK Photography", url: "https://pkphotography.in" }],
  publisher: "PK Photography",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "PK Photography - Best Photography and Videography in Mumbai",
    description: "Premium photography and videography services in Mumbai. We specialize in Weddings, Portraits, Events, Corporate Headshots, Commercial, and Real Estate shoots.",
    url: "https://pkphotography.in",
    siteName: "PK Photography",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "PK Photography Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK Photography - Best Photography and Videography in Mumbai",
    description: "Premium photography and videography services in Mumbai. We specialize in Weddings, Portraits, Events, Corporate Headshots, Commercial, and Real Estate shoots.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PhotographyService",
      "@id": "https://pkphotography.in/#organization",
      "name": "PK Photography",
      "url": "https://pkphotography.in",
      "logo": "https://pkphotography.in/logo.png",
      "image": "https://pkphotography.in/hero-img.jpg",
      "description": "Premium photography and videography services in Mumbai. Specializing in weddings, portraits, and commercial events.",
      "telephone": "+91-8889766739",
      "email": "info@pkphotography.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "sameAs": [
        "https://www.instagram.com/",
        "https://www.facebook.com/"
      ],
      "priceRange": "$$"
    },
    {
      "@type": "WebSite",
      "@id": "https://pkphotography.in/#website",
      "url": "https://pkphotography.in",
      "name": "PK Photography",
      "publisher": {
        "@id": "https://pkphotography.in/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative">
      <head>
        <meta
          name="google-site-verification"
          content="xkkbCA30-55oudh-aQAwydfWkzUga0omPDIZ6lN9RB4"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LEHXD05NMZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LEHXD05NMZ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <AuthProvider>
          <Header />
          {/* ToastContainer for global toast notifications */}
          <Toaster />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <main>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </main>

          <SiteFooter />

          {/* WhatsApp icon displayed globally */}
          <WhatsAppIcon />
        </AuthProvider>
      </body>
    </html>
  );
}
