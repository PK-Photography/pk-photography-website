// import React from "react";
// import Slider from "react-slick";
// import ReviewCard from "@/components/reviews/ReviewCard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Dummy data for reviews
// const reviews = [
//   {
//     name: "Karl",
//     review:
//       "I deal with a number of software companies on a daily basis and I can 100% say that this one stands out for their customer service. The level of support and guidance has been second to none.",
//     time: "5 months ago",
//     rating: 5,
//     icon: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Zanna",
//     review:
//       "EmbedSocial allows us to showcase social media content on our web pages in a way that's both functional and vibrant. Their library of social feed designs integrates seamlessly.",
//     time: "7 months ago",
//     rating: 5,
//     icon: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Kodi",
//     review:
//       "We are spending half of what we previously did for our last review manager, and getting 100x more out of it! I honestly am amazed at what we are getting for the price. I wish we had switched sooner.",
//     time: "a year ago",
//     rating: 5,
//     icon: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Brooks",
//     review:
//       "The experience with EmbedSocial has been amazing. We're always looking for ways to leverage our time, so finding a product to keep our reviews fresh automatically was a no-brainer.",
//     time: "a year ago",
//     rating: 5,
//     icon: "https://via.placeholder.com/150",
//   },
// ];

// const Reviews: React.FC = () => {
//   // Slick Carousel settings
//   const settings = {
//     dots: true, // Show navigation dots below the carousel
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 3, // Number of cards visible at a time
//     slidesToScroll: 1, // Number of cards to scroll at a time
//     autoplay: true, // Auto slide
//     autoplaySpeed: 3000, // Auto slide speed in milliseconds
//     responsive: [
//       {
//         breakpoint: 1024, // Adjust for tablets
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768, // Adjust for mobile devices
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="p-6">
//       <Slider {...settings}>
//         {reviews.map((review, index) => (
//           <div key={index} className="px-2">
//             <ReviewCard {...review} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Reviews;

import React from "react";
import Slider from "react-slick";
import ReviewCard from "@/components/reviews/ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import avatar images
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

// New review data
const reviews = [
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

const Reviews: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <ReviewCard {...review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
