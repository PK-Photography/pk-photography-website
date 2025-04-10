import Image from "next/image";

const BannerSection = ({ selectedCard }) => {
  const formattedDate = selectedCard?.date
    ? new Date(selectedCard.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <>
      {/* Banner with responsive height (header ~80px assumed) */}
      <section
        className="relative w-full min-h-[calc(75vh-40px)] bg-center bg-cover"
        style={{
          backgroundImage: `url(${selectedCard?.imageUrl || "/pk-cover.png"})`,
        }}
      ></section>

      {/* Name & Date Strip */}
      <div className="w-full bg-[#fefbf7] py-14 px-6 md:px-20 flex flex-col items-center justify-center text-[#2c2c2c] text-center">
        <p className="text-sm md:text-base tracking-widest uppercase mb-3">
          {formattedDate}
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">
          {selectedCard?.name}
        </h1>
      </div>
    </>
  );
};

export default BannerSection;