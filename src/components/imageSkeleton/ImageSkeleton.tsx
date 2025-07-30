import Lottie from "lottie-react";
import animationData from "@/assets/Picture.json";

const ImageSkeleton = () => {
  return (
    <div className="w-full h-48 bg-[#f3f3f3] flex justify-center items-center rounded-lg overflow-hidden py-4">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-24 h-24 "
      />
    </div>
  );
};

export default ImageSkeleton;
