import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/header/Header";
import { Footer } from "@/sections/Footer";
import WhatsAppIcon from "@/components/globalIcons/WhatAppIcon";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/SessionProvider";

const dmSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PK Photography-Best in photography and videography.",
    template: "%s - Best photography and videography service in Mumbai",
  },
  description:
    "We offer Portrait, Event, Commercial, Lifestyle, Corporate Headshots, Real Estate shoots and Wedding and Events Photography.",
  twitter: {
    card: "summary_large_image",
  },
};
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Google Analytics script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LEHXD05NMZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LEHXD05NMZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="xkkbCA30-55oudh-aQAwydfWkzUga0omPDIZ6lN9RB4"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
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

          {/* {children} */}
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

          {/* Footer component */}
          <Footer />

          {/* WhatsApp icon displayed globally */}
          <WhatsAppIcon />
        </AuthProvider>
      </body>
    </html>
  );
}
