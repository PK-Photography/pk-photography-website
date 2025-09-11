import React from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    feedback:
      "The team made me feel so comfortable and confident. The final shots were beyond my expectations!",
  },
  {
    name: "Arjun Mehta",
    feedback:
      "Their attention to detail in lighting and styling is unmatched. My portfolio got me shortlisted immediately.",
  },
  {
    name: "Simran Kaur",
    feedback:
      "Professional from start to finish. The personalized experience made all the difference.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-12">
        {/* Testimonials Section */}
        <div className="w-full lg:w-1/3 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic">{testimonial.feedback}</p>
              <p className="text-sm font-semibold text-gray-900 mt-4">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-4">
            WHAT MAKES OUR HEADSHOTS STAND OUT
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                 Personal Branding, Not Just a Photo
              </h3>
              <p className="text-gray-600 mt-5">
                We specialize in headshots that capture your success. 
                Whether for LinkedIn, your company website, or a global brand, 
                our shoots bring out the professional image that recruiters, colleagues, 
                and clients want to see. Every portrait tells your career story.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Confident, Authentic Style Inspired by the Best
              </h3>
              <p className="text-gray-600 mt-5">
                {`Guided by global industry leaders like Peter Hurley, 
                we focus on genuine expressions and expert lighting. 
                Our India-based team ensures you look polished and 
                confident—delivering photos ready for executive roles, 
                business growth, or creative portfolios.`}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Seamless Experience, Professional Touch
              </h3>
              <p className="text-gray-600 mt-5">
                From clothing and hair advice to comfortable posing, 
                we manage every detail so you look and feel successful. 
                With industry pro makeup, minimal retouching, and a relaxed environment,
                 your individuality and expertise shine through.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                 Focused on Your Success
              </h3>
              <p className="text-gray-600 mt-5">
                Our headshots help you advance your career, boost your personal brand, 
                and make a memorable first impression—online and in print. 
                Trusted by India’s leaders, our photography opens doors worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Fully Personalized Shooting Experience
              </h3>
              <p className="text-gray-600 mt-5">
                {`Your shoot is never generic. We work closely with you to
                understand your purpose — whether it’s modelling, acting,
                matrimony, or personal branding — and tailor every frame to
                reflect your style, confidence, and personality.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
