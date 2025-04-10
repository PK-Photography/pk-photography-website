import React from "react";
import Image from "next/image";

const AboutStudio = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left – Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/studio.jpeg"
              alt="Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right – Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Our Studio</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            With over a decade of experience in creative services, our studio has become a trusted name in
            professional photography and visual storytelling. We combine technical expertise with artistic vision to
            deliver exceptional results for our clients.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-left text-gray-700 text-base mb-8">
            <div>
              <p className="font-semibold text-black">Experience</p>
              <p>12+ Years</p>
            </div>
            <div>
              <p className="font-semibold text-black">Projects</p>
              <p>2000+ Completed</p>
            </div>
            <div>
              <p className="font-semibold text-black">Clients</p>
              <p>500+ Happy Clients</p>
            </div>
            <div>
              <p className="font-semibold text-black">Awards</p>
              <p>25+ Industry Awards</p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full text-base hover:bg-gray-800 transition">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;