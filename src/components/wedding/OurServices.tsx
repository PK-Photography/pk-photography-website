import { FC } from "react";
import {
  FaRing,
  FaHeart,
  FaCamera,
  FaVideo,
  FaBook,
  FaHelicopter,
} from "react-icons/fa";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaRing className="text-pink-500 text-4xl" />,
    title: "Pre-Bridal Shoots",
    description: "Styled portraits and moments before the big day.",
  },
  {
    icon: <FaHeart className="text-rose-500 text-4xl" />,
    title: "Pre-Wedding Shoots",
    description: "Cinematic storytelling at iconic or intimate locations.",
  },
  {
    icon: <FaCamera className="text-blue-500 text-4xl" />,
    title: "Wedding Day Coverage",
    description: "Candid + Traditional Photography for all rituals.",
  },
  {
    icon: <FaVideo className="text-purple-500 text-4xl" />,
    title: "Cinematic Videos",
    description:
      "Story-driven highlight films with music, voiceovers & slow motion.",
  },
  {
    icon: <FaHelicopter className="text-orange-500 text-4xl" />,
    title: "Drone Coverage",
    description: "Aerial shots of baraat, venues, and celebrations.",
  },
  {
    icon: <FaBook className="text-yellow-500 text-4xl" />,
    title: "Printed Album",
    description: "Handcrafted photo albums curated with emotion.",
  },
];

const OurServices: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
