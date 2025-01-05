import SpotlightButton from "@/components/spotbutton/SpotlightButton";
import { ScrollText } from "./ScrollText";

export const Do = () => {
  return (
    <section className="pt-8 pb-20 mt-6 md:pt-5 md:pb-10 bg-[#eae8e4] overflow-x-clip">
      <div className="container flex justify-between mx-auto">
        {/* Left content */}
        <div className="md:w-2/3 px-4">
          <div className="tag mt-3">What we do</div>
          <div className="md:flex items-start mt-5  w-full">
            <div className=" w-full">
              <h1 className="text-2xl  tracking-tighter bg-clip-text mt-6  w-full">
                We bridge creativity and expertise to make brands visible and
                engaging everywhere people connect.
              </h1>
              <br />
              <div className="text-xl tracking-tighter bg-clip-text mt-6  w-full">
                Based in Mumbai, PK Photography is your partner in creating
                impactful moments. From photography and videography to website
                design, branding, influencer marketing, and talent management,
                our expertise empowers brands to resonate deeply with audiences.
              </div>
            </div>
          </div>
          <SpotlightButton />
        </div>

        {/* Right content - ScrollText */}
        <div className="md:w-1/3 lg:flex justify-center items-center sm:hidden  md:hidden">
          <ScrollText />
        </div>
      </div>
    </section>
  );
};
