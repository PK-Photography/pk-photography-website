"use client";
import Link from "next/link";
import { useMemo } from "react";

const getYouTubeEmbedUrl = (url: string): string | null => {
  let videoId: string | null = null;
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
    videoId = match[1];
  } else {
    const idMatch = url.match(/^[a-zA-Z0-9_-]{11}$/);
    if (idMatch) {
      videoId = idMatch[0];
    }
  }

  if (videoId) {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: videoId,
      controls: '0',
      modestbranding: '1',
      playsinline: '1',
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }
  return null;
};

export const Hero = () => {
  // change this to whichever video URL you want to embed
  const videoUrl = "https://www.youtube.com/watch?v=22SExhaXwi0";
  const embedSrc = useMemo(() => getYouTubeEmbedUrl(videoUrl), [videoUrl]);

  return (
    <section className="relative h-[80vh] w-full text-white flex items-center justify-center overflow-hidden">
      {/* Background Video (same sizing / class pattern as service page) */}
      {embedSrc && (
        <div className="relative h-[80vh] w-full text-white flex items-center justify-center overflow-hidden">
          <iframe
          className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
          }}
          src={embedSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

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

export default Hero;