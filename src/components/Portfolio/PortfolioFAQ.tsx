"use client";

import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const faqManImg = "/live-streaming/faq_man.webp";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  bgColor: string;
}

const PortfolioFAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const refs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    setActiveQuestion(null);
  }, []);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What makes PK Photography unique in Andheri, Mumbai?",
      answer:
        "At PK Photography, we combine technical expertise with a personalized touch to capture your true essence. Our Andheri studio offers a relaxed yet professional environment that reflects the vibrant energy of Mumbai.",
      bgColor: "#f8d7d7",
    },
    {
      id: 2,
      question: "What portfolio photography services do you offer at PK Photography?",
      answer:
        "We provide a comprehensive portfolio photography service that includes a personalized consultation, expert photoshoot with creative lighting and pose guidance, and high-end retouching to ensure your images truly represent your brand.",
      bgColor: "#f8e7d7",
    },
    {
      id: 3,
      question: "How does the portfolio photography process work at PK Photography in Mumbai?",
      answer:
        "Our process starts with a one-on-one consultation and custom mood board creation. Then, we conduct your photoshoot at our state-of-the-art Andheri studio using creative lighting and detailed pose guidance, followed by selective, high-end retouching of the best images.",
      bgColor: "#f8f2d7",
    },
    {
      id: 4,
      question: "What can I expect during my portfolio photoshoot session at PK Photography?",
      answer:
        "During your session, you'll experience expert direction in posing, creative lighting techniques to enhance depth, and personalized styling that brings out your best features—ensuring natural, confident, and professional images.",
      bgColor: "#d7f8dc",
    },
    {
      id: 5,
      question: "How do you incorporate creative lighting and pose guidance in your photoshoots?",
      answer:
        "Our experienced photographers use innovative creative lighting techniques to add depth and dimension while offering detailed pose guidance to help you achieve authentic and flattering poses throughout your session.",
      bgColor: "#d7e8f8",
    },
    {
      id: 6,
      question: "What is the retouching process like at PK Photography?",
      answer:
        "After the photoshoot, our team carefully selects the best images for advanced retouching. We apply techniques such as skin smoothing, blemish removal, and color correction to produce polished images that remain natural and true to you.",
      bgColor: "#f8e7f8",
    },
    {
      id: 7,
      question: "How do you deliver the final images to your clients?",
      answer:
        "We offer multiple delivery options for your high-resolution images, including a Google Drive link, an online gallery, a downloadable PDF, a pendrive, printed copies, or a combination of these methods to suit your needs.",
      bgColor: "#f2f8d7",
    },
    {
      id: 8,
      question: "Do you provide both digital and printed copies of my portfolio?",
      answer:
        "Yes, we understand that clients have varying needs. In addition to digital files, we also offer high-quality printed copies, making it easy to showcase your portfolio both online and offline.",
      bgColor: "#d7f8f1",
    },
    {
      id: 9,
      question: "How can I book a portfolio photography session at PK Photography?",
      answer:
        "Booking is simple—visit our website at www.pkphotography.in, fill out the booking form, or contact us directly. We’ll schedule a consultation to discuss your creative vision and set up your session at our Andheri studio.",
      bgColor: "#f8ded7",
    },
    {
      id: 10,
      question: "What types of packages does PK Photography offer for portfolio photography?",
      answer:
        "We offer a range of packages from basic sessions to exclusive, all-inclusive experiences. Each package is designed to be flexible and tailored, ensuring you receive a service that aligns perfectly with your personal and professional goals.",
      bgColor: "#e2d7f8",
    },
    {
      id: 11,
      question: "How long does a typical portfolio session last?",
      answer:
        "Depending on the package you choose, sessions typically range from 1 to 5 hours. This timeframe allows us to capture a variety of poses and setups, creating a diverse portfolio that highlights your strengths.",
      bgColor: "#f8efd7",
    },
    {
      id: 12,
      question: "What should I wear or bring to my photoshoot?",
      answer:
        "We recommend choosing outfits that reflect your personal style and professional image. Feel free to bring any props or personal accessories that help tell your story; our team will also provide wardrobe and styling advice during your consultation.",
      bgColor: "#d7f8eb",
    },
    {
      id: 13,
      question: "Can I schedule a consultation before my photoshoot?",
      answer:
        "Absolutely. We encourage you to book a consultation so we can discuss your vision, styling preferences, and any questions you may have. This ensures a personalized and seamless photography experience.",
      bgColor: "#f8d7ef",
    },
    {
      id: 14,
      question: "Do you offer free rescheduling for portfolio sessions?",
      answer:
        "Yes, we understand that plans can change. If you need to reschedule your session, simply notify us at least 2 days in advance, and we'll happily accommodate your request free of charge.",
      bgColor: "#d7e1f8",
    },
    {
      id: 15,
      question: "Why is PK Photography considered one of the best photography studios in Mumbai?",
      answer:
        "Our commitment to excellence, innovative use of creative lighting, detailed pose guidance, and high-end retouching has earned us a stellar reputation. Based in Andheri, our studio is known as one of the best photography studios in Mumbai, making us the ideal choice to elevate your visual brand.",
      bgColor: "#f8f4d7",
    },
  ];

  const handleQuestionClick = (id: number) => {
    const newActive = id === activeQuestion ? null : id;
    setActiveQuestion(newActive);

    setTimeout(() => {
      if (newActive !== null && refs.current[newActive]) {
        refs.current[newActive]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  return (
    <section className="bg-white px-4 py-16 sm:mx-auto md:py-14 lg:py-16">
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

          <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-4 sm:pr-0 lg:pr-1 custom-scrollbar">
            {faqData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleQuestionClick(item.id)}
                ref={(el) => {
                  refs.current[item.id] = el;
                }}
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
    {/* Marquee Section After FAQ */}
<div className="mt-16">
  <h2 className="text-3xl font-bold text-center mb-8">
    Capturing Life's Moments with Passion and Precision
  </h2>
  <Marquee pauseOnHover speed={60} gradient={false}>
    {[
      "/portfolioImages/carousal/1.jpg",
      "/portfolioImages/carousal/2.jpg",
      "/portfolioImages/carousal/3.jpg",
      "/portfolioImages/carousal/4.jpg",
      "/portfolioImages/carousal/5.jpg",
      "/portfolioImages/carousal/6.jpg",
      "/portfolioImages/carousal/7.jpg",
      "/portfolioImages/carousal/8.jpg",
      "/portfolioImages/carousal/9.jpg",
      "/portfolioImages/carousal/10.jpg",
      "/portfolioImages/carousal/11.jpg",
      "/portfolioImages/carousal/12.jpg",
    ].map((src, index) => (
      <div key={index} className="mx-3">
        <img
          src={src}
          alt={`Portfolio image ${index + 1}`}
          className="h-72 w-auto rounded-xl shadow-md object-cover"
        />
      </div>
    ))}
  </Marquee>
</div>
    </section>
  );
};

export default PortfolioFAQ;
