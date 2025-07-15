"use client";

import React, { useEffect, useState } from "react";

const faqManImg = "/live-streaming/faq_man.webp";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  bgColor: string;
}

const FAQ2: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    setActiveQuestion(null);
  }, []);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What types of events do you cover?",
      answer: (
        <>
          We cover a wide range of events including church masses, corporate meetings, weddings, political events, fashion shows, stage performances, and sports events.
        </>
      ),
      bgColor: "#f8d7d7",
    },
    {
      id: 2,
      question: "How do you ensure uninterrupted streaming?",
      answer: (
        <>
          Our robust setup—with high-definition cameras, reliable internet connectivity, and backup systems—ensures that your event streams seamlessly without any interruptions.
        </>
      ),
      bgColor: "#f8e7d7",
    },
    {
      id: 3,
      question: "Can I customize my live streaming package?",
      answer:
        "Yes, our packages are fully customizable to suit the specific needs and budget of your event. We work closely with you to design the perfect streaming solution.",
      bgColor: "#f8f2d7",
    },
    {
      id: 4,
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 weeks prior to your event to ensure all technical and logistical preparations are handled efficiently.",
      bgColor: "#d7f8dc",
    }
  ];

  const handleQuestionClick = (id: number) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };

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
            FAQ&apos;s
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
    </section>
  );
};

export default FAQ2;
