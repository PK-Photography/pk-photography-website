import Image from "next/image";
import { FC } from "react";

const ExpertPhotography: FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Left Side: Image */}
                <div className="w-full md:w-[40%] flex justify-center">
                    <div className="w-[90%] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[380px] relative">
                        <Image
                            src="/pricing/PKP_2826.jpg"
                            alt="Mood Board Inspiration"
                            fill
                            className="shadow-md object-cover rounded-md"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="bg-gray-100 p-6 sm:p-10 md:p-14 lg:p-20 rounded-md flex flex-col justify-center text-start gap-4 w-full md:w-[60%]">
                    <h2 className="text-sm mb-2 sm:mb-3">Expert Photography</h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-6">
                        Our seasoned photographers capture a dynamic range of images with a focus on
                        creative lighting that brings depth and dimension to every shot. They offer
                        comprehensive pose guidance to ensure you feel confident and natural, helping you
                        achieve authentic and flattering poses that truly represent your vision.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ExpertPhotography;
