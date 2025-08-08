import Image from "next/image";
import { FC } from "react";

const WardrobeAndProp: FC = () => {
  return (
    <div className="mt-[10%] ml-[15%]">
      <p className="text-[12px] text-[#2A2A2A]">Wardrobe & Prop Suggestions</p>
      <p className="pt-3 text-[17px] text-[#2A2A2A]">
        Choosing the right wardrobe <br /> and props can elevate a good <br />{" "}
        photo to a truly stunning one. <br /> Think about the overall mood{" "}
        <br />
        <br /> and message you want to <br />
        convey. For wardrobe, consider <br /> pieces that flatter your body{" "}
        <br />
        type and reflect your personal <br /> style. Don&apos;t be afraid to{" "}
        <br />
        experiment with different <br /> textures, colors, and patterns. <br />{" "}
        Props should complement the <br /> subject and add visual interest{" "}
        <br /> without being distracting.
      </p>
    </div>
  );
};

export default WardrobeAndProp;
