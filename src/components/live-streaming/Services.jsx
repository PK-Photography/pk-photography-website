"use client";

import React from "react";
import styled from "styled-components";
const religiousCeremonyImg = "/live-streaming/religious_ceremony.jpg";
const corporateMeetingsImg = "/live-streaming/corporate_mettings.jpg";
const weddingsImg = "/live-streaming/wedding.avif";
const fashionShowsImg = "/live-streaming/fashion_show.jpg";
const stagePerformancesImg = "/live-streaming/stage_performance_concert.jpg";
const sportsEventsImg = "/live-streaming/sports_events.jpg";

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: "Religious Ceremonies",
      description:
        "Stream religious events to your congregation worldwide with our respectful and professional service.",
      image: religiousCeremonyImg,
      imagePosition: "center top",
    },
    {
      id: 2,
      title: "Corporate Meetings",
      description:
        "Professional streaming solutions for virtual meetings, conferences, and corporate events.",
      image: corporateMeetingsImg,
    },
    {
      id: 3,
      title: "Weddings",
      description:
        "Share your special day with loved ones worldwide through our premium streaming service.",
      image: weddingsImg,
    },
    {
      id: 4,
      title: "Fashion Shows",
      description:
        "Stream fashion events to a global audience and showcase your designs with our high-quality production service.",
      image: fashionShowsImg,
      imagePosition: "center 35%",
    },
    {
      id: 5,
      title: "Stage Performances & Concerts",
      description:
        "Broadcast live concerts and performances to fans anywhere in the world with our dynamic streaming solutions.",
      image: stagePerformancesImg,
      imagePosition: "center 10%",
    },
    {
      id: 6,
      title: "Sports Events",
      description:
        "Deliver live sports coverage to fans with real-time streaming, instant replays, and professional commentary options.",
      image: sportsEventsImg,
    },
  ];

  return (
    <ServicesSection>
      <SectionHeader>
        <SectionTitle>Our Live Streaming Services</SectionTitle>
        <SectionDescription>
          Delivering high-quality live streaming solutions for every occasion,
          ensuring your event reaches its intended audience with crystal clear
          quality.
        </SectionDescription>
      </SectionHeader>

      <ServiceGrid>
        {serviceItems.map((service) => (
          <ServiceCard key={service.id}>
            <ServiceImageWrapper>
              <ServiceImage
                src={service.image}
                alt={service.title}
                $position={service.imagePosition}
              />
            </ServiceImageWrapper>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: white;

  @media (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    max-width: 450px;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const ServiceCard = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ServiceImageWrapper = styled.div`
  height: 220px;
  width: 100%;

  overflow: hidden;

  @media (max-width: 1200px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.$position || "center center"};
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 0.8rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
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

export default Services;
