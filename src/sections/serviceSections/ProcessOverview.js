import { useState, useEffect } from "react";
import Image from "next/image";

const ProcessOverview = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY(event.target.scrollTop);
    };

    document
      .getElementById("scrollable-content")
      .addEventListener("scroll", handleScroll);

    return () => {
      document
        .getElementById("scrollable-content")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    // <div className="container mx-auto px-4 py-8">
    //   <div className="relative bg-blue-600 text-white rounded-xl h-[530px] w-full flex flex-col  p-6">
    //     {/* Large Background Text */}
    //     <h1 className="absolute text-[8rem] font-bold text-blue-400 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //       PROCESS
    //     </h1>

    //     {/* Scrollable Text Section */}
    //     <div
    //       id="scrollable-content"
    //       className="relative w-3/5  max-h-60 overflow-y-auto pr-4 pl-0 scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-500 z-10"
    //       style={{ direction: "rtl" }} // Scrollbar on left
    //     >
    //       <div style={{ direction: "ltr" }}>
    //         <h2 className="text-sm uppercase mb-2">Process Overview</h2>
    //         <h3 className="text-lg font-bold mb-2"
    //           id="scrollable-content"
    //         >
    //           CONSULTATION & MOOD BOARD
    //         </h3>
    //         <p
    //           className="text-sm mb-4 transition-opacity duration-300"
    //           style={{ opacity: scrollY > 10 ? 1 : 0.3 }}
    //         >
    //           Begin with a deep dive into your aspirations and personal brand,
    //           translating your vision into a creative mood board that sets the
    //           tone for the shoot.
    //         </p>
    //         <h3 className="text-lg font-bold mb-2" id="scrollable-content">WARDROBE & PROPS</h3>
    //         <p
    //           className="text-sm mb-4 transition-opacity duration-300"
    //           style={{ opacity: scrollY > 50 ? 1 : 0.3 }}
    //         >
    //           Receive expert advice on selecting wardrobe pieces and props that
    //           capture your unique personality and professional edge.
    //         </p>
    //         <h3 className="text-lg font-bold mb-2" id="scrollable-content">LOCATION & STYLE</h3>
    //         <p
    //           className="text-sm mb-4 transition-opacity duration-300"
    //           style={{ opacity: scrollY > 100 ? 1 : 0.3 }}
    //         >
    //           Benefit from guidance on choosing the perfect setting for your
    //           shoot, whether an urban backdrop, a natural landscape, or a studio
    //           environment.
    //         </p>
    //       </div>
    //     </div>

    //     {/* Image Overlaying Background Text */}
    //     <div className="absolute top-30 left-1/4 ml-30 z-20">
    //       {" "}
    //       {/* Shifted left */}
    //       <Image
    //         src="/pricing/PKP_2826.jpg"
    //         alt="The Shoot"
    //         width={200}
    //         height={250}
    //         className="rounded-lg shadow-lg"
    //       />
    //       <p className="text-center bg-white text-black text-xs py-1">
    //         The Shoot
    //       </p>
    //     </div>

    //     {/* Green Card at Bottom Right */}
    //     <div className="absolute bottom-10 right-10 bg-green-900 p-3 text-white rounded-lg w-60 z-20">
    //       <p className="text-xs">
    //         A personalized session at a chosen location or studio.
    //       </p>
    //       <div className="flex justify-between items-center mt-2">
    //         <div>
    //           <p className="text-xs">Professional Retouching</p>
    //           <p className="text-lg font-bold">Color</p>
    //         </div>
    //         <div>
    //           <p className="text-xs">Creative edits</p>
    //           <p className="text-lg font-bold">Grading</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto px-4 py-8">
      <div className="relative bg-blue-600 text-white rounded-xl h-[530px] w-full flex flex-col p-6">
        {/* Large Background Text */}
        <h1 className="absolute text-[8rem] font-bold text-blue-400 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          PROCESS
        </h1>

        {/* Scrollable Text Section */}
        <div
          id="scrollable-content"
          className="relative w-3/5 max-h-60 overflow-y-auto pr-6 pl-0 mx-10 mt-10 scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-500 z-10"
          style={{ direction: "rtl" }} // Scrollbar on left
        >
          <div style={{ direction: "ltr" }} className="ml-10">
            <h2 className="text-sm uppercase mb-2">Process Overview</h2>
            <h3 className="text-lg font-bold mb-2">CONSULTATION & MOOD BOARD</h3>
            <p
              className="text-sm mb-4 transition-opacity duration-300"
            // style={{ opacity: scrollY > 10 ? 1 : 0.3 }}
            >
              Begin with a deep dive into your aspirations and personal brand,
              translating your vision into a creative mood board that sets the tone
              for the shoot.
            </p>
            <h3 className="text-lg font-bold mb-2">WARDROBE & PROPS</h3>
            <p
              className="text-sm mb-4 transition-opacity duration-300"
              style={{ opacity: scrollY > 50 ? 1 : 0.3 }}
            >
              Receive expert advice on selecting wardrobe pieces and props that
              capture your unique personality and professional edge.
            </p>
            <h3 className="text-lg font-bold mb-2">LOCATION & STYLE</h3>
            <p
              className="text-sm mb-4 transition-opacity duration-300"
              style={{ opacity: scrollY > 100 ? 1 : 0.3 }}
            >
              Benefit from guidance on choosing the perfect setting for your shoot,
              whether an urban backdrop, a natural landscape, or a studio
              environment.
            </p>
          </div>
        </div>

        {/* Image Overlaying Background Text */}
        <div className="absolute top-30 left-1/4  z-20 mt-28">
          <Image
            src="/pricing/PKP_2826.jpg"
            alt="The Shoot"
            width={200}
            height={350}
            className=" shadow-lg"
          />
          <p className="text-center bg-white text-black text-xs py-1">The Shoot</p>
        </div>

        {/* Green Card at Bottom Right */}
        <div className="absolute bottom-10 right-28 bg-green-900 p-3 text-white rounded-lg w-72 z-20 ">
          <p className="text-xs text-[#6F9986]">
            A personalized session at a chosen location or studio.
          </p>
          <div className="flex justify-between items-center mt-2 gap-5">
            <div>
              <p className="text-xs text-[#6F9986]">Professional Retouching</p>
              <p className="text-xl font-semibold">Color</p>
            </div>
            <div>
              <p className="text-xs text-[#6F9986]" >Creative edits</p>
              <p className="text-xl font-semibold">Grading</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );




};


export default ProcessOverview;

