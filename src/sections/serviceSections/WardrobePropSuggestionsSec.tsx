

import Image from "next/image";
import React from "react";

const WardrobePropSuggestionsSec: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
            <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center text-center md:text-left w-full max-w-5xl gap-10 md:gap-20">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-[40%] text-start">
                    <h2 className="text-sm mb-3">Wardrobe &amp; Prop Suggestions</h2>
                    <p className="text-gray-700 text-base md:text-lg leading-6 mt-6 md:mt-10">
                    Choosing the right wardrobe and props can elevate a good photo to a truly stunning one.  Think about the overall mood and message you want to convey.  For wardrobe, consider pieces that flatter your body type and reflect your personal style.  Don't be afraid to experiment with different textures, colors, and patterns.  Props should complement the subject and add visual interest without being distracting.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-[60%]">
                    <Image
                        src="/serviceGrid.png"
                        alt="Mood Board Inspiration"
                        height={400}
                        width={300}
                        className="shadow-md w-full object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default WardrobePropSuggestionsSec;
