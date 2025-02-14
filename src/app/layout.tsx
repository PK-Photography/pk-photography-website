
// import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
// import "./globals.css";
// import clsx from "clsx";
// import { ToastContainer } from "react-toastify"; // Import ToastContainer
// import "react-toastify/dist/ReactToastify.css";

// import { Footer } from "@/sections/Footer";
// import WhatsAppIcon from "@/components/globalIcons/WhatAppIcon";
// import { Toaster } from "react-hot-toast";

// const dmSans = DM_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: {
//     default: "PK Photography-Best in photography and videography.",
//     template: "%s - Best photography and videography service in Mumbai",
//   },
//   description:
//     "We offer Portrait, Event, Commercial, Lifestyle, Corporate Headshots, Real Estate shoots and Wedding and Events Photography.",
//   twitter: {
//     card: "summary_large_image",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="relative">
//       <head>
//         {/* Google Analytics script */}
//         <script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-LEHXD05NMZ"
//         ></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-LEHXD05NMZ', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         />
//         <meta
//           name="google-site-verification"
//           content="xkkbCA30-55oudh-aQAwydfWkzUga0omPDIZ6lN9RB4"
//         />
//       </head>
//       <body className={clsx(dmSans.className, "antialiased")}>
//         {/* ToastContainer for global toast notifications */}
//         <Toaster />
//         <ToastContainer
//           position="top-right" // Position of the toast
//           autoClose={5000} // Auto close after 5 seconds
//           hideProgressBar={false} // Show progress bar
//           newestOnTop={false} // Newest toast on top
//           closeOnClick // Close on click
//           rtl={false} // Right-to-left
//           pauseOnFocusLoss // Pause toast on focus loss
//           draggable // Allow drag to dismiss
//           pauseOnHover // Pause on hover
//         />

//         {children}

//         {/* Footer component */}
//         <Footer />

//         {/* WhatsApp icon displayed globally */}
//         <WhatsAppIcon />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "@/sections/Footer";
import WhatsAppIcon from "@/components/globalIcons/WhatAppIcon";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/SessionProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LEHXD05NMZ"></script>
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
        <meta name="google-site-verification" content="xkkbCA30-55oudh-aQAwydfWkzUga0omPDIZ6lN9RB4" />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <AuthProvider>
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

          {children}

          {/* Footer component */}
          <Footer />

          {/* WhatsApp icon displayed globally */}
          <WhatsAppIcon />
        </AuthProvider>
      </body>
    </html>
  );
}
