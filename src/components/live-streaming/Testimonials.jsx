"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const weddingClientImg = "/live-streaming/wedding_client.jpg";
const weddingClient001Img = "/live-streaming/wedding_client001.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);

    clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, isPaused]);

  useEffect(() => {
    return () => {
      clearTimeout(intervalRef.current);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Pastor Ramesh, Mumbai",
      role: "Wedding Clients",
      image: weddingClient001Img,
      quote:
        "PK Photography's live streaming services transformed our church mass experience. Congregants worldwide could join in the service seamlessly.",
    },
    {
      id: 3,
      name: "Anita Shah, Fashion Designer",
      role: "Fashion Show Client",
      image: weddingClientImg,
      quote:
        "My collection launch reached a global audience with PK Photography's impeccable streaming quality. The attention to detail was outstanding.",
    },
  ];

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsCarousel
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
        >
          <ScrollIndicator>
            {testimonials.map((_, index) => (
              <ScrollDot
                key={index}
                active={index === currentSlide}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </ScrollIndicator>

          <Carousel>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                active={index === currentSlide}
              >
                <ClientInfo>
                  <ClientImage src={testimonial.image} alt={testimonial.name} />
                  <ClientDetails>
                    <ClientName>{testimonial.name}</ClientName>
                    <ClientRole>{testimonial.role}</ClientRole>
                  </ClientDetails>
                </ClientInfo>

                <QuoteContainer>
                  <QuoteIcon>❝</QuoteIcon>
                  <ClientQuote>{testimonial.quote}</ClientQuote>
                </QuoteContainer>

                <RatingStars>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                </RatingStars>
              </TestimonialCard>
            ))}
          </Carousel>
        </TestimonialsCarousel>

        <TestimonialsContent>
          <ContentHeading>What Our Clients Say</ContentHeading>
          <ContentDescription>
            Our clients&#39; satisfaction is our best testimony. Here&#39;s what
            some of them have to say about our live streaming services:
          </ContentDescription>
        </TestimonialsContent>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 3rem 2rem 5rem;
  background-color: #f8f8f8;

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem 4.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 3.5rem;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const TestimonialsCarousel = styled.div`
  position: relative;

  @media (max-width: 992px) {
    order: 2;
  }
`;

const Carousel = styled.div`
  position: relative;
`;

const ScrollIndicator = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: -20px;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(50%);

  @media (max-width: 1024px) {
    left: -15px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    left: 50%;
    bottom: -30px;
    top: auto;
    transform: translateX(-50%);
  }
`;

const ScrollDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#5c899d" : "#e0e0e0")};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#5c899d" : "#d0d0d0")};
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: ${(props) => (props.active ? "block" : "none")};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const ClientImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const ClientDetails = styled.div`
  margin-left: 1rem;

  @media (max-width: 480px) {
    margin-left: 0.8rem;
  }
`;

const ClientName = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ClientRole = styled.p`
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const QuoteContainer = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const QuoteIcon = styled.span`
  color: #f0f0f0;
  font-size: 2.5rem;
  position: absolute;
  top: -1rem;
  left: -0.8rem;
  z-index: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    top: -0.8rem;
    left: -0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    top: -0.7rem;
    left: -0.5rem;
  }
`;

const ClientQuote = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  position: relative;
  z-index: 1;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const RatingStars = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: #5c899d;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TestimonialsContent = styled.div`
  @media (max-width: 992px) {
    order: 1;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ContentHeading = styled.h3`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  max-width: 500px;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 992px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export default Testimonials;
