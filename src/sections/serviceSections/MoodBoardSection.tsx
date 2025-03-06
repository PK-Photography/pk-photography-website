import Image from "next/image";

const MoodBoardSection = () => {
    return (
        <div className="container mx-auto px-6 py-12 ">
            <section className="flex flex-col md:flex-row items-center gap-10 ">
                {/* Left Side: Button at Top, Image Below with Gap */}
                <div className="flex flex-col items-end lg:gap-28 gap-20 w-[40%]">
                    <button className="border border-gray-400 px-4 py-2 text-xs rounded-md flex items-center font-semibold">
                        Download Your Portfolio Prep Checklist
                        <span className="ml-2 w-3 h-3 bg-green-700 rounded-full "></span>
                    </button>

                    <div className="w-[250px] h-[300px] relative">
                        <Image
                            src="/serviceGrid.png"
                            alt="Mood Board Inspiration"
                            layout="fill"
                            objectFit="cover"
                            className="shadow-md"
                        />
                    </div>
                </div>

                {/* Right Side: Centered Content, Exact Width & Height */}
                <div
                    className="bg-gray-100 p-20 lg:p-28 rounded-md flex flex-col  justify-center text-start gap-5 w-[60%]"
                // style={{ width: "597.56px", height: "796.58px" }}
                >
                    <h2 className="text-sm font-semibold mb-3 ml-10">Mood Board Inspiration</h2>
                    <p className="text-gray-700 text-lg leading-6 max-w-[90%] p-10">
                        A mood board is your visual compass, a collection of images, colors,
                        textures, and even words that capture the overall aesthetic you're
                        aiming for. It's a place to gather inspiration from magazines,
                        websites, nature, or even everyday life. Don't limit yourself—explore
                        different styles and ideas. The mood board serves as a reference
                        point throughout the entire process, helping to ensure that everyone
                        is on the same page and that the final product aligns with your
                        initial vision.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default MoodBoardSection;
