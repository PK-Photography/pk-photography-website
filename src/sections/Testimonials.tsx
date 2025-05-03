'use client'

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import {motion} from "framer-motion";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Photography",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Videography",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Events",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Corporate",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Headshots",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Weddings",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Live Streaming",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Editing",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Design",
    username: "@casey09",
  },
  {
    text: "The level of creativity this app unlocks for content creation is unmatched.",
    imageSrc: avatar1.src,
    name: "UI/UX",
    username: "@creativeuser",
  },
  {
    text: "We've transformed our brand with the app's unique features and support.",
    imageSrc: avatar2.src,
    name: "Branding",
    username: "@brandmaster",
  },
  {
    text: "This app is a must-have tool for anyone managing multiple talents.",
    imageSrc: avatar3.src,
    name: "Talent",
    username: "@talentpro",
  },
  {
    text: "It’s revolutionized our marketing strategy with easy-to-use analytics.",
    imageSrc: avatar4.src,
    name: "Marketing",
    username: "@marketguru",
  },
  {
    text: "The app has made influencer management so much simpler.",
    imageSrc: avatar5.src,
    name: "Influencers",
    username: "@influencemanager",
  },
  {
    text: "We rely on this app to develop effective strategies that keep us ahead.",
    imageSrc: avatar6.src,
    name: "Strategy",
    username: "@strategist",
  },
  {
    text: "It's the ultimate tool for digital media management.",
    imageSrc: avatar7.src,
    name: "Digital Media",
    username: "@digitalmediapro",
  },
  {
    text: "The creativity we’ve been able to unlock with this app is phenomenal.",
    imageSrc: avatar8.src,
    name: "Creativity",
    username: "@creativemind",
  },
  {
    text: "A great app for handling a wide range of content types.",
    imageSrc: avatar9.src,
    name: "Content",
    username: "@contentpro",
  },
  {
    text: "It's our go-to solution for streamlined production workflows.",
    imageSrc: avatar1.src,
    name: "Production",
    username: "@productionwiz",
  },
  {
    text: "We use this app to bring our visuals to life in the most stunning way.",
    imageSrc: avatar2.src,
    name: "Visuals",
    username: "@visualartist",
  },
  {
    text: "This app has made managing our projects in Mumbai much smoother.",
    imageSrc: avatar3.src,
    name: "Mumbai",
    username: "@mumbai_manager",
  },
];

const firstColumn = testimonials.slice(0, 21);
const secondColumn = testimonials.slice(7, 14);
const thirdColumn = testimonials.slice(14, 21);

export const Testimonials = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div className="flex flex-col gap-5 mt-10 w-full max-h-[400px] overflow-y-auto">
            {firstColumn.map(({ text, imageSrc, name, username }, index) => (
              <div className="card p-4 border rounded-md w-[250px]" key={`firstColumn-${index}`}>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-sm sm:text-base">
                      {name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {username}
                    </div>
                    <p className="text-xs sm:text-sm mt-2">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
