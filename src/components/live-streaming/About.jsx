"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push("/booking");
  };

  return (
    <AboutSection>
      <Container>
        <LeftColumn>
          <Title>Professional Live Streaming Services in Mumbai</Title>
          <BookButton onClick={handleBookingClick}>
            Book Your Event Now!
          </BookButton>
        </LeftColumn>

        <RightColumn>
          <Description>
            At PK Photography, we specialize in delivering flawless live
            streaming solutions for events throughout Mumbai and nearby areas.
            Our commitment to quality, innovation, and reliability means that
            every moment of your event—whether intimate or grand—is captured and
            shared with unmatched clarity. From high-definition video to
            state-of-the-art audio and uninterrupted streaming, our services are
            tailored to meet your unique requirements.
          </Description>

          <BenefitsHeading>Key Benefits:</BenefitsHeading>

          <BenefitsList>
            <BenefitItem>
              <CheckIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#555"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#555"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CheckIcon>
              <BenefitText>High-definition streaming in HD and 4K</BenefitText>
            </BenefitItem>

            <BenefitItem>
              <CheckIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#555"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#555"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CheckIcon>
              <BenefitText>
                Expert technical team with real-time monitoring
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <CheckIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#555"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#555"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CheckIcon>
              <BenefitText>
                Customized packages for every event type
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <CheckIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#555"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#555"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CheckIcon>
              <BenefitText>
                Reliable, uninterrupted broadcasts with robust backup systems
              </BenefitText>
            </BenefitItem>
          </BenefitsList>
        </RightColumn>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: #fafafa;
  width: 100%;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  padding: 0 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 40%;
  padding-right: 2rem;

  @media (max-width: 992px) {
    flex: 0 0 100%;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const RightColumn = styled.div`
  flex: 0 0 60%;

  @media (max-width: 992px) {
    flex: 0 0 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 300; /* Lighter weight */
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: 0.5px; /* Adds a bit of spacing for thin fonts */
  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const BookButton = styled.button`
  background-color: white;
  color: #333;

  border-top: 2px solid #333;
  border-right: 2px solid #333;
  border-bottom: 7px solid #333;
  border-left: 7px solid #333;
  border-radius: 8px;
  padding: 0.7rem 1.8rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #333;
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    border-top: 1px solid #333;
    border-right: 1px solid #333;

    border-bottom: 5px solid #333;
    border-left: 5px solid #333;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const BenefitsHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 1.2rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const CheckIcon = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 0.8rem;
  color: #555;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
  }
`;

const BenefitText = styled.span`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export default About;
