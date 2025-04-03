import Image from "next/image";

const BannerSection = ({ selectedCard }) => {
  return (
    <section
      className="relative w-full h-48 md:h-56 lg:h-64 flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${selectedCard?.imageUrl || "/pk-cover.png"})`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Animated content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-tight drop-shadow-md">
          {selectedCard.name}
        </h1>
        <p className="text-white text-sm md:text-base mt-1 opacity-90 drop-shadow-sm">
          {selectedCard.date
            ? new Date(selectedCard.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : "Loading..."}
        </p>
      </div>
    </section>
  );
};

export default BannerSection;