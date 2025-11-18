"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔥 Background Video */}
      <iframe
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src="https://www.youtube.com/embed/22SExhaXwi0?autoplay=1&mute=1&loop=1&playlist=22SExhaXwi0&controls=0&modestbranding=1&playsinline=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: "100vw",
          height: "56.25vw",
          minHeight: "100vh",
          minWidth: "177.77vh",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            Photography & Videography for Every Story
          </h1>

          <p className="text-white text-lg md:text-xl font-light max-w-3xl mx-auto">
            Portfolios, weddings, products, events, corporates, real estate & more—
            captured with passion, delivered with perfection.
          </p>

          <div className="mt-4">
            <Link href="/booking">
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium">
                Book Your Session
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};