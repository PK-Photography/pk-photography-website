// import Image from "next/image";

// const ExpertPhotography = () => {
//     return (
//         <div className="container mx-auto px-6 py-12 ">
//             <section className="flex flex-col md:flex-row items-center gap-5 ">
//                 {/* Left Side: Button at Top, Image Below with Gap */}
//                 <div className="flex flex-col items-end justify-end lg:gap-28 gap-10 w-[40%]">


//                     <div className="w-[400px] h-[380px] relative">
//                         <Image
//                             src="/pricing/PKP_2826.jpg"
//                             alt="Mood Board Inspiration"
//                             layout="fill"
//                             objectFit="cover"
//                             className="shadow-md"
//                         />
//                     </div>
//                 </div>

//                 {/* Right Side: Centered Content, Exact Width & Height */}
//                 <div
//                     className="bg-gray-100 p-20 lg:p-28 rounded-md flex flex-col  justify-center text-start gap-5 w-[60%]"
//                 // style={{ width: "597.56px", height: "796.58px" }}
//                 >
//                     <h2 className="text-sm  mb-3 ml-10">Expert Photography</h2>
//                     <p className="text-gray-700 text-lg leading-6 max-w-[90%] p-10">
//                         Our seasoned photographers capture a dynamic range of images with a focus on creative lighting that brings depth and dimension to every shot. They offer comprehensive pose guidance to ensure you feel confident and natural, helping you achieve authentic and flattering poses that truly represent your vision.
//                     </p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ExpertPhotography;

import Image from "next/image";
import { FC } from "react";

const ExpertPhotography: FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <section className="flex flex-col md:flex-row items-center gap-5">
                {/* Left Side: Image */}
                <div className="flex flex-col items-end justify-end lg:gap-28 gap-10 w-[40%]">
                    <div className="w-[400px] h-[380px] relative">
                        <Image
                            src="/pricing/PKP_2826.jpg"
                            alt="Mood Board Inspiration"
                            fill
                            className="shadow-md object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="bg-gray-100 p-10 lg:p-28 rounded-md flex flex-col justify-center text-start gap-5 w-[60%]">
                    <h2 className="text-sm mb-3 ml-10">Expert Photography</h2>
                    <p className="text-gray-700 text-lg leading-6 max-w-[90%] p-10">
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
