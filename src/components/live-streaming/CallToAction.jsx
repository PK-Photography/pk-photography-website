"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const handleBookingRedirect = () => {
    router.push("/booking");
  };

  return (
    <CTASection>
      <CTAContainer>
        <Title>Let&#39;s Get Started</Title>

        <Description>
          Are you ready to elevate your event with professional live streaming
          services? Whether you&#39;re planning a church mass, corporate
          meeting, wedding, or any other event, our team is here to ensure your
          broadcast is a success.
        </Description>

        <ButtonGroup>
          <PrimaryButton onClick={handleBookingRedirect}>
            Get Quote
          </PrimaryButton>
          <SecondaryButton onClick={handleBookingRedirect}>
            Contact Us
          </SecondaryButton>
        </ButtonGroup>
      </CTAContainer>
    </CTASection>
  );
};

const CTASection = styled.section`
  background-color: #f8f8f8;
  padding: 4rem 2rem;

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

const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 1024px) {
    margin-bottom: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.75rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    min-width: 140px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    padding: 0.7rem 1.25rem;
    font-size: 0.9rem;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #000;
  color: white;
  border: 2px solid #000;

  &:hover {
    background-color: #333;
    border-color: #333;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;

  color: #000;
  border: 2px solid #000;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default CallToAction;
