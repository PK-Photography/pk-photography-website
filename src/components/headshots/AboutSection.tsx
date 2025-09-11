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
            What Sets Our Portfolio Shoots Apart
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Experts Who Know What Clicks
              </h3>
              <p className="text-gray-600 mt-5">
                Our team of fashion-forward photographers and creative
                directors bring years of experience shooting for models, actors,
                professionals, and brands. We know what casting agents, clients,
                and audiences look for — and we help you deliver it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Creative Lighting That Sets the Mood
              </h3>
              <p className="text-gray-600 mt-5">
                {`Lighting isn’t just technical — it’s emotional. We use cinematic
                lighting setups to create drama, softness, or editorial impact,
                depending on the story you want your photos to tell.`}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Makeup & Hair by Industry Pros
              </h3>
              <p className="text-gray-600 mt-5">
                A professional makeup and hair artist is included to ensure you
                look your best on camera — natural, elegant, or bold — based on
                your goals and shoot concept.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2A2A2A]">
                Styling Guidance Tailored to You
              </h3>
              <p className="text-gray-600 mt-5">
                We provide detailed tips and support in selecting outfits,
                colors, and looks that work best for your body type, shoot
                style, and industry standards.
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
