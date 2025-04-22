

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
import ButtonWrapper from "@/components/spotbutton/SpotlightButton";


// New review data
const reviews = [
  {
    text: "Great photography and editing service.Mr Prabhakar was very Cooperative and obliging. The photographer (Aman T.) was very complaisant and patient. We are really happy with their services",
    imageSrc: avatar1.src,
    name: "Akshata",
    username: "@jamietechguru00",
  },
  {
    text: "We had an amazing experience shooting with them. Prabhakar was very cooperative and made us feel comfortable throughout the shoot. Overall, I would definitely recommend PK photography!",
    imageSrc: avatar1.src,
    name: "Vaidehi Sonavane",
    username: "@jamietechguru00",
  },
  {
    text: "Had an amazing shoot and absolutely love my photos! He made me feel super comfortable and even though it was our first time shooting together he knew exactly how to shoot me and which angles would work for me. I would highly recommend booking your next portfolio shoot with him. The photos are very well shot and I can’t wait to see the final edits.",
    imageSrc: avatar2.src,
    name: "Ashish Gandecha",
    username: "@jjsmith",
  },
  {
    text: "Photos turned out really nice (corporate shots), make-up artist provided was great, a lot of flexibility. Studio is a makeshift one in an apartment But it works for the purpose. don’t expect a posh commercial studio though.",
    imageSrc: avatar3.src,
    name: "Madhu Karnani",
    username: "@morganleewhiz",
  },
  {
    text: "I had a great experience with Prabhakar at PK Photography. I had professional headshots taken and I am not usually very comfortable in front of the camera. Prabhakar took time to make sure that I was comfortable and let me see the photos in real time on an iPad. He guided me to help make sure that the poses captured the photos I was looking for. It was a good experience and I am very pleased with the photos.",
    imageSrc: avatar4.src,
    name: "April Yetsko",
    username: "@caseyj",
  },
  {
    text: "PK Photography did an excellent job with our testimonial photos. They made our clients look great and comfortable, which really added authenticity to our testimonials. Highly recommend their services!",
    imageSrc: avatar5.src,
    name: "Ankit Rk",
    username: "@taylorkimm",
  },
  {
    text: "Our product photos came out stunning thanks to PK Photography. Their attention to detail and lighting techniques truly made our products shine. The best product photography service in Mumbai!",
    imageSrc: avatar6.src,
    name: "Gopal Ranjan",
    username: "@rileysmith1",
  },
  {
    text: "The photography is taking away my breathe PK Photography did an amazing job with our newborn photoshoot.They were patient and gentle, capturing precious moments we will treasure forever.",
    imageSrc: avatar7.src,
    name: "Aamir Abbas",
    username: "@jpatelsdesign",
  },
  {
    text: "PK Photography delivered exceptional corporate ads for our brand. Their creativity and professionalism are unmatched. Highly recommended for anyone needing high-quality corporate photography in Mumbai.",
    imageSrc: avatar8.src,
    name: "Hitesh Sharda",
    username: "@dawsontechtips",
  },
  {
    text: "Our industrial shoot with PK Photography was impressive. They understood our requirements and delivered high-quality images that showcased our facilities and operations brilliantly. The go-to for industrial photography in Mumbai.",
    imageSrc: avatar9.src,
    name: "Vibhu",
    username: "@casey09",
  },
  {
    text: "I had a portfolio shoot with PK Photography headed by very talented, dedicated & polite Mr Prabhakar. His team, all young guys, is highly professional, gives a comfortable environment during shoot. Mr Prabhakar along with his team was busy taking my shots, almost the entire day, with superb lighting effects, trending poses  using high tech cameras. Overall, a very satisfying experience with Prabhakar.",
    imageSrc: avatar1.src,
    name: "Inder Tulsi",
    username: "@creativeuser",
  },
  {
    text: "I would like to express my deep gratitude to the photographer Prabhakar! They turned out to be very good photos for my portfolio. I recommend working with him",
    imageSrc: avatar2.src,
    name: "Иван Колпаков",
    username: "@brandmaster",
  },
  {
    text: "Our fashion line has never looked better thanks to PK Photography. Their creative direction and photography skills are exceptional. Highly recommend for fashion shoots.",
    imageSrc: avatar3.src,
    name: "Kaif",
    username: "@talentpro",
  },
  {
    text: "PK Photography's corporate headshots are top-notch. They made our team look professional and approachable. Perfect for any business needing polished headshots.",
    imageSrc: avatar4.src,
    name: "Pragya58",
    username: "@marketguru",
  },
  {
    text: "I was offered a photo shoot . To which I agreed. I didn't know who he was, but many of my friends worked with him. After I met Prabhakar, I realized that this is my man. It's very easy to work with. The man is clearly a professional in his field. He also has good taste, vision and style. The photo session was very cool. Pleasant atmosphere, good music and funny friends. I was absolutely comfortable and I enjoyed the whole process . Anyone who wants to make a cool portfolio for themselves, I recommend going to him. Thank you so much for the offer, I will definitely come back again.",
    imageSrc: avatar5.src,
    name: "Яна Строк",
    username: "@influencemanager",
  },
  {
    text: "Our corporate event was captured perfectly by PK Photography. The team was discreet yet thorough, ensuring all key moments were photographed. Exceptional event photography service in Mumbai.",
    imageSrc: avatar6.src,
    name: "Anchit",
    username: "@strategist",
  },
  {
    text: "PK Photography in Mumbai is an outstanding studio! I had a remarkable shoot experience with their skilled team. They captured my best moments flawlessly, showcasing their expertise in photography. The studio's professionalism, creativity, and attention to detail truly impressed me. Highly recommended for exceptional photography services!",
    imageSrc: avatar7.src,
    name: "Sk Guitar",
    username: "@digitalmediapro",
  },
  {
    text: "Prabhakar sir is a skilled Person , i do Shoot and its really wonderful and amazing experience with him, Small Budget and get proffessional shoot its rarely i found in mumbai , thnkx for that..",
    imageSrc: avatar8.src,
    name: "Mahesh B",
    username: "@creativemind",
  },
  {
    text: "A great app for handling a wide range of content types.",
    imageSrc: avatar9.src,
    name: "Danish Vd",
    username: "@contentpro",
  },
  {
    text: "The food photography by PK Photography is simply mouth-watering. They captured the essence of our dishes beautifully, making our menu look irresistible.T",
    imageSrc: avatar1.src,
    name: "sumedh marathe",
    username: "@productionwiz",
  },
  {
    text: "PK Photography is an exceptional photography studio based in Mumbai. I had a wonderful experience during my portfolio shoot. The team is talented, professional, and dedicated to capturing the perfect moments. They provide top-notch service and create stunning images. Highly recommended for anyone looking for outstanding photography services in Mumbai",
    imageSrc: avatar2.src,
    name: "Joyshree Jaya Deb",
    username: "@visualartist",
  },
  {
    text: "Such a great experience, all the pictures u have captured are absolutely stunning ,the colors and the light just amazing 👍👍",
    imageSrc: avatar3.src,
    name: "Shilpi Naiding",
    username: "@mumbai_manager",
  },
];

const Reviews = () => {
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
          <div key={index} className="">
            <ReviewCard {...review} />
          </div>
        ))}
      </Slider>

      <h1 cl>Post a Review</h1>
    </div>
  );
};

export default Reviews;
