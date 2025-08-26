import Image from "next/image";
import img13 from "@/assets/headshot/img13.png";
import img14 from "@/assets/headshot/img14.png";
import img15 from "@/assets/headshot/img15.png";

const MultiCard = () => {
  return (
    <div className="bg-gray-100 mx-[10%] grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Common height class to enforce same height */}
      <div className="h-[60vh] rounded-2xl p-6 shadow-md flex flex-col justify-between">
        <h1 className="text-5xl md:text-[62px] font-semibold mb-5">
          Take the Next Step in Your Career
        </h1>
        <div className="flex gap-4">
          <Image
            src={img15}
            alt="Dhanya Arya"
            className="w-[20vh] h-[20vh] object-fill"
          />
          <div className="text-[19px]">
            <p>
              Dhanya Arya <br /> Portrait
            </p>
          </div>
        </div>
      </div>

      <div className="h-[60vh] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={img13}
          alt="Headshot"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-[60vh] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={img14}
          alt="Professional"
          className="w-full h-full object-cover"
        />
      </div>

     <div className="h-[60vh] bg-white rounded-2xl p-6 shadow-md flex flex-col ">
        <a href="/booking">
          <div className="flex justify-between items-center">
            <h2 className="text-[36px] font-semibold">
              Reserve Your <br /> Session Today
            </h2>
           
          </div>
           <button className="bg-red-500 text-white px-4 py-1 rounded-full text-lg">
              BOOK NOW
            </button>
          <p className="text-lg text-gray-600 mt-2">
            Ready to take the next step? Reserve Your Session with our
            easy-to-use online booking system. Simply select your preferred date
            and time, and we&apos;ll be in touch to confirm the details of your
            professional headshot session in Mumbai.
          </p>
        </a>
      </div>
    </div>
  );
};

export default MultiCard;
