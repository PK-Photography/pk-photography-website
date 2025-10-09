"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
const bridalPortrait = "/wedding/bridalPortrait.jpg";
const emotions = "/wedding/emotions.jpg";
const engagement = "/wedding/engagement.jpg";
const preWedding = "/wedding/preWedding.jpg";
const rituals = "/wedding/rituals.jpg";
const reception = "/wedding/reception.jpg";

const SimilarBlogs = () => {
  const router = useRouter();
  const serviceItems = [
    {
      id: 1,
      title: "Engagement",
      description:
        "Capture the essence of your love story with our professional engagement photography services.",
      image: engagement,
      path: "/wedding/Engagement",
      imagePosition: "center 10%",
    },
    {
      id: 2,
      title: "Pre-wedding",
      description:
        "Create lasting memories with our pre-wedding photography, capturing the joy and excitement before your big day.",
      image: preWedding,
      path: "/wedding/Pre-wedding",
      imagePosition: "center top",
    },
    {
      id: 3,
      title: "Bridal portraits ",
      description:
        "Celebrate the bride's beauty with stunning bridal portraits that capture her essence and elegance.",
      image: bridalPortrait,
      path: "/wedding/Bridal portraits",
      imagePosition: "center 1%",
    },
    {
      id: 4,
      title: "Couple rituals ",
      description:
        "Document the sacred rituals of your wedding with our expert photography, preserving every meaningful moment.",

      image: rituals,
      path: "/wedding/Couple rituals",
    },
    {
      id: 5,
      title: "Family emotions",
      description:
        "Capture the heartfelt emotions of your family during the wedding, from joyous laughter to tender moments.",
      image: emotions,
      imagePosition: "center 35%",
      path: "/wedding/Family emotions",
    },

    {
      id: 6,
      title: "Reception",
      description:
        "Celebrate your union with our reception photography, capturing the joy, laughter, and love shared with family and friends.",
      image: reception,
      path: "/wedding/Reception",
    },
  ];

  return (
    <ServicesSection>
      <SectionHeader>
        <SectionTitle>Similar Blogs</SectionTitle>
        
      </SectionHeader>

      <ServiceGrid>
        {serviceItems.map((service) => (
          <ServiceCard key={service.id}>
            <ServiceImageWrapper>
              <ServiceImage
                src={service.image}
                alt={service.title}
                $position={service.imagePosition}
                 onClick={() =>
            router.push(
              `${service.path}?image=${encodeURIComponent(service.image)}`
            )
          }
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
  font-size: 2.0rem;
  color: #333;
  margin-bottom: 0.5rem;
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

export default SimilarBlogs;
