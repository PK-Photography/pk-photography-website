"use client";

import React, { useEffect, useState } from "react";

const faqManImg = "/live-streaming/faq_man.webp";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  bgColor: string;
}

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    setActiveQuestion(null);
  }, []);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What types of photography services do you offer in Mumbai?",
      answer: (
        <>
          At PK Photography, we provide corporate photography, professional
          headshots, and model/actor portfolio shoots. In addition, we also
          offer:
          <ul className="list-disc list-inside mt-2">
            <li>
              Event photography and videography (corporate, social, and
              cultural)
            </li>
            <li>Wedding photography and cinematic videography</li>
            <li>Interior and architecture shoots</li>
            <li>
              Live streaming for weddings, church services, corporate events,
              and seminars
            </li>
            <li>
              Product photography, reels, and social media content creation
            </li>
          </ul>
        </>
      ),
      bgColor: "#f8d7d7",
    },
    {
      id: 2,
      question: "How can I book a photography or videography session?",
      answer: (
        <>
          You can easily book a session by:
          <ul className="list-disc list-inside mt-2">
            <li>Calling us directly</li>
            <li>Filling out the inquiry form on our website</li>
            <li>Contacting us via Instagram</li>
            <li>Using WhatsApp for quick queries</li>
          </ul>
        </>
      ),
      bgColor: "#f8e7d7",
    },
    {
      id: 3,
      question: "How soon do I receive the edited photos and videos?",
      answer:
        "Final deliverables are typically shared within 7 to 10 working days, depending on the project's scale and type. Files are delivered via a secure online gallery, with pen drive or printed albums available for an additional cost.",
      bgColor: "#f8f2d7",
    },
    {
      id: 4,
      question: "Can I get a customized package for my event or shoot?",
      answer:
        "Absolutely! Contact us to create a custom photography or videography package tailored to your unique needs and budget.",
      bgColor: "#d7f8dc",
    },
    {
      id: 5,
      question: "Where is your studio located in Mumbai?",
      answer:
        "Our studio is located in Andheri West, Mumbai. We offer indoor shoots at our professional setup and outdoor shoots throughout the city based on your preference.",
      bgColor: "#d7e8f8",
    },
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

export default FAQ;
