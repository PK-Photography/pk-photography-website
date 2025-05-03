"use client";

import React, { useState } from "react";
import styled from "styled-components";
const faqManImg = "/live-streaming/faq_man.webp";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "What types of events do you cover?",
      answer:
        "We cover a wide range of events including church masses, corporate meetings, weddings, political events, fashion shows, stage performances, and sports events.",
      bgColor: "#f8d7d7",
    },
    {
      id: 2,
      question: "How do you ensure uninterrupted streaming?",
      answer:
        "Our robust setup—with high-definition cameras, reliable internet connectivity, and backup systems—ensures that your event streams seamlessly without any interruptions.",
      bgColor: "#f8d385",
    },
    {
      id: 3,
      question: "Can I customize my live streaming package?",
      answer:
        "Yes, our packages are fully customizable to suit the specific needs and budget of your event. We work closely with you to design the perfect streaming solution.",
      bgColor: "#f8d385",
    },
  ];

  const handleQuestionClick = (id) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };

  return (
    <FAQSection>
      <FAQContainer>
        <IllustrationColumn>
          <IllustrationImg src={faqManImg} alt="FAQ Illustration" />
          <ColoredCircle color="#f3e5ab" top="190px" left="280px" size="20px" />
          <ColoredCircle color="#e5bab3" top="200px" left="230px" size="12px" />
          <ColoredCircle color="#bae5c5" top="400px" left="330px" size="15px" />
          <ColoredCircle color="#c5bae5" top="130px" left="200px" size="14px" />
        </IllustrationColumn>

        <QuestionsColumn>
          <SectionTitle>FAQ&apos;s</SectionTitle>

          <QuestionsContainer>
            {faqData.map((item) => (
              <QuestionItem
                key={item.id}
                onClick={() => handleQuestionClick(item.id)}
                active={item.id === activeQuestion}
                bgColor={item.bgColor}
              >
                <Question active={item.id === activeQuestion}>
                  {item.question}
                </Question>

                {item.id === activeQuestion && <Answer>{item.answer}</Answer>}
              </QuestionItem>
            ))}
          </QuestionsContainer>
        </QuestionsColumn>
      </FAQContainer>
    </FAQSection>
  );
};

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 3.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const IllustrationColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

const IllustrationImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const ColoredCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || "15px"};
  height: ${(props) => props.size || "15px"};
  border-radius: 50%;
  background-color: ${(props) => props.color || "#f8e4ba"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  z-index: -1;
`;

const QuestionsColumn = styled.div`
  max-width: 600px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  @media (max-width: 768px) {
    max-height: none;
    padding-right: 0;
    gap: 0.8rem;
  }
`;

const QuestionItem = styled.div`
  background-color: ${(props) => (props.active ? props.bgColor : "#f9f9f9")};
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? props.bgColor : "#f0f0f0")};
  }

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.1rem;
  }
`;

const Question = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  font-weight: ${(props) => (props.active ? "500" : "400")};
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 1rem 0 0 0;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-top: 0.8rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 0.7rem;
    line-height: 1.5;
  }
`;

export default FAQ;
