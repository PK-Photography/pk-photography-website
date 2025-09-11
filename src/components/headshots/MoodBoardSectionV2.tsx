import Image from "next/image";

type MoodBoardSectionV2Props = {
  imageUrl: string;
};

const MoodBoardSectionV2: React.FC<MoodBoardSectionV2Props> = ({
  imageUrl,
}) => {
  return (
    <div className="container mx-auto px-4 pr-[8%] mt-[8%]">
      <section className="flex flex-col lg:flex-row items-end gap-10">
        <div className="flex flex-col items-end gap-10 lg:gap-28 w-full lg:w-2/5">
          <div className="relative w-[250px] h-[300px]">
            <Image
              src={imageUrl}
              alt="Mood Board Inspiration"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 w-full lg:w-3/5 bg-gray-100 p-6 md:p-10 lg:p-20 rounded-md text-start">
          <h2 className="text-sm font-semibold mb-3">Mood Board Inspiration</h2>
          <p className="text-gray-700 text-base md:text-lg leading-6">
            A mood board is your visual compass, a collection of images, colors,
            textures, and even words that capture the overall aesthetic
            you&apos;re aiming for. It&apos;s a place to gather inspiration from
            magazines, websites, nature, or even everyday life. Don&apos;t limit
            yourself&mdash;explore different styles and ideas. The mood board
            serves as a reference point throughout the entire process, helping
            to ensure that everyone is on the same page and that the final
            product aligns with your initial vision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MoodBoardSectionV2;