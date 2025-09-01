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
      question: "What is included in your portrait photography packages in Mumbai?",
      answer: (
        <>
          Our portrait photography packages include a guided photo session (indoor or outdoor), professional editing, delivery of high-resolution images, and options for prints, albums, or digital downloads.
        </>
      ),
      bgColor: "#f8d7d7",
    },
    {
      id: 2,
      question: "Do you offer both indoor and outdoor portrait photography in Mumbai?",
      answer: (
        <>
          Yes! We specialize in both studio portraits and outdoor portrait shoots at popular Mumbai locations, so you can choose the setting that best fits your style.
        </>
      ),
      bgColor: "#f8e7d7",
    },
    {
      id: 3,
      question: "How do I book the best portrait photographer in Mumbai?",
      answer:
        "Booking is simple—just use our online booking form to select your date and session type, and we'll confirm your appointment with personalized details.",
      bgColor: "#f8f2d7",
    },
    {
      id: 4,
      question: "How soon can I expect my finished portraits?",
      answer:
        "You'll receive your edited, high-quality portraits within 7 days after your session, delivered via online gallery, Google Drive, or USB pendrive.",
      bgColor: "#d7f8dc",
    },
    {
      id: 5,
      question: "Do you provide makeup and hair services for portrait sessions?",
      answer:
        "Yes, professional makeup and hair styling is available as an add-on to ensure you look your best during your photoshoot.",
      bgColor: "#d7e8f8",
    },
    {
      id: 6,
      question: "Can I get my portraits printed in a premium album?",
      answer:
        "Absolutely! We offer high-quality printed albums so you can preserve your portrait memories beautifully.",
      bgColor: "#e7d7f8",
    },
    {
      id: 7,
      question: "How far in advance should I schedule my portrait session in Mumbai?",
      answer:
        "For best availability, we recommend booking your portrait session at least 1-2 weeks ahead, especially during weekends and festive seasons.",
      bgColor: "#f8d7f0",
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