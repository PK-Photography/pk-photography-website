"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const faqManImg = "/live-streaming/faq_man.webp";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  bgColor: string;
}

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [speed, setSpeed] = useState(50);  

  useEffect(() => {
    setActiveQuestion(null);
  }, []);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Why do I need a professional headshot?",
      answer: (
        <>
          A quality headshot is your first impression on LinkedIn, company websites, and other digital platforms. In Mumbai&apos;s competitive market, a professional headshot boosts your personal brand, helps you stand out, and increases your chances of making strong networking connections.
        </>
      ),
      bgColor: "#f8d7d7",
    },
    {
      id: 2,
      question: "What makes your headshot service unique in Mumbai?",
      answer: (
        <>
          We specialize in LinkedIn headshots, corporate portraits, and business profile photography for executives, entrepreneurs, and creative professionals. You get personalized posing guidance, professional retouching, and a fast, comfortable process—delivered by experienced Mumbai headshot photographers.
        </>
      ),
      bgColor: "#f8e7d7",
    },
    {
      id: 3,
      question: "How should I prepare for my headshot session?",
      answer: "Choose outfits that reflect your professional role. Avoid busy patterns or logos. We offer styling tips, and you can bring multiple clothing options. Natural makeup, well-groomed hair, and a good rest before your session help you look your best.",
      bgColor: "#f8f2d7",
    },
    {
      id: 4,
      question: "How long does a headshot session take?",
      answer: "A typical session lasts 30-60 minutes, giving you enough time to try different poses and expressions. We make sure there's no rush and you feel comfortable.",
      bgColor: "#d7f8dc",
    },
    {
      id: 5,
      question: "Where will my headshot session take place?",
      answer: "Generally, we shoot in our Andheri West PK Photography studio, but the location can be changed as per your convenience as an add-on. Choose our studio, your office, or a convenient on-site setting. Outdoor headshots are also available on request.",
      bgColor: "#d7e8f8",
    },
    {
      id: 6,
      question: "Will my headshots be retouched?",
      answer: "Yes, all selected images are professionally retouched for a polished yet natural look—ideal for LinkedIn, websites, and print media.",
      bgColor: "#e8d7f8",
    },
    {
      id: 7,
      question: "How soon will I receive my headshots?",
      answer: "You'll receive your high-resolution, web-optimized images within 3-5 business days, delivered via Google Drive link, online gallery, or as optional add-on prints and pendrive.",
      bgColor: "#f8d7ed",
    },
    {
      id: 8,
      question: "Can I use my headshots for multiple purposes?",
      answer: "Absolutely! Your Mumbai headshots are perfect for LinkedIn, company websites, business cards, press releases, speaking engagements, and more.",
      bgColor: "#f8f2d7",
    },
    {
      id: 9,
      question: "Do you offer corporate or team headshot packages in Mumbai?",
      answer: "Yes, we provide tailored packages for companies, including consistent team headshots that align with your brand identity. Inquire for special rates and scheduling.",
      bgColor: "#d7f8e8",
    },
    {
      id: 10,
      question: "How do I book my session?",
      answer: "Contact us online, call, WhatsApp or email to schedule your professional headshot session. Flexible slots are available to fit your busy Mumbai career!",
      bgColor: "#f8e7d7",
    }
  ];

  const handleQuestionClick = (id: number) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };

const marqueeData = [
    { src: "/portfolioImages/carousal/1.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/2.jpg", width: 700, height: 450 },
    { src: "/portfolioImages/carousal/3.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/4.jpg", width: 700, height: 450 },
    { src: "/portfolioImages/carousal/5.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/6.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/7.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/8.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/9.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/10.jpg", width: 700, height: 450 },
    { src: "/portfolioImages/carousal/11.jpg", width: 350, height: 450 },
    { src: "/portfolioImages/carousal/12.jpg", width: 350, height: 450 },
  ];
  
  return (
    <section className="bg-white px-4 py-16 sm:mx-auto   md:py-14 lg:py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Illustration */}
        <div className="relative hidden lg:flex justify-center">
          <img
            src={faqManImg}
            alt="FAQ Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Questions */}
        <div className="max-w-xl sm:mx-auto w-full">
          <h2 className="text-4xl font-light text-gray-800 mb-8 tracking-wide">
            FAQs
          </h2>

          <div className="flex flex-col gap-4 max-h-[500px]  overflow-y-auto pr-4 sm:pr-0 lg:pr-1 custom-scrollbar">
            {faqData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleQuestionClick(item.id)}
                className="rounded-lg p-5 cursor-pointer transition-all"
                style={{
                  backgroundColor:
                    item.id === activeQuestion ? item.bgColor : "#f9f9f9",
                }}
              >
                <h3
                  className={`text-base sm:text-lg font-${
                    item.id === activeQuestion ? "medium" : "normal"
                  } text-gray-800`}
                >
                  {item.question}
                </h3>
                {item.id === activeQuestion && (
                  <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed font-light">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Marquee Section */}
      <h2 className="max-w-3xl mx-auto text-center my-[7%] text-4xl md:text-5xl font-bold mb-4">
        Capturing Life&apos;s Moments with Passion and Precision
      </h2>

      <div className="mt-16">
        <Marquee speed={speed} gradient={false} className="py-4">
          {marqueeData.map((image, idx) => (
            <div
              key={idx}
              className="relative mx-4 flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-md bg-black"
              style={{
                width: image.width,
                height: image.height,
                maxWidth: image.width,
                maxHeight: image.height,
              }}
            >
              <Image
                src={image.src}
                alt={`marquee-${idx}`}
                width={image.width}
                height={image.height}
                className="rounded-2xl object-cover w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default FAQ;