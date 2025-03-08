// import Image from "next/image";
// import React from "react";

// const LocationStylingTipsSec: React.FC = () => {
//     return (
//         <div className="container mx-auto px-6 py-12 flex flex-col items-center">
//             <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full max-w-4xl gap-20">
//                 {/* Left Side - Text Content */}
//                 <div className="w-[30%]">
//                     <h2 className="text-sm mb-3">Location &amp; Styling Tips</h2>
//                     <p className="text-gray-700 text-lg leading-6 mt-10">
//                         The location of your shoot plays a crucial role in setting the tone and atmosphere of your photos.
//                         Consider locations that are meaningful to you or that offer visually interesting backdrops.
//                         Whether it&apos;s a bustling city street, a serene natural landscape, or a cozy indoor setting,
//                         the location should complement your style and the overall concept of the shoot.
//                         Styling goes hand in hand with location.
//                     </p>
//                 </div>

//                 {/* Right Side - Image */}
//                 <div className="w-[70%]">
//                     <Image
//                         src="/serviceGrid.png"
//                         alt="Mood Board Inspiration"
//                         height={400}
//                         width={300}
//                         className="shadow-md w-full object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LocationStylingTipsSec;




import Image from "next/image";
import React from "react";

const LocationStylingTipsSec: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full max-w-5xl gap-10 md:gap-20">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-[40%]">
                    <h2 className="text-sm mb-3">Location &amp; Styling Tips</h2>
                    <p className="text-gray-700 text-base md:text-lg leading-6 mt-6 md:mt-10">
                        The location of your shoot plays a crucial role in setting the tone and atmosphere of your photos.
                        Consider locations that are meaningful to you or that offer visually interesting backdrops.
                        Whether it&apos;s a bustling city street, a serene natural landscape, or a cozy indoor setting,
                        the location should complement your style and the overall concept of the shoot.
                        Styling goes hand in hand with location.
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

export default LocationStylingTipsSec;
