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
    default: "Photography & Videography Studio in Mumbai | PK Photography",
    template: "%s | PK Photography",
  },
  description:
    "PK Photography is Mumbai's trusted photography and videography studio in Andheri West. Specialists in weddings, portraits, events, corporate, fashion, real estate, and drone photography. 12+ years. 2000+ projects. Book your session today.",
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
    title: "Photography & Videography Studio in Mumbai | PK Photography",
    description: "PK Photography is Mumbai's trusted photography and videography studio in Andheri West. Specialists in weddings, portraits, events, corporate, fashion, real estate, and drone photography. 12+ years. 2000+ projects. Book your session today.",
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
    title: "Photography & Videography Studio in Mumbai | PK Photography",
    description: "PK Photography is Mumbai's trusted photography and videography studio in Andheri West. Specialists in weddings, portraits, events, corporate, fashion, real estate, and drone photography. 12+ years. 2000+ projects. Book your session today.",
    images: ["/opengraph-image.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pkphotography.in/#organization",
  "name": "PK Photography",
  "url": "https://pkphotography.in",
  "logo": "https://pkphotography.in/_next/static/media/logo.2604e02f.webp",
  "image": "https://pkphotography.in/opengraph-image.png",
  "description": "Premium photography and videography studio in Andheri West, Mumbai. Specialising in weddings, portraits, events, fashion, corporate, food, real estate, and drone photography.",
  "telephone": "+918888766739",
  "email": "prabhakar@pkphotography.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "EVERSHINE COSMIC, C1302, Veera Desai Industrial Estate, Andheri West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400053",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1412,
    "longitude": 72.8361
  },
  "areaServed": ["Mumbai", "Goa", "Delhi"],
  "priceRange": "₹₹₹",
  "sameAs": [
    "https://www.instagram.com/itspkphotography.in/",
    "https://www.youtube.com/@itspkphotography",
    "https://www.facebook.com/pkfashionphotography",
    "https://www.linkedin.com/company/pkphotography/"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pkphotography.in/#website",
  "url": "https://pkphotography.in",
  "name": "PK Photography",
  "publisher": {
    "@id": "https://pkphotography.in/#organization"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes PK Photography unique in Andheri, Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PK Photography combines 12+ years of experience with a full-service studio in Andheri West, offering 19 categories of photography and videography. We have completed 2000+ projects and won 25+ industry awards."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a photography or videography session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book online at pkphotography.in/booking or contact us via WhatsApp at +91 8888766739 or email at prabhakar@pkphotography.in."
      }
    },
    {
      "@type": "Question",
      "name": "Where is your studio located in Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our studio is located at EVERSHINE COSMIC, C1302, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053."
      }
    },
    {
      "@type": "Question",
      "name": "How soon do I receive the edited photos and videos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Turnaround times vary by service. Event photos are delivered in 3–5 business days, portrait sessions in 7–10 days, and wedding films in 8–10 weeks. Rush delivery is available on select packages."
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
